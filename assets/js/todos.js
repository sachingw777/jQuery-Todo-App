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

