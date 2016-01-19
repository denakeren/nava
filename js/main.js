$(document).ready(function(){

	/* menu drop */
	/* by dna */

	$('.submenu-wrap').hide(); // hide submenu wrap
	$('.menu li a').mouseover(function(){
		var v=$(this).data("link"); //initialize name of link

		//check if menu has dropdown or not
		if(v==""){ //if no
			$('.submenu-wrap').slideUp(200); //slide up the submenu
		}
		else{ //if yes
			$('.submenu-wrap').css({ //slide down the submenu
				"height":"70px"
			}).slideDown(200);
		}
		$(".submenu-wrap").find("[data-sub='" + v + "']").addClass('active'); //make submenu active

	});

	// change submenu based on hover menu
	$('.menu li a').hover(function(){		
		var v=$(this).data("link"); //initialize name of link

		$(".submenu-wrap .sub-menu").removeClass('active'); //remove class active for other
		$(".submenu-wrap").find("[data-sub='" + v + "']").addClass('active'); //add class active to show current link
	});

	//hide submenu
	$('.nav-wrap').mouseleave(function(){
		$('.submenu-wrap').slideUp(200);

	});

});