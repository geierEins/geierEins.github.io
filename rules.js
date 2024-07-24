window.onload = function() {
    loadRulesContent();
};

function loadRulesContent() {
    const rulesContent = `

        <h1>Spielregeln</h1>

        <p> ------------------------ </p>

        <h2>0  Einleitung</h2>

        <p>Bei diesem Spiel geht es darum, eine möglichst starke Starting Five aus aktiven oder ehemaligen NBA Spielern zusammenzustellen. Basierend auf Teamkarten, die jeder Spieler zufällig bekommt, sollen alle fünf Spielerpositionen (Point Guard, Shooting Guard, Small Forward, Power Forward und Center) passend besetzt werden. Anschließend treten alle Spieler in zwei Auswertungsphasen gegeneinander an, um zu bestimmen, welche Starting Five die Beste ist.</p>

        <p> - </p>



        <h2>1  Spielablauf</h2>

        <p>Ein Spiel dauert 3 Runden, wobei in jeder Runde von jedem Spieler eine Starting Five zusammengestellt werden muss. Jede Runde besteht aus einer Pick-Phase, einer Stats-Phase und einer Voting-Phase.</p>

        <p>Das Spiel kann in drei verschiedenen Stat-Modi gespielt werden, die sich in der Vergabe und Bekanntmachung der Statkarten unterscheiden.</p>
        <p>Der Spieler mit den meisten Punkten (aus allen Runden addiert) gewinnt.</p>

        <p> - </p>



        <h3>1.1  Karten austeilen</h3>

        <p>Zu Beginn des Spiels bekommt jeder Spieler zufällig 5 Team- und 2 Aktionskarten. Diese werden verdeckt in der Hand gehalten. Zusätzlich bekommt jeder Spieler 5 Positionsmarken sowie 5 Statkarten numeriert von 1 bis 5.</p>

        <p>Anschließend wird gewürfelt, wer die Runde beginnen darf. Der Spieler mit der höchsten Würfelzahl darf anfangen. Es wird im Uhrzeigersinn rotiert. Die nächste Runde darf der im Uhrzeigersinn nächste Spieler beginnen.</p>

        <p> - </p>


        
        <h3>1.2  Pick-Phase</h3>

        <p>Die Pick-Phase bezeichnet das Zusammenstellen der Starting Five.</p>

        <p>Der Spieler, der am Zug ist, hat vorab die Möglichkeit eine, beide oder keine Aktionskarte(n) zu spielen. Aktionskarten können in der Regel nur während des eigenen Zugs und direkt vor dem eigenen Pick gespielt werden, es sei denn, es steht explizit anders auf der Karte. Wurde eine Aktionskarte genutzt, wird sie abgelegt. Aktionskarten müssen generell nicht gespielt werden, dürfen also am Ende der Runde übrig bleiben.</p>

        <p>Nun wählt er eine seiner Teamkarten frei aus und legt sie auf den Tisch. Anschließend nennt er die Position, die er mit einem NBA-Spieler besetzen möchte. Erst dann nennt er den Namen des NBA Spielers. Die Reihenfolge (Team > Position > Name) ist hierbei wichtig.</p>

        <p>Wichtig: Der NBA-Spieler muss in einer Saison mindestens 41 Spiele beim entsprechenden Team gespielt haben.</p>

        <p>Ob ein Team oder eine Position zulässig ist, wird auf Basis der Daten von basketball-reference.com ermittelt.</p>
        
        <p>Außerdem darf kein NBA-Spieler innerhalb eines Spiels (3 Runden) doppelt auftauchen (Ausnahme: Aktionskarte erlaubt das). </p>
        
        <p>Sollte dem Spieler kein NBA-Spieler mit dem gegebenen Team und der Position einfallen, bekommt er ein ‘X’ und lässt diesen Slot in seiner Starting Five frei.</p>
        
        <p>Hat der Spieler einen NBA-Spieler gewählt, ohne dass einer der anderen Spieler ein Veto einlegt (siehe unten “Veto-Regelung”), so hat er seinen Pick abgeschlossen und der nächste Spieler ist an der Reihe.</p>

        <p> - </p>
        


        <h3>1.3  Stat-Phase</h3>
        
        <p>Bei der Stat-Phase geht es darum, jedem NBA-Spieler in der eigenen Starting Five eine Statistik zuzuweisen, mit der der NBA-Spieler idealerweise die Nase vorn hat. </p>
        
        <p>Die Statistiken werden je nach Stat-Modus zu einem unterschiedlichen Zeitraum ausgewählt. Es gibt 3 Stat-Modi:</p>
        
        <h4>Stat-Modus 1:</h4>

        <p>Die 5 Statkarten werden zu Beginn des Spiels per Zufall ermittelt. Alle Spieler wissen, auf welche Stats es in der anschließenden Auswertungsrunde ankommt und können das in die Wahl ihrer NBA-Spieler einfließen lassen. Spieler weisen den NBA Spielern die Stat-Karten zu.</p>

        <h4>Stat-Modus 2:</h4>

        <p>Die 5 Statkarten werden erst nach Beendigung der Pick-Phase per Zufall ermittelt. Dadurch ist den Spielern während der Pick-Phase noch nicht bekannt, auf welche Stats es in der anschließenden Auswertungsphase ankommt. Spieler weisen den NBA Spielern die Stat-Karten zu.</p>

        <h4>Stat-Modus 3:</h4>

        <p>NBA-Spieler mit den gleichen Positionen treten gegeneinander an. Die zugewiesene Statistik wird zufällig ermittelt.</p>

        <p>Mit Ausnahme von Stat-Modus 3 werden die Stats von den Spielern verdeckt auf die NBA-Spieler gelegt. Erst wenn alle Spieler die Statkarten verteilt haben, geht es in die Auswertung.</p>

        <p>In der anschließenden Auswertung einigesn sich die Spieler darauf, welche Stat-Karte zuerst aufgedeckt wird. Nun vergleichen alle Spieler die Werte der jeweiligen Statistik ihrer NBA-Spieler auf Basis der Daten auf basketball-reference.com. Der NBA Spieler mit dem besten Stat-Wert gewinnt, was dem Spieler einen Punkt verleiht. Dann wird die nächste Statkarte aufgedeckt und die Stats werden wieder verglichen.</p>

        <p>In dieser Phase sind ingesamt 5 Punkte zu holen.</p>

        <p> - </p>



        <h3>1.4  Voting-Phase</h3>

        <p>In dieser Phase geht es darum, für das beste Team bzw. die zwei besten Teams auf Basis des eigenen Empfindens abzustimmen. Man darf nicht für sich selbst stimmen.</p>

        <p>Bei insgesamt 3 Spielern vergibt jeder Spieler eine Stimme für das beste Team. Jede Stimme entspricht einem Punkt.</p>

        <p>Bei insgesamt 4 Spielern vergibt jeder Spieler zwei Stimmen - eine für das Beste und eine für das zweitbeste Team. Die Stimme für das beste Team zählt zwei Punkte, wohingegen Stimmen für das zweitbeste Team jeweils einen Punkt zählen.</p>

        <p>Für welches Team bzw. welche Teams die Spieler voten, hängt ganz und gar von persönlichen Beweggründen der Spieler ab.</p>

        <p>Final werden alle Punkte aus der Stat- sowie der Voting-Phase addiert und aufgeschrieben.</p>

        <p> ------------------------ </p>

    `;
    
    document.getElementById('rulesContent').innerHTML = rulesContent;
}