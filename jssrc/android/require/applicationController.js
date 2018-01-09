define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.konymp.listdetail", "listdetail", "listdetailController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "listdetail",
            "name": "com.konymp.listdetail"
        });
        kony.mvc.registry.add("com.konymp.login", "login", "loginController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "login",
            "name": "com.konymp.login"
        });
        kony.mvc.registry.add("com.konymp.slidingmenu", "slidingmenu", "slidingmenuController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "slidingmenu",
            "name": "com.konymp.slidingmenu"
        });
        kony.mvc.registry.add("datacontainer", "datacontainer", "datacontainerController");
        kony.mvc.registry.add("frmHome", "frmHome", "frmHomeController");
        kony.mvc.registry.add("frmLogin", "frmLogin", "frmLoginController");
        setAppBehaviors();
        if (typeof startBackgroundWorker != "undefined") {
            startBackgroundWorker();
        }
    },
    postAppInitCallBack: function() {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmLogin").navigate();
    }
});