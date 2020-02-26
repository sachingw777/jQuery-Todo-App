 //Strikethrough specific todos with click 
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on x to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//input
$("input").keypress(function(event){
	if(event.which === 13){
		var text = $(this).val();
		//create a new li and add to ul
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + text + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input").fadeToggle();
});