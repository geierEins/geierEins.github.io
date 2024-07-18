window.onload = toggleDebugButtons;

// ---------------- spieler ------------------------

function showPlayerResults(playersResult) {
    const resultsDiv = document.getElementById('playerresults');
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
            li.textContent = player.nachname + ", " + player.vorname;
            ul.appendChild(li);
        });
        resultsDiv.appendChild(ul);
    } else {
        resultsDiv.textContent = 'Keine Spieler gefunden';
    }
}

function getAllPlayers() {
    const allPlayers = getPlayers();
    allPlayers.sort((a, b) => {
        const lastNameComparison = a.nachname.localeCompare(b.nachname);
        if (lastNameComparison !== 0) {
            return lastNameComparison;
        }
        return a.vorname.localeCompare(b.vorname);
    });
    showPlayerResults(allPlayers);
}

function searchPlayers() {
    const pos = document.getElementById('position').value;
    const team = document.getElementById('team').value;
    const results = find(pos, team);
    showPlayerResults(results);
}

function find(pos, team) {
    const allPlayers = getPlayers();

    const filteredPlayers = allPlayers.filter(player => {
        console.log('Checking player:', player);

        const hasPosition = pos === 'ALL' || player.positions.includes(pos);

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

    // Randomize the order of filteredPlayers before returning
    const randomizedPlayers = filteredPlayers.sort(() => Math.random() - 0.5);

    return randomizedPlayers;
}

// ---------------- stats ------------------------

function showStatResults(statsResult) {
    const resultsDiv = document.getElementById('statsresults');
    resultsDiv.innerHTML = ''; // Clear previous results

    // Trennlinie
    const hr = document.createElement('hr');
    resultsDiv.appendChild(hr);

    // Stats
    const ul = document.createElement('ul');
    statsResult.forEach((stat, index) => {
        const li = document.createElement('li');
        if (statsResult.length > 1) {
            li.textContent = `${index + 1} - ${stat.text}`;
        } else {
            li.textContent = stat.text;
        }
        ul.appendChild(li);
    });
    resultsDiv.appendChild(ul);
}

function getRandomStats(count) {
    showStatResults(getRandomStatsArray(count));
}

function getRandomStatsArray(count) {
    const stats = getStats();
    const pickedNums = new Set();

    while (pickedNums.size < count) {
        const randomIndex = Math.floor(Math.random() * stats.length);
        pickedNums.add(stats[randomIndex]);
    }
    return Array.from(pickedNums);
}

// ---------------- debugging ----------------------

function debug(){
    logDuplicates();
    logInvalidPositions();
    logInvalidTeams();
}

function logDuplicates(){
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

function logInvalidPositions() {
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

function logInvalidTeams() {
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

function isLocalhost() {
    return window.location.hostname === "";
}

function toggleDebugButtons() {
    const debugButtons = document.querySelectorAll('.debug-btn');
    debugButtons.forEach(button => {
            button.style.display = isLocalhost() ? 'inline-block' : 'none';
    });
}
