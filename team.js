const Team = {
    ATL: { n: 'ATL' },  // Atlanta Hawks
    BOS: { n: 'BOS' },  // Boston Celtics
    BKN: { n: 'BKN' },  // Brooklyn Nets
    CHO: { n: 'CHO' },  // Charlotte Hornets
    CHI: { n: 'CHI' },  // Chicago Bulls
    CLE: { n: 'CLE' },  // Cleveland Cavaliers
    DAL: { n: 'DAL' },  // Dallas Mavericks
    DEN: { n: 'DEN' },  // Denver Nuggets
    DET: { n: 'DET' },  // Detroit Pistons
    GSW: { n: 'GSW' },  // Golden State Warriors
    HOU: { n: 'HOU' },  // Houston Rockets
    IND: { n: 'IND' },  // Indiana Pacers
    LAC: { n: 'LAC' },  // LA Clippers
    LAL: { n: 'LAL' },  // Los Angeles Lakers
    MEM: { n: 'MEM' },  // Memphis Grizzlies
    MIA: { n: 'MIA' },  // Miami Heat
    MIL: { n: 'MIL' },  // Milwaukee Bucks
    MIN: { n: 'MIN' },  // Minnesota Timberwolves
    NOP: { n: 'NOP' },  // New Orleans Pelicans
    NYK: { n: 'NYK' },  // New York Knicks
    OKC: { n: 'OKC' },  // Oklahoma City Thunder
    ORL: { n: 'ORL' },  // Orlando Magic
    PHI: { n: 'PHI' },  // Philadelphia 76ers
    PHO: { n: 'PHO' },  // Phoenix Suns
    POR: { n: 'POR' },  // Portland Trail Blazers
    SAC: { n: 'SAC' },  // Sacramento Kings
    SAS: { n: 'SAS' },  // San Antonio Spurs
    TOR: { n: 'TOR' },  // Toronto Raptors
    UTA: { n: 'UTA' },  // Utah Jazz
    WAS: { n: 'WAS' },  // Washington Wizards
    
    // former teams
    SEA: { n: 'SEA' },  // Seattle Supersonics (V)
    NJN: { n: 'NJN' },  // New Jersey Nets (V)
    NYA: { n: 'NYA' },  // New York Nets (V)
    CHA: { n: 'CHA' },  // Charlotte Bobcats (V)
    CHH: { n: 'CHH' },  // Charlotte Hornets 94-95 (V)
    NOH: { n: 'NOH' },  // New Orleans Hornets (2007-08) (V)
    NOK: { n: 'NOK' },  // New Orleans Hornets (2005-06 Oklahoma City) (V)
    WSB: { n: 'WSB' },  // Washington Bullets (V)
    BAL: { n: 'BAL' },  // Baltimore Bullets (1963-73) (V)
    CAP: { n: 'CAP' },  // Capital Bullets (V)
    WSA: { n: 'WSA' },  // Washington Capitols (Caps) (69-70) (-)
    SDC: { n: 'SDC' },  // San Diego Clippers (V)
    SSL: { n: 'SSL' },  // Spirits of St. Louis (-) 
    STL: { n: 'STL' },  // St. Louis Hawks (V)
    MLH: { n: 'MLH' },  // Milwaukee Hawks (V)
    DNA: { n: 'DNA' },  // Denver Nuggets (ABA) (V)
    DLC: { n: 'DLC' },  // Dallas Chaparrals (ABA) (V)
    SYR: { n: 'SYR' },  // Syracuse Nationals (V)
    MNL: { n: 'MNL' },  // Minneapolis Lakers (V)
    CIN: { n: 'CIN' },  // Cincinnati Royals (V)
    SFW: { n: 'SFW' },  // San Francisco Warriors (V)
    PHW: { n: 'PHW' },  // Philadelphia Warriors (V)
    KCO: { n: 'KCO' },  // Kansas City-Omaha Kings (V)
    BUF: { n: 'BUF' },  // Buffalo Braves (V)
    KEN: { n: 'KEN' },  // Kentucky Colonels (-)
    SDR: { n: 'SDR' },  // San Diego Rockets (V)
    SAA: { n: 'SAA' },  // San Antonio Spurs 75-76 (V)
    INA: { n: 'INA' },  // Indiana Pacers (1971-72) (V)
    VAN: { n: 'VAN' },  // Vancouver Grizzlies (V)
    NOJ: { n: 'NOJ' },  // New Orleans Jazz (V)
    KCK: { n: 'KCK' },  // Kansas City Kings (V)
    BRK: { n: 'BRK' },  // Brooklyn Nets 2014-15 (V)
    STB: { n: 'STB' },  // St. Louis Bombers (-)
    MNP: { n: 'MNP' },  // Minnesota Pipers (-)
    PTP: { n: 'PTP' },  // Pittsburgh Pipers (-)
	CAR: { n: 'CAR' },  // Carolina Cougars (-)
	MMS: { n: 'MMS' },  // Memphis Sounds (-)
	MNM: { n: 'MNM' },  // Minnesota Muskies (-)
    UTS: { n: 'UTS' },  // Utah Stars (-)
    VIR: { n: 'VIR' }   // Virginia Squires (-)
};

const teamAliases = {
    ATL: ['ATL', 'STL', 'MLH'],
    BKN: ['BKN', 'NJN', 'NYA', 'BRK'],
    CHO: ['CHO', 'CHA', 'CHH'],
    DEN: ['DEN', 'DNA'],
    GSW: ['GSW', 'SFW', 'PHW'],
    HOU: ['HOU', 'SDR'],
	IND: ['IND', 'INA'],
    LAC: ['LAC', 'SDC', 'BUF'],
    LAL: ['LAL', 'MNL'],
	MEM: ['MEM', 'VAN'],
    NOP: ['NOP', 'NOH', 'NOK'],
    OKC: ['OKC', 'SEA'],
    PHI: ['PHI', 'SYR'],
    WAS: ['WAS', 'WSB', 'BAL', 'CAP'],
    SAC: ['SAC', 'CIN', 'KCO', 'KCK'],
	MNM: ['MNM'],
	MMS: ['MMS'], 
    SAS: ['SAS', 'DLC', 'SAA'],
	UTA: ['UTA', 'NOJ'],
    
    // dead franchises
    WSA: ['WSA', 'VIR'],
    SSL: ['SSL', 'CAR'],
    KEN: ['KEN'],
    STB: ['STB'],
    PTP: ['PTP', 'MNP'],
    UTS: ['UTS']    
};
