define(function() {
    var konyLoggerModule = require('com/konymp/login/konyLogger');
    kony = kony || {};
    kony.logger = new konyLoggerModule("Login Component");
    constants.DEFAULT_MINIMUM_CHAR_LENGTH = 8;
    constants.DEFAULT_MAX_LENGTH = 30;
    constants.USERNAME_VALIDATION_MESSAGE = "Username too small";
    constants.PASSWORD_VALIDATION_MESSAGE = "Password too small";
    constants.DEFAULT_PROVIDER_NAME = "userstore";
    constants.MF_ALERT_MESSAGE = "Please connect to MobileFabric";
    constants.DEFAULT_SUCCESS_MESSAGE = "Login Success";
    constants.DEFAULT_FAILURE_MESSAGE = "Login Failed";
    return {
        /**
         * @constructor constructor
         * @param basicConfig
         * @param layoutConfig
         * @param pspConfig
         */
        constructor: function(basicConfig, layoutConfig, pspConfig) {
            kony.logger.trace("In Component constructor", kony.logger.FUNCTION_ENTRY);
            this._usernameMinimumChar = constants.DEFAULT_MINIMUM_CHAR_LENGTH;
            this._passwordMinimumChar = constants.DEFAULT_MINIMUM_CHAR_LENGTH;
            this._usernameValidationMsg = constants.USERNAME_VALIDATION_MESSAGE;
            this._passwordValidationMsg = constants.PASSWORD_VALIDATION_MESSAGE;
            this._providerName = constants.DEFAULT_PROVIDER_NAME;
            this._encryptCredentials = true;
        },
        /**
         * @function initGettersSetters
         * @description contains getters/setters for custom properties
         */
        initGettersSetters: function() {
            defineGetter(this, "usernameMinimumChar", function() {
                kony.logger.trace("----------Entering usernameMinimumCharacter Getter---------", kony.logger.FUNCTION_ENTRY);
                return this._usernameMinimumChar;
            });
            defineSetter(this, "usernameMinimumChar", function(val) {
                kony.logger.trace("----------Entering usernameMinimumCharacter Setter---------", kony.logger.FUNCTION_ENTRY);
                if (this.usernameMaxChar < val) {
                    kony.logger.warn("Since usernameMaxChar is less than usernameMinimumChar, Setting usernameMaxChar to 30");
                    this.usernameMaxChar = constants.DEFAULT_MAX_LENGTH;
                }
                this._usernameMinimumChar = val;
            });
            defineGetter(this, "passwordMinimumChar", function() {
                kony.logger.trace("----------Entering passwordMinimumCharacter Getter---------", kony.logger.FUNCTION_ENTRY);
                return this._passwordMinimumChar;
            });
            defineSetter(this, "passwordMinimumChar", function(val) {
                kony.logger.trace("----------Entering passwordMinimumCharacter Setter---------", kony.logger.FUNCTION_ENTRY);
                if (this.passwordMaxChar < val) {
                    kony.logger.warn("Since passwordMaxChar is less than passwordMinimumChar, Setting passwordMaxChar to 30");
                    this.passwordMaxChar = constants.DEFAULT_MAX_LENGTH;
                }
                this._passwordMinimumChar = val;
            });
            defineGetter(this, "usernameValidationMsg", function() {
                kony.logger.trace("----------Entering usernameValidationMsg Getter---------", kony.logger.FUNCTION_ENTRY);
                return this._usernameValidationMsg;
            });
            defineSetter(this, "usernameValidationMsg", function(val) {
                kony.logger.trace("----------Entering usernameValidationMsg Setter---------", kony.logger.FUNCTION_ENTRY);
                this._usernameValidationMsg = val;
            });
            defineGetter(this, "passwordValidationMsg", function() {
                kony.logger.trace("----------Entering passwordValidationMsg Getter---------", kony.logger.FUNCTION_ENTRY);
                return this._passwordValidationMsg;
            });
            defineSetter(this, "passwordValidationMsg", function(val) {
                kony.logger.trace("----------Entering passwordValidationMsg Setter---------", kony.logger.FUNCTION_ENTRY);
                this._passwordValidationMsg = val;
            });
            defineGetter(this, "providerName", function() {
                kony.logger.trace("----------Entering providerName Getter---------", kony.logger.FUNCTION_ENTRY);
                return this._providerName;
            });
            defineSetter(this, "providerName", function(val) {
                kony.logger.trace("------------Entering providerName Setter---------", kony.logger.FUNCTION_ENTRY);
                this._providerName = val;
            });
            defineGetter(this, "encryptCredentials", function() {
                kony.logger.trace("----------Entering encryptCredentials Getter---------", kony.logger.FUNCTION_ENTRY);
                return this._encryptCredentials;
            });
            defineSetter(this, "encryptCredentials", function(val) {
                kony.logger.trace("------------Entering encryptCredentials Setter---------", kony.logger.FUNCTION_ENTRY);
                this._encryptCredentials = val;
                if (val == true) {
                    this.getRememberMe();
                }
            });
        },
        /**
         * @function invokeTouch
         * @description This function is used to invoke animation
         * @private
         * @param {string} value
         * @param {string} top
         */
        invokeTouch: function(value, top) {
            kony.logger.trace("---------------Entering invoke touch function---------------", kony.logger.FUNCTION_ENTRY);
            try {
                value.animate(kony.ui.createAnimation({
                    "100": {
                        "left": "5%",
                        "top": top,
                        "stepConfig": {
                            "timingFunction": kony.anim.EASE
                        },
                    }
                }), {
                    "delay": 0,
                    "iterationCount": 1,
                    "fillMode": kony.anim.FILL_MODE_FORWARDS,
                    "duration": 0.25
                }, {
                    "animationEnd": this.focus(value, top)
                });
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
            kony.logger.trace("---------------Exiting invoke touch function---------------", kony.logger.FUNCTION_EXIT);
        },
        /**
         * @function focus
         * @description This function is invoked after invokeTouch animation success
         * @private
         * @param {Object} value
         * @param {string} top
         * @callback invokeTouchCallback
         */
        focus: function(value, top) {
            kony.logger.trace("---------------Entering focus function---------------", kony.logger.FUNCTION_ENTRY);
            try {
                if (value.id == "lblUsername" && top == "-1%") {
                    this.view.tbxUsername.setFocus(true);
                    this.view.forceLayout();
                    value.skin = "sknAnimate";
                } else if (value.id == "lblPassword" && top == "16%") {
                    this.view.tbxPassword.setFocus(true);
                    this.view.forceLayout();
                    value.skin = "sknAnimate";
                } else {
                    value.skin = "sknLblAnimate";
                }
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
            kony.logger.trace("---------------Exiting focus function---------------", kony.logger.FUNCTION_EXIT);
        },
        /**
         * @function onDoneCredentials
         * @description Common onDone function for username and password textboxes
         * @private
         * @param {Object} view
         * @event usernameOnDone
         * @event passwordOnDone
         */
        onDoneCredentials: function(view) {
            kony.logger.trace("---------------Entering onDoneCredentials function---------------", kony.logger.FUNCTION_ENTRY);
            try {
                if (view.id == "lblUsername") {
                    this.invokeTouch(this.view.lblPassword, "16%");
                    if (this.view.tbxUsername.text === "") {
                        this.invokeTouch(view, "6%");
                    }
                    if (this.usernameOnDone !== null && this.usernameOnDone !== undefined) {
                        kony.logger.info("Invoking usernameOnDone event");
                        this.usernameOnDone();
                    } else {
                        this.validateUsername();
                    }
                } else if (view.id == "lblPassword") {
                    if (this.view.tbxPassword.text === "") {
                        this.invokeTouch(view, "23%");
                    }
                    if (this.passwordOnDone !== null && this.passwordOnDone !== undefined) {
                        kony.logger.info("Invoking passwordOnDone event");
                        this.passwordOnDone();
                    } else {
                        this.validatePassword();
                    }
                }
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
            kony.logger.trace("---------------Exiting onDoneCredentials function---------------", kony.logger.FUNCTION_EXIT);
        },
        /**
         * @function getUsername
         * @description Returns username entered by the user
         * @public
         * @return {string} username
         */
        getUsername: function() {
            kony.logger.trace("---------------Entering getUsername api---------------", kony.logger.FUNCTION_ENTRY);
            try {
                return this.view.tbxUsername.text;
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
        },
        /**
         * @function getPassword
         * @description Returns password entered by the user
         * @public
         * @return {string} password
         */
        getPassword: function() {
            kony.logger.trace("---------------Entering getPassword api---------------", kony.logger.FUNCTION_ENTRY);
            try {
                return this.view.tbxPassword.text;
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
        },
        /**
         * @function invokeIdentityService
         * @description Invokes identity service provided by the user
         * @public
         * @param {string} providername
         */
        invokeIdentityService: function(providername) {
            kony.logger.trace("---------------Entering invokeIdentityService api---------------", kony.logger.FUNCTION_ENTRY);
            try {
                var argument = {};
                var authorizationClient = null;
                kony.application.showLoadingScreen(null, "Loading...", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, false, true, {});
                var sdkClient = new kony.sdk.getCurrentInstance();
                if (Object.keys(sdkClient).length !== 0) {
                    authorizationClient = sdkClient.getIdentityService(providername);
                }
                if (authorizationClient === null || authorizationClient === undefined) {
                    kony.application.dismissLoadingScreen();
                    kony.logger.info("Authorization object null - Connect to MF");
                    alert(constants.MF_ALERT_MESSAGE);
                    return;
                }
                if (providername === constants.DEFAULT_PROVIDER_NAME) {
                    kony.store.setItem("inputType", "password");
                    argument.userid = this.getUsername();
                    argument.password = this.getPassword();
                } else {
                    this.view.flxIdentity.isVisible = true;
                    this.view.forceLayout();
                    argument.browserWidget = this.view.brwsrIdentity;
                    kony.application.dismissLoadingScreen();
                }
                kony.logger.info("Network call to MF for identity authentication", kony.logger.SERVICE_CALL);
                authorizationClient.login(argument, this.successWrapper.bind(this), this.failureWrapper.bind(this));
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
            kony.logger.trace("---------------Exiting invokeIdentityService api---------------", kony.logger.FUNCTION_EXIT);
        },
        /**
         * @function successWrapper
         * @description Success callback for invokeIdentityService
         * @private
         * @param {Object} response
         * @callback invokeIdentityServiceCallback
         * @event loginSuccessEvent
         */
        successWrapper: function(response) {
            kony.logger.trace("---------------Entering successWrapper function---------------", kony.logger.FUNCTION_ENTRY);
            kony.logger.info("Invoke identity service success---" + JSON.stringify(response), kony.logger.SUCCESS_CALLBACK);
            try {
                var inputType = kony.store.getItem("inputType");
                kony.application.dismissLoadingScreen();
                if (inputType === "social") {
                    this.view.flxIdentity.isVisible = false;
                    if (this.loginSuccessEvent !== null && this.loginSuccessEvent !== undefined) {
                        this.loginSuccessEvent();
                    }
                }
                if (this.remembermeProperty == true) {
                    this.rememberMe();
                }
                if (this.touchIDProperty == true && (kony.store.getItem("touchID") == false || kony.store.getItem("touchID") == null) && this.getTouchSupport()) {
                    this.enableTouchID();
                } else if (this.loginSuccessEvent !== null && this.loginSuccessEvent !== undefined) {
                    kony.logger.info("Invoking Login Success event");
                    this.loginSuccessEvent();
                } else {
                    alert(constants.DEFAULT_SUCCESS_MESSAGE);
                }
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
            kony.logger.trace("---------------Exiting successWrapper function---------------", kony.logger.FUNCTION_EXIT);
        },
        /**
         * @function failureWrapper
         * @description Failure callback for invokeIdentityService
         * @private
         * @param {Object} response
         * @callback invokeIdentityServiceCallback
         * @event loginFailureEvent
         */
        failureWrapper: function(response) {
            kony.logger.trace("---------------Entering failureWrapper function---------------", kony.logger.FUNCTION_ENTRY);
            kony.logger.info("Invoke identity service failure" + JSON.stringify(response), kony.logger.ERROR_CALLBACK);
            try {
                kony.application.dismissLoadingScreen();
                if (this.loginFailureEvent !== null && this.loginFailureEvent !== undefined) {
                    kony.logger.info("Invoking Login Failure event");
                    this.loginFailureEvent();
                } else {
                    alert(constants.DEFAULT_FAILURE_MESSAGE + " " + JSON.stringify(response));
                }
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
            kony.logger.trace("---------------Exiting failureWrapper function---------------", kony.logger.FUNCTION_EXIT);
        },
        /**
         * @function getTouchSupport
         * @description Return touch ID support for device
         * @private
         * @return {boolean} true/false
         */
        getTouchSupport: function() {
            kony.logger.trace("---------------Entering getTouchSupport function---------------", kony.logger.FUNCTION_ENTRY);
            try {
                var status = kony.localAuthentication.getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID);
                if (status == 5000) return true;
                return false;
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
            kony.logger.trace("---------------Exiting getTouchSupport function---------------", kony.logger.FUNCTION_EXIT);
        },
        /**
         * @function enableTouchID
         * @description Turns on visibility for Touch ID popup
         * @public
         * @param {string} input
         */
        enableTouchID: function(input) {
            kony.logger.trace("---------------Entering enableTouchID api---------------", kony.logger.FUNCTION_ENTRY);
            try {
                if (this.view.flxTouchId.isVisible == true && kony.store.getItem("inputType") === "password") {
                    if (this.loginSuccessEvent !== null && this.loginSuccessEvent !== undefined && input !== true) {
                        this.view.flxPopups.flxEnableTouchIDPopup.btnCancel.onClick = this.touchCancelAction.bind(this, true);
                        this.view.flxPopups.flxEnableTouchIDPopup.btnEnable.onClick = this.touchEnableAction.bind(this, true);
                    }
                    this.view.flxPopups.isVisible = true;
                    this.view.flxEnableTouchIDPopup.isVisible = true;
                    this.view.forceLayout();
                }
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
            kony.logger.trace("---------------Exiting enableTouchID api---------------", kony.logger.FUNCTION_EXIT);
        },
        /**
         * @function touchCancelAction
         * @description Action associated with cancel button of Touch ID popup
         * @private
         * @param {boolean} input
         * @event loginSuccessEvent
         */
        touchCancelAction: function(input) {
            kony.logger.trace("---------------Entering touchCancelAction function---------------", kony.logger.FUNCTION_ENTRY);
            try {
                this.view.flxPopups.isVisible = false;
                this.view.flxPopups.flxEnableTouchIDPopup.isVisible = false;
                if (input == true) {
                    this.loginSuccessEvent();
                } else {
                    alert(constants.DEFAULT_SUCCESS_MESSAGE);
                }
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
            kony.logger.trace("---------------Exiting touchCancelAction function---------------", kony.logger.FUNCTION_EXIT);
        },
        /**
         * @function touchEnableAction
         * @description Action associated with enable button of Touch ID popup
         * @private
         * @param {boolean} input
         * @event loginSuccessEvent
         */
        touchEnableAction: function(input) {
            kony.logger.trace("---------------Entering touchEnableAction function---------------", kony.logger.FUNCTION_ENTRY);
            try {
                this.view.flxPopups.isVisible = false;
                this.view.flxPopups.flxEnableTouchIDPopup.isVisible = false;
                kony.store.setItem("touchID", true);
                if (input == true) {
                    kony.logger.info("Invoking Login success event");
                    this.loginSuccessEvent();
                } else {
                    alert(constants.DEFAULT_SUCCESS_MESSAGE);
                }
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
            kony.logger.trace("---------------Exiting touchEnableAction function---------------", kony.logger.FUNCTION_EXIT);
        },
        /**
         * @function invokeTouchID
         * @description invokes touch ID for the device
         * @private
         */
        invokeTouchID: function() {
            kony.logger.trace("---------------Entering invokeTouchID function---------------", kony.logger.FUNCTION_ENTRY);
            try {
                if (kony.store.getItem("touchID") !== true) {
                    alert("Login using Username and Password to enable touch ID");
                    return;
                }
                if (this.touchIDProperty == false) {
                    alert("Enable touch ID");
                    return;
                }
                var status = kony.localAuthentication.getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID);
                if (status == "5000") {
                    this.view.flxTouchIDPopup.isVisible = true;
                    this.view.flxPopups.isVisible = true;
                    var configMap = {
                        "promptMessage": "Swipe your finger"
                    };
                    kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, this.touchAuthenticationCallback.bind(this), configMap);
                } else {
                    alert("Device doesnt support Touch ID");
                }
            } catch (exception) {
                kony.logger.error("Catch  in authenticateThroughTouch : " + JSON.stringify(exception), kony.logger.EXCEPTION);
            }
            kony.logger.trace("---------------Exiting invokeTouchID function---------------", kony.logger.FUNCTION_EXIT);
        },
        /**
         * @function touchAuthenticationCallback
         * @description Callback function for invokeTouch ID
         * @private
         * @param {Object} code
         * @callback invokeTouchIDCallback
         * @event loginSuccessEvent
         */
        touchAuthenticationCallback: function(code) {
            kony.logger.trace("---------------Entering touchAuthenticationCallback function---------------", kony.logger.FUNCTION_ENTRY);
            try {
                if (code == 5000) {
                    this.view.flxTouchIDPopup.isVisible = false;
                    this.view.flxPopups.isVisible = false;
                    if (this.loginSuccessEvent !== null && this.loginSuccessEvent !== undefined) {
                        kony.logger.info("Invoking Login Success event");
                        this.loginSuccessEvent();
                    } else {
                        alert(constants.DEFAULT_SUCCESS_MESSAGE);
                    }
                }
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
            kony.logger.trace("---------------Exiting touchAuthenticationCallback function---------------", kony.logger.FUNCTION_EXIT);
        },
        /**
         * @function cancelTouchID
         * @description Action associated with cancel button of Touch ID popup
         * @private
         */
        cancelTouchID: function() {
            kony.logger.trace("---------------Entering cancelTouchID function---------------", kony.logger.FUNCTION_ENTRY);
            try {
                kony.localAuthentication.cancelAuthentication();
                this.view.flxTouchIDPopup.isVisible = false;
                this.view.flxPopups.isVisible = false;
                this.view.forceLayout();
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
            kony.logger.trace("---------------Exiting cancelTouchID function---------------", kony.logger.FUNCTION_EXIT);
        },
        /**
         * @function generatePassword
         * @description Generates a random string
         * @private
         * @param {string} length
         * @return {string} retVal
         */
        generatePassword: function(length) {
            kony.logger.trace("---------------Entering generatePassword function---------------", kony.logger.FUNCTION_ENTRY);
            try {
                var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
                var retVal = "";
                for (var i = 0, n = charset.length; i < length; ++i) {
                    retVal += charset.charAt(Math.floor(Math.random() * n));
                }
                return retVal;
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
            kony.logger.trace("---------------Exiting generatePassword function---------------", kony.logger.FUNCTION_EXIT);
        },
        /**
         * @function getrememberKey
         * @description Creates a keyobject from the key that is generated by generatePassword
         * @private
         */
        getrememberKey: function() {
            kony.logger.trace("---------------Entering getrememberKey function---------------", kony.logger.FUNCTION_ENTRY);
            try {
                if (kony.store.getItem("key") === null) {
                    var encryptDecryptKey = kony.crypto.newKey("passphrase", 128, {
                        passphrasetext: [this.generatePassword(32)],
                        subalgo: "aes",
                        passphrasehashalgo: "md5"
                    });
                    var myUniqueIDKey = kony.crypto.saveKey("encryptionKey", encryptDecryptKey);
                    kony.store.setItem("key", myUniqueIDKey);
                }
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
            kony.logger.trace("---------------Exiting getrememberKey function---------------", kony.logger.FUNCTION_EXIT);
        },
        /**
         * @function encryptData
         * @description Encrypts data with keyobject
         * @private
         * @param {string} data
         * @return {string} encrpytedData
         */
        encryptData: function(data) {
            kony.logger.trace("---------------Entering encryptData function---------------", kony.logger.FUNCTION_ENTRY);
            try {
                if (kony.store.getItem("key") === null) {
                    this.getrememberKey();
                }
                var rememberKey = kony.store.getItem("key");
                var myUniqueKey = kony.crypto.readKey(rememberKey);
                var properties = {
                    padding: "pkcs5",
                    mode: "cbc",
                    initializationvector: "1234567890123456"
                };
                var encryptedData = kony.crypto.encrypt("aes", myUniqueKey, data, properties);
                return (kony.convertToBase64(encryptedData));
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
            kony.logger.trace("---------------Exiting encryptData function---------------", kony.logger.FUNCTION_EXIT);
        },
        /**
         * @function decryptData
         * @description Decrypts data with keyobject
         * @private
         * @param {string} data
         * @return {string} decryptedData
         */
        decryptData: function(data) {
            kony.logger.trace("---------------Entering decryptData function---------------", kony.logger.FUNCTION_ENTRY);
            try {
                if (kony.store.getItem("key") === null) {
                    this.getrememberKey();
                }
                var rememberKey = kony.store.getItem("key");
                var myUniqueKey = kony.crypto.readKey(rememberKey);
                var properties = {
                    padding: "pkcs5",
                    mode: "cbc",
                    initializationvector: "1234567890123456"
                };
                var decryptedData = kony.crypto.decrypt("aes", myUniqueKey, kony.convertToRawBytes(data), properties);
                return decryptedData;
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
            kony.logger.trace("---------------Exiting decryptData function---------------", kony.logger.FUNCTION_EXIT);
        },
        /**
         * @function changeImage
         * @description Invoked when user toggles remember me icon
         * @private
         */
        changeImage: function() {
            kony.logger.trace("---------------Entering changeImage function---------------", kony.logger.FUNCTION_ENTRY);
            try {
                if (this.view.imgRememberme.isVisible == true) {
                    this.view.imgRememberme.isVisible = false;
                    this.view.imgUnselected.isVisible = true;
                } else {
                    this.view.imgRememberme.isVisible = true;
                    this.view.imgUnselected.isVisible = false;
                }
                this.view.forceLayout();
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
            kony.logger.trace("---------------Exiting changeImage function---------------", kony.logger.FUNCTION_EXIT);
        },
        /**
         * @function getRememberMe
         * @description Checks if any user credentials exist already
         * @private
         */
        getRememberMe: function() {
            kony.logger.trace("---------------Entering getRememberMe function---------------", kony.logger.FUNCTION_ENTRY);
            kony.logger.info("Retrieving Username and password locally", kony.logger.DATA_STORE);
            try {
                var Username = "";
                var Password = "";
                Username = kony.store.getItem("loginUsername");
                Password = kony.store.getItem("loginPassword");
                if (Username !== null && Password !== null) {
                    if (Username !== "" && Password !== "") {
                        this.view.lblPassword.top = "16%";
                        this.view.lblPassword.skin = "sknAnimate";
                        this.view.lblUsername.top = "-1%";
                        this.view.lblUsername.skin = "sknAnimate";
                    }
                    if (this.encryptCredentials) {
                        Username = this.decryptData(kony.store.getItem("loginUsername"));
                        Password = this.decryptData(kony.store.getItem("loginPassword"));
                    } else {
                        Username = kony.store.getItem("loginUsername");
                        Password = kony.store.getItem("loginPassword");
                    }
                    this.view.tbxUsername.text = Username;
                    this.view.tbxPassword.text = Password;
                } else {
                    this.view.lblPassword.top = "23%";
                    this.view.lblPassword.skin = "sknLblAnimate";
                    this.view.lblUsername.top = "6%";
                    this.view.lblUsername.skin = "sknLblAnimate";
                    this.view.tbxUsername.text = "";
                    this.view.tbxPassword.text = "";
                }
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
            kony.logger.trace("---------------Exiting getRememberMe function---------------", kony.logger.FUNCTION_EXIT);
        },
        /**
         * @function rememberMe
         * @description Stores user credentials by encrypting them
         * @public
         */
        rememberMe: function() {
            kony.logger.trace("---------------Entering rememberMe api---------------", kony.logger.FUNCTION_ENTRY);
            kony.logger.info("Storing Username and password locally", kony.logger.DATA_STORE);
            try {
                if (this.view.imgUnselected.isVisible == true) {
                    kony.store.setItem("loginUsername", "");
                    kony.store.setItem("loginPassword", "");
                } else if (kony.store.getItem("inputType") === "password" && this.view.imgRememberme.isVisible == true) {
                    if (this.encryptCredentials) {
                        kony.store.setItem("loginUsername", this.encryptData(this.getUsername()));
                        kony.store.setItem("loginPassword", this.encryptData(this.getPassword()));
                    } else {
                        kony.store.setItem("loginUsername", this.getUsername());
                        kony.store.setItem("loginPassword", this.getPassword());
                    }
                }
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
            kony.logger.trace("---------------Exiting rememberMe api---------------", kony.logger.FUNCTION_EXIT);
        },
        /**
         * @function invokeButtonClick
         * @description invoked when user clicks on submit button
         * @private
         * @event submitOnClick
         */
        invokeButtonClick: function() {
            kony.logger.trace("---------------Entering invokeButtonClick function---------------", kony.logger.FUNCTION_ENTRY);
            try {
                kony.store.setItem("inputType", "password");
                if (this.submitOnClick !== null && this.submitOnClick !== undefined) {
                    this.submitOnClick();
                } else {
                    if (this.validate()) {
                        if (this.providerName !== null || this.providerName !== undefined || this.providerName !== "") {
                            kony.logger.info("Invoking identity service of providername - - - " + this.providerName);
                            this.invokeIdentityService(this.providerName);
                        } else {
                            this.invokeIdentityService("userstore");
                        }
                    } else {
                        alert("Please enter valid username and password");
                    }
                }
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
            kony.logger.trace("---------------Exiting invokeButtonClick function---------------", kony.logger.FUNCTION_EXIT);
        },
        /**
         * @function remembermeSelection
         * @description Event triggered when user sets remember me action event
         * @private
         * @event remembermeOnSelection
         */
        remembermeSelection: function() {
            kony.logger.trace("---------------Entering remembermeSelection function---------------", kony.logger.FUNCTION_ENTRY);
            try {
                this.changeImage();
                if (this.remembermeOnSelection !== null && this.remembermeOnSelection !== undefined) {
                    kony.logger.info("Invoking rememberOnSelection event");
                    this.remembermeOnSelection();
                }
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
            kony.logger.trace("---------------Exiting remembermeSelection function---------------", kony.logger.FUNCTION_EXIT);
        },
        /**
         * @function validateUsername
         * @description Validates username entered by the user
         * @private
         * @returns {boolean} true/false
         */
        validateUsername: function() {
            kony.logger.trace("---------------Entering validateUsername function---------------", kony.logger.FUNCTION_ENTRY);
            try {
                var pattern = /^\d+$/;
                if (this.usernameMinimumChar == null || this.usernameMinimumChar == undefined || !pattern.test(this.usernameMinimumChar)) {
                    this.usernameMinimumChar = constants.DEFAULT_MINIMUM_CHAR_LENGTH;
                    kony.logger.warn("Username Min Character value is not Integer. So default value is being set");
                }
                if (parseInt(this.usernameMinimumChar) > this.getUsername().length) {
                    alert(this._usernameValidationMsg);
                    return false;
                }
                return true;
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
            kony.logger.trace("---------------Exiting validateUsername function---------------", kony.logger.FUNCTION_EXIT);
        },
        /**
         * @function validatePassword
         * @description Validates password entered by the user
         * @private
         * @returns {boolean} true/false
         */
        validatePassword: function() {
            kony.logger.trace("---------------Entering validatePassword function---------------", kony.logger.FUNCTION_ENTRY);
            try {
                var pattern = /^\d+$/;
                if (this.passwordMinimumCharacter == null || this.passwordMinimumCharacter == undefined || !pattern.test(this.passwordMinimumCharacter)) {
                    this.passwordMinimumCharacter = constants.DEFAULT_MINIMUM_CHAR_LENGTH;
                    kony.logger.warn("Password Min Character value is not Integer. So default value is being set");
                }
                if (parseInt(this.passwordMinimumCharacter) > this.getPassword().length) {
                    alert(this._passwordValidationMsg);
                    return false;
                }
                return true;
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
            kony.logger.trace("---------------Exiting validatePassword function---------------", kony.logger.FUNCTION_EXIT);
        },
        /**
         * @function validate
         * @description validates username and password
         * @private
         * @return {boolean} true/false
         */
        validate: function() {
            kony.logger.trace("---------------Entering validate function---------------", kony.logger.FUNCTION_ENTRY);
            try {
                if (this.getUsername() !== "" && this.getUsername() !== null && this.getPassword() !== null && this.getPassword() !== "" && this.validateUsername() !== false && this.validatePassword !== false) {
                    return true;
                }
                return false;
            } catch (exception) {
                kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
            }
            kony.logger.trace("---------------Exiting validate function---------------", kony.logger.FUNCTION_EXIT);
        },
    };
});