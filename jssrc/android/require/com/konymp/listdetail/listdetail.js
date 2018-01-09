define(function() {
    return function(controller) {
        var listdetail = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "listdetail",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "postShow": controller.AS_FlexContainer_f799526f5c2642fbafc97d0102a85469,
            "preShow": controller.AS_FlexContainer_j680a39c9d504510972693942d7c16d9,
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        listdetail.setDefaultUnit(kony.flex.DP);
        var flxDetailsScreen = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDetailsScreen",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "100%",
            "skin": "sknFlxDetailsScreen",
            "top": "0%",
            "width": "100%",
            "zIndex": 12
        }, {}, {});
        flxDetailsScreen.setDefaultUnit(kony.flex.DP);
        var flxDetailsHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "42.25%",
            "id": "flxDetailsHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "onClick": controller.AS_FlexContainer_c4c3723b7a784d01aa5c85a736e3da3c,
            "skin": "Copymflex3",
            "top": "0%",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flxDetailsHeader.setDefaultUnit(kony.flex.DP);
        var flxHeaderBar = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20%",
            "id": "flxHeaderBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopyCopyslFbox068dd44f0f17845",
            "top": "0%",
            "width": "100%",
            "zIndex": 4
        }, {}, {});
        flxHeaderBar.setDefaultUnit(kony.flex.DP);
        var imgBack = new kony.ui.Image2({
            "height": "30dp",
            "id": "imgBack",
            "isVisible": true,
            "left": "3%",
            "skin": "CopyslImage4",
            "src": "arrow_left_white_icon.png",
            "top": "25%",
            "width": "30dp",
            "zIndex": 3
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnBack = new kony.ui.Button({
            "focusSkin": "Copybtn03f8f04b8191646",
            "height": "100%",
            "id": "btnBack",
            "isVisible": true,
            "left": "1%",
            "onClick": controller.AS_Button_a7675983c97241d89d5c9d64c2c463ed,
            "skin": "CopysknBtnInVisible4",
            "top": "0%",
            "width": "12%",
            "zIndex": 4
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxHeaderBar.add(imgBack, btnBack);
        var flxEmployeeName = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "35.40%",
            "id": "flxEmployeeName",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "Copybeforeanim3",
            "top": "64.60%",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flxEmployeeName.setDefaultUnit(kony.flex.DP);
        flxEmployeeName.add();
        var flxEmployeeProfilePic = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "23.40%",
            "centerX": "50%",
            "clipBounds": false,
            "height": "38%",
            "id": "flxEmployeeProfilePic",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "width": "28%",
            "zIndex": 3
        }, {}, {});
        flxEmployeeProfilePic.setDefaultUnit(kony.flex.DP);
        var flxImageHolder = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxImageHolder",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopysknFlxImageHolder4",
            "top": "0%",
            "width": "100%",
            "zIndex": 6
        }, {}, {});
        flxImageHolder.setDefaultUnit(kony.flex.DP);
        var imgEmployee = new kony.ui.Image2({
            "height": "100%",
            "id": "imgEmployee",
            "imageWhileDownloading": "cover.png",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyslImage4",
            "src": "user_profile2.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImageHolder.add(imgEmployee);
        var flxOnline = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "5%",
            "clipBounds": true,
            "height": "17%",
            "id": "flxOnline",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "7%",
            "skin": "CopysknFlxOnline3",
            "width": "17%",
            "zIndex": 8
        }, {}, {});
        flxOnline.setDefaultUnit(kony.flex.DP);
        var lblInvisible = new kony.ui.Label({
            "height": "100%",
            "id": "lblInvisible",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLblOnline0dafce9087ce64d",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": "100%",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxOnline.add(lblInvisible);
        flxEmployeeProfilePic.add(flxImageHolder, flxOnline);
        var FlxBackGround = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "FlxBackGround",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "CopysknDarkHeaderBg3",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        FlxBackGround.setDefaultUnit(kony.flex.DP);
        var imgCover = new kony.ui.Image2({
            "height": "100%",
            "id": "imgCover",
            "imageWhenFailed": "profile.png",
            "imageWhileDownloading": "arrow_left_white_icon.png",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 4
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlxBackGround.add(imgCover);
        var lblEmployeeName = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblEmployeeName",
            "isVisible": true,
            "skin": "Copybelabel3",
            "text": "Alfred Kevin",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "78%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblEmployeeDesignation = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblEmployeeDesignation",
            "isVisible": true,
            "skin": "Copybdlabel3",
            "text": "program manager",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "87%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxDetailsHeader.add(flxHeaderBar, flxEmployeeName, flxEmployeeProfilePic, FlxBackGround, lblEmployeeName, lblEmployeeDesignation);
        var flxBody = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flxBody",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "top": "42.25%",
            "width": "100%",
            "zIndex": 5
        }, {}, {});
        flxBody.setDefaultUnit(kony.flex.DP);
        var flxCategory = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "12%",
            "id": "flxCategory",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopysknFlxF3",
            "width": "100%",
            "zIndex": 4
        }, {}, {});
        flxCategory.setDefaultUnit(kony.flex.DP);
        var flxCategorySeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxCategorySeparator",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "CopysknFlxA3",
            "width": "0.20%",
            "zIndex": 2
        }, {}, {});
        flxCategorySeparator.setDefaultUnit(kony.flex.DP);
        flxCategorySeparator.add();
        var btnCategoryDetails = new kony.ui.Button({
            "focusSkin": "Copybtn0240ea317143f4b",
            "height": "95%",
            "id": "btnCategoryDetails",
            "isVisible": true,
            "left": "0%",
            "skin": "btn4Active",
            "text": "Details",
            "top": "0%",
            "width": "50%",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnCategoryHierarchy = new kony.ui.Button({
            "focusSkin": "Copybtn0240ea317143f4b",
            "height": "95%",
            "id": "btnCategoryHierarchy",
            "isVisible": true,
            "right": "0%",
            "skin": "Copybtn0b37b5fcdcff44d",
            "text": "Hierarchy",
            "top": "0%",
            "width": "50%",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDetailsColor = new kony.ui.Label({
            "bottom": "0%",
            "height": "4%",
            "id": "lblDetailsColor",
            "isVisible": true,
            "left": "0%",
            "skin": "Copycolorvis3",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxCategoryLineThin = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1%",
            "id": "flxCategoryLineThin",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopysknFlxA3",
            "top": "99%",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flxCategoryLineThin.setDefaultUnit(kony.flex.DP);
        flxCategoryLineThin.add();
        flxCategory.add(flxCategorySeparator, btnCategoryDetails, btnCategoryHierarchy, lblDetailsColor, flxCategoryLineThin);
        var flxShadowLine = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "3%",
            "id": "flxShadowLine",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopysknShadowDivider3",
            "top": "0%",
            "width": "100%",
            "zIndex": 3
        }, {}, {});
        flxShadowLine.setDefaultUnit(kony.flex.DP);
        flxShadowLine.add();
        var flxScrollDetails = new kony.ui.FlexScrollContainer({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": false,
            "clipBounds": false,
            "enableScrolling": false,
            "height": "88%",
            "horizontalScrollIndicator": true,
            "id": "flxScrollDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "CopysknSrclFAFAF4",
            "top": "0%",
            "verticalScrollIndicator": false,
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flxScrollDetails.setDefaultUnit(kony.flex.DP);
        var callMobileFlex = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "callMobileFlex",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "sknFlxInVisible",
            "top": "1%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        callMobileFlex.setDefaultUnit(kony.flex.DP);
        var lblCallMobile = new kony.ui.Label({
            "id": "lblCallMobile",
            "isVisible": true,
            "left": "7%",
            "skin": "majortitle",
            "text": "CALL MOBILE",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblCallMobileValue = new kony.ui.Label({
            "id": "lblCallMobileValue",
            "isVisible": true,
            "left": "7%",
            "skin": "CopyslLabel0a8469a64faad45",
            "text": "9876543210",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "50%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxLine1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 0,
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopysknFlxA4",
            "width": "86%",
            "zIndex": 2
        }, {}, {});
        flxLine1.setDefaultUnit(kony.flex.DP);
        flxLine1.add();
        var flxMobileImageHolder = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "60%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxMobileImageHolder",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "onClick": controller.AS_FlexContainer_b614355fb2d04dc99858fca4d3a23ee5,
            "right": "4%",
            "skin": "slFbox",
            "width": "20dp",
            "zIndex": 2
        }, {}, {});
        flxMobileImageHolder.setDefaultUnit(kony.flex.DP);
        var imgMobile = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "20dp",
            "id": "imgMobile",
            "isVisible": true,
            "src": "listphone.png",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxMobileImageHolder.add(imgMobile);
        callMobileFlex.add(lblCallMobile, lblCallMobileValue, flxLine1, flxMobileImageHolder);
        var callWorkFlex = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "callWorkFlex",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "sknFlxInVisible",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        callWorkFlex.setDefaultUnit(kony.flex.DP);
        var lblCallWork = new kony.ui.Label({
            "id": "lblCallWork",
            "isVisible": true,
            "left": "7%",
            "skin": "majortitle",
            "text": "CALL WORK",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblCallWorkValue = new kony.ui.Label({
            "id": "lblCallWorkValue",
            "isVisible": true,
            "left": "7%",
            "skin": "CopyslLabel0a8469a64faad45",
            "text": "040-12345678",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "50%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxLine2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 0,
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopysknFlxA4",
            "width": "86%",
            "zIndex": 2
        }, {}, {});
        flxLine2.setDefaultUnit(kony.flex.DP);
        flxLine2.add();
        var flxWorkImageHolder = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "60%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxWorkImageHolder",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "onClick": controller.AS_FlexContainer_ce9787310d2f4d44ae4ec15db7be4d71,
            "right": "4%",
            "skin": "CopyslFbox0a41dffe594e44d",
            "width": "20dp",
            "zIndex": 2
        }, {}, {});
        flxWorkImageHolder.setDefaultUnit(kony.flex.DP);
        var imgWork = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "20dp",
            "id": "imgWork",
            "isVisible": true,
            "skin": "CopyslImage5",
            "src": "listphone.png",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxWorkImageHolder.add(imgWork);
        callWorkFlex.add(lblCallWork, lblCallWorkValue, flxLine2, flxWorkImageHolder);
        var emailFlex = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "emailFlex",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "sknFlxInVisible",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        emailFlex.setDefaultUnit(kony.flex.DP);
        var lblEmail = new kony.ui.Label({
            "id": "lblEmail",
            "isVisible": true,
            "left": "7%",
            "skin": "majortitle",
            "text": "EMAIL",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblEmailValue = new kony.ui.Label({
            "id": "lblEmailValue",
            "isVisible": true,
            "left": "7%",
            "skin": "CopyslLabel0a8469a64faad45",
            "text": "bala.carcharla@kony.com",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "50%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxLine3 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopysknFlxA4",
            "width": "86%",
            "zIndex": 2
        }, {}, {});
        flxLine3.setDefaultUnit(kony.flex.DP);
        flxLine3.add();
        var flxEmailHolder = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "60%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxEmailHolder",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "onClick": controller.AS_FlexContainer_ec1a97cd08a34418b3de08d72eed4d7d,
            "right": "4%",
            "skin": "CopyslFbox0a41dffe594e44d",
            "width": "20dp",
            "zIndex": 2
        }, {}, {});
        flxEmailHolder.setDefaultUnit(kony.flex.DP);
        var imgEmail = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "20dp",
            "id": "imgEmail",
            "isVisible": true,
            "skin": "CopyslImage5",
            "src": "mailicon.png",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxEmailHolder.add(imgEmail);
        emailFlex.add(lblEmail, lblEmailValue, flxLine3, flxEmailHolder);
        var departmentFlex = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "departmentFlex",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "skin": "sknFlxInVisible",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        departmentFlex.setDefaultUnit(kony.flex.DP);
        var lblDepartment = new kony.ui.Label({
            "id": "lblDepartment",
            "isVisible": true,
            "left": "7%",
            "skin": "majortitle",
            "text": "DEPARTMENT",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblDepartmentValue = new kony.ui.Label({
            "id": "lblDepartmentValue",
            "isVisible": true,
            "left": "7%",
            "skin": "CopyslLabel0a8469a64faad45",
            "text": "Release Management",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxLine4 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopysknFlxA4",
            "top": "15dp",
            "width": "86%",
            "zIndex": 2
        }, {}, {});
        flxLine4.setDefaultUnit(kony.flex.DP);
        flxLine4.add();
        departmentFlex.add(lblDepartment, lblDepartmentValue, flxLine4);
        var reportingToFlex = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "reportingToFlex",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "sknFlxInVisible",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        reportingToFlex.setDefaultUnit(kony.flex.DP);
        var lblReportingTo = new kony.ui.Label({
            "id": "lblReportingTo",
            "isVisible": true,
            "left": "7%",
            "skin": "majortitle",
            "text": "REPORTING TO",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblReportingToValue = new kony.ui.Label({
            "id": "lblReportingToValue",
            "isVisible": true,
            "left": "7%",
            "skin": "CopyslLabel0a8469a64faad45",
            "text": "Dave Shrink",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "50%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxLine5 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopysknFlxA4",
            "width": "86%",
            "zIndex": 2
        }, {}, {});
        flxLine5.setDefaultUnit(kony.flex.DP);
        flxLine5.add();
        var flxImageReportingManagerHolder = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "60%",
            "clipBounds": true,
            "height": "32dp",
            "id": "flxImageReportingManagerHolder",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "84%",
            "skin": "sknFlxRoundNoBorder",
            "width": "32dp",
            "zIndex": 2
        }, {}, {});
        flxImageReportingManagerHolder.setDefaultUnit(kony.flex.DP);
        var imgReportingTo = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgReportingTo",
            "isVisible": true,
            "skin": "CopyslImage5",
            "src": "me.png",
            "width": "100%",
            "zIndex": 10
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImageReportingManagerHolder.add(imgReportingTo);
        reportingToFlex.add(lblReportingTo, lblReportingToValue, flxLine5, flxImageReportingManagerHolder);
        var locationFlex = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "locationFlex",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "sknFlxInVisible",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        locationFlex.setDefaultUnit(kony.flex.DP);
        var lblLocation = new kony.ui.Label({
            "id": "lblLocation",
            "isVisible": true,
            "left": "7%",
            "skin": "majortitle",
            "text": "LOCATION",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblLocationValue = new kony.ui.Label({
            "height": "100%",
            "id": "lblLocationValue",
            "isVisible": true,
            "left": "7%",
            "skin": "CopyslLabel0a8469a64faad45",
            "text": "7th floor,phoenix infocity",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10%",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxLine6 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine6",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopysknFlxA4",
            "width": "86%",
            "zIndex": 2
        }, {}, {});
        flxLine6.setDefaultUnit(kony.flex.DP);
        flxLine6.add();
        var flxMapHolder = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "60%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxMapHolder",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "right": "4%",
            "skin": "CopyslFbox0a41dffe594e44d",
            "width": "20dp",
            "zIndex": 2
        }, {}, {});
        flxMapHolder.setDefaultUnit(kony.flex.DP);
        var imgLocation = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "20dp",
            "id": "imgLocation",
            "isVisible": true,
            "skin": "CopyslImage5",
            "src": "mappin.png",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxMapHolder.add(imgLocation);
        locationFlex.add(lblLocation, lblLocationValue, flxLine6, flxMapHolder);
        var wksFlex = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "wksFlex",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "skin": "sknFlxInVisible",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        wksFlex.setDefaultUnit(kony.flex.DP);
        var lblWKS = new kony.ui.Label({
            "id": "lblWKS",
            "isVisible": true,
            "left": "7%",
            "skin": "majortitle",
            "text": "WKS",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblWKSValue = new kony.ui.Label({
            "id": "lblWKSValue",
            "isVisible": true,
            "left": "7%",
            "skin": "CopyslLabel0a8469a64faad45",
            "text": "D7-132",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxLine7 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine7",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopysknFlxA4",
            "top": "15dp",
            "width": "86%",
            "zIndex": 2
        }, {}, {});
        flxLine7.setDefaultUnit(kony.flex.DP);
        flxLine7.add();
        wksFlex.add(lblWKS, lblWKSValue, flxLine7);
        var empFlex = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "empFlex",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "skin": "sknFlxInVisible",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        empFlex.setDefaultUnit(kony.flex.DP);
        var lblEmpType = new kony.ui.Label({
            "id": "lblEmpType",
            "isVisible": true,
            "left": "7%",
            "skin": "majortitle",
            "text": "EMP TYPE",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblEmpTypeValue = new kony.ui.Label({
            "id": "lblEmpTypeValue",
            "isVisible": true,
            "left": "7%",
            "skin": "CopyslLabel0a8469a64faad45",
            "text": "Customer Facing",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxLine8 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine8",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopysknFlxA4",
            "top": "15dp",
            "width": "86%",
            "zIndex": 2
        }, {}, {});
        flxLine8.setDefaultUnit(kony.flex.DP);
        flxLine8.add();
        empFlex.add(lblEmpType, lblEmpTypeValue, flxLine8);
        var skypeFlex = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "skypeFlex",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "sknFlxInVisible",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        skypeFlex.setDefaultUnit(kony.flex.DP);
        var lblSkype = new kony.ui.Label({
            "id": "lblSkype",
            "isVisible": true,
            "left": "7%",
            "skin": "majortitle",
            "text": "SKYPE",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblSkypeValue = new kony.ui.Label({
            "id": "lblSkypeValue",
            "isVisible": true,
            "left": "7%",
            "skin": "CopyslLabel0a8469a64faad45",
            "text": "bala.carcharla",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "50%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxLine9 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine9",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopysknFlxA4",
            "width": "86%",
            "zIndex": 2
        }, {}, {});
        flxLine9.setDefaultUnit(kony.flex.DP);
        flxLine9.add();
        var flxSkypeImageHolder = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "60%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxSkypeImageHolder",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "right": "4%",
            "skin": "CopyslFbox0a41dffe594e44d",
            "width": "20dp",
            "zIndex": 2
        }, {}, {});
        flxSkypeImageHolder.setDefaultUnit(kony.flex.DP);
        var imgSkype = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "20dp",
            "id": "imgSkype",
            "isVisible": true,
            "skin": "CopyslImage5",
            "src": "listskypeicon.png",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSkypeImageHolder.add(imgSkype);
        skypeFlex.add(lblSkype, lblSkypeValue, flxLine9, flxSkypeImageHolder);
        var addressFlex = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20%",
            "id": "addressFlex",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0.00%",
            "skin": "sknFlxInVisible",
            "top": "0.00%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        addressFlex.setDefaultUnit(kony.flex.DP);
        var lblAddress = new kony.ui.Label({
            "id": "lblAddress",
            "isVisible": true,
            "left": "7%",
            "skin": "majortitle",
            "text": "ADDRESS",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAddressValue = new kony.ui.Label({
            "id": "lblAddressValue",
            "isVisible": true,
            "left": "7%",
            "skin": "CopyslLabel0a8469a64faad45",
            "text": "Baseball, Cycling, Surfing, Birdwatching, Travelling, Photography, Golfing",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": "86%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxLine10 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine10",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopysknFlxA4",
            "top": "15dp",
            "width": "86%",
            "zIndex": 2
        }, {}, {});
        flxLine10.setDefaultUnit(kony.flex.DP);
        flxLine10.add();
        addressFlex.add(lblAddress, lblAddressValue, flxLine10);
        var timezoneFlex = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "timezoneFlex",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "skin": "sknFlxInVisible",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        timezoneFlex.setDefaultUnit(kony.flex.DP);
        var lblTimeZone = new kony.ui.Label({
            "id": "lblTimeZone",
            "isVisible": true,
            "left": "7%",
            "skin": "majortitle",
            "text": "TIME ZONE",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblTimeZoneValue = new kony.ui.Label({
            "id": "lblTimeZoneValue",
            "isVisible": true,
            "left": "7.00%",
            "skin": "CopyslLabel0a8469a64faad45",
            "text": "IST + 5.30",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxLine11 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine11",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopysknFlxA4",
            "top": "15dp",
            "width": "86%",
            "zIndex": 2
        }, {}, {});
        flxLine11.setDefaultUnit(kony.flex.DP);
        flxLine11.add();
        timezoneFlex.add(lblTimeZone, lblTimeZoneValue, flxLine11);
        var groupsFlex = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "groupsFlex",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "skin": "sknFlxInVisible",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        groupsFlex.setDefaultUnit(kony.flex.DP);
        var lblGroups = new kony.ui.Label({
            "id": "lblGroups",
            "isVisible": true,
            "left": "7%",
            "skin": "majortitle",
            "text": "GROUPS",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 10,
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblGroupsValue = new kony.ui.Label({
            "id": "lblGroupsValue",
            "isVisible": true,
            "left": "7%",
            "skin": "CopyslLabel0a8469a64faad45",
            "text": "Cycling,Trecking and Adventure",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxLine12 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine12",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopysknFlxA4",
            "top": "15dp",
            "width": "86%",
            "zIndex": 2
        }, {}, {});
        flxLine12.setDefaultUnit(kony.flex.DP);
        flxLine12.add();
        groupsFlex.add(lblGroups, lblGroupsValue, flxLine12);
        flxScrollDetails.add(callMobileFlex, callWorkFlex, emailFlex, departmentFlex, reportingToFlex, locationFlex, wksFlex, empFlex, skypeFlex, addressFlex, timezoneFlex, groupsFlex);
        var flxScrollHierarchy = new kony.ui.FlexScrollContainer({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": false,
            "clipBounds": true,
            "enableScrolling": false,
            "height": "88%",
            "horizontalScrollIndicator": true,
            "id": "flxScrollHierarchy",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "100%",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "CopysknSrclFAFAF3",
            "top": "12%",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flxScrollHierarchy.setDefaultUnit(kony.flex.DP);
        flxScrollHierarchy.add();
        flxBody.add(flxCategory, flxShadowLine, flxScrollDetails, flxScrollHierarchy);
        flxDetailsScreen.add(flxDetailsHeader, flxBody);
        var flxListScreen = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxListScreen",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopyContentMenuClosed3",
            "top": "0%",
            "width": "100%",
            "zIndex": 10
        }, {}, {});
        flxListScreen.setDefaultUnit(kony.flex.DP);
        var flxList = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80%",
            "id": "flxList",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopysknWhiteBg3",
            "top": "20%",
            "width": "100%",
            "zIndex": 3
        }, {}, {});
        flxList.setDefaultUnit(kony.flex.DP);
        var flxShadowEmployeeHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxShadowEmployeeHeader",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopysknFlxShadow3",
            "top": "0%",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flxShadowEmployeeHeader.setDefaultUnit(kony.flex.DP);
        flxShadowEmployeeHeader.add();
        var flxSeg = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSeg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopyCopyslFbox028476dba872d42",
            "top": "0%",
            "width": "92%",
            "zIndex": 2
        }, {}, {});
        flxSeg.setDefaultUnit(kony.flex.DP);
        var segEmployees = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "department": "Department",
                "designation": "Designation",
                "empimage": "user_profile2.png",
                "empname": "Acker,clara",
                "lblChild": "lbl",
                "lblInvisible": "a"
            }, {
                "department": "Department",
                "designation": "Designation",
                "empimage": "user_profile2.png",
                "empname": "Acker,clara",
                "lblChild": "lbl",
                "lblInvisible": "a"
            }, {
                "department": "Department",
                "designation": "Designation",
                "empimage": "user_profile2.png",
                "empname": "Acker,clara",
                "lblChild": "lbl",
                "lblInvisible": "a"
            }],
            "groupCells": false,
            "height": "100%",
            "id": "segEmployees",
            "isVisible": false,
            "left": "0dp",
            "needPageIndicator": true,
            "onRowClick": controller.AS_Segment_d140395948414c1cb1afed9815cc7f82,
            "onTouchEnd": controller.AS_Segment_ebcc21eb5a4a48c9b9d30071b4461839,
            "onTouchMove": controller.AS_Segment_b109dcef159046b187f83e2c78fddfab,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "datacontainer",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "64646400",
            "separatorRequired": false,
            "separatorThickness": 0,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "colorflx": "colorflx",
                "datacontainer": "datacontainer",
                "department": "department",
                "designation": "designation",
                "empimage": "empimage",
                "empname": "empname",
                "flxImageHolder": "flxImageHolder",
                "flxOnline": "flxOnline",
                "lblChild": "lblChild",
                "lblInvisible": "lblInvisible"
            },
            "width": "100%",
            "zIndex": 2
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSeg.add(segEmployees);
        var lblNoSegmentDataFound = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "25%",
            "height": "8%",
            "id": "lblNoSegmentDataFound",
            "isVisible": false,
            "skin": "CopysknLgDarkText3",
            "text": "No Data Found",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "40%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxDictionary = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "99%",
            "id": "flxDictionary",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "onTouchEnd": controller.AS_FlexContainer_ic36c5dd246d4b07805c5d581ebc8538,
            "onTouchMove": controller.AS_FlexContainer_da0924c96dc94d87aed78c903237d513,
            "right": "1%",
            "skin": "CopyCopyslFbox08a955c0c95364b",
            "top": "1%",
            "width": "8%",
            "zIndex": 3
        }, {}, {});
        flxDictionary.setDefaultUnit(kony.flex.DP);
        var A = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.50%",
            "id": "A",
            "isVisible": true,
            "onClick": controller.AS_Button_a44f938cafc84a0f83fc19618902a5ef,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "A",
            "top": "0%",
            "width": "56%",
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var B = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.40%",
            "id": "B",
            "isVisible": true,
            "onClick": controller.AS_Button_gc36daea3f5c411d858be0abe1a88a84,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "B",
            "top": "3.80%",
            "width": "56%",
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var C = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.40%",
            "id": "C",
            "isVisible": true,
            "onClick": controller.AS_Button_e47c4863898a4ee6bf018c34cf35df2f,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "C",
            "top": "7.60%",
            "width": "56%",
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var D = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.40%",
            "id": "D",
            "isVisible": true,
            "onClick": controller.AS_Button_f141802cf4044f4a9180fd7699fe37fa,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "D",
            "top": "11.40%",
            "width": "56%",
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var E = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.40%",
            "id": "E",
            "isVisible": true,
            "onClick": controller.AS_Button_b1c476dbd18440e6a1777d67de0960ca,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "E",
            "top": "15.20%",
            "width": "56%",
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var F = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.40%",
            "id": "F",
            "isVisible": true,
            "onClick": controller.AS_Button_h4e508098f154a51809f98f3f4e788b7,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "F",
            "top": "19%",
            "width": "56%",
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var G = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.40%",
            "id": "G",
            "isVisible": true,
            "onClick": controller.AS_Button_bb882ac41305407b925f80aee1ad4016,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "G",
            "top": "22.80%",
            "width": "56%",
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var H = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.40%",
            "id": "H",
            "isVisible": true,
            "onClick": controller.AS_Button_f90d445c2db9421e8bf3568bb6a20290,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "H",
            "top": "26.60%",
            "width": "56%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var I = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.40%",
            "id": "I",
            "isVisible": true,
            "onClick": controller.AS_Button_b7ae3a5e6867479081871894597492c3,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "I",
            "top": "30.40%",
            "width": "56%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var J = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.40%",
            "id": "J",
            "isVisible": true,
            "onClick": controller.AS_Button_cb125acb1f66476b8a090df4f65d9c63,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "J",
            "top": "34.20%",
            "width": "56%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var K = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.40%",
            "id": "K",
            "isVisible": true,
            "onClick": controller.AS_Button_he766539a29d4040972c47cf27e02d56,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "K",
            "top": "38%",
            "width": "56%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var L = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.40%",
            "id": "L",
            "isVisible": true,
            "onClick": controller.AS_Button_ffffee2b707d42e9b917bcac6668d86f,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "L",
            "top": "41.80%",
            "width": "56%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var M = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.40%",
            "id": "M",
            "isVisible": true,
            "onClick": controller.AS_Button_c119843cf8974914875e25637691c0d5,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "M",
            "top": "45.60%",
            "width": "56%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var N = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.40%",
            "id": "N",
            "isVisible": true,
            "onClick": controller.AS_Button_d91e222b5bbc4792804937fa2502a3c9,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "N",
            "top": "49.40%",
            "width": "56%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var O = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.40%",
            "id": "O",
            "isVisible": true,
            "onClick": controller.AS_Button_d8c1379b99b94bd8adb398571c2b6f3a,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "O",
            "top": "53.20%",
            "width": "56%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var P = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.40%",
            "id": "P",
            "isVisible": true,
            "onClick": controller.AS_Button_ddff7bf584d246349a3bdd4d4e826e4c,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "P",
            "top": "57%",
            "width": "56%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var Q = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.40%",
            "id": "Q",
            "isVisible": true,
            "onClick": controller.AS_Button_f61cdf0d66704d71b8dcf4808cac550f,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "Q",
            "top": "60.80%",
            "width": "56%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var R = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.40%",
            "id": "R",
            "isVisible": true,
            "onClick": controller.AS_Button_h37209289a1448cab775e97bce8531c1,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "R",
            "top": "64.60%",
            "width": "56%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var S = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.40%",
            "id": "S",
            "isVisible": true,
            "onClick": controller.AS_Button_dbd5d8f3e8844dfc9719c3116b719b14,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "S",
            "top": "68.40%",
            "width": "56%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var T = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.40%",
            "id": "T",
            "isVisible": true,
            "onClick": controller.AS_Button_d9a8e8298539455093bba8e0664371cf,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "T",
            "top": "72.20%",
            "width": "56%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var U = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.40%",
            "id": "U",
            "isVisible": true,
            "onClick": controller.AS_Button_fe9011621606438281d3deece3974581,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "U",
            "top": "76%",
            "width": "56%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var V = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.40%",
            "id": "V",
            "isVisible": true,
            "onClick": controller.AS_Button_j3534a2dfdb44b27bd7c27e665747f8b,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "V",
            "top": "79.80%",
            "width": "56%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var W = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.40%",
            "id": "W",
            "isVisible": true,
            "onClick": controller.AS_Button_b964387da3b74f9d989fab852d2c9cd2,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "W",
            "top": "83.60%",
            "width": "56%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var X = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.40%",
            "id": "X",
            "isVisible": true,
            "onClick": controller.AS_Button_e50d94976f554145bfd3d183596795dc,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "X",
            "top": "87.40%",
            "width": "56%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var Y = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.40%",
            "id": "Y",
            "isVisible": true,
            "onClick": controller.AS_Button_e6a5d3c637b14288b211b966c135b494,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "Y",
            "top": "91.20%",
            "width": "56%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var Z = new kony.ui.Button({
            "focusSkin": "Copysortbuttonskin3",
            "height": "3.40%",
            "id": "Z",
            "isVisible": true,
            "onClick": controller.AS_Button_bc35cc64df4341e9b79d189d1bf90413,
            "right": "6%",
            "skin": "Copysortbuttonskin3",
            "text": "Z",
            "top": "95%",
            "width": "56%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDictionary.add(A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z);
        var flxTop = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "0.10%",
            "id": "flxTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "99%",
            "skin": "slFbox",
            "top": "1%",
            "width": "0.10%",
            "zIndex": 10
        }, {}, {});
        flxTop.setDefaultUnit(kony.flex.DP);
        var topLabel = new kony.ui.Label({
            "id": "topLabel",
            "isVisible": true,
            "left": "0%",
            "skin": "slLabel",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 15
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxTop.add(topLabel);
        var flxBottom = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "0.10%",
            "id": "flxBottom",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "99%",
            "skin": "slFbox",
            "top": "99%",
            "width": "1%",
            "zIndex": 10
        }, {}, {});
        flxBottom.setDefaultUnit(kony.flex.DP);
        var bottomLabel = new kony.ui.Label({
            "id": "bottomLabel",
            "isVisible": true,
            "left": "0%",
            "skin": "slLabel",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 15
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxBottom.add(bottomLabel);
        var lblDisplaySelectedIndex = new kony.ui.Label({
            "height": "9%",
            "id": "lblDisplaySelectedIndex",
            "isVisible": false,
            "right": "9%",
            "skin": "sknDragButtonFlex",
            "text": "A",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "130dp",
            "width": "13%",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxList.add(flxShadowEmployeeHeader, flxSeg, lblNoSegmentDataFound, flxDictionary, flxTop, flxBottom, lblDisplaySelectedIndex);
        var flxHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20%",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopysknDarkHeaderBg3",
            "top": "0%",
            "width": "100%",
            "zIndex": 3
        }, {}, {});
        flxHeader.setDefaultUnit(kony.flex.DP);
        var lblHeader = new kony.ui.Label({
            "centerX": "50%",
            "height": "40%",
            "id": "lblHeader",
            "isVisible": true,
            "skin": "Copydirectoryheadlabelskin3",
            "text": "Directory",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "6%",
            "width": "65%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxMenu = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "37%",
            "id": "flxMenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopyCopyslFbox028476dba872d42",
            "top": "5%",
            "width": "12%",
            "zIndex": 3
        }, {}, {});
        flxMenu.setDefaultUnit(kony.flex.DP);
        var btnMenu = new kony.ui.Button({
            "focusSkin": "CopyCopysknBtnInVisible3",
            "height": "100%",
            "id": "btnMenu",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.Action14925129629343078,
            "skin": "CopyCopysknBtnInVisible3",
            "top": "0%",
            "width": "100%",
            "zIndex": 3
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgMenu = new kony.ui.Image2({
            "bottom": 0,
            "centerX": "50%",
            "centerY": "50%",
            "height": "24dp",
            "id": "imgMenu",
            "isVisible": true,
            "skin": "CopyCopyslImage06996663fcd5144",
            "src": "menu_icon.png",
            "width": "24dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxMenu.add(btnMenu, imgMenu);
        var flxFilter = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "37%",
            "id": "flxFilter",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "88%",
            "skin": "CopyCopyslFbox028476dba872d42",
            "top": "5%",
            "width": "12%",
            "zIndex": 3
        }, {}, {});
        flxFilter.setDefaultUnit(kony.flex.DP);
        var btnFilter = new kony.ui.Button({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "CopyCopysknBtnInVisible3",
            "height": "100%",
            "id": "btnFilter",
            "isVisible": true,
            "onClick": controller.Action14925129629812734,
            "skin": "CopyCopysknBtnInVisible3",
            "width": "100%",
            "zIndex": 3
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgFilter = new kony.ui.Image2({
            "bottom": 0,
            "centerX": "50%",
            "centerY": "50%",
            "height": "24dp",
            "id": "imgFilter",
            "isVisible": true,
            "skin": "CopyCopyslImage06996663fcd5144",
            "src": "filter_icon.png",
            "width": "24dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxFilter.add(btnFilter, imgFilter);
        var flxSearch = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "26%",
            "id": "flxSearch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "0%",
            "skin": "CopyCopyslFbox028476dba872d42",
            "top": "56%",
            "width": "90.80%",
            "zIndex": 1
        }, {}, {});
        flxSearch.setDefaultUnit(kony.flex.DP);
        var tbxSearch = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "Copyrealsearch3",
            "height": "100%",
            "id": "tbxSearch",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "onDone": controller.AS_TextField_e7676e918ee146ff9bf1b138c800a3e5,
            "onTextChange": controller.AS_TextField_i9a877deb8e843c3abff53f5fa1a7f9b,
            "onTouchStart": controller.AS_TextField_f5acbae24da54338aedcc6ebc18c150f,
            "secureTextEntry": false,
            "skin": "Copyrealsearch3",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0%",
            "width": "100%",
            "zIndex": 5
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "Copyrealsearch3",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        });
        var imgSearchCenter = new kony.ui.Image2({
            "centerY": "50%",
            "height": "17dp",
            "id": "imgSearchCenter",
            "isVisible": true,
            "left": "43%",
            "skin": "CopyCopyslImage06996663fcd5144",
            "src": "search.png",
            "width": "17dp",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblSearchPlaceholder = new kony.ui.Label({
            "centerY": "50%",
            "height": "90%",
            "id": "lblSearchPlaceholder",
            "isVisible": true,
            "left": "49%",
            "skin": "CopyCopyslLabel3",
            "text": "Search",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "20%",
            "zIndex": 3
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgSearchLeft = new kony.ui.Image2({
            "centerY": "50%",
            "height": "17dp",
            "id": "imgSearchLeft",
            "isVisible": false,
            "left": "3%",
            "skin": "CopyCopyslImage06996663fcd5144",
            "src": "search.png",
            "width": "17dp",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnSearchCancel = new kony.ui.Button({
            "centerY": "50%",
            "focusSkin": "Copyendcancel3",
            "height": "90%",
            "id": "btnSearchCancel",
            "isVisible": false,
            "onClick": controller.AS_Button_j5b2fbc39ad44969adfb79a4d16136e3,
            "right": "0%",
            "skin": "Copyendcancel3",
            "text": "Cancel",
            "width": "16%",
            "zIndex": 4
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxSearchBg = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSearchBg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopysknSearchInactive3",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSearchBg.setDefaultUnit(kony.flex.DP);
        flxSearchBg.add();
        flxSearch.add(tbxSearch, imgSearchCenter, lblSearchPlaceholder, imgSearchLeft, btnSearchCancel, flxSearchBg);
        var lblSecret1 = new kony.ui.Label({
            "id": "lblSecret1",
            "isVisible": false,
            "left": "0%",
            "skin": "sknAvailable",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblSecret2 = new kony.ui.Label({
            "id": "lblSecret2",
            "isVisible": false,
            "left": "0%",
            "skin": "sknAway",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "170%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 4
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblSecret3 = new kony.ui.Label({
            "id": "lblSecret3",
            "isVisible": false,
            "left": "0%",
            "skin": "sknMeeting",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 4
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var btnSecret = new kony.ui.Button({
            "focusSkin": "slButtonGlossRed",
            "height": "0%",
            "id": "btnSecret",
            "isVisible": false,
            "left": "0%",
            "skin": "sknAssignBeforeAfter",
            "top": "0%",
            "width": "0%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblSecret4 = new kony.ui.Label({
            "id": "lblSecret4",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLblColor0eda21b8648854f",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 4
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxHeader.add(lblHeader, flxMenu, flxFilter, flxSearch, lblSecret1, lblSecret2, lblSecret3, btnSecret, lblSecret4);
        flxListScreen.add(flxList, flxHeader);
        listdetail.add(flxDetailsScreen, flxListScreen);
        return listdetail;
    }
})