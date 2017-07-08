//index.js
var x0,x1,x2;
var y0,y1,y2;
var type=3;
var color ="#FF0000";
var fillcolor="#FFFFFF";
var linewidth=5;
var ctx = wx.createCanvasContext('first');
var key=3;//key代表表示的形状
var bolltime;
var zantime;
var allZan = [];//所有点赞图标的数组
var shirley = [{
  num: 1,
  x0: 100,
  y0: 200,
  x1: 300,
  y1: 400,
  color: "#FF0000",
  linewidth: 2,
},];

Page({
  //点赞事件
  dianzan:function(e){
    type=3;
    clearInterval(zantime);
    clearInterval(bolltime);
    ctx.beginPath(); 
    ctx.setFillStyle("#FF0000");
    ctx.arc(210,430,28,0,2*Math.PI);
    ctx.fill();
    ctx.drawImage("/images/点赞.png", 180, 400, 60, 60);
    ctx.draw();
  },
  //图案绘画部分(未完成)
  // graph:function(e){
  //   clearInterval(bolltime);
  //   for (var i = 0; i < shirley.length; i++) {

  //     var sh=shirley[i];
  //     if (sh.num == 1) {
  //       ctx.beginPath();
  //       ctx.setStrokeStyle(sh.color);
  //       ctx.setLineWidth(sh.linewidth);
  //       ctx.moveTo(sh.x0, sh.y0);
  //       ctx.lineTo(sh.x1, sh.y1);
  //       ctx.stroke();
        
  //     }
  //   }
  //   ctx.draw();
  // },
  //canvas的鼠标点击事件
  bindtouchstart:function(e){
    x0 = e.changedTouches[0].x;
    y0 = e.changedTouches[0].y;
    //console.log(e.touches[0].x, e.touches[0].y);
    if(type==3){
      if(x0>=180&&x0<=240&&y0>=400&&y0<=460){
        this.zan();
      }
    }
  },
  //canvas的鼠标释放事件
  // bindtouchend :function(e){
  //   console.log(e.touches[0].x,e.touches[0].y);
  //   this.graph();
  // },
  //canvas的鼠标移动事件
  // bindtouchmove: function(e){

  //   var time=setTimeout(function(){

    
  //     if(key==1){//画直线
  //       x1 = e.touches[0].x;
  //       y1 = e.touches[0].y;
  //       ctx.beginPath();
  //       ctx.setStrokeStyle(sh.color);
  //       ctx.setLineWidth(sh.linewidth);
  //       ctx.moveTo(sh.x0, sh.y0);
  //       ctx.lineTo(sh.x1, sh.y1);
  //       ctx.stroke();
  //       var p={
  //         num:1,
  //         x0:x0,
  //         y0:y0,
  //         x1:x1,
  //         y1:y1,
  //         color:color,
  //         linewidth:linewidth,
  //       }
  //       shirley.push(p);
  //     }else if(key==2){//画矩形
  //       x1=e.touches[0].x;
  //       y1=e.touches[0].y;
  //       ctx.setStrokeStyle(color);
  //       ctx.setLineCap("round");
  //       ctx.setLineJoin("round");
  //       ctx.setFillStyle(fillcolor);
  //       ctx.setLineWidth(linewidth);
  //       ctx.save();
  //       ctx.beginPath();
  //       ctx.rect(x0,y0,x1-x0,y1-y0);
  //       ctx.fill();
  //       ctx.stroke();
  //       ctx.restore();
  //       ctx.draw();
  //       ctx.closePath();
  //     }else if(key==3){//画圆
  //       x1 = e.touches[0].x;
  //       y1 = e.touches[0].y;
  //       var r;
  //       if(x1>=x0){
  //         x2=x1;x1=x0;
  //       }else {
  //         x2=x0;
  //       }
  //       if(y1>=y0){
  //         y2=y1;y1=y0;
  //       }else{
  //         y2=y0;
  //       }
  //       if((x2-x1)>=(y2-y1)){
  //         r=(y2-y1)/2;
  //       }else{
  //         r=(x2-x1)/2;
  //       }
  //       ctx.setStrokeStyle(color);
  //       ctx.setFillStyle(fillcolor);
  //       ctx.setLineWidth(linewidth);
  //       ctx.beginPath();
  //       ctx.arc((x2+x1)/2,(y2+y1)/2,r,0,2*Math.PI,true);
  //       ctx.stroke();
  //       ctx.draw();
  //     }
  //   }, 10);
  // },
  //点赞图像在一秒内移动
  zan:function(){
    var t = 0;
    //var zan={};
    var alpha=1;
    var ban=30;
    var x=180,y=400;
    var self=this;
    
    var r = Math.random() * 256;
    var g = Math.random() * 256;
    var b = Math.random() * 256;
    zantime=setInterval(function(){
      ctx.beginPath();
      ctx.setGlobalAlpha(1);
      ctx.setFillStyle("#FF0000");
      ctx.arc(210, 430, 28, 0, 2 * Math.PI);
      ctx.fill();
      ctx.drawImage("/images/点赞.png", 180, 400, 60, 60);

      y=y-8;
      alpha=1-t*0.02;
      ban=ban+1;
      self.drawzan(x,y,ban,r,g,b,alpha);
      ctx.draw();

      console.log(x0,y0);



      t++;
      if(t==50){
        clearInterval(zantime);
      }
    },25);
  },
  //出现一个点赞图标
  drawzan:function(x,y,ban,r,g,b,alpha){
    ctx.beginPath();  
    ctx.setGlobalAlpha(alpha);
    ctx.setFillStyle("rgb(" + r + "," + g + "," + b + ")");
    ctx.arc(x+30, y+30, ban-2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.drawImage("/images/点赞.png", x-ban+30, y-ban+30, ban*2,ban*2);
  },
  //好多球球
  qiu: function () {
    clearInterval(bolltime);
    clearInterval(zantime);
    var x0 = 180;
    var y0 = 500;
    var all=[];
    
    var self=this;
    var t=200;
    
    
      bolltime=setInterval(function(){
        self.qiuqiu(x0, y0);
        var n = Math.random() * 5 + 2;
        for(var i=0;i<n;i++){//这个循环是每秒创造出很多个球，放到all数组中
          
          var xs = Math.random() * 20-10;
          var ys = Math.random() * 10+20;
          var eboll={x:x0,y:y0,xspeed:xs,yspeed:ys};
          all.push(eboll);//放入all数组
        }
         for(var i=0;i<all.length;i++){
           //这个循环是循环改变all中的每个元素的位置，使其往上走
           var b=all[i];
           b.x = b.x + b.xspeed;
           b.y = b.y - b.yspeed;
           //b.yspeed = b.yspeed - 1;
           self.qiuqiu(b.x, b.y);
           if(all.length>200){
             all.splice(0,n);
           }
          
         }
        ctx.draw();
        
      },t);
  },
  //创建一个球
  qiuqiu: function (x,y) {
    ctx.beginPath();
    var r = Math.random() * 256;
    var g = Math.random() * 256;
    var b = Math.random() * 256;
    ctx.setFillStyle("rgb(" + r + "," + g + "," + b + ")");
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fill();
  },
  //太极事件
  taiji:function(){
    clearInterval(zantime);
    clearInterval(bolltime);
    // for(var i=0;i<10;i++){
    //   var x =Math.random()*350;
    //   var y=Math.random()*600+100;
 

      for(var i=0;i<10;i++){
        var x=Math.random()*350;
        var y=Math.random()*600;
        var r=Math.random()*50+10;
        this.drawTaiji(x, y, r);
      }
      ctx.draw();
     
    
  },
  //画太极图像
  drawTaiji: function (x, y, r){
    
    ctx.setLineWidth(1);
    ctx.setStrokeStyle("#000000");
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.setFillStyle("#000000");
    ctx.arc(x, y+r/2,r/2 , 0.5 * Math.PI, 1.5 * Math.PI, );
    ctx.arc(x, y-r/2, r/2, 0.5 * Math.PI, 1.5 * Math.PI, true);
    ctx.arc(x, y, r, 1.5 * Math.PI, 0.5 * Math.PI, true);
    ctx.fill();
    ctx.closePath();

    
    ctx.beginPath();
    ctx.arc(x, y+r/2, r/4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.setFillStyle("#FFFFFF");
    ctx.arc(x, y-r/2, r/4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  },
})
