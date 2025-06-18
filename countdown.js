const eventDate = new Date(2025, 5, 18, 9, 0, 0).getTime(); // March 10, 2025, 09:00 AM

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "The event has started!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Temporarily 0
    document.getElementById("days").innerHTML = 0;
    document.getElementById("hours").innerHTML = 0;
    document.getElementById("minutes").innerHTML = 0;
    document.getElementById("seconds").innerHTML = 0;

    setTimeout(updateCountdown, 1000);
}

updateCountdown();
