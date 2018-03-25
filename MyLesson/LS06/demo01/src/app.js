
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    arr:[],
    plane:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var size = cc.winSize;

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        // var size = cc.winSize;

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        // var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        // position the label on the center of the screen
        // helloLabel.x = size.width / 2;
        // helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        // this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
//         this.sprite = new cc.Sprite(res.P1_png);
//         this.sprite.attr({
//             x: size.width / 2,
//             y: size.height / 2
//         });
//         this.addChild(this.sprite, 0);
//
//         return true;
//     }
// });

        this.addPlaneAndBg();
    },
    addPlaneAndBg: function () {
        //背景
        var bg = new cc.Sprite(res.Bg1_jpg);
        bg.x = cc.winSize.width / 2;
        bg.y = cc.winSize.height / 2;
        this.addChild(bg);
        this.arr[0] = bg;

        var bg2 = new cc.Sprite(res.Bg1_jpg);
        bg2.x = cc.winSize.width / 2;
        bg2.y = cc.winSize.height / 2 + bg.getBoundingBox().height;
        this.addChild(bg2);
        this.arr[1] = bg2;

        //我方飞机
        var p1 = new Plane(res.P1_png);
        p1.x = cc.winSize.width / 2;
        p1.y = cc.winSize.height / 3;
        this.addChild(p1);
        this.plane = p1;
    }
});
var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

