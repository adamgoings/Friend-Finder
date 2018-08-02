$(".submit").on("click", function (event) {
  event.preventDefault();
  //checking required fields
  if($('#friendName').val === '' || $('#friendPhoto').val === '') {
      event.preventDefault();
      alert('Some required fields are empty!');
  } else {
      event.preventDefault();
  }
  //grabbing user input
  var newFriend = {
      name: $("#friendName").val().trim(),
      photo: $("#friendPhoto").val().trim(),
      scores: [
          $('#q1').val(),
          $('#q2').val(),
          $('#q3').val(),
          $('#q4').val(),
          $('#q5').val(),
          $('#q6').val(),
          $('#q7').val(),
          $('#q8').val(),
          $('#q9').val(),
          $('#q10').val()]
  };
  console.log(newFriend);
  $.post('/api/friends', newFriend, result => {
      $('#matchName').text(result.name);
      $('#matchPic').attr('src', result.photo);
      $('#modal1').attr('style', 'display: inline-block');
      console.log("result: " + result);
      console.log(result.name);
  });
      });
      $('#btnClose').on("click", event => {
      event.preventDefault();
      $('#modal1').attr('style', 'display: none');
      $('#friendName').val('');
      $('#friendPhoto').val('');
      $('#q1').val('');
      $('#q2').val('');
      $('#q3').val('');
      $('#q4').val('');
      $('#q5').val('');
      $('#q6').val('');
      $('#q7').val('');
      $('#q8').val('');
      $('#q9').val('');
      $('#q10').val('');
});
