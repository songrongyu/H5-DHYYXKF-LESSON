
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var size = cc.winSize;

        this.addChild(new cc.LayerColor(cc.color.GRAY));
        var sp1=  new cc.Sprite(res.Spider_png);
        sp1.setPosition(size.width/2, size.height*0.7);
        this.addChild(sp1);

        cc.spriteFrameCache.addSpriteFrame(res.Enemy11_plist,res.Enemy11_png);
        var sp2 = new cc.Sprite("#11_T_wk_00002.png");
        sp2.setPosition(size.width/2,size.height*0.3);
        this.addChild(sp2);

        var spriteFrame = cc.spriteFrameCache.getSpriteFrame("11_T_wk_00002.png");
        var sp3 = new cc.Sprite(spriteFrame);
        sp3.setPosition(size.width/2,size.height*0.2);
        this.addChild(sp3);

        var moveMenuItem = new cc.MenuItemFont("移动", function(){

        })

        var menu = new cc.Menu(moveMenuItem);
        menu.setPosition(0,0);
        moveMenuItem.setPosition(size.width*0.5,size.heght*0.2);
        this.addChild(menu);

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

