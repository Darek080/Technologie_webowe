$(document).ready(function() {
	$("#bt1").click(function() {
        var outUnit = "mm"
		calc(outUnit);
	});
	$("#bt2").click(function() {
        var outUnit = "m"
		calc(outUnit);
	});
	$("#bt3").click(function() {
        var outUnit = "km"
		calc(outUnit);
	});
	function calc(unit){
		var inValue = $("#inputValue").val();
        var inUnit = $("#inputUnit").val();
        var outUnit = unit;

        var units = {
			mm: 0.001,
            m: 1,
            km: 1000
            
        };
        var outValue = inValue * units[inUnit] / units[outUnit];
		$("#message").text(+ inValue + " " + inUnit + " = " + outValue + " " + outUnit );
	}
});