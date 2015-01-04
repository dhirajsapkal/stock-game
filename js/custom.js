$(function(){
  $('.ripple').materialripple();
});

function togglebuy() {
  var buybutton = document.getElementById('buybutton');
  buybutton.innerHTML = "Buy";
}
function togglesell() {
  var buybutton = document.getElementById('buybutton');
  buybutton.innerHTML = "Sell";
}

function toggleview() {
  if($("#viewmore").text()=='View more')
  {
    $("#viewmore").text('View less')
  }
  else
  {
    $("#viewmore").text('View more')
  }
}

var lastScrollTop = 0;
$(window).scroll(function () {

    var st = $(this).scrollTop();
  if (st > lastScrollTop){
    $(".sticky-bottom").slideUp();
  }
  else
  {
    $(".sticky-bottom").slideDown();
  }
   lastScrollTop = st;

});

$('.click').click(function() {
    // get the contents of the link that was clicked
    var linkText = $(this).text();

    // replace the contents of the div with the link text
    $('#content-container').html(linkText);

    // cancel the default action of the link by returning false
    return false;
});


// function stockcost()
// {
//   document.getElementById('totalcost').innerHTML = $("#stockspinner").val()*800;
// }

$("input").change(function(){
    document.getElementById('totalcost').innerHTML = $("#stock-spinner").val()*800;
});

