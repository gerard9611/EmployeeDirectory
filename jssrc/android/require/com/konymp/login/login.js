define(function() {
    return function(controller) {
        var login = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "login",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyCopyCopyCopyslFbox2",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        login.setDefaultUnit(kony.flex.DP);
        var flxLogin = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxLogin",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "skin": "CopyCopyCopyCopyCopysknslFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxLogin.setDefaultUnit(kony.flex.DP);
        var flxBottomContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "60%",
            "id": "flxBottomContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "CopyCopyCopyCopyCopysknCopyslFbox",
            "width": "100%",
            "zIndex": 8
        }, {}, {});
        flxBottomContainer.setDefaultUnit(kony.flex.DP);
        flxBottomContainer.add();
        var flxlogo = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "40%",
            "id": "flxlogo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "CopyCopyCopyCopyCopyslFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 8
        }, {}, {});
        flxlogo.setDefaultUnit(kony.flex.DP);
        var imgLogo = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "40%",
            "height": "30%",
            "id": "imgLogo",
            "isVisible": true,
            "skin": "CopyCopyCopyCopyslImage",
            "src": "logo.png",
            "width": "30%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxlogo.add(imgLogo);
        var flxTouchId = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "78%",
            "clipBounds": true,
            "height": "8%",
            "id": "flxTouchId",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "onClick": controller.AS_FlexContainer_756224b40cef418880948b2a5b22416e,
            "skin": "CopyCopyCopyCopyslFbox",
            "width": "100%",
            "zIndex": 8
        }, {}, {});
        flxTouchId.setDefaultUnit(kony.flex.DP);
        var imgTouchId = new kony.ui.Image2({
            "centerY": "50%",
            "height": "40dp",
            "id": "imgTouchId",
            "isVisible": true,
            "left": "22%",
            "skin": "CopyCopyCopyCopyslImage",
            "src": "touch_id_icon.png",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTouchId = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblTouchId",
            "isVisible": true,
            "left": "37%",
            "skin": "CopyCopyCopyCopyCopyslLabel2",
            "text": "Sign in with Touch ID",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxTouchId.add(imgTouchId, lblTouchId);
        var flxSocialLogin = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "90.50%",
            "clipBounds": true,
            "height": "19%",
            "id": "flxSocialLogin",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopyCopyCopyCopyslFbox",
            "width": "100%",
            "zIndex": 8
        }, {}, {});
        flxSocialLogin.setDefaultUnit(kony.flex.DP);
        var imgFaceBook = new kony.ui.Image2({
            "centerX": "30%",
            "centerY": "60%",
            "height": "40dp",
            "id": "imgFaceBook",
            "isVisible": true,
            "onTouchStart": controller.AS_Image_7c438bbff6ee4ce7924f0b3cf2cf1682,
            "skin": "CopyCopyCopyCopyslImage",
            "src": "facebook.png",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgLinkedIn = new kony.ui.Image2({
            "centerX": "69%",
            "centerY": "60%",
            "height": "40dp",
            "id": "imgLinkedIn",
            "isVisible": true,
            "onTouchStart": controller.AS_Image_5065bad199454e618a803d8865c8171b,
            "skin": "CopyCopyCopyCopyslImage",
            "src": "linkedin.png",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgGoogle = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "60%",
            "height": "40dp",
            "id": "imgGoogle",
            "isVisible": true,
            "onTouchStart": controller.AS_Image_aa93ed974ebb4c78a4637108887cdc72,
            "skin": "CopyCopyCopyCopyslImage",
            "src": "google.png",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxOr = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40%",
            "id": "flxOr",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopyCopyCopyCopyslFbox",
            "top": "0%",
            "width": "100%",
            "zIndex": 8
        }, {}, {});
        flxOr.setDefaultUnit(kony.flex.DP);
        var lblLine1 = new kony.ui.Label({
            "centerX": "25%",
            "height": "2%",
            "id": "lblLine1",
            "isVisible": true,
            "skin": "CopyCopyCopyCopyCopyslLabel",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "50%",
            "width": "35%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblOr = new kony.ui.Label({
            "centerX": "50%",
            "height": "50%",
            "id": "lblOr",
            "isVisible": true,
            "skin": "CopyCopyCopyCopyCopyslLabel1",
            "text": "OR",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "25%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblLine2 = new kony.ui.Label({
            "centerX": "75%",
            "height": "2%",
            "id": "lblLine2",
            "isVisible": true,
            "skin": "CopyCopyCopyCopyCopyslLabel",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "50%",
            "width": "35%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxOr.add(lblLine1, lblOr, lblLine2);
        flxSocialLogin.add(imgFaceBook, imgLinkedIn, imgGoogle, flxOr);
        var flxCredentials = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "43%",
            "id": "flxCredentials",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "CopyCopyCopyCopyCopyskngenericCard",
            "width": "92%",
            "zIndex": 8
        }, {}, {});
        flxCredentials.setDefaultUnit(kony.flex.DP);
        var flxUsername = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "flxUsername",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "right": "5%",
            "skin": "CopyCopyCopyCopyCopysknslFbox",
            "top": "4%",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxUsername.setDefaultUnit(kony.flex.DP);
        var tbxUsername = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopyCopyCopyCopysknloginTextField",
            "height": "33dp",
            "id": "tbxUsername",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "maxTextLength": 30,
            "onDone": controller.AS_TextField_5a16314dc3fb4fb887964b1cb2f03620,
            "right": 0,
            "secureTextEntry": false,
            "skin": "CopyCopyCopyCopyCopysknloginTextField",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "15%",
            "width": "100%"
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "CopyCopyCopyCopysknPlaceholderKA",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        });
        var flxBottomUsername = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "12%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxBottomUsername",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "right": "0dp",
            "skin": "CopyCopyCopyCopyCopyskntextFieldDivider",
            "zIndex": 1
        }, {}, {});
        flxBottomUsername.setDefaultUnit(kony.flex.DP);
        flxBottomUsername.add();
        flxUsername.add(tbxUsername, flxBottomUsername);
        var flxPassword = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "flxPassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "right": "5%",
            "skin": "CopyCopyCopyCopyCopysknslFbox",
            "top": "21%",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxPassword.setDefaultUnit(kony.flex.DP);
        var tbxPassword = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopyCopyCopyCopysknloginTextField",
            "height": "36dp",
            "id": "tbxPassword",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "maxTextLength": 30,
            "onDone": controller.AS_TextField_1a7d6bedd647415c8b3d5caee9b91fdf,
            "right": 0,
            "secureTextEntry": true,
            "skin": "CopyCopyCopyCopyCopysknloginTextField",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "15%",
            "width": "100%"
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "CopyCopyCopyCopysknPlaceholderKA",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        });
        var flxBottomPassword = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "12%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxBottomPassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "right": "0dp",
            "skin": "CopyCopyCopyCopyCopyskntextFieldDivider",
            "zIndex": 1
        }, {}, {});
        flxBottomPassword.setDefaultUnit(kony.flex.DP);
        flxBottomPassword.add();
        flxPassword.add(tbxPassword, flxBottomPassword);
        var flxRememberMe = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "34dp",
            "id": "flxRememberMe",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "6.97%",
            "onClick": controller.AS_FlexContainer_9b53fb48875d448dad4f525d0393d1a0,
            "right": "5%",
            "skin": "CopyCopyCopyCopyCopysknslFbox",
            "top": "40.96%",
            "width": "50%",
            "zIndex": 1
        }, {}, {});
        flxRememberMe.setDefaultUnit(kony.flex.DP);
        var lblRememberMe = new kony.ui.Label({
            "centerY": "50.00%",
            "id": "lblRememberMe",
            "isVisible": true,
            "left": "23%",
            "skin": "CopyCopyCopyCopyCopyskn",
            "text": "Remember Me",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgRememberme = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgRememberme",
            "imageWhenFailed": "checkbox_unselected.png",
            "isVisible": false,
            "left": "5%",
            "skin": "CopyCopyCopyCopyCopyslImage",
            "src": "checkbox_selected.png",
            "top": "0dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgUnselected = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgUnselected",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyCopyCopyCopyslImage1",
            "src": "checkbox_unselected.png",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRememberMe.add(lblRememberMe, imgRememberme, imgUnselected);
        var flxForgotPassword = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxForgotPassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "CopyCopyCopyCopyslFbox",
            "top": "80%",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxForgotPassword.setDefaultUnit(kony.flex.DP);
        var btnForgotPassword = new kony.ui.Button({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "CopyCopyCopyCopysknsecondaryActionFocus",
            "height": "80%",
            "id": "btnForgotPassword",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.Action14925129638107872,
            "skin": "CopyCopyCopyCopyCopysknsecondaryAction",
            "text": "Forgot password?",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblSknHidden = new kony.ui.Label({
            "height": "0%",
            "id": "lblSknHidden",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyCopysknAnimate",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": "0%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxForgotPassword.add(btnForgotPassword, lblSknHidden);
        var lblPassword = new kony.ui.Label({
            "height": "33dp",
            "id": "lblPassword",
            "isVisible": true,
            "left": "5%",
            "onTouchStart": controller.AS_Label_b9eadf2e68d14ae8bb613561db3fa651,
            "skin": "CopyCopysknLblAnimate",
            "text": "Password",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "23%",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var btnLogin = new kony.ui.Button({
            "centerX": "50.06%",
            "focusSkin": "CopyloginbuttonskinFocus",
            "height": "42dp",
            "id": "btnLogin",
            "isVisible": true,
            "onClick": controller.AS_Button_78bc54b534c94ce3a03fa5218e49881f,
            "skin": "Copyloginbuttonskin",
            "text": "SIGN IN",
            "top": "60.04%",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblUsername = new kony.ui.Label({
            "height": "33dp",
            "id": "lblUsername",
            "isVisible": true,
            "left": "5%",
            "onTouchStart": controller.AS_Label_d7e2b79c3ff749069b594305f5393d4e,
            "skin": "CopyCopysknLblAnimate",
            "text": "Username",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "6%",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxCredentials.add(flxUsername, flxPassword, flxRememberMe, flxForgotPassword, lblPassword, btnLogin, lblUsername);
        var flxPopups = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPopups",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopyCopyCopysknflxMob",
            "top": "0%",
            "width": "100%",
            "zIndex": 9
        }, {}, {});
        flxPopups.setDefaultUnit(kony.flex.DP);
        var flxEnableTouchIDPopup = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "27%",
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "40%",
            "id": "flxEnableTouchIDPopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopyCopyCopysknFlxMobFFFFFFOp",
            "width": "89%",
            "zIndex": 10
        }, {}, {});
        flxEnableTouchIDPopup.setDefaultUnit(kony.flex.DP);
        var flxButtons = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "20%",
            "id": "flxButtons",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyCopyCopyslFbox",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxButtons.setDefaultUnit(kony.flex.DP);
        var btnEnable = new kony.ui.Button({
            "focusSkin": "CopyCopyCopyCopyslButtonGlossRed",
            "height": "100%",
            "id": "btnEnable",
            "isVisible": true,
            "left": "50%",
            "onClick": controller.AS_Button_142315c475e740159c1e55d92260a002,
            "skin": "CopyCopyCopysknBtn",
            "text": "Enable",
            "top": "0%",
            "width": "50%",
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnCancel = new kony.ui.Button({
            "focusSkin": "CopyCopyCopyCopyslButtonGlossRed",
            "height": "100%",
            "id": "btnCancel",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Button_098e189ae6a341f7bc9f2060f3f6d37c,
            "skin": "CopyCopyCopysknBtnFA",
            "text": "Cancel",
            "top": "0%",
            "width": "50%",
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxButtons.add(btnEnable, btnCancel);
        var flxPopUpTitle = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20%",
            "id": "flxPopUpTitle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyCopyCopyslFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxPopUpTitle.setDefaultUnit(kony.flex.DP);
        var lblHeader = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblHeader",
            "isVisible": true,
            "skin": "CopyCopyCopyCopyslLabel",
            "text": "Enable Touch ID",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxPopUpTitle.add(lblHeader);
        var flxEnableTouchIdPopupLine = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2px",
            "id": "flxEnableTouchIdPopupLine",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyCopyCopysknFlxLineBg",
            "top": "20%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxEnableTouchIdPopupLine.setDefaultUnit(kony.flex.DP);
        flxEnableTouchIdPopupLine.add();
        var imgEnableTouchIDIcon = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "40%",
            "height": "60dp",
            "id": "imgEnableTouchIDIcon",
            "isVisible": true,
            "skin": "CopyCopyCopyslImage1",
            "src": "touchid.png",
            "width": "60dp",
            "zIndex": 10
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblMessage = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "65%",
            "id": "lblMessage",
            "isVisible": true,
            "skin": "CopyCopyCopyCopyslLabel1",
            "text": "You can use touch ID to Login",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxEnableTouchIDPopup.add(flxButtons, flxPopUpTitle, flxEnableTouchIdPopupLine, imgEnableTouchIDIcon, lblMessage);
        var flxTouchIDPopup = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "27%",
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "36%",
            "id": "flxTouchIDPopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopyCopyCopysknFlxMobFFFFFFOp",
            "top": "0%",
            "width": "89%",
            "zIndex": 10
        }, {}, {});
        flxTouchIDPopup.setDefaultUnit(kony.flex.DP);
        var flxTouchIDButtons = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "25%",
            "id": "flxTouchIDButtons",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyCopyCopyslFbox",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxTouchIDButtons.setDefaultUnit(kony.flex.DP);
        var btnTouchCancel = new kony.ui.Button({
            "focusSkin": "CopyCopyCopyCopyslButtonGlossRed",
            "height": "100%",
            "id": "btnTouchCancel",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Button_9ef0645d4d164d2ab3eea2c6859676eb,
            "skin": "CopyCopyCopysknBtnFA",
            "text": "Cancel",
            "top": "0%",
            "width": "100%",
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxTouchIDButtons.add(btnTouchCancel);
        var flxTouchIDPopUpTitle = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25%",
            "id": "flxTouchIDPopUpTitle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyCopyCopyslFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxTouchIDPopUpTitle.setDefaultUnit(kony.flex.DP);
        var lblTouchHeader = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblTouchHeader",
            "isVisible": true,
            "skin": "CopyCopyCopyCopyslLabel2",
            "text": "Touch ID",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxTouchIDPopUpTitle.add(lblTouchHeader);
        var flxTouchIDPopupLine = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2px",
            "id": "flxTouchIDPopupLine",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyCopyCopysknFlxLineBg",
            "top": "25%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxTouchIDPopupLine.setDefaultUnit(kony.flex.DP);
        flxTouchIDPopupLine.add();
        var imgTouchIDPopupIcon = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "40%",
            "height": "50dp",
            "id": "imgTouchIDPopupIcon",
            "isVisible": true,
            "skin": "CopyCopyCopyslImage1",
            "src": "touchid.png",
            "width": "50dp",
            "zIndex": 10
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTouchMessage = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "65%",
            "id": "lblTouchMessage",
            "isVisible": true,
            "skin": "CopyCopyCopyCopyslLabel3",
            "text": "Use Touch ID to Login",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxTouchIDPopup.add(flxTouchIDButtons, flxTouchIDPopUpTitle, flxTouchIDPopupLine, imgTouchIDPopupIcon, lblTouchMessage);
        flxPopups.add(flxEnableTouchIDPopup, flxTouchIDPopup);
        flxLogin.add(flxBottomContainer, flxlogo, flxTouchId, flxSocialLogin, flxCredentials, flxPopups);
        var flxIdentity = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxIdentity",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopyCopyCopyCopyslFbox1",
            "top": "0%",
            "width": "100%",
            "zIndex": 10
        }, {}, {});
        flxIdentity.setDefaultUnit(kony.flex.DP);
        var brwsrIdentity = new kony.ui.Browser({
            "detectTelNumber": true,
            "enableZoom": false,
            "height": "100%",
            "htmlString": "Please wait !!\n",
            "id": "brwsrIdentity",
            "isVisible": true,
            "left": "0%",
            "top": "0%",
            "width": "100%",
            "zIndex": 100
        }, {}, {});
        var imgClose = new kony.ui.Image2({
            "height": "35dp",
            "id": "imgClose",
            "isVisible": true,
            "onTouchStart": controller.AS_Image_73da2dfedd3a4f2d844b131345ccb639,
            "right": "2%",
            "skin": "CopyCopyCopyslImage",
            "src": "clear_input_icon.png",
            "top": "0.50%",
            "width": "35dp",
            "zIndex": 101
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxIdentity.add(brwsrIdentity, imgClose);
        login.add(flxLogin, flxIdentity);
        return login;
    }
})