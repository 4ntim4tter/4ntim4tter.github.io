function updateClock() {
        const now = new Date();

        document.getElementById('clock').textContent =
            now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        document.getElementById('date').textContent =
            now.toLocaleDateString([], { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });

        document.getElementById('tz').textContent =
            Intl.DateTimeFormat().resolvedOptions().timeZone;
    }

    updateClock();
    setInterval(updateClock, 1000);