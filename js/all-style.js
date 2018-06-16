$(document).ready(function(){
	// For Mobile Menu
	$("#menu-icon").click(function(){
		$("header .custnav ul.menus").slideToggle();
	});
	function nav(){
	    if ($(window).width() > 991) {
	        $("header .custnav ul.menus").css({"display":"block"});
	    }
	    else
	    {
	        $("header .custnav ul.menus").css({"display":"none"});
	    }
	}
	$(window).resize(function() {
		setTimeout(function(){nav();},0);
	});
	$("#aboutjordan .dropoptions .dropselect").click(function(){
		$("#aboutjordan .dropoptions .nav-tabs2").slideToggle();
	});
	$("#aboutjordan .dropoptions .nav-tabs2 > li > a").click(function(){
		$("#aboutjordan .dropoptions .nav-tabs2").slideUp();
	});
});
