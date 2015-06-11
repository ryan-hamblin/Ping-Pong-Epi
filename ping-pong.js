var pongFetcher = function(){

	var list = document.getElementById("list");
	var n = document.getElementById("pong-input");
	var number = n.elements[0].value;
	var results = "";

	for(var i = 1; i < number;  i++) {

	    results += "<li>";
	    if (i % 15 === 0) {
	        results += "Ping-Pong!";
	    }
	    else if (i % 3 === 0) {
	        results += "Ping";
	    }
	    else if (i % 5 === 0) {
	        results += "Pong";
	    }
	    else {
	        results += i;
	    }
	    results += "</li>";

	}

	list.innerHTML += results;
};