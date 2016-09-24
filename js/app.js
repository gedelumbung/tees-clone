var clothesType = 'men';
var clothesColor = 'red';
var currentSide = 'front';

function init(){
  closeSidebarContent();
  loadDefaultTemplate();
  initCanvas();
}

function initCanvas(){
  $('#front-canvas').show();
  $('#back-canvas').hide();

  var frontSide = new fabric.Canvas("front-canvas");
  var backSide = new fabric.Canvas("back-canvas");
}

function loadDefaultTemplate(){
  var bgTemplate = '<img src="images/clothes/'+clothesType+'/'+clothesColor+'-'+currentSide+'.png">';
  $('#bg-template').html(bgTemplate);
}

function closeSidebarContent(){
  $('#sidebar-content-product').hide();
  $('#sidebar-content-text').hide();
  $('#sidebar-content-shape').hide();
  $('#sidebar-content-image').hide();
}

$('#btn-close-sidebar-product, #btn-close-sidebar-text, #btn-close-sidebar-shape, #btn-close-sidebar-image').click(function(){
  closeSidebarContent();
});

$('#btn-product').click(function(){
  closeSidebarContent();
  $('#sidebar-content-product').show();
});

$('#btn-text').click(function(){
  closeSidebarContent();
  $('#sidebar-content-text').show();
});

$('#btn-shape').click(function(){
  closeSidebarContent();
  $('#sidebar-content-shape').show();
});

$('#btn-image').click(function(){
  closeSidebarContent();
  $('#sidebar-content-image').show();
});

$('#clothes_type').change(function(){
  clothesType = $(this).val();
  if(clothesColor !== ''){
    var bgTemplate = '<img src="images/clothes/'+clothesType+'/'+clothesColor+'-'+currentSide+'.png">';
    $('#bg-template').html(bgTemplate);
  }
});

$('#clothes_color').change(function(){
  clothesColor = $(this).val();
  if(clothesType !== ''){
    var bgTemplate = '<img src="images/clothes/'+clothesType+'/'+clothesColor+'-'+currentSide+'.png">';
    $('#bg-template').html(bgTemplate);
  }
});

$('#btn-flip').click(function(){
  $('#'+currentSide+'-canvas').hide();
  if(currentSide === 'back'){
    currentSide = 'front';
  }
  else{
    currentSide = 'back';
  }
  $('#'+currentSide+'-canvas').show();

  var bgTemplate = '<img src="images/clothes/'+clothesType+'/'+clothesColor+'-'+currentSide+'.png">';
  $('#bg-template').html(bgTemplate);
  
});

$("#btn-add-text").click(function(){
  var input_text = $("#txt-add-text").val();

  if(input_text !== '')
  {
      var customText = new fabric.Text(input_text, {
          fontFamily: $('#font_type').val(),
          left: 10,
          top: 10,
          fontSize: 20,
          textAlign: $('#text_align').val(),
          fill: $('#text_color').val()
      });

      if($isFront){
          side_1.add(customText);
          $counterFrontSide++;
      }
      else{
          side_2.add(customText);
          $counterBackSide++;
      }
      $('#text_input').val('');
      newTextCounter++;
  }
});

init();