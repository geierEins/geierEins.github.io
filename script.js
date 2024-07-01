function showResults(playersResult) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    // Anzeige der Anzahl der Spieler
    const sizeDiv = document.createElement('div');
    sizeDiv.textContent = `size: ${playersResult.length}`;
    resultsDiv.appendChild(sizeDiv);

    // Trennlinie
    const hr = document.createElement('hr');
    resultsDiv.appendChild(hr);

    // Liste der Spieler
    if (playersResult.length > 0) {
        const ul = document.createElement('ul');
        playersResult.forEach(player => {
            const li = document.createElement('li');
            li.textContent = player.nachname + ", " + player.vorname;// + " [" + player.positions + "]";
            ul.appendChild(li);
        });
        resultsDiv.appendChild(ul);
    } else {
        resultsDiv.textContent = 'Keine Spieler gefunden';
    }
}

function getAllPlayers() {
    const allPlayers = getPlayers();
    allPlayers.sort((a, b) => a.nachname.localeCompare(b.nachname));
    showResults(allPlayers);
}

function searchPlayers() {
    const pos = document.getElementById('position').value;
    const team = document.getElementById('team').value;
    const results = find(pos, team);
    showResults(results);
}

function find(pos, team) {
    const allPlayers = getPlayers();

    return allPlayers.filter(player => {
        console.log('Checking player:', player);
        const hasPosition = player.positions.includes(pos);

        // Finde die zugehörigen Team-Aliase, falls vorhanden, ansonsten nutze das Team selbst
        const aliases = teamAliases[team] || [team];

        const hasValidTeam = player.teams.some(t => {
            if (!t || !t.n) {
                console.error('Invalid team entry:', t);
                return false;
            }
            return aliases.includes(t.n);
        });

        return hasPosition && hasValidTeam;
    });
}

function showDuplicates(){
    const results = findDuplicates();
    showResults(results);
}

function findDuplicates() {
    const allPlayers = getPlayers();
    const duplicates = [];
    const playerMap = new Map();

    allPlayers.forEach(player => {
        const key = `${player.vorname} ${player.nachname}`;
        if (playerMap.has(key)) {
            // Füge den Spieler der doppelten Liste hinzu, falls er schon in der Map existiert
            duplicates.push(player);
        } else {
            // Füge den Spieler der Map hinzu, wenn er noch nicht existiert
            playerMap.set(key, player);
        }
    });

    return duplicates;
}