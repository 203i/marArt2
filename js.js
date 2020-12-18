
function startTime() {
			var today = new Date();
				var h = today.getHours();
					var m = today.getMinutes();
						var s = today.getSeconds();
			m = addzero(m);
			s = addzero(s);
				document.getElementById("time").innerHTML = h + ":" + m + ":" +s;
			var t = setTimeout(startTime,500);
		}
		
		function addzero(i){
		
			if (i<10) {i = "0"+i};
				return i ; 
			}

function move(){
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