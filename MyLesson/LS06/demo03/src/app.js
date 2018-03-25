
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();

        var size = cc.winSize;

       var layer1= new cc.LayerColor(cc.color.RED,200,200);
       var layer2= new cc.LayerColor(cc.color.YELLOW,200,200);
       var layer3= new cc.LayerColor(cc.color.BLUE,200,200);
       layer1.ignoreAnchor = false;
       layer2.ingoreAnchor = false;
       layer3.ingoreAnchor = false;
       layer1.setAnchorPoint(0,0);
       layer2.setAnchorPoint(0,0);
       layer3.setAnchorPoint(0,1);

       layer1.setPosition(0,0);
       layer2.setPosition(size.width-100,size.height-100);
       layer3.setPosition(size.width-100,0);

       // layer1.rotation = 45;
       // layer2.rotation = 45;

       // layer1.scale = 0.5;
       // layer2.scale = 0.5;

       this.addChild(layer1);
       this.addChild(layer2);
       this.addChild(layer3);

       layer2.runAction(cc.rotateBy(2,360), cc.repeatForever());
       layer3.runAction(cc.rotateBy(2,180), cc.repeatForever());

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

