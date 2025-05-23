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


function show2DMap() {
    const iframe2D = document.getElementById("2DGIS");
    const iframe3D = document.getElementById("3DGIS");
    iframe3D.style.display = "none";
    iframe2D.style.display = "block";
  }
function show3DMap() {
    const iframe2D = document.getElementById("2DGIS");
    const iframe3D = document.getElementById("3DGIS");
    iframe2D.style.display = "none";
    iframe3D.style.display = "block"
}