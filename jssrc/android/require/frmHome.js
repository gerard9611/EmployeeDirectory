define("frmHome", function() {
    return function(controller) {
        function addWidgetsfrmHome() {
            this.setDefaultUnit(kony.flex.DP);
            var listdetail = new com.konymp.listdetail({
                "clipBounds": true,
                "height": "100%",
                "id": "listdetail",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            listdetail.searchList = true;
            listdetail.defaultProfile = "profile.png";
            listdetail.defaultCover = "cover.png";
            listdetail.defaultStatus = true;
            listdetail.hideHeader = true;
            listdetail.filterClick = controller.AS_UWI_da85fea2e2d9416687843c3f50b050da;
            listdetail.menuClick = controller.AS_UWI_b5da11bbc2954bb1bcdb9d2d177d4bd8;
            var hamburger = new com.konymp.slidingmenu({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "hamburger",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "-100%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox2",
                "top": "0%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            hamburger.hamIconIsVisibility = false;
            hamburger.headingLeft = "36%";
            hamburger.headingTop = "25%";
            hamburger.profileImageLeft = "5%";
            hamburger.profileImageTop = "10%";
            hamburger.subHeadingLeft = "36%";
            hamburger.slidingMenuDirection = "\"Left\"";
            hamburger.headerAnimation = "\"Slide In\"";
            hamburger.profileImageType = "\"Circle\"";
            hamburger.footerStyle = "\"only Text\"";
            hamburger.slidingMenuSkin = "sknFlxED061525103052";
            hamburger.headingSkin = "sknLblHeaderWhiteffffff";
            hamburger.subHeadingSkin = "sknlblnunitoLightf2f2f2ffpx30";
            hamburger.menuItemTextSkin = "sknLblHeaderWhiteffffff";
            hamburger.footerTextSkin = "sknLblHeaderWhiteffffff";
            hamburger.menuItemHeaderTextSkin = "slFLabel";
            hamburger.btnClickSkin = "sknBtnTransperant";
            hamburger.callbackMode = false;
            hamburger.onClickFooter = controller.AS_UWI_fe8d1bcec82847dca2f1e10f8a6bdc0c;
            var filterMenu = new com.konymp.slidingmenu({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "filterMenu",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "100%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox2",
                "top": "0%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            filterMenu.btnClickHeight = "45%";
            filterMenu.btnClickIsVisible = false;
            filterMenu.btnClickLeft = "75%";
            filterMenu.btnClickText = "Apply";
            filterMenu.btnClickTop = "25%";
            filterMenu.btnClickWidth = "20%";
            filterMenu.flxBotomIsVisible = false;
            filterMenu.hamIconIsVisibility = false;
            filterMenu.headerFlexHeight = "10%";
            filterMenu.headingLeft = "10%";
            filterMenu.headingText = "Filter By";
            filterMenu.headingTop = "20%";
            filterMenu.menuControlFlexHeight = "85%";
            filterMenu.menuControlFlexTop = "10%";
            filterMenu.profileImageIsVisible = false;
            filterMenu.subHeadingTextIsVisible = false;
            filterMenu.slidingMenuDirection = "\"Left\"";
            filterMenu.headerAnimation = "\"Slide In\"";
            filterMenu.profileImageType = "\"Circle\"";
            filterMenu.footerStyle = "\"No Footer\"";
            filterMenu.slidingMenuSkin = "sknFlxED061525103052";
            filterMenu.headingSkin = "sknLblffb300";
            filterMenu.subHeadingSkin = "sknlblnunitoLightf2f2f2ffpx30";
            filterMenu.menuItemTextSkin = "sknLblHeaderWhiteffffff";
            filterMenu.footerTextSkin = "sknLblHeaderWhiteffffff";
            filterMenu.menuItemHeaderTextSkin = "sknLblHeaderWhiteffffff";
            filterMenu.btnClickSkin = "sknBtn061525ffb300";
            filterMenu.callbackMode = true;
            filterMenu.onFilterButtonClick = controller.AS_UWI_cc3b379ada4b4708b375128acc80c702;
            filterMenu.onItemClick = controller.AS_UWI_b0ea72b5d50048c88a9789ec83e6d462;
            var flxCover = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCover",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "onClick": controller.AS_FlexContainer_g8ad215c2f794dd9a6407dae9e8e89f7,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCover.setDefaultUnit(kony.flex.DP);
            flxCover.add();
            this.add(listdetail, hamburger, filterMenu, flxCover);
        };
        return [{
            "addWidgets": addWidgetsfrmHome,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": false,
            "id": "frmHome",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_d3b5a4758fe7432481245fe05b75fe9d,
            "skin": "CopyslForm0h5841b36ffce4b"
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