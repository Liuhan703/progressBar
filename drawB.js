
function drawB(){
	
	var sc = document.getElementById("sc").value;
	var ctx = document.getElementById("canv").getContext("2d");
	var cHeight = document.getElementById("canv").height;
	var cWidth = document.getElementById("canv").width;
	ctx.clearRect(0,0,cWidth,cHeight);

	ctx.save();//使得ctx的移动旋转只对save 和restore之间有效 便于复用

	ctx.translate(cWidth/2,cHeight/2);
	ctx.rotate(11*Math.PI/12);//移动旋转到中心
	
	ctx.beginPath();
	ctx.strokeStyle = "#eee"; 
	ctx.lineWidth = 15;
	ctx.arc(0,0,9*cWidth/20,0,7*Math.PI/6,false);
	ctx.stroke();
	ctx.closePath();
	ctx.restore();

	drawText("00",0,-3*cWidth/8,-7*Math.PI/12,14);//写字
	drawText("10",-7,-3*cWidth/8,-7*Math.PI/15,14);//写字
	drawText("严重",-14,-3*cWidth/8,-7*Math.PI/20,14);//写字
	drawText("30",-7,-3*cWidth/8,-7*Math.PI/30,14);//写字
	drawText("40",-7,-3*cWidth/8,-7*Math.PI/60,14);//写字
	drawText("注意",-14,-3*cWidth/8,0,14);//写字
	drawText("60",-7,-3*cWidth/8,7*Math.PI/60,14);//写字
	drawText("一般",-14,-3*cWidth/8,7*Math.PI/30,14);//写字
	drawText("80",-7,-3*cWidth/8,7*Math.PI/20,14);//写字
	drawText("良好",-21,-3*cWidth/8,7*Math.PI/15,14);//写字
	drawText("100",-21,-3*cWidth/8,7*Math.PI/12,14);//写字




	var i = 0,max=900,pre=max*sc;
	//画 内圈
	for(;i<max;i++){
			draw(7*cWidth/20,2);
	}
	i = 0;
	var color;
	var Int = setInterval(function(){
			draw(9*cWidth/20,15,i);
			//var color = gradient("#FF4442","#42E9B6",max,i);
			ctx.clearRect(cWidth/2-48,cHeight/2-52,96,104);
			
			var num = ("0"+parseInt(i*100/max)).slice(-2);//显示两位数
			drawText(num,-40,30,0,80,color);//总得分
			drawText("健康状况",-48,-50,0,24,color);//健康状况
			i++;
			if(i>=pre){
			Int = clearInterval(Int);
			}
	},1);




	function draw(r,linewidth){//画圆环  半径 粗细  推荐颜色：#4AC5F8 蓝色 #42E9B6 绿色 #FF4442 红色 #F7D253 黄色
	
			ctx.save();
			ctx.translate(cWidth/2,cHeight/2);
			ctx.rotate(11*Math.PI/12);//移动旋转到中心
			ctx.beginPath();
			
			if(i<=max/3){
				color = gradient("#FF4442","#F7D253",max/3,i);
			}
			else if(i>max/3&&i<=2*max/3){
				color = gradient("#F7D253","#4AC5F8",max/3,i-max/3);
			}
		//	else if(i>2*max/3&&i<=max*3){
			//	var color = gradient("#4AC5F8","#42E9B6",max/4,i);
			//}
			else if(i>2*max/3){
				color = gradient("#4AC5F8","#42E9B6",max/3,i-2*max/3);
			}
			//if(i<=max/2){
		//var color = gradient("#FF4442","#2EDA84",max,i);
			//}
			//else if(i>max/2&&i<=max){
				//var color = gradient("#4AC5F8","#FFFF00",max,i);
			//}
			
			
			ctx.strokeStyle = color; 
			ctx.lineWidth = linewidth;
			ctx.arc(0,0,r,(7*i*Math.PI/max/6),(7*(i+1)*Math.PI/max/6),false);
			ctx.stroke();
			ctx.closePath();

			ctx.restore();
	}	

	function drawText(text,x,y,deg,fontsize,color){ //文字、x、y、角度
			ctx.save();
			ctx.translate(cWidth/2,cHeight/2);
			ctx.rotate(deg);//移动旋转到中心
			ctx.beginPath();
			
			
			if(color){
				ctx.fillStyle = color; 
			}
			else{
				ctx.fillStyle = "#ccc"; 
			}
			
			ctx.font = fontsize+"px Calibri";
			ctx.fillText(text,x,y);
			ctx.fill();
			ctx.closePath();

			ctx.restore();
	}

	}
	





function gradient(colorStart,colorStop,precision,i){//初始颜色，结束颜色，划分精度，当前进度
	//颜色hex转换成rgb
	colorStart = colorStart.substring(1);
	colorStop = colorStop.substring(1);//提取后面值
	var sR = parseInt(colorStart.substring(0,2),16);
	//console.log(sR);
	var sG = parseInt(colorStart.substring(2,4),16);
	var sB = parseInt(colorStart.substring(4,6),16);
	var spR = parseInt(colorStop.substring(0,2),16);
	
	var spG = parseInt(colorStop.substring(2,4),16);
	var spB = parseInt(colorStop.substring(4,6),16);//转换成数字


	var R = parseInt(sR+(spR - sR)*i/precision);

	var G = parseInt(sG+(spG - sG)*i/precision);
	var B = parseInt(sB+(spB - sB)*i/precision);
	//console.log("R:"+R+",G:"+G+",B:"+B);

	return "RGB("+R+","+G+","+B+")"

}

