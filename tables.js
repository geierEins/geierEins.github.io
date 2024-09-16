const positions = ["PG", "SG", "SF", "PF", "C"];
const rounds = [1, 2, 3];
const playerNumbers = [1, 2, 3, 4];

let currentPlayer = 1;
let currentRound = 1;

function initializeTables() {
    playerNumbers.forEach(player => {
        rounds.forEach(round => {
            createTable(player, round);
        });
    });
    loadLastViewedRounds(); // Lade die zuletzt angesehenen Runden
    updateTableVisibility();
    setActiveTab(1); // Setzt den Tab für Player 1 als aktiv
    updateRoundLabel(); // Aktualisiert die Runde im Label
    loadFromLocalStorage(); // Lädt gespeicherte Daten
}

function setActiveTab(player) {
    document.querySelectorAll('.tables-tablinks').forEach(tab => {
        tab.classList.remove('active');
    });
    const activeTab = document.getElementById(`player${player}tab`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    const roundLabel = document.getElementById("roundLabel");
    roundLabel.classList.remove('player1', 'player2', 'player3', 'player4');
    roundLabel.classList.add(`player${player}`);
}

function updateTableVisibility() {
    playerNumbers.forEach(player => {
        rounds.forEach(round => {
            const currentTableId = `player${player}-round${round}`;
            const table = document.getElementById(currentTableId);
            if (table) {
                table.style.display = (player === currentPlayer && round === currentRound) ? 'table' : 'none';
            }
        });
    });
    updateRoundLabel();
}

function openPlayer(event, player) {
    currentPlayer = player;
    currentRound = loadLastRound(player);  // Lade die zuletzt gesehene Runde für den Spieler
    document.querySelectorAll('.tables-tablinks').forEach(tab => {
        tab.classList.remove('active');
    });
    const activeTab = document.getElementById(`player${player}tab`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    updateTableVisibility();
    setActiveTab(player);
}

function navigateRound(direction) {
    const newRound = currentRound + direction;
    if (newRound >= 1 && newRound <= 3) {
        currentRound = newRound;
        saveLastRound(currentPlayer, currentRound);  // Speichere die neue aktuelle Runde
        updateTableVisibility();
    }
}

function createTable(player, round) {
    const tableId = `player${player}-round${round}`;
    const table = document.createElement("table");
    table.id = tableId;
    table.classList.add("player-table");

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const headers = ["Pos.", `Spielername`, "Pkt."];
    headers.forEach((headerText, index) => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    const tbody = document.createElement("tbody");
    positions.forEach(position => {
        const row = document.createElement("tr");

        const positionCell = document.createElement("td");
        positionCell.textContent = position;
        row.appendChild(positionCell);

        const playerCell = document.createElement("td");
        playerCell.contentEditable = true;
        playerCell.addEventListener("input", () => saveToLocalStorage());
        row.appendChild(playerCell);

        const pointsCell = document.createElement("td");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => {
            updatePoints(player);
            saveToLocalStorage();
        });
        pointsCell.appendChild(checkbox);
        row.appendChild(pointsCell);

        tbody.appendChild(row);
    });

    const votingRow = document.createElement("tr");
    const emptyCell = document.createElement("td");
    const votingLabelCell = document.createElement("td");
    votingLabelCell.textContent = "Voting-Punkte";
    const votingPointsCell = document.createElement("td");
    const votingSelect = document.createElement("select");
    for (let i = 0; i <= 3; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        votingSelect.appendChild(option);
    }
    votingSelect.addEventListener("change", () => {
        updatePoints(player);
        saveToLocalStorage();
    });
    votingPointsCell.appendChild(votingSelect);
    votingRow.appendChild(emptyCell);
    votingRow.appendChild(votingLabelCell);
    votingRow.appendChild(votingPointsCell);
    tbody.appendChild(votingRow);

    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById("player-tables").appendChild(table);
}

function updatePoints(player) {
    let totalPoints = 0;
    rounds.forEach(round => {
        const checkboxes = document.querySelectorAll(`#player${player}-round${round} tbody input[type="checkbox"]`);
        const select = document.querySelector(`#player${player}-round${round} tbody select`);
        let roundPoints = 0;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                roundPoints += 1;
            }
        });
        roundPoints += parseInt(select.value, 10);
        totalPoints += roundPoints;
    });

    const tab = document.getElementById(`player${player}tab`);
    const tabName = tab.textContent.split('(')[0].trim();
    tab.textContent = `${tabName} (${totalPoints})`;
}

function updateRoundLabel() {
    const roundLabel = document.getElementById("roundLabel");
    if (roundLabel) {
        roundLabel.textContent = `Runde ${currentRound}`;
    }
}

function resetTeamsAndPoints() {
    const confirmation = confirm("Wirklich alle Teams und Punkte zurücksetzen?");
    if (confirmation) {
        localStorage.clear(); // Löscht die gespeicherten Daten
        location.reload(); // Seite neu laden, um den Effekt zu sehen
    }
}

// Speichert alle Daten in den localStorage
function saveToLocalStorage() {
    const data = {};

    playerNumbers.forEach(player => {
        data[player] = {};
        rounds.forEach(round => {
            const tableId = `player${player}-round${round}`;
            const table = document.getElementById(tableId);
            const rows = table.querySelectorAll("tbody tr");

            data[player][round] = {
                players: [],
                voting: 0 // Hinzufügen eines voting-Wertes
            };

            rows.forEach((row, index) => {
                const cells = row.querySelectorAll("td");

                // Speichern der Spieler und Checkbox-Daten
                if (index < positions.length) {
                    const playerName = cells[1].textContent.trim(); // Spielername
                    const checkbox = cells[2].querySelector("input[type='checkbox']"); // Checkbox
                    data[player][round].players.push({
                        name: playerName,
                        checked: checkbox.checked
                    });
                } else {
                    // Speichern der Voting-Daten
                    const votingSelect = cells[2].querySelector("select").value;
                    data[player][round].voting = votingSelect;
                }
            });
        });
    });

    localStorage.setItem("nbaGameData", JSON.stringify(data)); // Speichern im localStorage
}

// Lädt die Daten aus dem localStorage und füllt die Tabellen
function loadFromLocalStorage() {
    const savedData = localStorage.getItem("nbaGameData");

    if (savedData) {
        const data = JSON.parse(savedData);

        playerNumbers.forEach(player => {
            rounds.forEach(round => {
                const tableId = `player${player}-round${round}`;
                const table = document.getElementById(tableId);
                const rows = table.querySelectorAll("tbody tr");

                if (data[player] && data[player][round]) {
                    // Lade die gespeicherten Spielernamen und Checkbox-Daten
                    data[player][round].players.forEach((playerData, index) => {
                        if (index < positions.length) {
                            const cells = rows[index].querySelectorAll("td");
                            cells[1].textContent = playerData.name; // Spielername aktualisieren
                            const checkbox = cells[2].querySelector("input[type='checkbox']");
                            checkbox.checked = playerData.checked; // Checkbox-Zustand aktualisieren
                        }
                    });

                    // Lade die Voting-Daten
                    const votingRow = rows[positions.length]; // Voting-Reihe ist die letzte
                    const votingSelect = votingRow.querySelector("select");
                    votingSelect.value = data[player][round].voting;
                }
            });
            updatePoints(player); // Punkte für jeden Spieler nach dem Laden der Daten aktualisieren
        });
    }
}

// Speichere die zuletzt gesehene Runde für einen Spieler
function saveLastRound(player, round) {
    localStorage.setItem(`lastRound_player${player}`, round);
}

// Lade die zuletzt gesehene Runde für einen Spieler
function loadLastRound(player) {
    return parseInt(localStorage.getItem(`lastRound_player${player}`)) || 1; // Standardmäßig Runde 1
}

// Lade die zuletzt angesehenen Runden für alle Spieler bei Initialisierung
function loadLastViewedRounds() {
    playerNumbers.forEach(player => {
        const lastRound = loadLastRound(player);
        if (player === currentPlayer) {
            currentRound = lastRound;
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {
    initializeTables();
    playerNumbers.forEach(player => updatePoints(player)); // Punkte für alle Spieler bei Laden der Seite aktualisieren
});
