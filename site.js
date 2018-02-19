$('html').removeClass('nojs').addClass('js');

$('.inputs li').on('click', function() {
  $(this).find('input').focus();
});

$('#email').on('keyup', function(){
  var email = {
    val: $(this).val(),
    pat: /^[^\s@]+@[^\s@]+$/
  };
  var name = $('#name').val();
  /* tested and had problems */
  // var birthday = $('#birthday').val();
  if(name !== "" && (email.pat).test(email.val)) {
    $('input[type="submit"]').addClass('show').fadeIn(5000);
  }
});
