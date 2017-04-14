$(function(){

	function update_Output()
	{
		$("#output_Pannel").contents().find("html").html( "<html><head><style type='text/css'>" + $("#css_Pannel").val() + 
			"</style></head><body>" + $("#html_Pannel").val() + "</body></html>");

		document.getElementById("output_Pannel").contentWindow.eval($("#javascript_Pannel").val());
	}
	 
	$(".toggle_button").hover(
	 	function(){
	 		$(this).addClass("highlighted_button");
	 	}
	 	,
	 	function(){
	 		$(this).removeClass("highlighted_button");
	 	}
	 );

	$(".toggle_button").click(
	 	function(){
	 		$(this).toggleClass("active");
	 		$(this).removeClass("highlighted_button");

	 		var pannel_Id=$(this).attr("id") + "_Pannel";
	 		$("#"+pannel_Id).toggleClass("hidden");

	 		var noOfActivePannels = 4 - $(".hidden").length;

	 		$(".pannel").width($(window).width() /noOfActivePannels - 7);
	 	}
	 );

	$(".pannel").height($(window).height() - $("#header").height() - 18);
	
	$(".pannel").width($(window).width() /2 - 7);

	update_Output();

	$("textarea").on('change keyup paste', function(){
		update_Output();	
	});


	
});


