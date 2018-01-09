define(function() {
    return function(controller) {
        var slidingmenu = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "slidingmenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "postShow": controller.AS_FlexContainer_b271a3e56d034cdaa3e3aea0d15899a3,
            "skin": "CopyslFbox2",
            "top": "0dp",
            "width": "100%",
            "zIndex": 99
        }, {}, {});
        slidingmenu.setDefaultUnit(kony.flex.DP);
        var flxMainSlidingMenu = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainSlidingMenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "-20%",
            "onClick": controller.AS_FlexContainer_h3185d7a0a644d3cab78484054d42a48,
            "skin": "sknFlx6342a5SlidingMenu",
            "top": "0dp",
            "width": "100%",
            "zIndex": 3
        }, {}, {});
        flxMainSlidingMenu.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "23%",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20%",
            "skin": "CopyslFbox2",
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, {}, {});
        flxHeader.setDefaultUnit(kony.flex.DP);
        var flxImage = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80dp",
            "id": "flxImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "15%",
            "onClick": controller.Action14925129644515830,
            "skin": "CopyslFbox2",
            "top": "5%",
            "width": "80dp",
            "zIndex": 1
        }, {}, {});
        flxImage.setDefaultUnit(kony.flex.PERCENTAGE);
        var imgHeader = new kony.ui.Image2({
            "height": "100%",
            "id": "imgHeader",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyslImage1",
            "src": "profile.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImage.add(imgHeader);
        var lblHeaderText1 = new kony.ui.Label({
            "id": "lblHeaderText1",
            "isVisible": true,
            "left": "48%",
            "skin": "sknLblNunitof2f2f2ff",
            "text": "Kony",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "30%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblHeaderText2 = new kony.ui.Label({
            "id": "lblHeaderText2",
            "isVisible": true,
            "left": "48%",
            "skin": "sknlblnunitoLightf2f2f2ffpx30",
            "text": "admin@kony.com",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "42%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var btnClick = new kony.ui.Button({
            "focusSkin": "btnTranslucent",
            "height": "40%",
            "id": "btnClick",
            "isVisible": false,
            "left": "70%",
            "onClick": controller.Action14925129644983977,
            "skin": "sknBtnTransperant",
            "text": "Click",
            "top": "35%",
            "width": "20%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxHeader.add(flxImage, lblHeaderText1, lblHeaderText2, btnClick);
        var flxMenuControl = new kony.ui.FlexScrollContainer({
            "allowHorizontalBounce": true,
            "allowVerticalBounce": true,
            "bounces": false,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "68%",
            "horizontalScrollIndicator": true,
            "id": "flxMenuControl",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20%",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "top": "23%",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMenuControl.setDefaultUnit(kony.flex.PERCENTAGE);
        flxMenuControl.add();
        var flxBotom = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "2%",
            "clipBounds": true,
            "height": "7%",
            "id": "flxBotom",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20%",
            "onClick": controller.Action14925129645449576,
            "skin": "CopyslFbox2",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxBotom.setDefaultUnit(kony.flex.DP);
        var imgFooter = new kony.ui.Image2({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgFooter",
            "isVisible": true,
            "left": "7%",
            "skin": "CopyslImage1",
            "src": "pageondot.png",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var textFooter = new kony.ui.Label({
            "centerY": "50%",
            "id": "textFooter",
            "isVisible": true,
            "left": "2%",
            "skin": "sknlblnunitoLightf2f2f2ffpx30",
            "text": "Logout",
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
        flxBotom.add(imgFooter, textFooter);
        flxMainSlidingMenu.add(flxHeader, flxMenuControl, flxBotom);
        var flxHamParent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxHamParent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "onClick": controller.AS_FlexContainer_g43ff146cbab451fa8ee6e2c17ad845a,
            "skin": "CopyslFbox2",
            "top": "0%",
            "width": "50dp",
            "zIndex": 4
        }, {}, {});
        flxHamParent.setDefaultUnit(kony.flex.DP);
        var imgHamIcon = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "25dp",
            "id": "imgHamIcon",
            "isVisible": true,
            "skin": "CopyslImage1",
            "src": "menu_icon.png",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgHamIconClose = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "25dp",
            "id": "imgHamIconClose",
            "isVisible": false,
            "src": "close_icon.png",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxHamParent.add(imgHamIcon, imgHamIconClose);
        var flxCover = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCover",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "onClick": controller.AS_FlexContainer_ecf62113686040c3a56a151c44a6915a,
            "skin": "flxCoverSkin",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxCover.setDefaultUnit(kony.flex.DP);
        var flxsknroundedCorner = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxsknroundedCorner",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "SlidingMenuRoundedCornerImage",
            "top": "0dp",
            "width": "1dp",
            "zIndex": 1
        }, {}, {});
        flxsknroundedCorner.setDefaultUnit(kony.flex.DP);
        flxsknroundedCorner.add();
        var flxskncircle = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxskncircle",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "skin": "SlidingMenuCircleImage",
            "top": "10dp",
            "width": "1dp",
            "zIndex": 1
        }, {}, {});
        flxskncircle.setDefaultUnit(kony.flex.DP);
        flxskncircle.add();
        var flxfocus = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxfocus",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "skin": "flxfocusSkin",
            "top": "10dp",
            "width": "1dp",
            "zIndex": 1
        }, {}, {});
        flxfocus.setDefaultUnit(kony.flex.DP);
        flxfocus.add();
        var lbl34px = new kony.ui.Label({
            "id": "lbl34px",
            "isVisible": false,
            "left": "66dp",
            "skin": "sknlblnunitoLightf2f2f2ffpx34",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "217dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblnunito = new kony.ui.Label({
            "id": "lblnunito",
            "isVisible": false,
            "left": "76dp",
            "skin": "sknlblnunito",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "227dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgChevron = new kony.ui.Image2({
            "height": "1dp",
            "id": "imgChevron",
            "isVisible": false,
            "left": "73dp",
            "skin": "CopyslImage1",
            "src": "chevron_right.png",
            "top": "244dp",
            "width": "1dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxCover.add(flxsknroundedCorner, flxskncircle, flxfocus, lbl34px, lblnunito, imgChevron);
        var flexSecret = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "0%",
            "id": "flexSecret",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "42dp",
            "skin": "sknFlxED061525103052",
            "top": "114dp",
            "width": "0%",
            "zIndex": 4
        }, {}, {});
        flexSecret.setDefaultUnit(kony.flex.DP);
        flexSecret.add();
        var lblSecret1 = new kony.ui.Label({
            "id": "lblSecret1",
            "isVisible": false,
            "left": "81dp",
            "skin": "sknLblHeaderWhiteffffff",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "55dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 4
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
            "left": "76dp",
            "skin": "sknLblffb300",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "106dp",
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
            "focusSkin": "CopyslButtonGlossRed",
            "height": "50dp",
            "id": "btnSecret",
            "isVisible": false,
            "left": "57dp",
            "skin": "sknBtn061525ffb300",
            "text": "Button",
            "top": "113dp",
            "width": "260dp",
            "zIndex": 4
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        slidingmenu.add(flxMainSlidingMenu, flxHamParent, flxCover, flexSecret, lblSecret1, lblSecret2, btnSecret);
        return slidingmenu;
    }
})