$(document).ready(function () {

    onDeviceReady();

    function onDeviceReady() {
		
		//quiz
		$(".wrong").click(function () {
			$(this).css("color","red");
        })
		$(".correct").click(function () {
			$(this).css("color","green");
        })

        //page buttons

        $(".pg-photoshop").click(function () {
			window.location = "photoshop.html";
        })
		
		$(".pg-illustrator").click(function () {
            window.location = "illustrator.html";
        })	
		$(".pg-lightroom").click(function () {
            window.location = "lightroom.html";
        })	
		$(".pg-flash").click(function () {
            window.location = "flash.html";
        })	
		$(".pg-home").click(function () {
            window.location = "index.html";
        })	
		$(".pg-quiz").click(function () {
            window.location = "quiz.html";
        })
		
		//pg-fl 
		$(".pg-fl-all").click(function () {
            window.location = "fl-all.html";
        })	
		$(".pg-fl-env").click(function () {
            window.location = "fl-env.html";
        })
		
		//pg-ai 
		$("#img-ai").click(function () {
            window.location = "ai-all.html";
        })	
		$(".pg-ai-select").click(function () {
            window.location = "ai-select.html";
        })	
		$(".pg-ai-draw").click(function () {
            window.location = "ai-draw.html";
        })	
		$(".pg-ai-type").click(function () {
            window.location = "ai-draw.html";
        })	
		$(".pg-ai-paint").click(function () {
            window.location = "ai-paint.html";
        })	
		$(".pg-ai-reshape").click(function () {
            window.location = "ai-reshape.html";
        })	
		$(".pg-ai-draw").click(function () {
            window.location = "ai-draw.html";
        })	
		$(".pg-ai-draw").click(function () {
            window.location = "ai-draw.html";
        })	
		$(".pg-ai-draw").click(function () {
            window.location = "ai-draw.html";
        })	
		
		//pg-lr
		$(".pg-lr-what").click(function () {
            window.location = "lr-what.html";
        })	
		$(".pg-lr-over").click(function () {
            window.location = "lr-over.html";
        })	
		$(".pg-lr-lib").click(function () {
            window.location = "lr-lib.html";
        })	
		$(".pg-lr-dev").click(function () {
            window.location = "lr-dev.html";
        })	
		$(".pg-lr-map").click(function () {
            window.location = "lr-map.html";
        })	
		$(".pg-lr-book").click(function () {
            window.location = "lr-book.html";
        })	
		$(".pg-lr-slide").click(function () {
            window.location = "lr-slide.html";
        })	
		$(".pg-lr-print").click(function () {
            window.location = "lr-print.html";
        })	
		$(".pg-lr-web").click(function () {
            window.location = "lr-web.html";
        })	
		
		
		//photoshop

		$("#img-ps").click(function () {
            window.location = "ps-all.html";
        })	
		$(".pg-ps-selection").click(function () {
            window.location = "ps-selection.html";
        })	
		$(".pg-ps-crop").click(function () {
            window.location = "ps-crop.html";
        })	
		$(".pg-ps-measure").click(function () {
            window.location = "ps-measure.html";
        })	
		$(".pg-ps-retouch").click(function () {
            window.location = "ps-retouch.html";
        })	
		$(".pg-ps-paint").click(function () {
            window.location = "ps-paint.html";
        })	
		$(".pg-ps-navi").click(function () {
            window.location = "ps-navi.html";
        })	
		$(".pg-ps-draw").click(function () {
            window.location = "ps-draw.html";
        })	
    }
});