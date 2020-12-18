function draw2()//animation drawing 2 lines purple and red on canvas 
	{ 


		
		var pos = 0  ; //element position 
			var pos2 = 200  ; // element2 position
			var elem = Array.from(document.getElementsByClassName("animation")); //aray.from let us use foreach function so we can work on all classes same time live  
		
			var  i = 0 ;
			
				
				elem.forEach(anim) // for all elements in elem array 
						function anim(element){ //the element is an class(n) so if we have aray with 2 classes it will do it for elem 1 then elem 2 as n 
							
						
					var id = setInterval( klatka , 50 ); //  setInterval (odswieza element) klatka (element) 5(czas milisek)
					
					var ctx = element.getContext("2d");
				
				
				function klatka(){
			 
						if(pos!=160){
							pos++;
							ctx.beginPath();
							ctx.strokeStyle="red";
							ctx.moveTo(pos,0);
							ctx.lineTo(pos,200);
							ctx.stroke(); 
							
						}
						else{
			 
						
							clearInterval(id);
							
						
						
							
						}
					} 
					
				}
						
				
				
	}
	function draw()//animation drawing 2 lines purple and red on canvas 
	{ 


		
		var pos = 0  ; //element position 
			
			var elem = Array.from(document.getElementsByClassName("animation")); //aray.from let us use foreach function so we can work on all classes same time live  
		
			var  i = 0 ;
			
				
				elem.forEach(anim) // for all elements in elem array 
						function anim(element){ //the element is an class(n) so if we have aray with 2 classes it will do it for elem 1 then elem 2 as n 
							
						
					var id = setInterval( klatka , 50 ); //  setInterval (odswieza element) klatka (element) 5(czas milisek)
					
					var ctx = element.getContext("2d");
				
				
				function klatka(){
			 
						if(pos!=400){
						pos++;
							ctx.beginPath();
							ctx.strokeStyle="purple";
							ctx.moveTo(pos,110);
							ctx.lineTo(pos,200);
							ctx.stroke(); 
							
							
						}
						else{
			 
						
							clearInterval(id);
							
						
						
							
						}
					} 
					
				}
						
				
				
	} 
					
				function move(){ // is moving div 
			var pos = 0  ; <!-- pozycja w jakiej znajduje sie element
			var elem = document.getElementById("animation1"); <!-- element do ktorego pozycje zmieniamy
			var id = setInterval( klatka , 5 ) <!--  setInterval (odswieza element) klatka (element) 5(czas milisek)
			 function klatka(){
			 
					if ( pos == 230 ) {
						
						clearInterval(id);
					} 
				
					else {
						
						pos++;
					
							elem.style.left = pos + "px";
					
					}
				}
			 
		}
		

						
				
				
	
	
