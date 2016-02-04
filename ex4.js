//Javascript

//check that the html is loaded
$(document).ready(function() {
  console.log('ready'),
       $('#penInfo').hide();
       $('#phoneInfo').hide();
       $('#knifeInfo').hide();
       $('#usbInfo').hide();
    $('#ballInfo').hide();
    
    });

$(document).ready(function() {
    
  $('#img1').hover(function() {
    
$(this).attr('src', 'pencolor.png').animate({
    opacity:1
});

  }, function() { 
    
    $(this).attr('src', 'penbw.png').animate({
    opacity: .8

  });

       $('#img4').hover(function() {
    
$(this).attr('src', 'iphonecolor.png').animate({
    opacity:1
});

  }, function() { 
    
    $(this).attr('src', 'iphonebw.png').animate({
    opacity: .8

  });
$('#img5').hover(function() {
    
$(this).animate({
    opacity:1
});

  }, function() { 
    
    $(this).animate({
    opacity: .8

  });
$('#img2').hover(function() {
    
$(this).attr('src', 'usbbw.png').animate({
    opacity:1
});

  }, function() { 
    
    $(this).attr('src', 'usbcolor.png').animate({
    opacity: .8

  });
    
    $('#img3').hover(function() {
    
$(this).attr('src', 'ballcolor.png').animate({
    opacity:1
});

  }, function() { 
    
    $(this).attr('src', 'ballbw.png').animate({
    opacity: .8

  });
  });
  });
  });
  });
  });

 $('#name1').click(function() {
    console.log('click');
        $('#penInfo').fadeToggle();
     return false;
     });
    
$('#name2').click(function() {
    console.log('click');
        $('#phoneInfo').fadeToggle();
    return false;
     });
    
$('#name3').click(function() {
    console.log('click');
        $('#knifeInfo').fadeToggle();
    return false;
     });
     
$('#name4').click(function() {
    console.log('click');
        $('#usbInfo').fadeToggle();
    return false;
     });
$('#name5').click(function() {
    console.log('click');
        $('#ballInfo').fadeToggle();
    return false;
     });

});