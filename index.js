window.onload=function(){

  var windowc=function(){
  var d=new Date();
var sec=d.getSeconds();
var min=d.getMinutes();
var hou=d.getHours();
var span=document.querySelectorAll('span');
span[0].innerHTML=hou;
span[2].innerHTML=min;
span[4].innerHTML=(sec+1)-1;
}

setInterval(windowc,1000)

    var canvasclock=document.querySelector("#canvas-clock");
    ctxclock=canvasclock.getContext("2d");
    ctxclock.save();

   
   
    ctxclock.fillStyle="rgb(255,0,0)"
ctxclock.fillRect(100,100,200,200);

ctxclock.fillStyle="rgba(0,255,0,0.4)"
ctxclock.fillRect(150,150,250,250);

ctxclock.strokeStyle="rgb(0,0,255)"
ctxclock.strokeRect(10.5,10.5,100,300);
ctxclock.clearRect(150,150,200,200);


ctxclock.clearRect(0,0,600,600);
ctxclock.beginPath();
ctxclock.moveTo(300,300);
ctxclock.lineTo(600,0);
ctxclock.stroke();

ctxclock.moveTo(300,300);
ctxclock.lineTo(600,300);
ctxclock.lineTo(500,600);
ctxclock.fill();


ctxclock.clearRect(0,0,600,600);
//圆
ctxclock.beginPath();
ctxclock.arc(300,300,200,0,Math.PI*2);
//ctxclock.fill();
ctxclock.moveTo(200,250);
ctxclock.arc(100,250,50,0,Math.PI*2);
ctxclock.moveTo(480,220);
ctxclock.arc(250,250,50,0,Math.PI*2);
ctxclock.moveTo(130,350);
ctxclock.arc(250,350,120,0,Math.PI);
ctxclock.moveTo(50,250);
ctxclock.lineTo(110,235);
ctxclock.stroke();


ctxclock.clearRect(0,0,600,600);

ctxclock.beginPath();
ctxclock.moveTo(300,200);
ctxclock.bezierCurveTo(36,98,123,373,299,453);
ctxclock.stroke();



ctxclock.clearRect(0,0,600,600);

//程序与画布的组合
ctxclock.shadowOffsetX=2;
ctxclock.shadowOffsetY=2;
ctxclock.shadowBlur=100;
ctxclock.shadowColor="rgba(255,0,0,0.5)";
for(var i=0;i<100;i++){
  ctxclock.beginPath();
  var xinx=Math.floor(Math.random()*600);
  var xiny=Math.floor(Math.random()*600);
  var r=Math.floor(Math.random()*30+10);
  ctxclock.arc(xinx,xiny,r,0,Math.PI*2);
  ctxclock.fillStyle="rgba("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.random()+")";
  ctxclock.fill();
    
}
ctxclock.clearRect(0,0,600,600);

var lingrad=ctxclock.createLinearGradient(200,400,580,300);//值可以改变，但是颜色会依旧全部填满。颜色为一片区域
lingrad.addColorStop(0,'red');
lingrad.addColorStop(0.2,'orange');
lingrad.addColorStop(0.4,'yellow');
lingrad.addColorStop(0.6,'green');
lingrad.addColorStop(0.8,'blue');
lingrad.addColorStop(1,'pink');


ctxclock.lineWidth=6;
ctxclock.lineCap='round';
ctxclock.strokeStyle=lingrad;
ctxclock.beginPath();
ctxclock.moveTo(20,300);
ctxclock.lineTo(580,300);
ctxclock.stroke();
  
ctxclock.clearRect(0,0,600,600);

ctxclock.restore();



var drawColok=function(){
var d=new Date();

var sec=d.getSeconds();
var min=d.getMinutes();
var hou=d.getHours();
 

//清除画布
ctxclock.clearRect(0,0,600,600)
//画表盘
ctxclock.save();
ctxclock.strokeStyle="white";
ctxclock.lineWidth=16;
ctxclock.translate(300,300);

ctxclock.beginPath();
ctxclock.arc(0,0,200,0,Math.PI*2);
ctxclock.stroke();

ctxclock.strokeStyle="white";
ctxclock.beginPath();
ctxclock.lineCap='round';

for(var i=1;i<62;i++){
    ctxclock.rotate(Math.PI/30);
    if(i%5){
      ctxclock.lineWidth=2;
      ctxclock.moveTo(179,0);
    }else{
      ctxclock.lineWidth=1;
      ctxclock.moveTo(160,0);
     }
      ctxclock.lineTo(180,0);
      ctxclock.stroke();
}

//画中心原点
ctxclock.beginPath();
ctxclock.arc(0,0,8,0,Math.PI*2);
ctxclock.fillStyle="white";
ctxclock.fill();
ctxclock.restore();

//画时针
ctxclock.save();
ctxclock.translate(300,300);
ctxclock.rotate(Math.PI/6*hou+Math.PI/30*(min/12));
ctxclock.strokeStyle="white";
ctxclock.beginPath();
ctxclock.moveTo(0,0);
ctxclock.lineWidth=10;
ctxclock.lineCap='round';
ctxclock.lineTo(0,-90);
ctxclock.stroke();
ctxclock.restore();

//画分针
ctxclock.save();
ctxclock.translate(300,300);
ctxclock.rotate(Math.PI/30*min+Math.PI/30*(sec/60));
ctxclock.beginPath();
ctxclock.moveTo(0,0);
ctxclock.lineWidth=5;
ctxclock.lineCap='round';
ctxclock.lineTo(0,-110);
ctxclock.strokeStyle="white";
ctxclock.stroke();
ctxclock.restore();

//画秒针
ctxclock.save();
ctxclock.translate(300,300);
//ctxclock.rotate(s);
ctxclock.lineWidth=6;
ctxclock.rotate(Math.PI/30*sec);
ctxclock.beginPath();
ctxclock.strokeStyle="white";
ctxclock.beginPath();
ctxclock.moveTo(0,10);
ctxclock.lineTo(0,-130);
ctxclock.moveTo(5,-135);
ctxclock.arc(0,-135,5,0,Math.PI*2);
ctxclock.stroke();
ctxclock.restore();

//console.log(1)
requestAnimationFrame(drawColok);
}




requestAnimationFrame(drawColok);

/*document.ondblclick=function(){
  location.href=(canvas.toDataURL().replace("data:image/png","data:stream/octet"));
}

var link=document.createElement('a');
link.innerHTML='download image';

link.addEventListener('click',function(ev){
  link.href=canvas.toDataURL();
  link.download="mypainting.png";
},false)


document.body.appendChild(link);
*/

//画五子棋盘
	  var canvas=document.querySelector("#canvas");
    ctx=canvas.getContext("2d");
    var canvasLuoqi=document.querySelector("#canvas-luoqi");
    ctxLuoqi=canvasLuoqi.getContext("2d");
    var ROW=15;

    /* var img=new Image();
     img.src='images/beijing.jpg';
      img.onload=function(){
          ctx.drawImage(img,0,0);
         }*/
    for(var i=0;i<ROW;i++){

    	var li1=ctx.createLinearGradient(0,0,600,600);
    	//var li2=ctx.createLinearGradient(0,0,600,600);
    	li1.addColorStop(0,'red');
        li1.addColorStop(1,'yellow');
        /*li2.addColorStop(0,'');
        li2.addColorStop(1,'');*/
    	ctx.beginPath();
    	ctx.moveTo(20,i*40+20.5);
    	ctx.lineTo(580,i*40+20.5);
    	ctx.strokeStyle=li1;
    	ctx.stroke();

    	ctx.beginPath();
    	ctx.moveTo(i*40+20.5,20);
    	ctx.lineTo(i*40+20.5,580);
    	//ctx.strokeStyle=li2;
    	ctx.stroke();
    }

     ctx.beginPath();
     ctx.arc(300.5,300.5,3,0,Math.PI*2);
     ctx.fill();
     
     /*ctx.beginPath();
     ctx.arc(140.5,140.5,3,0,Math.PI*2);
     ctx.fill();
   
     ctx.beginPath();
     ctx.arc(460.5,140.5,3,0,Math.PI*2);
     ctx.fill();

     ctx.beginPath();
     ctx.arc(460.5,460.5,3,0,Math.PI*2);
     ctx.fill();

     ctx.beginPath();
     ctx.arc(140.5,460.5,3,0,Math.PI*2);
     ctx.fill();*/

     var z=[140.5,460.5];//棋盘黑点
     for(var i=0;i<z.length;i++){
        for(var j=0;j<z.length;j++){
            ctx.beginPath();
            ctx.arc(z[i],z[j],3,0,Math.PI*2);
            ctx.fill();
        }
     }

     //x：落子x坐标 y：落子y坐标  color：boolean类型--true：黑子
     var luoqi=function(x,y,color){

       var zx=40*x+20.5;
       var zy=40*y+20.5;
       
       var black=ctxLuoqi.createRadialGradient(zx,zy,3,zx,zy,18);
       black.addColorStop(0.5,'#555');
       black.addColorStop(1,'black');

       var white=ctxLuoqi.createRadialGradient(zx,zy,6,zx,zy,18);
       white.addColorStop(0.5,'#fff');
       white.addColorStop(1,'#ddd');

       ctxLuoqi.fillStyle=color?black:white;

       ctxLuoqi.beginPath();
       ctxLuoqi.arc(zx,zy,18,0,Math.PI*2);
       ctxLuoqi.fill();
     }
      //luoqi(3,3,true)
      //luoqi(5,5,false)
       

      //利用图片完成
      /*var qiziimg=document.querySelector("#sucai");
      var luoqi=function(x,y,color){
         var zx=40*x+2.5;
         var zy=40*y+2.5;
         if(color){
           ctxLuoqi.drawImage(qiziimg,0,0,212,213,zx,zy,36,36)
         }else{
           ctxLuoqi.drawImage(qiziimg,213,0,213,213,zx,zy,36,36)
         }
      }
*/



        var qizi={};//所有的落子数据
        var flag=localStorage.x?false:true;//标示该落什么子
        canvasLuoqi.onclick=function(e){
      	var x=Math.round((e.offsetX-20.5)/40);
      	var y=Math.round((e.offsetY-20.5)/40);
      	if(qizi[x+'_'+y]){
      		return;
      	}
      	luoqi(x,y,flag);
      	qizi[x+'_'+y]=flag?'black':'white';

         if(flag){
           if( panduan(x,y,'black') ){
              alert('黑棋赢');
             if(confirm('重新开始？')){
               localStorage.clear();
               qizi = {};
               ctxLuoqi.clearRect(0,0,600,600);
               flag = true;
               return;
         }else{
           canvasLuoqi.onclick  = null;
         }
       }
    }else{
       if( panduan(x,y,'white') ){
         alert('白棋赢');
         if(confirm('重新开始？')){
           localStorage.clear();
          qizi = {};
          ctxLuoqi.clearRect(0,0,600,600);
          flag = true;
          return;
       }else{
          canvasLuoqi.onclick = null;
        }
      }
    }
       

      	flag=!flag;
      	localStorage.data=JSON.stringify(qizi);
        if(!flag){
           localStorage.x=1;//利用数据存储来来指定落子颜色
        }else{
           localStorage.removeItem("x");
        }
       
      }

       var xy2id = function(x,y) {
     return x + '_' + y;
   }
      var panduan = function(x,y,color) {
      var shuju = filter(color);
      var tx,ty,heng = 1;shu = 1; zuoxie= 1;youxie = 1;
      tx=x;ty=y;while( shuju[ xy2id( tx-1,ty ) ]){tx--;heng++};
      tx=x;ty=y;while( shuju[ xy2id( tx+1,ty ) ]){tx++;heng++};
      if(heng >= 5){return true};
      tx=x;ty=y;while( shuju[ xy2id( tx,ty-1 ) ]){ty--;shu++};
      tx=x;ty=y;while( shuju[ xy2id( tx,ty+1 ) ]){ty++;shu++};
      if(shu >= 5){return true};
      tx=x;ty=y;while( shuju[ xy2id( tx+1,ty-1 ) ]){tx++;ty--;zuoxie++};
      tx=x;ty=y;while( shuju[ xy2id( tx-1,ty+1 ) ]){tx--;ty++;zuoxie++};
      if(zuoxie >= 5){return true};
      tx=x;ty=y;while( shuju[ xy2id( tx-1,ty-1 ) ]){tx--;ty--;youxie++};
      tx=x;ty=y;while( shuju[ xy2id( tx+1,ty+1 ) ]){tx++;ty++;youxie++};
      if(youxie >= 5){return true};
    }
   
    var filter = function(color) {
      var r = {};
      for(var i in qizi){
       if(qizi[i]  == color){
          r[i] = qizi[i];
      }
     }
     return r;
   }


    //canvasLuoqi=clearRect(0,0,600,600)
    //如果本地存储中有棋盘数据，读取这些数据并绘制到棋盘中
        if(localStorage.data){
        	qizi=JSON.parse(localStorage.data);
        	for(var i in qizi){
        		var x=i.split("_")[0];
        		var y=i.split("_")[1];
        		luoqi(x,y,(qizi[i]=='black')?true:false)
        	}
        }
    
 document.ondblclick=function(){
 	localStorage.clear();
 	location.reload();
 }
 
 canvasLuoqi.ondblclick=function(e){
    e.stopPropagation();
 }//组织时间流


ctxclock.scale(0.5,0.5)
}