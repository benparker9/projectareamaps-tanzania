


document.addEventListener('DOMContentLoaded', () => {
  const discuss = document.getElementById('discuss');
  if (discuss) {
    const textWidth = discuss.offsetWidth + "px";
    discuss.style.setProperty('--text-width', textWidth);
  }

  fetch('imgs/flowchart.svg')
    .then(response => response.text())
    .then(svgText => {
      const container = document.getElementById('flowchartM');
      container.innerHTML = svgText;

      // Only after injection
      const elevationDiv = document.getElementById('elevationmap');
      const boundaries = document.getElementById('boundaries');

      const c2 = container.querySelector('g[id*="c2"]');
      if (c2 && elevationDiv) {
        c2.style.cursor = 'pointer';
        let visible = false;
        c2.addEventListener('click', () => {
          visible = !visible;
          elevationDiv.style.display = visible ? 'flex' : 'none';
          elevationDiv.classList.toggle('active', visible);
        });
      }

      const c5 = container.querySelector('g[id*="c5"]');
      if (c5 && boundaries) {
        c5.style.cursor = 'pointer';
        let visible = false;
        c5.addEventListener('click', () => {
          visible = !visible;
          boundaries.style.display = visible ? 'flex' : 'none';
          boundaries.classList.toggle('active', visible);
        });
      }
    })
    .catch(err => {
      console.error('Failed to load SVG:', err);
      const loader = document.getElementById('loader');
      if (loader) loader.textContent = 'Failed to load chart.';
    });
});

window.addEventListener('load', () => {
  console.log('Page is fully loaded', performance.now());
});

function closeElevation() {
  // Hide the elevation div
  document.getElementById('elevationmap').style.display = 'none';
}
function closeBoundaries() {
  // Hide the elevation div
  document.getElementById('boundaries').style.display = 'none';
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

const rows = document.querySelectorAll("#table1 tbody tr");
const labels = [];
const treesPlanted = [];
const hectaresRestored = [];
const plantingDensity = [];

rows.forEach(row => {
  const cells = row.querySelectorAll("td");
  labels.push(cells[0].textContent);
  treesPlanted.push(parseInt(cells[1].textContent.replace(/,/g, '')));
  hectaresRestored.push(parseInt(cells[2].textContent.replace(/,/g, '')));
  plantingDensity.push(parseInt(cells[3].textContent.replace(/,/g, '')));
});

// Pie chart for Trees Planted
const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: labels,
    datasets: [{
      label: 'Trees Planted',
      data: treesPlanted,
      backgroundColor: [
        '#88a96d',
        '#c2d3a8',
        '#627c49'
      ],
      borderColor: '#04170c',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom',
        fullSize: true,
        font: {
          size: 8 // Optional: tweak font size
        }
       },
      tooltip: { enabled: true }
    }
  }
});

// Bar chart for Hectares Restored and Planting Density
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [
      {
        label: 'Hectares Restored',
        data: hectaresRestored,
        backgroundColor: '#c2d3a8',
        borderColor: '#04170c',
        borderWidth: 1
      },
      {
        label: 'Planting Density (t/ha)',
        data: plantingDensity,
        backgroundColor: '#627c49',
        borderColor: '#04170c',
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' }
    }, 
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});