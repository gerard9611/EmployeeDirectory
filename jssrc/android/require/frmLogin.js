define("frmLogin", function() {
    return function(controller) {
        function addWidgetsfrmLogin() {
            this.setDefaultUnit(kony.flex.DP);
            var login = new com.konymp.login({
                "clipBounds": true,
                "height": "100%",
                "id": "login",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyCopyCopyCopyslFbox2",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            login.logoSource = "login_image.png";
            login.socialLoginVisible = false;
            login.usernameMinimumChar = "8";
            login.passwordMinimumChar = "8";
            login.usernameValidationMsg = "Please enter valid Username";
            login.passwordValidationMsg = "Please enter valid Password";
            login.providerName = "userstore";
            login.encryptCredentials = true;
            login.loginSuccessEvent = controller.AS_UWI_hfe49fde553c4262aea206b185e18280;
            this.add(login);
        };
        return [{
            "addWidgets": addWidgetsfrmLogin,
            "enabledForIdleTimeout": false,
            "id": "frmLogin",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});