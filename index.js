window.onload=function(){
	  var canvas=document.querySelector("#canvas");
    ctx=canvas.getContext("2d");
    var canvasLuoqi=document.querySelector("#canvas-luoqi");
    ctxLuoqi=canvasLuoqi.getContext("2d");
    var ROW=15;

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



}