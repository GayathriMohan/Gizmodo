$(document).ready(function() {
    $('#logo-division').mouseenter(function() {
        $('#follow-gizmodo').show();
    });
    $('#logo-division').mouseleave(function() {
        $('#follow-gizmodo').hide();
    });
});

var articlescroller = [
	{ src:"https://i.kinja-img.com/gawker-media/image/upload/s--w3lWVLTP--/c_fill,fl_progressive,g_north,h_264,q_80,w_470/zcatqaexihnlr9lcm3za.jpg" , heading: "The First Reviews of Arrival Are In and They're Out of This World (Rimshot)"}, 
	{ src:"https://i.kinja-img.com/gawker-media/image/upload/s--QC0nByj_--/c_fill,fl_progressive,g_north,h_264,q_80,w_470/hgdgbqnh0nfc1lhhjqc7.jpg" , heading:"With a Single Touch, the Predator Completely Disappears From This Incredible Poster" }, 
	{ src:"https://i.kinja-img.com/gawker-media/image/upload/s--c-FX7RX7--/c_fill,fl_progressive,g_north,h_264,q_80,w_470/eeueckhlkvszyanmem2x.jpg", heading:"Apple's Decision to Cast Jessica Alba in Its Reality Show Is an Outrage" }, 
];

$("#scroller-template").tmpl(articlescroller).appendTo(".article-scroller-wrapper");

$("#bret").mouseenter(function() {
$(".hide").hide();
$("#first-preview").show();
});
$("#phylis").mouseenter(function() {
$(".hide").hide();
$("#second-preview").show();
});
$("#led").mouseenter(function() {
$(".hide").hide();
$("#third-preview").show();
});