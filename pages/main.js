const text = document.getElementById('discuss');
window.onload = () => {
    const textWidth = discuss.offsetWidth + "px";
    discuss.style.setProperty('--text-width', textWidth)
}
function closeElevation() {
  // Hide the elevation div
  document.getElementById('elevationmap').style.display = 'none';
}
function copyEmail() {
    const email = "ben@reducereusegrow.com"; // The email address to copy
    navigator.clipboard.writeText(email).then(() => {
        alert(`Email copied to clipboard!: ${email}`);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}

