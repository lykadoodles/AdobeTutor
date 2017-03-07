$(document).ready(function () {

    onDeviceReady();

    function onDeviceReady() {

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
		
		//pg-fl 
		$(".pg-fl-all").click(function () {
            window.location = "fl-all.html";
        })	
		
		//pg-ai 
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