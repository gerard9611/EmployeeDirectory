define(function() {
    return {
        /**
         * @function
         * @param baseConfig
         * @param layoutConfig
         * @param pspConfig
         */
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //LogInfo : new KonyLogger(kony.print, "Sliding Menu"),
        _returnData: [],
        _headerAnimationType: 'No Animation',
        _hamburgerDirection: 'Left',
        _hamburgerMenuType: 0,
        _hamburgerPosition: 0,
        _menuItemHeaderSkin: "slFLabel",
        _menuItemSkin: "slFLabel",
        _callbackMode: false,
        onShowSlidingMenu: function() {},
        onHideSlidingMenu: function() {},
        //Logic for getters/setters of custom properties
        /**
         * @function
         *
         */
        initGettersSetters: function() {
            defineSetter(this, "slidingMenuSkin", function(x) {
                kony.print("----------------------------- Setting Sliding Menu Skin Start");
                this.view.flxMainSlidingMenu.skin = x;
                kony.print("-----------------------------Setting Sliding Menu Skin End");
            });
            defineSetter(this, "callbackMode", function(x) {
                kony.print("----------------------------- Setting Callback Mode Start");
                this._callbackMode = x;
                kony.print("-----------------------------Setting Callback Mode Skin End");
            });
            defineSetter(this, "btnClickSkin", function(x) {
                kony.print("----------------------------- Setting Click Button Skin Start");
                this.view.btnClick.skin = x;
                kony.print("----------------------------- Setting Click Button Skin End");
            });
            defineSetter(this, "headingSkin", function(x) {
                kony.print("----------------------------- Setting Heading Skin Start");
                this.view.lblHeaderText1.skin = x;
                kony.print("-----------------------------Setting Heading Skin End");
            });
            defineSetter(this, "subHeadingSkin", function(x) {
                kony.print("----------------------------- Setting sub Heading Skin Start");
                this.view.lblHeaderText2.skin = x;
                kony.print("-----------------------------Setting Sub Heading Skin End");
            });
            defineSetter(this, "menuItemTextSkin", function(x) {
                kony.print("----------------------------- Setting Menu Item Text Skin Start");
                this._menuItemSkin = x;
                kony.print("-----------------------------Setting Menu Item Text Skin  End");
            });
            defineSetter(this, "menuItemHeaderTextSkin", function(x) {
                kony.print("----------------------------- Setting Menu Item Header Text Skin Start");
                this._menuItemHeaderTextSkin = x;
                kony.print("----------------------------- Setting Menu Item Heder Text Skin Stop");
            });
            defineSetter(this, "footerTextSkin", function(x) {
                kony.print("----------------------------- Setting footer Text Skin Start");
                this.view.textFooter.skin = x;
                kony.print("-----------------------------Setting footer Text Skin End");
            });
            defineSetter(this, "footerStyle", function(x) {
                kony.print("----------------------------- Setting Header Animation Start");
                switch (x.replace(/"/g, "")) {
                    case 'No Footer':
                        {
                            this.view.flxBotom.isVisible = false;
                            break;
                        }
                    case 'only Text':
                        {
                            this.view.flxBotom.isVisible = true;
                            this.view.imgFooter.isVisible = false;
                            this.view.textFooter.left = "10%";
                            this.view.textFooter.isVisible = true;
                            break;
                        }
                    case 'only Image':
                        {
                            this.view.flxBotom.isVisible = true;
                            this.view.imgFooter.left = "10%";
                            this.view.imgFooter.isVisible = true;
                            this.view.textFooter.isVisible = false;
                            break;
                        }
                    case 'Image & Text':
                        {
                            this.view.flxBotom.isVisible = true;
                            this.view.imgFooter.isVisible = true;
                            this.view.textFooter.isVisible = true;
                            break;
                        }
                }
                kony.print("-----------------------------Setting Header Animation End");
            });
            defineSetter(this, "profileImageType", function(x) {
                kony.print("----------------------------- Setting Header Animation Start");
                switch (x.replace(/"/g, "")) {
                    case 'Regular':
                        {
                            break;
                        }
                    case 'Rounded Corner':
                        {
                            this.view.flxImage.skin = "SlidingMenuRoundedCornerImage";
                            break;
                        }
                    case 'Circle':
                        {
                            this.view.flxImage.skin = "SlidingMenuCircleImage";
                        }
                }
                kony.print("-----------------------------Setting Header Animation End");
            });
            defineSetter(this, "headerAnimation", function(x) {
                kony.print("----------------------------- Setting Header Animation Start");
                this._headerAnimationType = x.replace(/"/g, "");
                kony.print("-----------------------------Setting Header Animation End");
            });
            defineSetter(this, "slidingMenuDirection", function(x) {
                kony.print("-----------------------------Setting Sliding Menu Direction Start");
                this.view.flxMainSlidingMenu.isVisible = true;
                this.view.flxMainSlidingMenu.left = "-100%";
                switch (x.replace(/"/g, "")) {
                    case 'Right':
                        {
                            this._hamburgerDirection = "Right";
                            this.view.flxMenuControl.left = "5%";
                            //this.view.flxHamParent.left = "88%";
                            this.view.flxHeader.left = "5%";
                            this.view.right = "0%";
                            this.view.left = "";
                            this.view.imgHamIcon.src = "filter_icon.png";
                            break;
                        }
                    case 'Left':
                        {
                            this._hamburgerDirection = "Left";
                            this.view.flxHamParent.left = "0%";
                            this.view.flxHeader.left = "20%";
                            this.view.imgHamIcon.src = "menu_icon.png";
                            break;
                        }
                    case 'Top':
                        {
                            this._hamburgerDirection = "Top";
                            this.view.flxHamParent.left = "0%";
                            this.view.flxMenuControl.left = "25%";
                            this.view.flxHeader.left = "0%";
                            this.view.imgHamIcon.src = "menu_icon.png";
                            break;
                        }
                    case 'Bottom':
                        {
                            this._hamburgerDirection = "Bottom";
                            this.view.flxHamParent.Top = "85%";
                            this.view.flxHeader.left = "0%";
                            break;
                        }
                }
                kony.print("-----------------------------Setting Sliding Menu Direction End");
            });
        },
        headerAnimations: function() {
            switch (this._headerAnimationType) {
                case 'No Animation':
                    {
                        break;
                    }
                case 'Zoom Out':
                    {
                        var transformObject1 = kony.ui.makeAffineTransform();
                        transformObject1.scale(0.1, 0.1);
                        var transformObject4 = kony.ui.makeAffineTransform();
                        transformObject4.scale(0.3, 0.3);
                        var transformObject2 = kony.ui.makeAffineTransform();
                        transformObject2.scale(1.1, 1.1);
                        var transformObject3 = kony.ui.makeAffineTransform();
                        transformObject3.scale(1, 1);
                        var imgAnim = kony.ui.createAnimation({
                            "0": {
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                },
                                "transform": transformObject4
                            },
                            "80": {
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                },
                                "transform": transformObject2
                            },
                            "100": {
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                },
                                "transform": transformObject3
                            }
                        });
                        var lblAnim = kony.ui.createAnimation({
                            "0": {
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                },
                                "transform": transformObject1
                            },
                            "80": {
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                },
                                "transform": transformObject2
                            },
                            "100": {
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                },
                                "transform": transformObject3
                            }
                        });
                        var animConfig1 = {
                            "delay": 0.1,
                            "iterationCount": 1,
                            "fillMode": kony.anim.FILL_MODE_FORWARDS,
                            "duration": 0.5
                        };
                        var animConfig = {
                            "delay": 0.3,
                            "iterationCount": 1,
                            "fillMode": kony.anim.FILL_MODE_FORWARDS,
                            "duration": 0.4
                        };
                        this.view.flxImage.animate(imgAnim, animConfig1);
                        animConfig.delay = 0.3;
                        this.view.lblHeaderText1.animate(lblAnim, animConfig);
                        animConfig.delay = 0.4;
                        this.view.lblHeaderText2.animate(lblAnim, animConfig);
                        break;
                    }
                case 'Slide In':
                    {
                        var imgTop = this.view.flxImage.top;
                        var lbl1Top = this.view.lblHeaderText1.top;
                        var lbl2Top = this.view.lblHeaderText2.top;
                        var animImgLeft = kony.ui.createAnimation({
                            "0": {
                                "left": this._hamburgerDirection === 'Left' ? "-" + this.view.flxImage.width : Number(this.view.flxImage.left.split("%")[0]) + 100 + "%",
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            },
                            "100": {
                                "left": this.view.flxImage.left,
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            }
                        });
                        var animLbl1Left = kony.ui.createAnimation({
                            "0": {
                                "left": this._hamburgerDirection === 'Left' ? "0%" : "100%",
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            },
                            "100": {
                                "left": this.view.lblHeaderText1.left,
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            }
                        });
                        var animLbl2Left = kony.ui.createAnimation({
                            "0": {
                                "left": this._hamburgerDirection === 'Left' ? "0%" : "100%",
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            },
                            "100": {
                                "left": this.view.lblHeaderText2.left,
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            }
                        });
                        var animImgTop = kony.ui.createAnimation({
                            "0": {
                                "top": "-100%",
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            },
                            "100": {
                                "top": imgTop,
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            },
                        });
                        var animLbl1Top = kony.ui.createAnimation({
                            "0": {
                                "top": "-50%",
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            },
                            "100": {
                                "top": lbl1Top,
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            }
                        });
                        var animLbl2Top = kony.ui.createAnimation({
                            "0": {
                                "top": "-50%",
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            },
                            "100": {
                                "top": lbl2Top,
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            }
                        });
                        var animationConfig = {
                            "delay": 0,
                            "iterationCount": 1,
                            "fillMode": kony.anim.FILL_MODE_FORWARDS,
                            "duration": 0.5
                        };
                        switch (this._hamburgerDirection) {
                            case 'Left':
                                {
                                    this.view.lblHeaderText1.animate(animLbl1Left, animationConfig, {
                                        "animationEnd": function() {}
                                    });
                                    this.view.lblHeaderText2.animate(animLbl2Left, animationConfig, {
                                        "animationEnd": function() {}
                                    });
                                    this.view.flxImage.animate(animImgLeft, animationConfig, {
                                        "animationEnd": function() {}
                                    });
                                    break;
                                }
                            case 'Right':
                                {
                                    this.view.flxImage.animate(animImgLeft, animationConfig, {
                                        "animationEnd": function() {}
                                    });
                                    this.view.lblHeaderText1.animate(animLbl1Left, animationConfig, {
                                        "animationEnd": function() {}
                                    });
                                    this.view.lblHeaderText2.animate(animLbl1Left, animationConfig, {
                                        "animationEnd": function() {}
                                    });
                                    break;
                                }
                            case 'Top':
                                {
                                    this.view.flxImage.animate(animImgTop, animationConfig, {
                                        "animationEnd": function() {}
                                    });
                                    this.view.lblHeaderText1.animate(animLbl1Top, animationConfig, {
                                        "animationEnd": function() {}
                                    });
                                    this.view.lblHeaderText2.animate(animLbl2Top, animationConfig, {
                                        "animationEnd": function() {}
                                    });
                                    break;
                                }
                            case 'Bottom':
                                {
                                    this.view.flxImage.top = Number(this.view.flxImage.top.split("%")[0]) + 100 + "%";
                                    this.view.lblHeaderText1.top = "100%";
                                    this.view.lblHeaderText2.top = "100%";
                                    this.view.flxImage.animate(animImgTop, animationConfig, {
                                        "animationEnd": function() {}
                                    });
                                    this.view.lblHeaderText1.animate(animLbl1Top, animationConfig, {});
                                    this.view.lblHeaderText2.animate(animLbl2Top, animationConfig, {});
                                    break;
                                }
                        }
                    }
            }
        },
        segmentAnimation: function() {
            try {
                var alldata = this.view.flxMenuControl.widgets();
                if (alldata === null || alldata.length === 0) {
                    return;
                }
                var animationDef = "";
                var logoutLeft = {
                    "100": {
                        "left": "20%",
                        "stepConfig": {
                            "timingFunction": kony.anim.EASE
                        }
                    }
                };
                if (this._hamburgerDirection === "Left") {
                    this.view.flxBotom.left = "-120%";
                    animationDef = {
                        "100": {
                            "left": "5%",
                            "stepConfig": {
                                "timingFunction": kony.anim.EASE
                            }
                        }
                    };
                } else if (this._hamburgerDirection === "Right") {
                    this.view.flxBotom.left = "100%";
                    logoutLeft = {
                        "100": {
                            "left": "0%",
                            "stepConfig": {
                                "timingFunction": kony.anim.EASE
                            }
                        }
                    };
                    animationDef = {
                        "100": {
                            "left": "5%",
                            "stepConfig": {
                                "timingFunction": kony.anim.EASE
                            }
                        }
                    };
                    for (var j in alldata) {
                        alldata[j].left = "100%";
                    }
                } else if (this._hamburgerDirection === "Top") {
                    this.view.flxBotom.left = "15%";
                    this.view.flxBotom.top = "-100%";
                    animationDef = {
                        "0": {
                            "top": "-3%",
                            "left": "0%",
                            "stepConfig": {
                                "timingFunction": kony.anim.EASE
                            }
                        },
                        "100": {
                            "top": "5%",
                            "left": "0%",
                            "stepConfig": {
                                "timingFunction": kony.anim.EASE
                            }
                        }
                    };
                    logoutLeft = {
                        "0": {
                            "top": "50%",
                            "stepConfig": {
                                "timingFunction": kony.anim.EASE
                            }
                        },
                        "100": {
                            "top": "88%",
                            "stepConfig": {
                                "timingFunction": kony.anim.EASE
                            }
                        }
                    };
                }
                for (var i in alldata) {
                    var animationDefObject = kony.ui.createAnimation(animationDef);
                    var animConfig = {
                        "delay": 0.07 * i,
                        "iterationCount": 1,
                        "fillMode": kony.anim.FILL_MODE_FORWARDS,
                        "duration": 0.5
                    };
                    if (alldata[i].id.indexOf("flxflxOptions") === -1) {
                        alldata[i].animate(animationDefObject, animConfig, {
                            "animationEnd": function() {}
                        });
                    } else {
                        var tmpanimconfig = animationDef;
                        tmpanimconfig["100"].left = "10%";
                        animationDefObject = kony.ui.createAnimation(tmpanimconfig);
                        alldata[i].animate(animationDefObject, animConfig, {
                            "animationEnd": function() {}
                        });
                        // alldata[i].left = "10%";
                    }
                    if (i == (alldata.length - 1)) {
                        this.view.flxBotom.animate(kony.ui.createAnimation(logoutLeft), {
                            "delay": 0.2,
                            "iterationCount": 1,
                            "fillMode": kony.anim.FILL_MODE_FORWARDS,
                            "duration": 0.5
                        }, {
                            "animationEnd": function() {
                                this.view.flxMenuControl.forceLayout();
                            }.bind(this)
                        });
                    }
                }
            } catch (e) {
                kony.print("-------------------Error Animating MenuItems" + JSON.stringify(e));
            }
        },
        /**
         * @function
         * Desc : Shows Sliding Menu
         * {inbuilt function : Not exposed to user}
         */
        showSlidingMenu: function() {
            kony.print("-----------------------------Showing Sliding Menu Start");
            if (this._hamburgerPosition === 1) {
                this.showSlidingMenu();
                return;
            }
            this._hamburgerPosition = 1;
            try {
                this.onShowSlidingMenu();
            } catch (e) {
                kony.print("-------------Error While Calling onShowSlidingMenu" + JSON.stringify(e));
            }
            this.view.width = "100%";
            this.view.height = "100%";
            this.view.flxMainSlidingMenu.isVisible = true;
            this.view.flxHamParent.onClick = function() {};
            //this.hamIconAnim(90,0,0,1,0.5,0.75);
            this.view.imgHamIcon.setVisibility(false);
            switch (this._hamburgerDirection) {
                case "Top":
                    {
                        this.view.flxMainSlidingMenu.left = "0%";
                        this.view.flxMainSlidingMenu.height = "90%";
                        this.view.flxHamParent.left = "0%";
                        this.view.flxMainSlidingMenu.animate(kony.ui.createAnimation({
                            "0": {
                                "top": "-90%",
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            },
                            "100": {
                                "top": "0%",
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            }
                        }), {
                            "delay": 0,
                            "iterationCount": 1,
                            "fillMode": kony.anim.FILL_MODE_FORWARDS,
                            "duration": 0.5
                        }, {
                            "animationEnd": function() {}
                        });
                        this.view.flxHamParent.animate(kony.ui.createAnimation({
                            "100": {
                                "top": "82%",
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            }
                        }), {
                            "delay": 0,
                            "iterationCount": 1,
                            "fillMode": kony.anim.FILL_MODE_FORWARDS,
                            "duration": 0.5
                        }, {
                            "animationEnd": function() {
                                this.view.flxCover.onClick = this.hideSlidingMenu.bind(this);
                                this.view.flxHamParent.onClick = this.hideSlidingMenu.bind(this);
                            }.bind(this),
                        });
                        break;
                    }
                case "Right":
                    {
                        this.view.flxMainSlidingMenu.left = "100%";
                        this.view.flxHamParent.left = "88%";
                        this.view.flxMainSlidingMenu.animate(kony.ui.createAnimation({
                            "100": {
                                "left": "20%",
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            }
                        }), {
                            "delay": 0,
                            "iterationCount": 1,
                            "fillMode": kony.anim.FILL_MODE_FORWARDS,
                            "duration": 0.5
                        }, {
                            "animationEnd": function() {}
                        });
                        this.view.flxHamParent.animate(kony.ui.createAnimation({
                            "100": {
                                "left": "20%",
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            }
                        }), {
                            "delay": 0,
                            "iterationCount": 1,
                            "fillMode": kony.anim.FILL_MODE_FORWARDS,
                            "duration": 0.5
                        }, {
                            "animationEnd": function() {
                                this.view.flxCover.onClick = this.hideSlidingMenu.bind(this);
                                this.view.flxHamParent.onClick = this.hideSlidingMenu.bind(this);
                            }.bind(this),
                        });
                        break;
                    }
                case "Left":
                    {
                        this.view.flxMainSlidingMenu.left = "-100%";
                        this.view.flxHamParent.left = "0%";
                        this.view.flxMainSlidingMenu.animate(kony.ui.createAnimation({
                            "100": {
                                "left": "-20%",
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            }
                        }), {
                            "delay": 0,
                            "iterationCount": 1,
                            "fillMode": kony.anim.FILL_MODE_FORWARDS,
                            "duration": 0.5
                        }, {
                            "animationEnd": function() {}
                        });
                        this.view.flxHamParent.animate(kony.ui.createAnimation({
                            "100": {
                                "left": "67.5%",
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            }
                        }), {
                            "delay": 0,
                            "iterationCount": 1,
                            "fillMode": kony.anim.FILL_MODE_FORWARDS,
                            "duration": 0.5
                        }, {
                            "animationEnd": function() {
                                this.view.flxCover.onClick = this.hideSlidingMenu.bind(this);
                                this.view.flxHamParent.onClick = this.hideSlidingMenu.bind(this);
                            }.bind(this),
                        });
                        break;
                    }
            }
            this.headerAnimations();
            this.segmentAnimation();
            this.view.flxCover.isVisible = true;
            this.view.flxCover.animate(kony.ui.createAnimation({
                "0": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "backgroundColor": "29262900",
                    "opacity": 0
                },
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "backgroundColor": "292629",
                    "opacity": 0.75
                }
            }), {
                "delay": 0.4,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": function() {}
            });
            /*	var i;
          	for(i=0; i<this.view.flxMenuControl.widgets().length; i++){
              this.view.flxMenuControl.widgets()[i].animate(
    			kony.ui.createAnimation({
        		  "100": {
            	    "left": "0%",
            		"stepConfig": {
                	  "timingFunction": kony.anim.EASE
            		}
        		  }
    			}), {
        		  "delay": 0.05*(i+1),
        		  "iterationCount": 1,
        		  "fillMode": kony.anim.FILL_MODE_FORWARDS,
        		  "duration": 1
    			}, {
        		  "animationEnd": function(){}
    		  });
            } */
            kony.print("-----------------------------Showing Sliding End");
        },
        /**
         * @function
         * Desc : onShowing Sliding Menu
         * {inbuilt function}
         */
        hideSlidingMenu: function() {
            this.view.flxHamParent.onClick = function() {};
            this.view.flxCover.onClick = function() {};
            this._hamburgerPosition = 0;
            try {
                this.onHideSlidingMenu();
            } catch (e) {
                kony.print("-------------Error While Calling onShowSlidingMenu");
            }
            //this.hamIconAnim(0,1,1,0,0.75,0.5);
            var callback = function() {
                var alldata = this.view.flxMenuControl.widgets();
                for (var i in alldata) {
                    if (alldata[i].id.indexOf("flxflxOptions") === -1) {
                        if (alldata[i].widgets().length === 3) {
                            var transformObject = kony.ui.makeAffineTransform();
                            transformObject.rotate(0);
                            alldata[i].widgets()[2].animate(kony.ui.createAnimation({
                                "100": {
                                    "stepConfig": {
                                        "timingFunction": kony.anim.EASE
                                    },
                                    "transform": transformObject
                                }
                            }), {
                                "delay": 0,
                                "iterationCount": 1,
                                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                                "duration": 0.02
                            }, {
                                "animationEnd": function() {
                                    this.view.width = this._smwidth;
                                    this.view.height = this._smheigth;
                                }.bind(this)
                            });
                        }
                        alldata[i].left = "-100%";
                    } else {
                        alldata[i].isVisible = true;
                    }
                }
                this.view.flxMenuControl.forceLayout();
            };
            this.view.flxCover.animate(kony.ui.createAnimation({
                "0": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "backgroundColor": "2926292b",
                    "opacity": 1
                },
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "backgroundColor": "29262900",
                    "opacity": 0
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.15
            }, {
                "animationEnd": function() {
                    this.view.flxCover.isVisible = false;
                }.bind(this)
            });
            switch (this._hamburgerDirection) {
                case "Top":
                    {
                        this.view.flxMainSlidingMenu.animate(kony.ui.createAnimation({
                            "100": {
                                "top": "-100%",
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            }
                        }), {
                            "delay": 0,
                            "iterationCount": 1,
                            "fillMode": kony.anim.FILL_MODE_FORWARDS,
                            "duration": 0.5
                        }, {
                            "animationEnd": callback.bind(this)
                        });
                        this.view.flxHamParent.animate(kony.ui.createAnimation({
                            "100": {
                                "top": "0%",
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            }
                        }), {
                            "delay": 0,
                            "iterationCount": 1,
                            "fillMode": kony.anim.FILL_MODE_FORWARDS,
                            "duration": 0.5
                        }, {
                            "animationEnd": function() {
                                this.view.flxHamParent.onClick = this.showSlidingMenu.bind(this);
                            }.bind(this)
                        });
                        break;
                    }
                case "Right":
                    {
                        this.view.flxMainSlidingMenu.animate(kony.ui.createAnimation({
                            "100": {
                                "left": "100%",
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            }
                        }), {
                            "delay": 0,
                            "iterationCount": 1,
                            "fillMode": kony.anim.FILL_MODE_FORWARDS,
                            "duration": 0.5
                        }, {
                            "animationEnd": callback.bind(this)
                        });
                        this.view.flxHamParent.animate(kony.ui.createAnimation({
                            "100": {
                                "left": "88%",
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            }
                        }), {
                            "delay": 0,
                            "iterationCount": 1,
                            "fillMode": kony.anim.FILL_MODE_FORWARDS,
                            "duration": 0.5
                        }, {
                            "animationEnd": function() {
                                this.view.flxHamParent.onClick = this.showSlidingMenu.bind(this);
                            }.bind(this)
                        });
                        break;
                    }
                case "Left":
                    {
                        this.view.flxMainSlidingMenu.animate(kony.ui.createAnimation({
                            "100": {
                                "left": "-100%",
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            }
                        }), {
                            "delay": 0,
                            "iterationCount": 1,
                            "fillMode": kony.anim.FILL_MODE_FORWARDS,
                            "duration": 0.5
                        }, {
                            "animationEnd": callback.bind(this)
                        });
                        this.view.flxHamParent.animate(kony.ui.createAnimation({
                            "100": {
                                "left": "0%",
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            }
                        }), {
                            "delay": 0,
                            "iterationCount": 1,
                            "fillMode": kony.anim.FILL_MODE_FORWARDS,
                            "duration": 0.5
                        }, {
                            "animationEnd": function() {
                                this.view.flxHamParent.onClick = this.showSlidingMenu.bind(this);
                            }.bind(this)
                        });
                        break;
                    }
            }
            kony.print("-----------------------------hiding Sliding End");
            this.view.imgHamIcon.setVisibility(true);
        },
        /**
         * @function
         *
         * @param index
         */
        removeMenuItemAt: function(index) {
            kony.print("-----------------------------Removing Menu Item at " + index);
            this.view.flxMenuControl.removeAt(index);
        },
        removeAllMenuItem: function() {
            kony.print("-----------------------------Removing All Menu Items");
            this.view.flxMenuControl.removeAll();
        },
        /**
         *function
         *menu Item : Array of JSON[{img:"",text:""}]
         */
        addMenuItems: function(menuItem, callbackMode) {
            try {
                kony.print("-----------------------------Removing Menu Items");
                if (menuItem === undefined || menuItem === null || menuItem === "") {
                    throw {
                        message: "empty or undefined parameter"
                    };
                    return;
                }
                this.view.flxMenuControl.removeAll();
                this._createMenuItems(menuItem);
                this._returnData = [];
                //this._createHamWithSubOption(menuItem);
            } catch (err) {
                kony.print("-----------------------------" + JSON.stringify(err));
            }
        },
        _createMenuItems: function(data) {
            for (var i = 0; i < data.length; i++) {
                if (Array.isArray(data[i])) {
                    this._addwithsubItem(data[i], "menu" + i);
                    //var wid = this._addWidgets(data[i], "Head" + i);
                    kony.print("--added from array" + JSON.stringify(data[i]));
                    //this.view.flxMenuControl.add(wid);
                } else if (typeof data[i] == 'object') {
                    var wid1 = this._createOption(data[i], "menu" + i, "option");
                    wid1.top = "5%";
                    kony.print("--added from json" + JSON.stringify(data[i]));
                    this.view.flxMenuControl.add(wid1);
                } else {
                    throw {
                        message: "wrong data passed while creatng hamburger.",
                        error: "reusable widget error"
                    };
                }
            }
        },
        _addwithsubItem: function(data, id) {
            var flxHeaderData = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "enableCache": false,
                "top": "0%",
                "left": "5%",
                "id": "flxHeaderData" + id.trim(),
                "isVisible": true,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 3,
                "layoutType": kony.flex.FLOW_HORIZONTAL
            }, {}, {});
            flxHeaderData.setDefaultUnit(kony.flex.DP);
            var imgOpt1 = new kony.ui.Image2({
                "enableCache": false,
                "height": "30dp",
                "id": "Sectionimg" + id,
                "isVisible": (data[1] !== undefined || data[1] !== "" || data[1] !== null) ? true : false,
                "left": "5%",
                "skin": "slImage",
                "src": (data[1] !== undefined || data[1] !== "" || data[1] !== null) ? data[1] : "",
                "top": "3dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblHeadText = new kony.ui.Label({
                "enableCache": false,
                "id": "lblHeadText" + id.trim(),
                "isVisible": true,
                "left": "3%",
                "top": "6dp",
                "skin": this._menuItemHeaderTextSkin,
                "text": data[0],
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});

            function _showhideSubOption(suboptionIds, context) {
                var transformObject = "",
                    transformObject0,
                    transformObject1,
                    callback;
                //	var imgWid = context.widgets()[2];
                if (this.view["" + suboptionIds[0]].isVisible === false) {
                    transformObject = kony.ui.makeAffineTransform();
                    transformObject.rotate(-90);
                    transformObject0 = kony.ui.makeAffineTransform();
                    //transformObject0.scale(1, 0.1);
                    transformObject0.translate(0, -40);
                    transformObject1 = kony.ui.makeAffineTransform();
                    transformObject1.translate(0, 0);
                    //transformObject1.scale(1, 1);
                    callback = function() {
                        this.view.flxMenuControl.forceLayout();
                    };
                    for (var j = suboptionIds.length - 1; j >= 0; j--) {
                        //this.view[""+suboptionIds[j]].left = (parseInt(context.left)+15)+"%";
                        this.view["" + suboptionIds[j]].isVisible = true;
                        this.view[suboptionIds[j]].anchorPoint = {
                            "x": 0.5,
                            "y": 0
                        };
                        this.view[suboptionIds[j]].animate(kony.ui.createAnimation({
                            "0": {
                                "opacity": 0,
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                },
                                "transform": transformObject0,
                            },
                            "100": {
                                "opacity": 1,
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                },
                                "transform": transformObject1,
                            }
                        }), {
                            "delay": 0.05 * j,
                            "iterationCount": 1,
                            "fillMode": kony.anim.FILL_MODE_FORWARDS,
                            "duration": 0.4
                        }, {
                            "animationEnd": callback.bind(this)
                        });
                        this.view.flxMenuControl.forceLayout();
                    }
                } else {
                    transformObject = kony.ui.makeAffineTransform();
                    transformObject.rotate(0);
                    transformObject0 = kony.ui.makeAffineTransform();
                    //	transformObject0.scale(1, 1);
                    transformObject1 = kony.ui.makeAffineTransform();
                    //transformObject1.scale(1, 0.1);
                    transformObject1.translate(0, -40);
                    //   widgets[1].isVisible = false;
                    callback = function(widget) {
                        widget.isVisible = false;
                        this.view.flxMenuControl.forceLayout();
                    };
                    for (var k in suboptionIds) {
                        this.view[suboptionIds[k]].anchorPoint = {
                            "x": 0.5,
                            "y": 0
                        };
                        this.view[suboptionIds[k]].animate(kony.ui.createAnimation({
                            "100": {
                                "opacity": 0,
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                },
                                "transform": transformObject1,
                            }
                        }), {
                            "delay": 0,
                            "iterationCount": 1,
                            "fillMode": kony.anim.FILL_MODE_FORWARDS,
                            "duration": 0.5
                        }, {
                            "animationEnd": callback.bind(this, this.view[suboptionIds[k]])
                        });
                        this.view.flxMenuControl.forceLayout();
                    }
                }
            }
            flxHeaderData.add(lblHeadText, imgOpt1);
            this.view.flxMenuControl.add(flxHeaderData);
            var allid = [];
            for (var i in data[2]) {
                try {
                    this.view.flxMenuControl.add(this._createOption(data[2][i], "flxOptions" + id + i, "suboption"));
                    allid.push("flxflxOptions" + id + i);
                } catch (e) {
                    alert(e);
                }
            }
            this.view.flxMenuControl[flxHeaderData.id].onClick = _showhideSubOption.bind(this, allid);
            //alert(this.view.flxMenuControl.widgets().length);
        },
        /**
         * @function
         *
         * @param data
         * @param id
         */
        _createOption: function(data, id, type) {
            var flxOpt1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "height": "30dp",
                "clipBounds": true,
                "enableCache": false,
                "id": "flx" + id,
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": type !== "option" ? "10%" : "0%",
                "skin": (data.skin !== undefined || data.skin !== "" || data.skin !== null) ? data.skin : "slFbox",
                "focusSkin": "flxfocusSkin",
                "top": "3dp",
                "width": "100%",
                "onClick": (this._callbackMode === true) ? this.onDflexClick.bind(this, id) : (data.callback !== undefined || data.callback !== "" || data.callback !== null) ? data.callback : function() {}, //this.onDflexClick.bind(this, id),
                "zIndex": 1
            }, {}, {});
            flxOpt1.setDefaultUnit(kony.flex.DP);
            var imgOpt1 = new kony.ui.Image2({
                "enableCache": false,
                "height": "100%",
                "id": "img" + id,
                "isVisible": (data.src !== undefined || data.src !== "" || data.src !== null) ? true : false,
                "left": "2%",
                "skin": "slImage",
                "src": (data.src !== undefined || data.src !== "" || data.src !== null) ? data.src : "",
                "top": "2dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblOpt1 = new kony.ui.Label({
                "enableCache": false,
                "id": "lbl" + id,
                "isVisible": true,
                "left": "7%",
                "skin": this._menuItemSkin,
                "text": (data.text !== undefined || data.text !== "" || data.text !== null) ? data.text : "",
                "centerY": "50%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxOpt1.add(imgOpt1, lblOpt1);
            return flxOpt1;
        },
        /**
         * @function
         *
         * @param r1a
         * @param opacity
         * @param o1
         * @param o2
         * @param d1
         * @param d2
         */
        hamIconAnim: function(r1a, opacity, o1, o2, d1, d2) {
            this.view.imgHamIconClose.isVisible = true;
            var r1 = kony.ui.makeAffineTransform();
            r1.rotate(r1a);
            this.view.imgHamIcon.animate(kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "transform": r1,
                    "opacity": parseFloat(opacity)
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": d1
            }, {
                "animationEnd": function() {}
            });
            this.view.imgHamIconClose.animate(kony.ui.createAnimation({
                "0": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "opacity": parseFloat(o1)
                },
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "transform": r1,
                    "opacity": parseFloat(o2)
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": d2
            }, {
                "animationEnd": function() {}
            });
        },
        _checkForSubOptionVisibility: function() {
            var allWidgets = this.view.flxMenuControl.widgets();
            for (var i in allWidgets) {
                if (allWidgets[i].widgets()[1].id.includes("flx")) {
                    allWidgets[i].widgets()[1].isVisible = false;
                    allWidgets[i].forceLayout();
                }
            }
        },
        _onTouchStartOfFlex: function(context, x, y) {},
        /**
         * @function
         *
         */
        onDflexClick: function(id) {
            if (this.view["img" + id].src == "checkboxinactive.png") {
                this.view["img" + id].src = "checkboxactive.png";
            } else {
                this.view["img" + id].src = "checkboxinactive.png";
            }
            this.addSelectedValues("img" + id);
            this.view.forceLayout();
        },
        /**
         * @function
         *
         */
        addSelectedValues: function(id) {
            if (this.view[id].parent.widgets()[0].src == "checkboxactive.png") {
                this._returnData.push(this.view[id].parent.widgets()[1].text);
            } else {
                var index = this._returnData.indexOf(this.view[id].parent.widgets()[1].text);
                if (index != -1) {
                    this._returnData.splice(index, 1);
                }
            }
            if (this.onItemClick != null) {
                this.onItemClick();
            }
        },
        getSelectedValues: function() {
            return this._returnData;
        }
    };
});