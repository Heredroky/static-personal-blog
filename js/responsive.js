$(document).ready(function(){
	let counter = 1
	$('.menu_bar').on("click", () => {
		if(counter == 1){
			$('#header-container').animate({
				left: '50%'
			})
			counter = 0
		} else {
			$('#header-container').animate({
				left: '100%'
			})
			counter = 1
		}
	})
})