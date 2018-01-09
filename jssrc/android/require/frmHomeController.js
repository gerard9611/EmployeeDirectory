define({
    "onNavigated": function(context) {
        this.flag = 0;
    },
    "animation": function(scaleX, scaleY, left, flag) {
        var defaultImage = kony.ui.makeAffineTransform();
        defaultImage.scale(scaleX, scaleY);
        var duration = 0.5;
        if (flag == false) {
            duration = 0;
        }
        this.view.listdetail.animate(kony.ui.createAnimation({
            100: {
                "left": left,
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "transform": defaultImage
            }
        }), {
            delay: 0,
            fillMode: kony.anim.FILL_MODE_FORWARDS,
            duration: duration
        }, {
            animationEnd: {}
        });
    },
    "menuClick": function() {
        this.animation(0.8, 0.8, "70%", true);
        this.view.hamburger.left = "0%";
        this.view.forceLayout();
    },
    "filterClick": function() {
        this.view.filterMenu.left = "20%";
        this.animation(0.8, 0.8, "-70%", true);
        this.view.forceLayout();
    },
    "listFilterClick": function() {
        this.view.hamburger.left = "-100%";
        this.view.flxCover.zIndex = 5;
        this.view.flxCover.isVisible = true;
        this.view.flxCover.left = "0%";
        this.view.flxCover.width = "20%";
        this.view.flxCover.height = "100%";
        this.view.forceLayout();
        if (!this.flag) {
            this.view.filterMenu.addMenuItems(this.view.listdetail.getData());
            this.flag = 1;
        }
        this.filterClick();
    },
    "listMenuClick": function() {
        this.view.flxCover.zIndex = 5;
        this.view.flxCover.isVisible = true;
        this.view.filterMenu.left = "100%";
        this.view.flxCover.left = "80%";
        this.view.flxCover.width = "20%";
        this.view.flxCover.height = "100%";
        this.view.forceLayout();
        var loginMenuData = [{
            text: "Directory",
            src: "selection.png",
            callback: this.edclick.bind(this)
        }, {
            text: "Colleagues",
            src: "selection.png",
            callback: function() {
                alert("Colleagues");
            }
        }, {
            text: "Messages",
            src: "selection.png",
            callback: function() {
                alert("Messages");
            }
        }, {
            text: "Events",
            src: "selection.png",
            callback: function() {
                alert("Events");
            }
        }, {
            text: "Settings",
            src: "selection.png",
            callback: function() {
                alert("Settings");
            }
        }];
        this.view.hamburger.addMenuItems(loginMenuData);
        this.menuClick();
    },
    "edclick": function() {
        this.view.hamburger.left = "-100%";
        this.animation(1, 1, "0%", true);
        this.view.forceLayout();
    },
    "flxCoverOnClick": function() {
        if (this.view.listdetail.left == "-70%" || this.view.listdetail.left == "70%") {
            if (this.view.hamburger.left == "0%") {
                this.view.hamburger.left = "-100%";
                this.animation(1, 1, "0%", true);
                this.view.forceLayout();
                this.view.flxCover.isVisible = false;
            } else if (this.view.filterMenu.left == "20%") {
                this.view.filterMenu.left = "100%";
                this.animation(1, 1, "0%", true);
                this.view.forceLayout();
                this.view.flxCover.isVisible = false;
            }
        }
    },
    "AS_UWI_b5da11bbc2954bb1bcdb9d2d177d4bd8": function AS_UWI_b5da11bbc2954bb1bcdb9d2d177d4bd8(eventobject) {
        var self = this;
        this.listMenuClick();
    },
    "AS_UWI_da85fea2e2d9416687843c3f50b050da": function AS_UWI_da85fea2e2d9416687843c3f50b050da(eventobject) {
        var self = this;
        this.listFilterClick();
    },
    "AS_UWI_fe8d1bcec82847dca2f1e10f8a6bdc0c": function AS_UWI_fe8d1bcec82847dca2f1e10f8a6bdc0c(eventobject) {
        var self = this;
        this.menuClick();
        var nav = new kony.mvc.Navigation("frmLogin");
        nav.navigate();
    },
    "AS_UWI_cc3b379ada4b4708b375128acc80c702": function AS_UWI_cc3b379ada4b4708b375128acc80c702(eventobject) {
        var self = this;
        this.view.listdetail.filterAndSetData(this.view.filterMenu.getSelectedValues());
        this.view.flxCover.isVisible = false;
        this.animation(1, 1, "0%", true);
        this.view.filterMenu.left = "100%";
        this.view.forceLayout();
    },
    "AS_UWI_b0ea72b5d50048c88a9789ec83e6d462": function AS_UWI_b0ea72b5d50048c88a9789ec83e6d462() {
        var self = this;
        this.view.listdetail.filterAndSetData(this.view.filterMenu.getSelectedValues());
    },
    "AS_FlexContainer_g8ad215c2f794dd9a6407dae9e8e89f7": function AS_FlexContainer_g8ad215c2f794dd9a6407dae9e8e89f7(eventobject) {
        var self = this;
        this.flxCoverOnClick();
    },
    "AS_Form_d3b5a4758fe7432481245fe05b75fe9d": function AS_Form_d3b5a4758fe7432481245fe05b75fe9d(eventobject) {
        var self = this;
        this.view.hamburger.left = "-100%";
        this.view.listdetail.left = "0%";
        this.animation(1, 1, "0%", false);
        this.view.flxCover.isVisible = false;
        this.view.forceLayout();
    }
})