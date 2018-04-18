
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var tiledMap = new cc.TMXTiledMap(res.Tmx_tmx);
        this.addChild(tiledMap);
        cc.log(tiledMap.getMapSize());
        cc.log(tiledMap.getProperties("SceneName"));


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

