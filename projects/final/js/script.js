$(document).ready(function(){
var myQuote = $('#my_quote');
myQuote.hide();
$('.button').click(function(){
myQuote.show(500);
});
});

<script type="text/javascript">
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();	
		} else {
			$('#toTop').fadeOut();
		}
	});
 
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});	
});
</script>


<script>
  $(document).ready(function(){
    $('#sidebar').stickyMojo({footerID: '#footer', contentID: '#main'});
  });