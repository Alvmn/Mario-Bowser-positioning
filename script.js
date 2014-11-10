//La posición absoluta de Mario sera xPos +8; yPos + 8. La de Bowser xPos +82; yPos + 9. 
//Lo anterior ha de tenerse en cuenta para conseguir la posición absoluta y además se empleará para la
//función hascrashed

$(document).ready(function() {
	//Here is the dragger function
	var dragger = function(objectid, positionidnumber) {
		$(objectid).draggable(
		    {
		        drag: function(){
		            var offset = $(this).offset();
		            var xPos = offset.left;
		            var yPos = offset.top;
		            $("#mposition" + positionidnumber.toString()).text('Character' + positionidnumber.toString() + ':   ' + 'x: ' + xPos + 'y: ' + yPos);
		            
		        }
		    });
	};
	dragger("#mario", 1);
	dragger("#bowser", 2);
//Here is the positioner function
	var positioner = function(objectid, idnumber) {
		var theid = idnumber.toString();
		$("#buttonposition" + theid).click(function(){

			var tleft = parseInt($("input[id=left" + theid + "]").val());
			var ttop = parseInt($("input[id=top" + theid + "]").val());
			if (tleft && ttop) {
				$(objectid).css({left: tleft,top: ttop});
				$('#mposition' + theid).text('Character' + theid + ':   ' + 'x: ' + tleft + 'y: ' + ttop);
			};
		});

	}
	
	positioner("#mario", 1);
	positioner("#bowser", 2);

	$("button" || "img").mouseup(function(){
		hascrashed("#mario","#bowser");
	});

});
var getcoordinates = function(objectid) {
		var offset = $(objectid).offset();
		var xPos = offset.left;
		var yPos = offset.top;
		var coordinates = [xPos, yPos];
		return coordinates ;
	}
	var hascrashed = function (objectid1, objectid2) {
		if(getcoordinates(objectid1)[0] - 8 == getcoordinates(objectid2)[0] - 82 && getcoordinates(objectid1)[1] -8 == getcoordinates(objectid2)[1] - 9){
			alert(objectid1 + " and " + objectid2 + " have crashed!!")
		};

	};