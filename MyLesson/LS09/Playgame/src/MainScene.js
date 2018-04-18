var MainLayer = cc.Layer.extend({
    arr:[],
    plane:null,
    scoreLabel:null,
    score:0,
    enemy:null,
    speed:4,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        // var bg = new cc.Sprite(res.bg1_jpg);
        // bg.x= size.width/2;
        // bg.y= size.height/2;
        // this.addChild(bg);
        // this.arr[0] = bg;
        //
        // var bg2 = new cc.Sprite(res.bg1_jpg);
        // bg.x= size.width/2;
        // bg.y= size.height/2+ bg.getBoundingBox().height;
        // this.addChild(bg2);
        // this.arr[1] = bg2;

        for(var i=0;i<2;i++){
            var bg = new cc.Sprite(res.bg1_jpg);
            bg.x= size.width/2;
            bg.y= size.height/2+i*(bg.getBoundingBox().height);
            this.addChild(bg);
            this.arr[i] = bg;
        }
        //我方飞机
        var p1= new cc.Sprite(res.p1_png);
        p1.x= size.width/2;
        p1.y= size.height/3;
        this.addChild(p1);
        this.palne = p1;

        //控制按钮
        var leftItem = new cc.MenuItemFont("左移",function(){
            if(p1.x>100){
                p1.x-=50;
            }
        },this);
        var rightItem = new cc.MenuItemFont("右移",function(){
            if(p1.x < size.width -100){
                p1.x +=50;
            }
        },this);
        leftItem.setFontSize(80);
        leftItem.setColor(cc.color.YELLOW);
        rightItem.setFontSize(80);
        rightItem.setColor(cc.color.YELLOW);

        var menu = new cc.Menu(leftItem, rightItem);
        menu.y = size.height / 10;
        menu.alignItemsHorizontallyWithPadding(200);
        this.addChild(menu);




        this.schedule(this.bgCallBack,0.01);

        return true;
    },
    bgCallBack:function(dt){
        for(var i in this.arr){
            if(this.arr[i].y<-720){
                this.arr[i].y+=2 * 1440;
            }
            this.arr[i].y-=2;
        }
    }
});

var MainScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);
    }
});