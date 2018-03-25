
var HelloWorldLayer = cc.Layer.extend({
    label:null,
    second:0,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var labelTTF = new cc.LabelTTF("玩家1："+this.second,64);
        labelTTF.x = 50;
        labelTTF.y = size.height-50;
        labelTTF.setAnchorPoint(0,1);
        this.addChild(labelTTF);


        //设置字体样式
        labelTTF.setFontFillColor(cc.color.RED);
        labelTTF.setFontSize(50);
        labelTTF.enableStroke(cc.color.YELLOW,5);
        labelTTF.enableShadow(cc.color.WHITE,15,15,15);
        this.label=labelTTF;


        this.schedule(this.myTimer,1,cc.REPEAT_FOREVER,0);


        return true;
    },
    myTimer:function(dt){
        this.second+=dt;
        this.label.setString("玩家:"+ parseInt(this.second));
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

