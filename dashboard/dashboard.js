// dashboard.js
document.addEventListener('DOMContentLoaded', function() {
    // Simulated user role (replace with actual role from JWT)
    const userRole = 'user'; // or 'admin'

    // Hide admin buttons if the user is not an admin
    if (userRole !== 'admin') {
        document.getElementById('adminButtons').style.display = 'none';
    }

    // Button click handlers
    document.getElementById('dashboardBtn').addEventListener('click', function() {
        document.getElementById('mainContent').innerHTML = `
            <h2>Hi Kusuma, Welcome to SCMXPertLite</h2>
            <div id="summary">
                <p>Total Shipments: 50</p>
                <p>Active Alerts: 5</p>
            </div>
            <div id="recentActivity">
                <h3>Recent Activity</h3>
                <p>Last 5 shipments created here.</p>
            </div>
            <div id="adminNotifications">
                <h3>Admin Notifications</h3>
                <p>Admin notifications and alerts here.</p>
            </div>
            <div id="userSpecificInfo">
                <h3>User Information</h3>
                <p>User-specific information here.</p>
            </div>
        `;
    });

    document.getElementById('personalDetailsBtn').addEventListener('click', function() {
        document.getElementById('mainContent').innerHTML = '<h2>Personal Details</h2><p>Display user details here.</p>';
    });

    document.getElementById('myShipmentsBtn').addEventListener('click', function() {
        document.getElementById('mainContent').innerHTML = '<h2>My Shipments</h2><p>Display user shipments here.</p>';
    });

    document.getElementById('createShipmentBtn').addEventListener('click', function() {
        document.getElementById('mainContent').innerHTML = '<h2>Create New Shipment</h2><p>Shipment creation form here.</p>';
    });

    document.getElementById('deviceDataStreamBtn').addEventListener('click', function() {
        document.getElementById('mainContent').innerHTML = '<h2>Device Data Stream</h2><p>Device data stream here.</p>';
    });

    // Admin-only button handlers
    document.getElementById('userManagementBtn').addEventListener('click', function() {
        document.getElementById('mainContent').innerHTML = '<h2>User Management</h2><p>Manage users here.</p>';
    });

    document.getElementById('routeManagementBtn').addEventListener('click', function() {
        document.getElementById('mainContent').innerHTML = '<h2>Route Management</h2><p>Manage routes here.</p>';
    });

    document.getElementById('deviceManagementBtn').addEventListener('click', function() {
        document.getElementById('mainContent').innerHTML = '<h2>Device Management</h2><p>Manage devices here.</p>';
    });

    document.getElementById('alertsManagementBtn').addEventListener('click', function() {
        document.getElementById('mainContent').innerHTML = '<h2>Alerts Management</h2><p>Manage alerts here.</p>';
    });

    document.getElementById('shipmentLogsBtn').addEventListener('click', function() {
        document.getElementById('mainContent').innerHTML = '<h2>Shipment Logs</h2><p>View shipment logs here.</p>';
    });

    document.getElementById('logoutBtn').addEventListener('click', function() {
        /*localStorage.removeItem('jwt');*/
        window.location.href='../signin.html';
    });
});