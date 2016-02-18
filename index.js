window.onload=function(){
	var canvas=document.querySelector("#canvas");
    ctx=canvas.getContext("2d");
    var canvasLuoqi=document.querySelector("#canvas-luoqi");
    ctxLuoqi=canvasLuoqi.getContext("2d");


    for(var i=0;i<15;i++){

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

     var z=[140.5,460.5]
     for(var i=0;i<z.length;i++){
        for(var j=0;j<z.length;j++){
            ctx.beginPath();
            ctx.arc(z[i],z[j],3,0,Math.PI*2);
            ctx.fill();
        }
     }

     
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
       
        var qizi={};
        var flag=true;
        canvasLuoqi.onclick=function(e){
      	var x=Math.round((e.offsetX-20.5)/40);
      	var y=Math.round((e.offsetY-20.5)/40);
      	if(qizi[x+'_'+y]){
      		return;
      	}
      	luoqi(x,y,flag);
      	qizi[x+'_'+y]=flag?'black':'white';
      	flag=!flag;
      	localStorage.data=JSON.stringify(qizi);
      }
    //canvasLuoqi=clearRect(0,0,600,600)

    
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
 }



}