
function startTime() { //live time 
			var today = new Date();
				var h = today.getHours();
					var m = today.getMinutes();
						var s = today.getSeconds();
			m = addzero(m);
			s = addzero(s);
				document.getElementById("time").innerHTML = h + ":" + m + ":" +s;
			var t = setTimeout(startTime,500);
		}
		
function addzero(i){ //sthn to do with startTime();
		
			if (i<10) {i = "0"+i};
				return i ; 
			}

