winCount = 0
guessWord = "javascript"

if (guessWord.includes(" ")) {
  $('.input').css({height: '100px'})
}

description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ducimus odit nulla itaque odio ipsa perspiciatis!"

hint1Text = "This is your first hint"
hint2Text = "This is your second hint"
hint3Text = "This is your third hint"

$(document).ready(function() {

  // Indicate numer of characters
  $('.num-char').text(guessWord.length)
  $('.input').keyup(function() {
    $('.num-char').text(guessWord.length - $('.input').val().length)
  })

  //Correct Answer
  $('.input').keyup(function() {
    if (guessWord === $('.input').val()) {
      $('.input').css({outline: "solid green"})

      winCount += 1;

    }
  })

  //Hints
  $('.hint1').children('.hint-inner').children
  ('.hint-back').text(hint1Text)
  $('.hint2').children('.hint-inner').children('.hint-back').text(hint2Text)
  $('.hint3').children('.hint-inner').children('.hint-back').text(hint3Text)
  $('.hint1').on('click', function(e) {
    e.target.closest('.hint1').classList.add('reveal')
  })

  // Hints Events
  $('.hint1').on('click', function(e) {
    e.target.closest('.hint1').classList.add('reveal')
  })
  // Green for Correct Answer & Description
  $('.input').keyup(function() {
    if (guessWord === $('.input').val()) {
      $('.input').css({outline: "solid green"})
    }
  })
  
  $('.hint2').on('click', function(e) {
    e.target.closest('.hint2').classList.add('reveal')
  })

  $('.hint3').on('click', function(e) {
    e.target.closest('.hint3').classList.add('reveal')
  })

  $('.start-btn').on('click', function() {
    $(this).fadeOut("fast")
  })

})