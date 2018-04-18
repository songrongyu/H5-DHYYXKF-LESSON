var StarLayer = cc.Layer.extend({
    ctor:function(){
        this._super();
        var layer = new cc.LayerColor(cc.color.RED);
        this.addChild(layer);

        var size= cc.winSize;
        var label = new cc.LabelTTF("这是开场游戏场景","",50);
        label.x=size.width*0.5;
        label.y=size.height*0.7;
        this.addChild(label);

        var menuItem = new cc.MenuItemFont("跳转到主游戏场景",function(){
            cc.director.runScene(new cc.TransitionMoveInL(2,new MainScene()));
        },this);
        var menu = new cc.Menu(menuItem);
        menu.setPosition(0,0);
        menuItem.x=size.width*0.5;
        menuItem.y=size.height*0.3;
        this.addChild(menu);
    }
});

var BgLayer = cc.Layer.extend({
    ctro: function() {
        this._super();
        this.addChild(cc.LayerColor(cc.color.WHITE));
    }
})
var StarScene = cc.Scene.extend({
    ctor:function(){
        this._super();
        var bgLayer = new BgLayer();
        this.addChild(bgLayer);
        var customLayer = new cc.CustomLayer();
        this.addChild(customLayer);
        // var layer = new cc.LayerColor(cc.color.RED);
        // var layer = new StarLayer();
        var gdLayer1 = new cc.LayerGradient(cc.color.RED, new cc.Color(255,0,0,0),cc.p(0,-1));
        var gdLayer2 = new cc.LayerGradient(cc.color.RED, new cc.Color(255,0,0,0), cc.p(-1,-1),
            [{p:0,color:cc.color.YELLOW},
                {p:5, color:cc.Color(0,0,0,0)},
                {p:1,color:cc.Color.BLUE}]);
        this.addChild(gdLayer2);
    }
});