$(document).ready(function(){
  
  var ct = 0;
  var imgArr = $('.main-gallery li').toArray();

  //forward button
  $('#forward').on('click', function(e){
    e.preventDefault();
    ct++;
    if (ct%imgArr.length == 0){
      ct = 0;
    }
    updateUI(ct); 
  });

  //backwards button
  $('#backward').on('click', function(e){
    e.preventDefault();
    ct--;
    if (ct < 0) {
      ct = imgArr.length - 1;
    }
    updateUI(ct);
  });

  for (var i = 1; i < imgArr.length+1; i++){
    showThumbs(i);
  }

  function showThumbs(i){
    $('.thumbs-gallery').append(
        $('<li><img src="img/img-'+i+'.jpg"></li>'));
  }

  var $thumbsList = $('.thumbs-gallery li');

  $thumbsList.on('click', function(e){
    e.preventDefault();
    ct = $(this).index();
    updateUI(ct);
    $(this).addClass('selected').siblings().removeClass('selected');
  });

  if(ct == $thumbsList) {
    alert(ct);
  }

  //$('.thumbs-gallery li').addClass('selected').siblings().removeClass('selected');
  function updateUI(ct) {
    $(imgArr[ct]).addClass('selected').siblings().removeClass('selected');
  }


});