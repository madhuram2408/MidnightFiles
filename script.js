async function loadCrimes() {
    const res = await fetch("http://localhost:8080/api/crimes");
    const data = await res.json();
    displayCrimes(data);
}

function displayCrimes(crimes) {
    const list = document.getElementById("crimeList");
    list.innerHTML = "";

    crimes.forEach(c => {
        list.innerHTML += `
            <div class="crime-card">
                <h2>${c.title} (${c.year})</h2>
                <p><strong>Crime:</strong> ${c.description}</p>
                <p><strong>Solved:</strong> ${c.solvedHow}</p>
            </div>
        `;
    });
}

async function searchCrime() {
    const keyword = document.getElementById("search").value;
    const res = await fetch(`http://localhost:8080/api/crimes/search?keyword=${keyword}`);
    const data = await res.json();
    displayCrimes(data);
}

loadCrimes();
