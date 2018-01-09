define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_3f4759b1cb7a4fb98713ae4f20b21a3c: function AS_FlexContainer_3f4759b1cb7a4fb98713ae4f20b21a3c(eventobject) {
        var self = this;
        this.invokeTouchID();
    },
    AS_FlexContainer_e9ad4a95e2c143fc9b7482817c7c021c: function AS_FlexContainer_e9ad4a95e2c143fc9b7482817c7c021c(eventobject) {
        var self = this;
        kony.store.setItem("inputType", "social");
        this.invokeIdentityService("reusableFacebookLogin");
    },
    AS_FlexContainer_8aa71a407d0741f1856cc1a46f951780: function AS_FlexContainer_8aa71a407d0741f1856cc1a46f951780(eventobject) {
        var self = this;
        kony.store.setItem("inputType", "social");
        this.invokeIdentityService("reusableLinkedinLogin");
    },
    AS_FlexContainer_a7dae437cf8a4c72b4850fadd8a8a349: function AS_FlexContainer_a7dae437cf8a4c72b4850fadd8a8a349(eventobject) {
        var self = this;
        kony.store.setItem("inputType", "social");
        this.invokeIdentityService("reusableGoogleLogin");
    },
    AS_FlexContainer_87de587aa5364f8e8395977ec9119d02: function AS_FlexContainer_87de587aa5364f8e8395977ec9119d02(eventobject) {
        var self = this;
        kony.store.setItem("inputType", "social");
        this.invokeIdentityService("reusableOffice365Login");
    },
    AS_TextField_addb224a01cd4b28a13b24b70471fed3: function AS_TextField_addb224a01cd4b28a13b24b70471fed3(eventobject, changedtext) {
        var self = this;
        this.onDoneCredentials(this.view.lblUsername);
    },
    AS_TextField_0a3b861b491744a88711ddf9aafda4c2: function AS_TextField_0a3b861b491744a88711ddf9aafda4c2(eventobject, changedtext) {
        var self = this;
        this.onDoneCredentials(this.view.lblPassword);
    },
    AS_FlexContainer_d0aab5b4acc04152a0ec450e15e772b5: function AS_FlexContainer_d0aab5b4acc04152a0ec450e15e772b5(eventobject) {
        var self = this;
        this.remembermeSelection();
    },
    AS_Button_d3d819d11cfd4f57995f9bdd5d8913e2: function AS_Button_d3d819d11cfd4f57995f9bdd5d8913e2(eventobject) {
        var self = this;
        this.invokeButtonClick();
    },
    AS_FlexContainer_652bd46dc9544e8c8d52115b75f0d1dd: function AS_FlexContainer_652bd46dc9544e8c8d52115b75f0d1dd(eventobject) {
        var self = this;
        if (this.view.lblUsername.top == "6%") {
            this.view.flxLblUsername.isVisible = false;
            this.invokeTouch(this.view.lblUsername, "-1%");
        }
        this.view.forceLayout();
    },
    AS_FlexContainer_72686f4fb8d94fd69846952b47579bce: function AS_FlexContainer_72686f4fb8d94fd69846952b47579bce(eventobject) {
        var self = this;
        if (this.view.lblPassword.top == "23%") {
            this.view.flxLblPassword.isVisible = false;
            this.invokeTouch(this.view.lblPassword, "16%");
        }
        this.view.forceLayout();
    },
    AS_Button_bb891907fa294fc8b937c8dd200d86f6: function AS_Button_bb891907fa294fc8b937c8dd200d86f6(eventobject) {
        var self = this;
        this.touchEnableAction();
    },
    AS_Button_2ffefbe5a81e478fb83023f6f0fe51df: function AS_Button_2ffefbe5a81e478fb83023f6f0fe51df(eventobject) {
        var self = this;
        this.touchCancelAction();
    },
    AS_Button_2d63d9a7737a4d2b92bce31368476d66: function AS_Button_2d63d9a7737a4d2b92bce31368476d66(eventobject) {
        var self = this;
        this.cancelTouchID();
    },
    AS_FlexContainer_025fdba8604048b6b79a557ffde49c78: function AS_FlexContainer_025fdba8604048b6b79a557ffde49c78(eventobject) {
        var self = this;
        this.view.flxIdentity.isVisible = false;
        this.view.brwsrIdentity.htmlString = "<html>Please wait !!</html>"
    }
});