var OverLayer = cc.Layer.extend({
    ctor:function(){
        this._super();

        var size = cc.winSize;
        //添加背景
        var bg = new cc.Sprite(res.JieShuBeiJing_jpg);
        bg.setPosition(size.width*0.5,size.height*0.5);
        this.addChild(bg);

        //添加框
        var kuang = new cc.Sprite(res.JieShuKuang);
        kuang.x = size.width/2;
        kuang.y = size.height/2;
        this.addChild(kuang);

        //添加菜单及菜单项
        var zailaiMenuItem = new cc.MenuItemImage(res.ZaiLaiAnNiu_png,res.ZaiLaiAnNiuB_png,function(){
            cc.director.runScene(new StartScene());
        },this);
        zailaiMenuItem.x = size.width*0.3;
        zailaiMenuItem.y = size.height*0.24;

        var zhuyeMenuItem = new cc.MenuItemImage(res.XuanYaoAnNiu_png,res.XuanYaoAnNiuB_png,function(){
            cc.director.runScene(new StartScene());
        },this);
        zhuyeMenuItem.x = size.width*0.7;
        zhuyeMenuItem.y = size.height*0.24;

        var menu = new cc.Menu(zailaiMenuItem);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu);
        var menu1 = new cc.Menu(zhuyeMenuItem);
        menu1.x = 0;
        menu1.y = 0;
        this.addChild(menu1);

        //读取并显示分数
        var scoreLabel = new cc.LabelTTF("","", size.width/12);
        scoreLabel.x = size.width*0.46;
        scoreLabel.y = size.height*0.58;
        scoreLabel.setFontFillColor(cc.color.YELLOW);
        kuang.addChild(scoreLabel);

        var score= cc.sys.localStorage.getItem("currentScore");
        scoreLabel.setString(score);
        scoreLabel.scale = 0;
        var scaleAction = cc.scaleTo(0.5,1.0).easing((cc.easeElasticOut(0.5)));
        var seq = cc.sequence(cc.delayTime(0.2),scaleAction);
        scoreLabel.runAction(seq);



        return true;
    }
});

var OverScene = cc.Scene.extend({
    ctor:function(){
        this._super();
        var layer = new OverLayer();
        this.addChild(layer);
    }
})