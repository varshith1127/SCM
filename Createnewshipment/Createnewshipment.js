document.addEventListener('DOMContentLoaded', function() {
    // Simulated data (replace with actual data from backend)
    const routes = ['Route A', 'Route B', 'Route C'];
    const devices = ['Device 1', 'Device 2', 'Device 3'];
    const goodsTypes = ['Electronics', 'Perishables', 'Machinery'];

    // Populate dropdowns
    const routeSelect = document.getElementById('routeDetails');
    routes.forEach(route => {
        const option = document.createElement('option');
        option.value = route;
        option.textContent = route;
        routeSelect.appendChild(option);
    });

    const deviceSelect = document.getElementById('deviceDetails');
    devices.forEach(device => {
        const option = document.createElement('option');
        option.value = device;
        option.textContent = device;
        deviceSelect.appendChild(option);
    });

    const goodsSelect = document.getElementById('goodsType');
    goodsTypes.forEach(goods => {
        const option = document.createElement('option');
        option.value = goods;
        option.textContent = goods;
        goodsSelect.appendChild(option);
    });

    // Clear details button
    document.getElementById('clearDetails').addEventListener('click', function() {
        document.getElementById('shipmentForm').reset();
    });

    // Form submission (replace with actual form submission logic)
    document.getElementById('shipmentForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        console.log('Form Data:', data);
        alert('Form submitted! (Check console for data)');
    });
});