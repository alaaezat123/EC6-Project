document.getElementById("quantity").addEventListener("input", function () {
    let price = parseFloat(document.getElementById("product-price").textContent.slice(1));
    let quantity = document.getElementById("quantity").value;
    let total = price * quantity;
    document.getElementById("checkout-total").textContent = `$${total.toFixed(2)}`;
});

document.addEventListener("DOMContentLoaded", function () {
    let product = JSON.parse(localStorage.getItem("selectedProduct")) || {};
    let quantity = localStorage.getItem("quantity") || 1;

    document.getElementById("product-image").src = product.image;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = `$${product.price.toFixed(2)}`;
    document.getElementById("quantity").value = quantity;

    function updateTotal() {
        let updatedQuantity = document.getElementById("quantity").value;
        let total = (updatedQuantity * product.price).toFixed(2);
        document.getElementById("checkout-total").textContent = `$${total}`;
    }

    document.getElementById("quantity").addEventListener("input", function () {
        localStorage.setItem("quantity", this.value);
        updateTotal();
    });

    updateTotal();
});


// out.js or a separate script file

document.getElementById("buy-now-btn").addEventListener("click", function() {
    // الحصول على تفاصيل المنتج من HTML
    let productName = document.getElementById("product-name").innerText;
    let productPrice = parseFloat(document.getElementById("product-price").innerText.replace('$', ''));
    let quantity = parseInt(document.getElementById("quantity").value);
    
    // التحقق من الكمية المدخلة
    if (isNaN(quantity) || quantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }

    // حساب الإجمالي
    let totalPrice = productPrice * quantity;
    document.getElementById("checkout-total").innerText = '$' + totalPrice.toFixed(2);

    // عرض رسالة تأكيد
    alert("Your purchase has been successful!\nProduct: " + productName + "\nQuantity: " + quantity + "\nTotal: $" + totalPrice.toFixed(2));

    // يمكن توجيه المستخدم إلى صفحة أخرى مثل صفحة الشكر
    window.location.href = "thankyou.html"; // استبدل هذا بعنوان الصفحة التي تريد أن يتم توجيه المستخدم إليها بعد الشراء
});
