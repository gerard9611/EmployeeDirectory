define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_h3185d7a0a644d3cab78484054d42a48: function AS_FlexContainer_h3185d7a0a644d3cab78484054d42a48(eventobject) {
        var self = this;
        var t = '';
    },
    AS_FlexContainer_g43ff146cbab451fa8ee6e2c17ad845a: function AS_FlexContainer_g43ff146cbab451fa8ee6e2c17ad845a(eventobject) {
        var self = this;
        this.showSlidingMenu();
    },
    AS_FlexContainer_ecf62113686040c3a56a151c44a6915a: function AS_FlexContainer_ecf62113686040c3a56a151c44a6915a(eventobject) {
        var self = this;
        //this.hideSlidingMenu();
    },
    AS_FlexContainer_b271a3e56d034cdaa3e3aea0d15899a3: function AS_FlexContainer_b271a3e56d034cdaa3e3aea0d15899a3(eventobject) {
        var self = this;
        if (this._hamburgerDirection == "Left") {
            this.view.flxMainSlidingMenu.isVisible = true;
            this.view.flxMainSlidingMenu.left = "-20%";
            this.view.flxHamParent.left = "67.5%";
            this.view.imgHamIcon.setVisibility(false);
            this.view.flxCover.isVisible = true;
            this.view.forceLayout();
        } else {
            this.view.flxMainSlidingMenu.isVisible = true;
            this.view.flxMainSlidingMenu.left = "0%";
            this.view.flxHamParent.left = "20%";
            this.view.imgHamIcon.setVisibility(false);
            this.view.flxCover.isVisible = true;
            this.view.forceLayout();
        }
    }
});