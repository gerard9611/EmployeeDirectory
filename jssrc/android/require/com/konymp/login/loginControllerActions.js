define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_756224b40cef418880948b2a5b22416e: function AS_FlexContainer_756224b40cef418880948b2a5b22416e(eventobject) {
        var self = this;
        this.invokeTouchID();
    },
    AS_Image_7c438bbff6ee4ce7924f0b3cf2cf1682: function AS_Image_7c438bbff6ee4ce7924f0b3cf2cf1682(eventobject, x, y) {
        var self = this;
        kony.store.setItem("inputType", "social");
        this.invokeIdentityService("reusableFacebookLogin");
    },
    AS_Image_5065bad199454e618a803d8865c8171b: function AS_Image_5065bad199454e618a803d8865c8171b(eventobject, x, y) {
        var self = this;
        kony.store.setItem("inputType", "social");
        this.invokeIdentityService("reusableLinkedinLogin");
    },
    AS_Image_aa93ed974ebb4c78a4637108887cdc72: function AS_Image_aa93ed974ebb4c78a4637108887cdc72(eventobject, x, y) {
        var self = this;
        kony.store.setItem("inputType", "social");
        this.invokeIdentityService("reusableGoogleLogin");
    },
    AS_TextField_5a16314dc3fb4fb887964b1cb2f03620: function AS_TextField_5a16314dc3fb4fb887964b1cb2f03620(eventobject, changedtext) {
        var self = this;
        this.onDoneCredentials(this.view.lblUsername);
    },
    AS_TextField_1a7d6bedd647415c8b3d5caee9b91fdf: function AS_TextField_1a7d6bedd647415c8b3d5caee9b91fdf(eventobject, changedtext) {
        var self = this;
        this.onDoneCredentials(this.view.lblPassword);
    },
    AS_FlexContainer_9b53fb48875d448dad4f525d0393d1a0: function AS_FlexContainer_9b53fb48875d448dad4f525d0393d1a0(eventobject) {
        var self = this;
        this.remembermeSelection();
    },
    AS_Label_b9eadf2e68d14ae8bb613561db3fa651: function AS_Label_b9eadf2e68d14ae8bb613561db3fa651(eventobject, x, y) {
        var self = this;
        if (this.view.lblPassword.top == "23%") this.invokeTouch(this.view.lblPassword, "16%");
    },
    AS_Button_78bc54b534c94ce3a03fa5218e49881f: function AS_Button_78bc54b534c94ce3a03fa5218e49881f(eventobject) {
        var self = this;
        this.invokeButtonClick();
    },
    AS_Label_d7e2b79c3ff749069b594305f5393d4e: function AS_Label_d7e2b79c3ff749069b594305f5393d4e(eventobject, x, y) {
        var self = this;
        if (this.view.lblUsername.top == "6%") {
            this.invokeTouch(this.view.lblUsername, "-1%");
        }
    },
    AS_Button_142315c475e740159c1e55d92260a002: function AS_Button_142315c475e740159c1e55d92260a002(eventobject) {
        var self = this;
        this.touchEnableAction();
    },
    AS_Button_098e189ae6a341f7bc9f2060f3f6d37c: function AS_Button_098e189ae6a341f7bc9f2060f3f6d37c(eventobject) {
        var self = this;
        this.touchCancelAction();
    },
    AS_Button_9ef0645d4d164d2ab3eea2c6859676eb: function AS_Button_9ef0645d4d164d2ab3eea2c6859676eb(eventobject) {
        var self = this;
        this.cancelTouchID();
    },
    AS_Image_73da2dfedd3a4f2d844b131345ccb639: function AS_Image_73da2dfedd3a4f2d844b131345ccb639(eventobject, x, y) {
        var self = this;
        this.view.flxIdentity.isVisible = false;
        this.view.brwsrIdentity.htmlString = "<html>Please wait !!</html>"
    }
});