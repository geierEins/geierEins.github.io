const stats = [
    // beste Saison der Karriere
    {i: 0, text: "Punkte pro Spiel (beste Saison der Karriere)", short: "PTS / Spiel (beste Saison)"},
    {i: 1, text: "Rebounds pro Spiel (beste Saison der Karriere)", short: "REB / Spiel (beste Saison)"},
    {i: 2, text: "Assists pro Spiel (beste Saison der Karriere)", short: "AST / Spiel (beste Saison)"},
    {i: 3, text: "Steals pro Spiel (beste Saison der Karriere)", short: "STL / Spiel (beste Saison)"},
    {i: 4, text: "Blocks pro Spiel (beste Saison der Karriere)", short: "BLK / Spiel (beste Saison)"},
    {i: 5, text: "Free Throw Percentage (beste Saison der Karriere)", short: "FT-% (beste Saison)"},
    {i: 6, text: "Field Goal Percentage (beste Saison der Karriere)", short: "FG-% (beste Saison)"},
    {i: 7, text: "3-Punkte Percentage (beste Saison der Karriere)", short: "3PT-% (beste Saison)"},

    // Karrierebestwerte
    {i: 8, text: "Meiste Punkte in einem Spiel (Karrierebestwert)", short: "Meiste PTS in 1 Spiel"},
    {i: 9, text: "Meiste Rebounds in einem Spiel (Karrierebestwert)", short: "Meiste REB in 1 Spiel"},
    {i: 10, text: "Meiste Assists in einem Spiel (Karrierebestwert)", short: "Meiste AST in 1 Spiel"},
    {i: 11, text: "Meiste Steals in einem Spiel (Karrierebestwert)", short: "Meiste STL in 1 Spiel"},
    {i: 12, text: "Meiste Blocks in einem Spiel (Karrierebestwert)", short: "Meiste BLK in 1 Spiel"},

    // absolute Kategorien
    {i: 13, text: "Anzahl Career Games (absolut)", short: "Career Games (absolut)"},
    {i: 14, text: "Anzahl Allstar-Teilnahmen (absolut)", short: "Allstar-Teilnahmen (absolut)"},
    {i: 15, text: "MVP-Titel + All NBA Team Erscheinungen (absolut)", short: "MVPs + All NBA Team (absolut)"},
    {i: 16, text: "DPOY-Titel + All Defensive Team Erscheinungen (absolut)", short: "DPOYs + All Defensive Team (absolut)"},

    // Karriereschnitt
    {i: 17, text: "Punkte pro Spiel (Karriereschnitt)", short: "PTS / Spiel (Karriere)"},
    {i: 18, text: "Rebounds pro Spiel (Karriereschnitt)", short: "REB pro Spiel (Karriere)"},
    {i: 19, text: "Assists pro Spiel (Karriereschnitt)", short: "AST pro Spiel (Karriere)"},
    {i: 20, text: "Free Throw Percentage (Karriereschnitt)", short: "FT-% (Karriere)"},
    {i: 21, text: "Field Goal Percentage (Karriereschnitt)", short: "FG-% (Karriere)"},
    {i: 22, text: "3-Punkte Percentage (Karriereschnitt)", short: "3PT-% (Karriere)"},
    {i: 23, text: "Player Efficiency Rating (Karriereschnitt)", short: "PER (Karriere)"},
    {i: 24, text: "Win Shares (Karriereschnitt)", short: "Win Shares (Karriere)"},

    // Rest
    {i: 25, text: "Höchste Rückennummer", short: "Höchste Rückennummer"},
    {i: 26, text: "Körpergröße", short: "Körpergröße"}
];


function getStats(){
    return stats;
}
