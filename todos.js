$(".todoinput").keypress(function(event) {
	if(event.which === 13) {
		if($(this).val()==="") return;
		$("ul").prepend("<li><b><span class='left'><i class='fa fa-trash'></b></i></span> "+"<span class='text'>"+$(this).val()+"</span>"+"<span class='right'><i class='fa fa-pencil'></li>");
		$(this).val("");//this==todoinput
	}
});

$(".fa-plus").on("click", function() {
	$("input").slideToggle();
});

$("ul").on("click", "span.text", function(event) {
	$(this).toggleClass("completed");
	
});


$("ul").on("click", "span.left", function(event) {
	$(this).parent().fadeOut("slow", function(){//this=span.left
		$(this).parent().remove();
	});

	
});


$("ul").on("click", "span.right", function(event) {
	var parent = $(this).parent();//le champs text qui est initial
	var oldVal = parent.text();
	parent.html("<input type='text' class='editinput'>");//le champs text qui s'affiche
	$(".editinput").keypress(function(e) {
		if(e.which === 13) {
			if($(this).val() === "") {
				parent.html("<span class='left'><b><i class='fa fa-trash'></i></b></span><span class='text'>  "+oldVal+"</span><span class='right'><i class='fa fa-pencil'>");	
			}
			else {
				var newVal = $(this).val();
				parent.html("<span class='left'><b><i class='fa fa-trash'></b></i></span><span class='text'>  "+newVal+"</span><span class='right'><i class='fa fa-pencil'>");
			}
		}
		e.stopPropagation();
	});
	event.stopPropagation();
});