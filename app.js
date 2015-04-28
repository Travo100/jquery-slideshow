//$(document).ready(function(){
  
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

  
  //Make thumbnails for imagres from main-gallery
  function showThumbs(i){
    $('.thumbs-gallery').append(
        $('<li><img src="img/img-'+i+'.jpg"></li>'));
  }

  //Pass the parameter for the length of imgArr array
  for (var i = 1; i < imgArr.length+1; i++){
    showThumbs(i);
  }

  //cache the thumblist li
  var $thumbsList = $('.thumbs-gallery li');
  
  //add the class selected to the first li in the list
  $('.thumbs-gallery li:first-child').addClass('selected');
  
  //make an array of thumbs to use in updateUI
  var thumbsArray = $thumbsList.toArray();

  $thumbsList.on('click', function(e){
    e.preventDefault();
    ct = $(this).index();
    updateUI(ct);
    $(this).addClass('selected').siblings().removeClass('selected');
  });

  function updateUI(ct) {
    $(imgArr[ct]).addClass('selected').siblings().removeClass('selected');
    $(thumbsArray[ct]).addClass('selected').siblings().removeClass('selected');
  }

  function setTimer(time){
    setInterval(function(){
    ct++;
    if (ct%imgArr.length == 0){
      ct = 0;
    }
      updateUI(ct);
    }, time)
  }
  $('#play-button').on('click',function(){
    setTimer(1000);
  });

//});