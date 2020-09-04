$('button.remove').on('click', function(){
  $(this).parent().velocity({
    translateX: "-800px",
    opacity: 0
  },{
    duration: 500,
    complete: function(elem) {
      $(elem).addClass("deleted");
    },
    easing: [ 0.65, -0.02, 0.72, 0.29 ] 
  });
});
$("#mytable input").change( function() {
  updateQuantity(this);
});

$('.btn-group #db1').click( function() {
  removeItem(this);
});
function recalculateCart()
{
  var subtotal= 0;
  
  /* Sum up row totals */
  $("#myDiv").each(function () {
    subtotal1 = parseFloat($("#t1").text()*80);
      subtotal2 = parseFloat($("#t2").text()*100);
      subtotal3 = parseFloat($("#t3").text()*50);
  });
  
  /* Calculate totals */
  var tax = subtotal * taxRate;
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var total = subtotal + tax + shipping;
  
  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-shipping').html(shipping.toFixed(2));
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}


/* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;
  
  /* Update line price display and recalc cart totals */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });  
}


/* Remove item from cart */
function removeItem(removeButton)
{
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
  });
}

