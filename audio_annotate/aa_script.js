/**
 * @file
 * Drupal behaviors for the audio annotate module.
 * This is defintly based on jQuery "do less - appear to be doing more" theory :).
 */

(function ($) {
  Drupal.behaviors.audioAnnotate = function (context) {
    // If these is an anchor, show the comment box.
    if(window.location.hash) {
      var value = window.location.hash;
      var vals = value.split('-');
      var cid = vals[1];
      if(vals[0]=='#comment'){
        $('.aa-com_box#cid-'+cid).fadeIn();
        $('.com_bubble#cid-'+cid).fadeIn();
      }
      if(vals[0]=='#fid'){
        $('.aa-com_box#cid-'+cid).fadeIn();
        $('.com_bubble#cid-'+cid).fadeIn();
      }
    }
    // Load the comment form by ajax.
    $(".add_annotation").click(function(){
      // Get the neccsssaries.
      var aid = $(this).attr("aid");
      var vals = aid.split('-');
      var nid = vals[0];
      var fid = vals[1];
      // Load the comment for for that nid.
      $('#'+aid+' .anno-formarea').load('/audio-annotate/form/comment/'+nid+'/'+fid+' .aa-com_form');
      // Fade in the form.
      $('#'+aid+' .anno-formarea').show();
      // Bring in the dragger.
      $('#'+aid+' .annobox').show();
      // Disbale the other comments.
      $('#'+aid+' .imageandbox').addClass('disabled');
      $('#'+aid+' .aa-com_box').stop(true,true).fadeOut('fast');
      // Create the dragger.
      $('.annobox').resizable({
        containment: $('#'+aid+' .imageandbox'),
        handles: "e,w",
        resize: function(event, ui) {
          var aid = $(this).attr("aid");
          // Get the left and width as percetages against the size of the parent.
          var parent_width = parseInt($('#'+aid+' .imageandbox').css('width'));
          var aaright = ((ui.position.left + ui.size.width) / parent_width) * 100;
          var aaleft = (ui.position.left / parent_width) * 100;
          var aawidth = (aaright - aaleft);
          // Only sned to form if within boundries.
          if(aaright<=100 && aaleft>=0){
            $('#'+aid+' .anno-formarea input[id^=edit-aa-width]').val(aawidth);
          }
          if(aaleft>=0){
            $('#'+aid+' .anno-formarea input[id^=edit-aa-left]').val(aaleft);
          }
          // Bring the form along for fun.
          $('#'+aid+' .anno-formarea').css('marginLeft',$(this).position().left);
        }
      });
    });
    // Close the form.
    $(".aa-com_form_close").live('click',function(){
      // Get the nid.
      var aid = $(this).attr("aid");
      // Hide the form.
      $('#'+aid+' .anno-formarea').fadeOut();
      // Hide the newly created drag box.
      $('#'+aid+' .annobox').fadeOut();
      // Enable the old comment boxes.
      $('#'+aid+' .imageandbox').removeClass('disabled');
      // Show the commboxes.
      $('#'+aid+' .aa-com_box').fadeIn();
    });
    // Highlight the boxes when over them.
    $(".aa-com_box").hover(
      function(){
        // This has to loop in IE7 to work, sorry.
        $(this).siblings().stop(true,true).css("background-image", "none");
        $(this).siblings().find('a.anchor').stop(true,true).css("background-color", "transparent");
        $(this).addClass('overbox');
        var cid = $(this).attr('id');
        $(".com_bubble").each(function(){
          if($(this).attr('id')==cid){
            $(this).show();
          }
        });
      },
      function(){
        // This has to loop in IE7 to work, sorry.
        var backimage = $(this).css("background-image");
        $(this).siblings().stop(true,true).css("background-image", backimage);
        $(this).siblings().find('a.anchor').stop(true,true).css("background-color", "gray");
        $(this).removeClass('overbox');
        var cid = $(this).attr('id');
        $(".com_bubble").each(function(){
          if($(this).attr('id')==cid){
            $(this).hide();
          }
        });
      }
    );
    // Also keep the bubble in sight when on it.
    $(".com_bubble").hover(
      function(){
        $(this).show();
        var cid = $(this).attr('id');
        $(".aa-com_box").each(function(){
          if($(this).attr('id')==cid){
            $(this).show();
          }  else{
            $(this).hide();
          }
        });
      },
      function(){
        $(this).hide();
        var cid = $(this).attr('id');
        $(".aa-com_box").each(function(){
          if($(this).attr('id')==cid){
          }else{
            $(this).show();
          }
        });
      }
    );
    // Fadin in comment and goto using anchors.
    $(".goto-comment").click(function(){
      var value = $(this).attr("rel");
      var vals = value.split('-');
      var cid = vals[1];
      // Load the box for for that comment.
      $('.aa-com_box').hide();
      $('.com_bubble').hide();
      $('.aa-com_box#cid-'+cid).fadeIn();
      $('.com_bubble#cid-'+cid).fadeIn();
    });
  };
})(jQuery);
