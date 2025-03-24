function updateCountdown() {
  const lastDay = new Date("November 21, 2025");
  const today = new Date();

  // Reset hours to compare dates only
  today.setHours(0, 0, 0, 0);
  lastDay.setHours(0, 0, 0, 0);

  // Calculate the difference in milliseconds
  const diffTime = lastDay - today;

  // Convert to days
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // If today is the last day or it's in the past, show 0
  const daysLeft = diffDays > 0 ? diffDays : 0;

  // Update the countdown display
  document.getElementById("countdown").textContent = daysLeft;
}

// Update immediately when the page loads
document.addEventListener("DOMContentLoaded", function () {
  updateCountdown();

  // Also update every 24 hours (though this only matters if the page stays open)
  setInterval(updateCountdown, 24 * 60 * 60 * 1000);
});
