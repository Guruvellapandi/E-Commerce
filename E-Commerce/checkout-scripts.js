// checkout.js

document.addEventListener('DOMContentLoaded', () => {
    // Sample cart items
    const cartItems = [
        { id: 1, name: 'Fresh Organic Vegetables', price: 10.00, quantity: 2 },
        { id: 2, name: 'Smart Refrigerator', price: 499.99, quantity: 1 },
        { id: 3, name: 'Latest Smartphone', price: 699.99, quantity: 1 }
    ];

    function updateCartSummary() {
        const cartItemsSummary = document.getElementById('cart-items-summary');
        const totalAmountElement = document.getElementById('total-amount');
        let totalAmount = 0;

        cartItemsSummary.innerHTML = cartItems.map(item => `
            <tr>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
        `).join('');

        totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalAmountElement.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
    }

    updateCartSummary();
});
