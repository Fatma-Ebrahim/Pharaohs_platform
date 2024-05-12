function displayProducts(items, containerId, showOldPrice) {
    var productsContainer = document.getElementById(containerId);
    var html = '';

    items.forEach(function(item) {
        html += '<div class="product swiper-slide">';
        html += '<img src="' + item.img + '">';
        html += '<h2 class="name">' + item.name + '</h2>';
        html += '<div class="stars">';
        for (var i = 0; i < 5; i++) {
            html += '<i class="fa-solid fa-star fa-flip-horizontal fa-xs"></i>';
        }
        html += '</div>';
        html += '<div class="price-container">';
        html += '<p class="price"> ' + item.price + '</p>';
        if (showOldPrice) {
            html += '<p class="old_price"> ' + item.old_price + '</p>';
        }
        html += '</div>';
        html += '<div class="icons">';
        html += '<i class="fa-solid fa-cart-plus" onclick="addToCart(this)"></i>';
        html += '<i class="fa-solid fa-heart"></i>';
        html += '<i class="fa-solid fa-share"></i>';
        html += '</div>';
        html += '</div>';
    });
    productsContainer.innerHTML = html;
}


function fetchItems(url, containerId, showOldPrice) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(items => {
            displayProducts(items, containerId, showOldPrice);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}


fetchItems('js/items.json', 'products_sale', true);
fetchItems('js/clothes.json', 'products_clothes', false);
fetchItems('js/accessories.json', 'products_accessories', false); 
fetchItems('js/antiques.json', 'products_antiques', false); 
