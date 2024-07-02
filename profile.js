// Update current time in UTC
function updateCurrentTime() {
    const now = new Date();
    const options = { weekday: 'long' };
    
    document.getElementById('current-time').textContent = now.toISOString().split('T')[1].split('.')[0];
    document.getElementById('current-day').textContent = new Intl.DateTimeFormat('en-US', options).format(now);
}

// Update time every second
setInterval(updateCurrentTime, 1000);

// Initial call to display time immediately
updateCurrentTime();
