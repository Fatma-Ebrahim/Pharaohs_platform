// open & close cart 
var mycart = document.querySelector('.mycart');

function open_cart(){
    mycart.classList.add("active")
}
function close_cart(){
    mycart.classList.remove("active")
}


/// دالة لإضافة العنصر إلى عربة التسوق
function addToCart(element) {
    var productElement = element.closest('.product'); // العنصر الأب للزر الذي تم النقر عليه
    var productName = productElement.querySelector('.name').textContent;
    var productPrice = parseInt(productElement.querySelector('.price').textContent);
    var productImage = productElement.querySelector('img').getAttribute('src'); // الحصول على مسار الصورة
    
    var cartItemsContainer = document.querySelector('.items-cart');
    
    // إنشاء عنصر جديد لعربة التسوق
    var cartItem = document.createElement('div');
    cartItem.classList.add('itemcart');
    // إضافة الصورة مع الاسم والسعر
    cartItem.innerHTML = '<img src="' + productImage + '">' +
                        '<p>' + productName + ' - ' + productPrice + '</p>' +
                        '<span class="remove-item"><i class="fa-solid fa-trash-can"></i></span>'; // إضافة أيقونة سلة المهملات
    
    // إضافة العنصر إلى عربة التسوق
    cartItemsContainer.appendChild(cartItem);
    
    // تحديث عدد العناصر في عربة التسوق
    updateCartCount();
    
    // إضافة معالج النقر لأيقونة سلة المهملات
    var removeItemButton = cartItem.querySelector('.remove-item');
    removeItemButton.addEventListener('click', function() {
        removeCartItem(cartItem);
    });
}

// دالة لحذف العنصر من عربة التسوق
function removeCartItem(item) {
    item.remove(); // حذف العنصر
    updateCartCount(); // تحديث عدد العناصر والمجموع الإجمالي
}

// دالة لتحديث عدد العناصر في عربة التسوق
function updateCartCount() {
    var cartItems = document.querySelectorAll('.itemcart'); // العناصر في عربة التسوق
    var itemCount = cartItems.length; // عدد العناصر
    
    var countElement = document.querySelector('.count'); // عنصر العداد
    countElement.textContent = itemCount; // تحديث عدد العناصر في العنصر
    
    var totalPrice = 0; // المجموع الإجمالي للمشتريات
    
    // حساب مجموع الأسعار
    cartItems.forEach(function(item) {
        var priceText = item.querySelector('p').textContent.split(' - ')[1]; // جزء السعر من نص العنصر
        var price = parseInt(priceText); // تحويل السعر إلى رقم صحيح
        totalPrice += price; // إضافة السعر إلى المجموع الإجمالي
    });
    
    var totalPriceElement = document.querySelector('.price-total'); // عنصر عرض المجموع الإجمالي
    totalPriceElement.textContent = '$' + totalPrice; // تحديث قيمة المجموع الإجمالي
}



IconText('اهلا ومرحبا بكم, في: مكتبة أثر فرعوني', 'text', ['orangered', 'rgb(0, 64, 160)', 'rgb(171, 46, 0)']);

function IconText(text, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var target = document.getElementById(id);
    var letterCount = 0;
    var colorIndex = 0;
    var x = 1;

setInterval(function() {
    target.style.color = colors[colorIndex];
    target.innerHTML = text.substring(0, letterCount);
    letterCount += x;

    if (letterCount > text.length || letterCount < 0) {
      x *= -1;
        colorIndex = (colorIndex + 1) % colors.length;
    }
}, 120);
}
