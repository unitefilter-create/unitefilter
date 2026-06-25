function runEngine() {

  const flow = document.getElementById("flow").value;
  const pressure = document.getElementById("pressure").value;
  const solid = document.getElementById("solid").value;
  const particle = document.getElementById("particle").value;

  const solidType = classify(solid, "solid");
  const particleType = classify(particle, "particle");

  let results = [];

  FILTER_DATABASE.forEach(item => {

    let score = 0;

    if (item.solid === solidType) score += 50;
    if (item.particle === particleType) score += 50;

    results.push({ ...item, score });

  });

  results.sort((a, b) => b.score - a.score);

  render(results.slice(0, 3));
}

function render(list) {

  let html = "<h2>Recommended Systems</h2>";

  list.forEach((item, index) => {

    html += `
      <div class="card">
        <h3>${index + 1}. ${item.name}</h3>
        <p>${item.description}</p>
      </div>
    `;
  });

  document.getElementById("result").innerHTML = html;
}
