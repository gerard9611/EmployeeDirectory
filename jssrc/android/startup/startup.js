//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "EmpDirectory",
    appName: "EmployeeDirectory",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.3.65",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "EmpDirectory",
    isturlbase: "https://ace-dev.konycloud.com/services",
    isMFApp: true,
    appKey: "b7b8ae8f886fa0df9b6c4dbffc080446",
    appSecret: "a2f2c6e47a6e0978192873f6130e9633",
    serviceUrl: "https://100000014.auth.konycloud.com/appconfig",
    svcDoc: {
        "appId": "4d9fb682-e0e4-439d-acc6-8b4036444d96",
        "baseId": "258f5714-2bea-4177-a347-6ac3421645ba",
        "name": "EmployeeDirectoryApp",
        "selflink": "https://100000014.auth.konycloud.com/appconfig",
        "login": [{
            "type": "basic",
            "prov": "userstore",
            "url": "https://100000014.auth.konycloud.com",
            "alias": "userstore"
        }, {
            "type": "oauth2",
            "prov": "reusableGoogleLogin",
            "url": "https://100000014.auth.konycloud.com",
            "alias": "reusableGoogleLogin"
        }, {
            "type": "oauth2",
            "prov": "reusableFacebookLogin",
            "url": "https://100000014.auth.konycloud.com",
            "alias": "reusableFacebookLogin"
        }, {
            "type": "oauth2",
            "prov": "reusableLinkedinLogin",
            "url": "https://100000014.auth.konycloud.com",
            "alias": "reusableLinkedinLogin"
        }],
        "integsvc": {
            "EmployeeStorageObjects": "https://ace-dev.konycloud.com/services/EmployeeStorageObjects"
        },
        "reportingsvc": {
            "custom": "https://ace-dev.konycloud.com/services/CMS",
            "session": "https://ace-dev.konycloud.com/services/IST"
        },
        "services_meta": {
            "EmployeeStorageObjects": {
                "version": "1.0",
                "url": "https://ace-dev.konycloud.com/services/EmployeeStorageObjects",
                "type": "integsvc"
            },
            "EmployeeModelSchema": {
                "version": "1.0",
                "url": "https://ace-dev.konycloud.com/services/data/v1/EmployeeModelSchema",
                "metadata_url": "https://ace-dev.konycloud.com/services/metadata/v1/EmployeeModelSchema",
                "type": "objectsvc"
            },
            "StorageObjectServices": {
                "version": "1.0",
                "url": "https://ace-dev.konycloud.com/services/data/v1/StorageObjectServices",
                "metadata_url": "https://ace-dev.konycloud.com/services/metadata/v1/StorageObjectServices",
                "type": "objectsvc"
            }
        }
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: "https://ace-dev.konycloud.com/EmpDirectory/MWServlet",
    secureurl: "https://ace-dev.konycloud.com/EmpDirectory/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        isMVC: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7300
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        showstartupform: function() {
            var startForm = new kony.mvc.Navigation("frmLogin");
            startForm.navigate();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;