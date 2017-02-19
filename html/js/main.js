
$(function() {

  //Show mobile contact popup
  //$("#contact-us-mobile-icon").on( "click", showMobileContacts );

  $('input[type=range].range').on('input', function (e) {
    e.preventDefault();
    //$(this).trigger('change');
    console.log("range changed " + $(this).val() );
    $("#display-range1a").html($(this).val())
    $("#display-range1b").html($(this).val())
    $("#display-range2").html($(this).val())
  })


  $('.js-minus').on('click', function (e) {
    e.preventDefault();
    var newVal = $('input[type=range].range').val()-1
    if(newVal<0) return false;
    $('input[type=range].range').val(newVal)
    $("#display-range1a").html(newVal)
    $("#display-range1b").html(newVal)
    $("#display-range2").html(newVal)
    return false
  });

  $('.js-plus').on('click', function (e) {
    e.preventDefault();
    var max = $('input[type=range].range').prop('max')
    var newVal = parseInt($('input[type=range].range').val())+1
    console.log("newVal",newVal,max);
    if(newVal>max) return false;
    $('input[type=range].range').val(newVal)
    $("#display-range1a").html(newVal)
    $("#display-range1b").html(newVal)
    $("#display-range2").html(newVal)
    return false
  });


  $('.js-faq').on('click', function (e) {
    e.preventDefault();
    // .slideToggle
    var answerId = $(e.target).data("answer-id")
    console.log("js-faq",answerId);
    $("#" + answerId).slideToggle()
  })
  //
});
