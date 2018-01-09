define(function() {
    var controller = require("com/konymp/listdetail/userlistdetailController");
    var actions = require("com/konymp/listdetail/listdetailControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "flxDictionaryVisible", function(val) {
            this.view.flxDictionary.isVisible = val;
        });
        defineGetter(this, "flxDictionaryVisible", function() {
            return this.view.flxDictionary.isVisible;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.Action14925129629343078 = function() {
        if (this.menuClick) {
            this.menuClick.apply(this, arguments);
        }
    }
    controller.Action14925129629812734 = function() {
        if (this.filterClick) {
            this.filterClick.apply(this, arguments);
        }
    }
    return controller;
});