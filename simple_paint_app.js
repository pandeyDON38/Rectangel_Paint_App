	
	var canvas,context,canvaso,contexto;
	canvas=document.getElementById("canvas");
        context=document.getElementById("canvas2");
        width=canvas.width;
        height=canvas.height;
        canvaso=canvas.getContext("2d");
        contexto=context.getContext("2d");

	
	var fill=false;
	var stroke=true;
	function elements(){
		if (document.getElementById("fill").checked)
			fill=true;
		else
			fill=false;
		
	}
	function clears(){
		canvaso.clearRect(0,0,width,height);
	}
	function color(pic){
		contexto.strokeStyle=pic;
		if (document.getElementById("fill").checked)
			contexto.fillStyle=pic;
	}
	var x,y;
	var hold=false;
	context.onmousedown=function(e) {
		elements();
        	x=e.layerX;
        	y=e.layerY;
        	hold=true;
        	startx=x;
        	starty=y;
        	contexto.beginPath();
        	contexto.moveTo(startx,starty);
	}
	context.onmousemove=function(e) {
        	if (x==null || y==null) {
          		return;
        	}
        	if(hold){
        		x=e.layerX;
        		y=e.layerY;
        		Draw();
        	}
	}
  	context.onmouseup=function(e) {
        	canvaso.drawImage(context,0,0);
        	contexto.clearRect(0,0,context.width,context.height);
        	x=null;
        	y=null;
        	hold=false;
	}
	function Draw(){
		
			contexto.clearRect(0,0,width,height);
			if(stroke)
				contexto.strokeRect(startx,starty,x-startx,y-starty);
			if(fill)
				contexto.fillRect(startx,starty,x-startx,y-starty);
		
		
	}
