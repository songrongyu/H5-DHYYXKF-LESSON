var MainLayer = cc.Layer.extend({
    ctor:function(){
        this._super();
        var layer = new cc.LayerColor(cc.color.BLUE);
        this.addChild(layer);

        var size= cc.winSize;
        var label = new cc.LabelTTF("这是主戏场景","",50);
        label.x=size.width*0.5;
        label.y=size.height*0.7;
        this.addChild(label);

        var menuItem = new cc.MenuItemFont("跳转到结束游戏场景",function(){
            cc.director.runScene(new cc.TransitionFade(2,new OverScene(),cc.color.WHITE));
        },this);
        var menu = new cc.Menu(menuItem);
        menu.setPosition(0,0);
        menuItem.x=size.width*0.5;
        menuItem.y=size.height*0.3;
        this.addChild(menu);
    }
});

var MainScene = cc.Scene.extend({
    ctor:function(){
        this._super();
        // var layer = new cc.LayerColor(cc.color.RED);
        var layer = new MainLayer();
        this.addChild(layer);
    }
});