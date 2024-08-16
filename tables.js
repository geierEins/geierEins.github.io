const positions = ["PG", "SG", "SF", "PF", "C"];
const rounds = [1, 2, 3];
const playerNumbers = [1, 2, 3];

let currentPlayer = 1;
let currentRound = 1;

function initializeTables() {
    playerNumbers.forEach(player => {
        rounds.forEach(round => {
            createTable(player, round);
        });
    });
    updateTableVisibility();
    setActiveTab(1); // Setzt den Tab für Player 1 als aktiv
}

function setActiveTab(player) {
    // Entfernt die "active" Klasse von allen Tabs
    document.querySelectorAll('.tables-tablinks').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Setzt den Tab für den angegebenen Spieler als aktiv
    const activeTab = document.getElementById(`player${player}tab`);
    if (activeTab) {
        activeTab.classList.add('active');
    } else {
        console.error(`Tab with ID player${player}tab not found`);
    }
}

function updateTableVisibility() {
    playerNumbers.forEach(player => {
        rounds.forEach(round => {
            const currentTableId = `player${player}-round${round}`;
            const table = document.getElementById(currentTableId);
            if (table) {
                table.style.display = (player === currentPlayer && round === currentRound) ? 'table' : 'none';
            } else {
                console.error(`Table with ID ${currentTableId} not found`);
            }
        });
    });
}

function openPlayer(event, player) {
    currentPlayer = player;
    currentRound = 1;  // Reset to round 1 whenever a new player is selected

    // Remove active class from all tabs
    document.querySelectorAll('.tables-tablinks').forEach(tab => {
        tab.classList.remove('active');
    });

    // Add active class to the clicked tab
    const activeTab = document.getElementById(`player${player}tab`);
    if (activeTab) {
        activeTab.classList.add('active');
    } else {
        console.error(`Tab with ID player${player}tab not found`);
    }

    updateTableVisibility();
}

function navigateRound(direction) {
    const newRound = currentRound + direction;
    if (newRound >= 1 && newRound <= 3) {
        currentRound = newRound;
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

    // Create headers with round number
    const headers = [
        "Position", 
        `Spieler (Runde ${round})`, 
        "Team"
    ];
    
    headers.forEach(headerText => {
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
        const playerCell = document.createElement("td");
        playerCell.contentEditable = true;
        const pointsCell = document.createElement("td");
        
        row.appendChild(positionCell);
        row.appendChild(playerCell);
        row.appendChild(pointsCell);
        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById("player-tables").appendChild(table);
}


document.addEventListener("DOMContentLoaded", () => {
    initializeTables();
});

// Function to edit tab name on double-click
function editTabName(player) {
    const tab = document.getElementById(`player${player}tab`);
    const currentName = tab.textContent;

    // Create an input element to edit the tab name
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentName;
    input.style.width = '80%';

    // Replace the tab content with the input element
    tab.textContent = '';
    tab.appendChild(input);
    input.focus();

    // Handle input focus out event
    input.addEventListener('blur', () => {
        const newName = input.value.trim();
        if (newName) {
            tab.textContent = newName;
        } else {
            tab.textContent = currentName;
        }
    });

    // Handle Enter key event
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            input.blur();
        }
    });
}