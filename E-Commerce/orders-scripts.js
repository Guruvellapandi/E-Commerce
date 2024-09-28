// orders.js

document.addEventListener('DOMContentLoaded', () => {
    // Sample orders data
    const orders = [
        { id: 101, date: '2024-07-01', total: 120.50, status: 'Shipped' },
        { id: 102, date: '2024-07-15', total: 45.00, status: 'Delivered' },
        { id: 103, date: '2024-07-22', total: 89.75, status: 'Pending' }
    ];

    function updateOrders() {
        const ordersList = document.getElementById('orders-list');
        ordersList.innerHTML = orders.map(order => `
            <tr>
                <td>${order.id}</td>
                <td>${order.date}</td>
                <td>$${order.total.toFixed(2)}</td>
                <td>${order.status}</td>
                <td><a href="order-details.html?id=${order.id}" class="view-details">View Details</a></td>
            </tr>
        `).join('');
    }

    updateOrders();
});
