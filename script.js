function showResults(playersResult) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    // Anzeige der Anzahl der Spieler
    const sizeDiv = document.createElement('div');
    sizeDiv.textContent = `Anzahl:  ${playersResult.length}`;
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

// ---------------- debugging ----------------------

/* function showDuplicates(){
    const results = findDuplicates();
    showResults(results);
} */
function showDuplicates(){
    const results = findDuplicates();
        if (results.length > 0) {
        console.log('Es wurden doppelte Spielereinträge gefunden:');
        results.forEach(entry => {
            console.log(`Spieler: ${entry.vorname} ${entry.nachname}, Ungültige Position: ${entry.invalidPosition}`);
        });
    } else {
        console.log('Alle Spielereinträge sind unique.');
    }
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

function checkForInvalidPositions() {
	const allPlayers = getPlayers();
    const invalidEntries = findInvalidPositions(allPlayers);

    if (invalidEntries.length > 0) {
        console.log('Es wurden ungültige Positionseinträge gefunden:');
        invalidEntries.forEach(entry => {
            console.log(`Spieler: ${entry.vorname} ${entry.nachname}, Ungültige Position: ${entry.invalidPosition}`);
        });
    } else {
        console.log('Alle Positionseinträge sind gültig.');
    }
}
function findInvalidPositions(players) {
	let acceptedPositions = ['PG', 'SG', 'SF', 'PF', 'C'];
    let invalidEntries = [];
	
    players.forEach(player => {
        player.positions.forEach(position => {
            if (!acceptedPositions.includes(position)) {
                invalidEntries.push({
                    vorname: player.vorname,
                    nachname: player.nachname,
                    invalidPosition: position
                });
            }
        });
    });

    return invalidEntries;
}

function checkForInvalidTeams() {
    const allPlayers = getPlayers();
    const invalidEntries = findInvalidTeams(allPlayers, Team);

    if (invalidEntries.length > 0) {
        console.log('Es wurden ungültige Teameinträge gefunden:');
        invalidEntries.forEach(entry => {
            console.log(`Spieler: ${entry.vorname} ${entry.nachname}, Ungültiges Team: ${entry.invalidTeam}`);
        });
    } else {
        console.log('Alle Teameinträge sind gültig.');
    }
}

function findInvalidTeams(players, validTeams) {
    let invalidEntries = [];

    players.forEach(player => {
        player.teams.forEach(team => {
            if (!isValidTeam(team, validTeams)) {
                invalidEntries.push({
                    vorname: player.vorname,
                    nachname: player.nachname,
                    invalidTeam: team ? team.n : 'undefined'
                });
            }
        });
    });

    return invalidEntries;
}

function isValidTeam(team, validTeams) {
    return team && team.n && Object.values(validTeams).some(validTeam => validTeam.n === team.n);
}