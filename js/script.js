// $(document).ready(function() {
// 	$('nav a').on('click', function() {
// 		$('nav a').removeClass('current');
// 		$(this).parent().addClass('current');

// 		// set heading text based on category
// 		$('p#heading').text($(this).text());
// 	});
// });

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}