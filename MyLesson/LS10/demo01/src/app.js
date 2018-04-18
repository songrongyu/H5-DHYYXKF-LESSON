
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    sprites:[],
    ctor:function () {
        this._super();
        var size = cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.GRAY));

        //创建精灵
        for(var i=0;i<3;i++){
            this.sprites[i]= new cc.Sprite("res/Sprite"+(i+1)+".png");
            this.sprites[i].x= size.width*0.2;
            this.sprites[i].y= size.height*(0.3*i+0.2);
            this.addChild(this.sprites[i]);
        }

        //即时动作
        // var action1 = new cc.Place(400,size.height*0.2);
        // this.sprites[0].runAction(action1);
        //
        // this.sprites[1].runAction(cc.flipX(true));
        // this.sprites[1].runAction(cc.flipY(true));
        //
        // this.sprites[2].runAction(cc.hide());
        //
        // this.sprites[2].runAction(cc.callFunc(function(){
        //     this.sprites[2].runAction(cc.show());
        //     cc.log("callFunc调用");
        // },this));

/*
        //间隔动作
        var action1= cc.moveBy(5,200,0);
        // this.sprites[0].runAction(action1);
        this.sprites[0].runAction(cc.jumpTo(10,cc.p(200,200),50,2));

        this.sprites[1].runAction(cc.moveTo(10,400,400));

        this.sprites[2].runAction(cc.jumpBy(10,cc.p(300,0),50,4));

        this.sprites[2].runAction(cc.rotateBy(10,0,90,0));

        //使用节点的 暂停 继续 停止 等方法来控制节点动作
        var node_1_MenuItem,node_2_MenuItem;
        var isPaused = false;
        node_1_MenuItem = new cc.MenuItemFont("Node1",function () {
            if(!isPaused){
                this.sprites[0].pause();
                isPaused=!isPaused;
                cc.log("pause sprites[0]");
            }else{
                this.sprites[0].resume();
                isPaused=!isPaused;
                cc.log("resume sprites[0]");
            }
        },this);
        node_2_MenuItem = new cc.MenuItemFont("Node2",function () {
            // this.sprites[1].stopAction();//需要传对应的action对象
            // this.sprites[1].stopActinByTag(tag);
            this.sprites[1].stopAllActions();
        },this);

        var menu = new cc.Menu(node_1_MenuItem,node_2_MenuItem);
        menu.y = size.height*0.5;
        menu.alignItemsHorizontallyWithPadding(50);
        this.addChild(menu);
*/

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

