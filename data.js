// Williams Fysiklabb — allt innehåll, tvåspråkigt (sv/de).
// Varje textfält är { sv, de }. Formler är språkneutrala.

const STRINGS = {
  sv: {
    siteTitle: 'Williams Fysiklabb',
    siteSub: 'Fysik 1b fortsättning — plugga som ett proffs, skratta som en idiot',
    footer: 'Byggd med ❤️ och dåliga skämt för William · Fysik 1b fortsättning',
    home: '🏠 Start',
    langBtn: '🇩🇪 Deutsch',
    welcomeH: 'Tjena William! 👋',
    welcomeIntro: 'Välkommen till ditt personliga fysiklabb. Här pluggar du <strong>Fysik 1b fortsättning</strong> utan att somna över formelsamlingen.',
    howItWorks: 'Så funkar det:',
    feat1: '📖 <strong>Teori</strong> — det viktigaste, förklarat så att även din katt fattar',
    feat2: '🧒 <strong>Barnläge</strong> — varje avsnitt har en förklaring så enkel att en femåring fattar',
    feat3: '🧪 <strong>Simuleringar</strong> — lek med fysiken istället för att bara läsa om den',
    feat4: '🎯 <strong>Quiz</strong> — samla XP och klättra från <em>Fysik-Turist</em> till <em>Fysikens Överherre</em>',
    welcomeJoke: 'Varför är elektroner aldrig bjudna på fest? De är alltid så negativa. ⚡ (Vänj dig — det blir värre.)',
    ctaStart: 'Kör igång! 🚀',
    statusH: '📊 Din status',
    resetBtn: 'Nollställ allt (feg utväg)',
    resetConfirm: 'Säkert? All XP och alla resultat försvinner. Einstein kommer att vara besviken.',
    resetDone: 'Allt nollställt. Vi låtsas att det aldrig hände. 🤫',
    nextLevel: 'nästa nivå',
    maxLevel: 'MAX!',
    newLevel: '🎉 NY NIVÅ',
    eli5Label: '🧒 Så enkelt att en femåring fattar:',
    quizH: '🎯 Quiz',
    questions: 'frågor',
    best: 'bästa',
    quizNote: '10 XP per rätt svar. Fullpott ger 20 bonus-XP och konfetti. Konfettin är vetenskapligt bevisad motivationshöjare.*',
    quizFootnote: '*Nej det är den inte.',
    startQuiz: 'Starta quizet 🎬',
    questionWord: 'Fråga',
    nextQ: 'Nästa fråga →',
    showResult: 'Visa resultat 🏁',
    correctOf: 'rätt',
    bonus: 'bonus',
    again: 'Kör igen 🔄',
    toHome: 'Till start 🏠',
    verdictPerfect: 'FULLPOTT! Du ÄR fysiken nu. Rimligtvis borde Nobelkommittén höra av sig.',
    verdictGreat: 'Riktigt starkt! Bara lite finslipning kvar.',
    verdictHalf: 'Halvvägs till genialitet. Läs teorin igen och kör en runda till.',
    verdictOof: 'Aj. Men lugn — även Einstein fick underkänt ibland (nej, det är en myt, men det låter tröstande).',
    praise: ['Snyggt! Einstein nickar gillande. 🧠', 'Korrekt! Du är på väg mot Nobelpriset. 🏅', 'Boom! Rätt svar. 💥', 'Exakt! Newton hade varit stolt. 🍎', 'Rätt! Din hjärna accelererar. 🚀', 'Japp! Fysiken är med dig. ⚛️'],
    roast: ['Nej! Men bra gissat — sa ingen. 😅', 'Fel! Gravitationen drog ner det svaret. 🕳️', 'Ajdå. Även Einstein hade dåliga dagar. 🤷', 'Nix. Men fel svar är bara rätt svar i ett parallellt universum. 🌌', 'Nope. Läs förklaringen — den bits inte. 📖'],
    // Sim-etiketter
    sVoltage: 'Spänning U', sResistance: 'Resistans R', sCurrent: 'Ström', sPower: 'Effekt',
    sHalfLife: 'Halveringstid', sStartDecay: '☢️ Starta sönderfall', sLeft: 'Kvar', sTime: 'Tid',
    sSpeed: 'Raketens fart', sGamma: 'Gammafaktor γ', sYearOnBoard: '1 år ombord =', sYearsEarth: 'år på jorden',
    sEarthClock: 'Jordens klocka', sRocketClock: 'Raketens klocka', sSlower: '× långsammare',
    sFriction: 'Friktion', sDropAgain: '🔄 Släpp kulan igen', sEp: 'Lägesenergi', sEk: 'Rörelseenergi', sHeatLoss: 'Värme (förlust)', sHeatBar: 'Värme',
    sDepth: 'Djup', sWaterP: 'Vattentryck', sTotalP: 'Totalt tryck (inkl. luft)', sSurface: 'yta (0 m)',
    sPowerW: 'Effekt', sRestart: '🧊 Börja om (20 °C)', sTemp: 'Temperatur', sEnergyIn: 'Tillförd energi', sStatus: 'Status',
    sWaiting: 'Väntar…', sHeating: 'Värmer upp…', sBoiling: 'Kokar! Fasövergång', sAllGone: 'Allt har kokat bort! 💨', sPlate: 'spisplatta',
    drwName: 'Dr. Willy',
    drwWelcome: 'Hej! Jag är <b>Dr. Willy</b>, din personliga fysiklärare. Jag har läst ALLA formelsamlingar så att du slipper. Vi kör enkelt, roligt och steg för steg. Och nej — det blir ingen fika förrän quizet är klart! ☕'
  },
  de: {
    siteTitle: 'Williams Physiklabor',
    siteSub: 'Fysik 1b Fortsättning — lernen wie ein Profi, lachen wie ein Idiot',
    footer: 'Gebaut mit ❤️ und schlechten Witzen für William · Fysik 1b fortsättning',
    home: '🏠 Start',
    langBtn: '🇸🇪 Svenska',
    welcomeH: 'Hej William! 👋',
    welcomeIntro: 'Willkommen in deinem persönlichen Physiklabor. Hier lernst du <strong>Fysik 1b fortsättning</strong>, ohne über der Formelsammlung einzuschlafen.',
    howItWorks: 'So funktioniert es:',
    feat1: '📖 <strong>Theorie</strong> — das Wichtigste, so erklärt, dass es sogar deine Katze versteht',
    feat2: '🧒 <strong>Kindermodus</strong> — jeder Abschnitt hat eine Erklärung, die ein Fünfjähriger versteht',
    feat3: '🧪 <strong>Simulationen</strong> — spiel mit der Physik, statt nur darüber zu lesen',
    feat4: '🎯 <strong>Quiz</strong> — sammle XP und klettere vom <em>Physik-Touristen</em> zum <em>Overlord der Physik</em>',
    welcomeJoke: 'Warum werden Elektronen nie auf Partys eingeladen? Sie sind immer so negativ. ⚡ (Gewöhn dich dran — es wird schlimmer.)',
    ctaStart: 'Los geht’s! 🚀',
    statusH: '📊 Dein Status',
    resetBtn: 'Alles zurücksetzen (feiger Ausweg)',
    resetConfirm: 'Sicher? Alle XP und Ergebnisse verschwinden. Einstein wird enttäuscht sein.',
    resetDone: 'Alles zurückgesetzt. Wir tun so, als wäre nie etwas passiert. 🤫',
    nextLevel: 'nächstes Level',
    maxLevel: 'MAX!',
    newLevel: '🎉 NEUES LEVEL',
    eli5Label: '🧒 So einfach, dass es ein Fünfjähriger versteht:',
    quizH: '🎯 Quiz',
    questions: 'Fragen',
    best: 'Bestwert',
    quizNote: '10 XP pro richtiger Antwort. Volle Punktzahl gibt 20 Bonus-XP und Konfetti. Konfetti ist wissenschaftlich bewiesener Motivationsbooster.*',
    quizFootnote: '*Nein, ist es nicht.',
    startQuiz: 'Quiz starten 🎬',
    questionWord: 'Frage',
    nextQ: 'Nächste Frage →',
    showResult: 'Ergebnis zeigen 🏁',
    correctOf: 'richtig',
    bonus: 'Bonus',
    again: 'Nochmal 🔄',
    toHome: 'Zum Start 🏠',
    verdictPerfect: 'VOLLE PUNKTZAHL! Du BIST jetzt die Physik. Das Nobelkomitee sollte sich melden.',
    verdictGreat: 'Richtig stark! Nur noch etwas Feinschliff.',
    verdictHalf: 'Halber Weg zum Genie. Lies die Theorie nochmal und starte eine neue Runde.',
    verdictOof: 'Autsch. Aber ruhig — auch Einstein ist mal durchgefallen (nein, das ist ein Mythos, aber es tröstet).',
    praise: ['Sauber! Einstein nickt anerkennend. 🧠', 'Korrekt! Du bist auf Nobelpreis-Kurs. 🏅', 'Boom! Richtige Antwort. 💥', 'Exakt! Newton wäre stolz. 🍎', 'Richtig! Dein Gehirn beschleunigt. 🚀', 'Jep! Die Physik ist mit dir. ⚛️'],
    roast: ['Nein! Aber gut geraten — sagte niemand. 😅', 'Falsch! Die Gravitation hat die Antwort runtergezogen. 🕳️', 'Uups. Auch Einstein hatte schlechte Tage. 🤷', 'Nö. Aber falsche Antworten sind richtige Antworten in einem Paralleluniversum. 🌌', 'Nope. Lies die Erklärung — sie beißt nicht. 📖'],
    sVoltage: 'Spannung U', sResistance: 'Widerstand R', sCurrent: 'Strom', sPower: 'Leistung',
    sHalfLife: 'Halbwertszeit', sStartDecay: '☢️ Zerfall starten', sLeft: 'Übrig', sTime: 'Zeit',
    sSpeed: 'Tempo der Rakete', sGamma: 'Gammafaktor γ', sYearOnBoard: '1 Jahr an Bord =', sYearsEarth: 'Jahre auf der Erde',
    sEarthClock: 'Uhr der Erde', sRocketClock: 'Uhr der Rakete', sSlower: '× langsamer',
    sFriction: 'Reibung', sDropAgain: '🔄 Kugel nochmal loslassen', sEp: 'Lageenergie', sEk: 'Bewegungsenergie', sHeatLoss: 'Wärme (Verlust)', sHeatBar: 'Wärme',
    sDepth: 'Tiefe', sWaterP: 'Wasserdruck', sTotalP: 'Gesamtdruck (inkl. Luft)', sSurface: 'Oberfläche (0 m)',
    sPowerW: 'Leistung', sRestart: '🧊 Neustart (20 °C)', sTemp: 'Temperatur', sEnergyIn: 'Zugeführte Energie', sStatus: 'Status',
    sWaiting: 'Wartet…', sHeating: 'Heizt auf…', sBoiling: 'Kocht! Phasenübergang', sAllGone: 'Alles verkocht! 💨', sPlate: 'Herdplatte',
    drwName: 'Dr. Willy',
    drwWelcome: 'Hej! Ich bin <b>Dr. Willy</b>, dein persönlicher Physiklehrer. Ich habe ALLE Formelsammlungen gelesen, damit du es nicht musst. Wir machen das einfach, lustig und Schritt für Schritt. Und nein — Fika gibt es erst nach dem Quiz! ☕'
  }
};

const MODULES = [
  {
    id: 'ellara',
    icon: '⚡',
    title: { sv: 'Ellära', de: 'Elektrizität' },
    intro: {
      sv: 'Ström, spänning och resistans — eller: varför du inte ska sticka in gaffeln i brödrosten.',
      de: 'Strom, Spannung und Widerstand — oder: warum du keine Gabel in den Toaster stecken solltest.'
    },
    theory: [
      {
        h: { sv: 'Spänning, ström och resistans', de: 'Spannung, Strom und Widerstand' },
        p: {
          sv: 'Tänk dig en vattenrutschkana. <b>Spänningen (U)</b> är hur högt upp rutschkanan börjar — den "trycker" laddningarna framåt. <b>Strömmen (I)</b> är hur mycket vatten som forsar per sekund. <b>Resistansen (R)</b> är hur trång och krånglig kanan är. Hög resistans = elektronerna köar som på Systembolaget dagen före midsommar.',
          de: 'Stell dir eine Wasserrutsche vor. <b>Die Spannung (U)</b> ist, wie hoch oben die Rutsche beginnt — sie "drückt" die Ladungen vorwärts. <b>Der Strom (I)</b> ist, wie viel Wasser pro Sekunde durchrauscht. <b>Der Widerstand (R)</b> ist, wie eng und verwinkelt die Rutsche ist. Hoher Widerstand = die Elektronen stehen Schlange wie beim Bäcker am Sonntagmorgen.'
        },
        eli5: {
          sv: 'Elen är som vatten i en slang. <b>Spänning</b> = hur hårt någon trycker på slangen. <b>Ström</b> = hur mycket vatten som kommer ut. <b>Resistans</b> = någon som klämmer på slangen så det kommer mindre.',
          de: 'Strom ist wie Wasser im Schlauch. <b>Spannung</b> = wie stark jemand drückt. <b>Strom</b> = wie viel Wasser rauskommt. <b>Widerstand</b> = jemand drückt den Schlauch zu, dann kommt weniger.'
        },
        f: ['U = R · I', 'volt (V), ampere (A), ohm (Ω)']
      },
      {
        h: { sv: 'Ohms lag', de: 'Das Ohmsche Gesetz' },
        p: {
          sv: 'Ohms lag <b>U = R·I</b> är ellärans superstjärna. Vet du två av storheterna kan du alltid räkna ut den tredje. Dubblar du spänningen över en fast resistans? Då dubblas strömmen. Enkelt som en pannkaka — fast med elektroner.',
          de: 'Das Ohmsche Gesetz <b>U = R·I</b> ist der Superstar der Elektrizitätslehre. Kennst du zwei der Größen, kannst du die dritte immer ausrechnen. Verdoppelst du die Spannung bei festem Widerstand? Dann verdoppelt sich der Strom. Einfach wie Pfannkuchen — nur mit Elektronen.'
        },
        eli5: {
          sv: 'Tre kompisar: U, R och I. Om du känner två av dem kan du alltid lista ut den tredje. Trycker du dubbelt så hårt (U), åker dubbelt så många elektroner (I). Det är hela lagen!',
          de: 'Drei Freunde: U, R und I. Kennst du zwei, findest du den dritten immer raus. Drückst du doppelt so stark (U), flitzen doppelt so viele Elektronen (I). Das ist das ganze Gesetz!'
        },
        f: ['I = U / R', 'R = U / I']
      },
      {
        h: { sv: 'Elektrisk effekt och energi', de: 'Elektrische Leistung und Energie' },
        p: {
          sv: 'Effekten <b>P = U·I</b> talar om hur snabbt elenergi omvandlas — till exempel till ljus och värme i en lampa. Energin är effekt gånger tid: <b>E = P·t</b>. Det är den där <em>kilowattimmen</em> (kWh) på elräkningen som får din pappa att släcka lampor som en besatt.',
          de: 'Die Leistung <b>P = U·I</b> sagt, wie schnell elektrische Energie umgewandelt wird — zum Beispiel in Licht und Wärme einer Lampe. Energie ist Leistung mal Zeit: <b>E = P·t</b>. Das ist die <em>Kilowattstunde</em> (kWh) auf der Stromrechnung, wegen der dein Papa wie besessen Lampen ausschaltet.'
        },
        eli5: {
          sv: '<b>Effekt</b> = hur hungrig en apparat är på el just nu. <b>Energi</b> = hur mycket den ätit totalt. En dammsugare är jättehungrig, en laddare knappt hungrig alls.',
          de: '<b>Leistung</b> = wie hungrig ein Gerät gerade auf Strom ist. <b>Energie</b> = wie viel es insgesamt gefuttert hat. Ein Staubsauger ist riesig hungrig, ein Ladegerät fast gar nicht.'
        },
        f: ['P = U · I', 'P = R · I²', 'E = P · t']
      },
      {
        h: { sv: 'Serie- och parallellkoppling', de: 'Reihen- und Parallelschaltung' },
        p: {
          sv: '<b>Seriekoppling:</b> komponenterna sitter på rad som vagnar i ett tåg — samma ström genom alla, spänningen delas upp. Resistanserna adderas: R = R₁ + R₂. <b>Parallellkoppling:</b> strömmen delar upp sig som köer i mataffären — samma spänning över alla grenar, totala resistansen blir <em>mindre</em> än den minsta grenen. Ja, mindre. Fysik är konstigt ibland.',
          de: '<b>Reihenschaltung:</b> die Bauteile sitzen hintereinander wie Waggons im Zug — gleicher Strom durch alle, die Spannung teilt sich auf. Widerstände addieren sich: R = R₁ + R₂. <b>Parallelschaltung:</b> der Strom teilt sich auf wie Schlangen im Supermarkt — gleiche Spannung über alle Zweige, der Gesamtwiderstand wird <em>kleiner</em> als der kleinste Zweig. Ja, kleiner. Physik ist manchmal seltsam.'
        },
        eli5: {
          sv: '<b>Serie</b> = alla i samma kö, en väg. <b>Parallell</b> = flera kassor öppna, elektronerna väljer väg. Fler öppna kassor = mindre trängsel = strömmen flyter lättare.',
          de: '<b>Reihe</b> = alle in einer Schlange, ein Weg. <b>Parallel</b> = mehrere Kassen offen, die Elektronen suchen sich einen Weg aus. Mehr offene Kassen = weniger Gedränge = der Strom fließt leichter.'
        },
        f: ['Serie: R = R₁ + R₂', 'Parallell: 1/R = 1/R₁ + 1/R₂']
      }
    ],
    joke: {
      sv: 'Ohm, Ohm på hemmet... förlåt. Vi går vidare.',
      de: 'Trautes Heim, Ohm allein... Entschuldigung. Weiter im Text.'
    },
    drw: {
      sv: 'Lyssna nu! Elektroner är som jag på väg till fikarummet — de tar ALLTID vägen med minst motstånd. Lär dig Ohms lag, annars blir det inget kaffe!',
      de: 'Jetzt aufgepasst! Elektronen sind wie ich auf dem Weg zur Fika-Pause — sie nehmen IMMER den Weg des geringsten Widerstands. Lern das Ohmsche Gesetz, sonst gibt es keinen Kaffee!'
    },
    sim: 'circuit',
    simTitle: { sv: '🧪 Simulering: Ohms lag i praktiken', de: '🧪 Simulation: Ohmsches Gesetz in Aktion' },
    simDesc: {
      sv: 'Dra i reglagen och se hur strömmen och lampans ljusstyrka ändras. Elektronerna är de små prickarna — snälla mot dem.',
      de: 'Zieh an den Reglern und schau, wie sich Strom und Lampenhelligkeit ändern. Die Elektronen sind die kleinen Punkte — sei nett zu ihnen.'
    },
    quiz: [
      { q: { sv: 'Vad säger Ohms lag?', de: 'Was sagt das Ohmsche Gesetz?' },
        a: { sv: ['U = R · I', 'U = R / I', 'U = I² · t', 'U = m · g'], de: ['U = R · I', 'U = R / I', 'U = I² · t', 'U = m · g'] },
        correct: 0,
        expl: { sv: 'U = R·I. Spänning = resistans gånger ström. Ellärans hjärta.', de: 'U = R·I. Spannung = Widerstand mal Strom. Das Herz der Elektrizitätslehre.' } },
      { q: { sv: 'En lampa har resistansen 6,0 Ω och kopplas till 12 V. Hur stor blir strömmen?', de: 'Eine Lampe hat den Widerstand 6,0 Ω und hängt an 12 V. Wie groß wird der Strom?' },
        a: { sv: ['2,0 A', '0,5 A', '72 A', '6,0 A'], de: ['2,0 A', '0,5 A', '72 A', '6,0 A'] },
        correct: 0,
        expl: { sv: 'I = U/R = 12/6,0 = 2,0 A. Lugnt och fint.', de: 'I = U/R = 12/6,0 = 2,0 A. Ganz entspannt.' } },
      { q: { sv: 'Vad händer med totala resistansen när du parallellkopplar två motstånd?', de: 'Was passiert mit dem Gesamtwiderstand, wenn du zwei Widerstände parallel schaltest?' },
        a: { sv: ['Den blir mindre än det minsta motståndet', 'Den blir summan av motstånden', 'Den blir exakt medelvärdet', 'Den blir oändlig'], de: ['Er wird kleiner als der kleinste Widerstand', 'Er wird die Summe der Widerstände', 'Er wird genau der Mittelwert', 'Er wird unendlich'] },
        correct: 0,
        expl: { sv: 'Fler parallella vägar = lättare för strömmen. Totala resistansen sjunker under det minsta motståndet.', de: 'Mehr parallele Wege = leichter für den Strom. Der Gesamtwiderstand sinkt unter den kleinsten Einzelwiderstand.' } },
      { q: { sv: 'En elvisp drar 2,0 A vid 230 V. Vilken effekt har den?', de: 'Ein Mixer zieht 2,0 A bei 230 V. Welche Leistung hat er?' },
        a: { sv: ['460 W', '115 W', '232 W', '4,6 kW'], de: ['460 W', '115 W', '232 W', '4,6 kW'] },
        correct: 0,
        expl: { sv: 'P = U·I = 230 · 2,0 = 460 W. Grädden vispas med vetenskap.', de: 'P = U·I = 230 · 2,0 = 460 W. Sahne schlagen mit Wissenschaft.' } },
      { q: { sv: 'I en seriekoppling är strömmen …', de: 'In einer Reihenschaltung ist der Strom …' },
        a: { sv: ['lika stor genom alla komponenter', 'störst genom största motståndet', 'noll i mitten', 'olika i varje komponent'], de: ['durch alle Bauteile gleich groß', 'am größten durch den größten Widerstand', 'in der Mitte null', 'in jedem Bauteil anders'] },
        correct: 0,
        expl: { sv: 'Tågprincipen: samma ström överallt i en seriekrets. Vagnarna kan inte köra om varandra.', de: 'Zugprinzip: überall gleicher Strom in der Reihenschaltung. Die Waggons können sich nicht überholen.' } },
      { q: { sv: 'Vad kostar det (ungefär) att ha ett 2000 W-element på i 3 timmar om elen kostar 2 kr/kWh?', de: 'Was kostet es (ungefähr), eine 2000-W-Heizung 3 Stunden laufen zu lassen, wenn Strom 2 kr/kWh kostet?' },
        a: { sv: ['12 kr', '2 kr', '120 kr', '6 kr'], de: ['12 kr', '2 kr', '120 kr', '6 kr'] },
        correct: 0,
        expl: { sv: 'E = P·t = 2 kW · 3 h = 6 kWh. 6 · 2 kr = 12 kr. Billigare än en kanelbulle på Espresso House.', de: 'E = P·t = 2 kW · 3 h = 6 kWh. 6 · 2 kr = 12 kr. Billiger als eine Zimtschnecke im Café.' } },
      { q: { sv: 'Två motstånd på 10 Ω och 20 Ω seriekopplas. Total resistans?', de: 'Zwei Widerstände mit 10 Ω und 20 Ω in Reihe. Gesamtwiderstand?' },
        a: { sv: ['30 Ω', '6,7 Ω', '15 Ω', '200 Ω'], de: ['30 Ω', '6,7 Ω', '15 Ω', '200 Ω'] },
        correct: 0,
        expl: { sv: 'Serie: bara addera. 10 + 20 = 30 Ω.', de: 'Reihe: einfach addieren. 10 + 20 = 30 Ω.' } },
      { q: { sv: 'Varför blir en glödtråd varm när ström flyter genom den?', de: 'Warum wird ein Glühdraht heiß, wenn Strom durchfließt?' },
        a: { sv: ['Elektronerna krockar med atomerna i tråden och avger energi', 'Elektronerna brinner upp', 'Spänningen skapar friktion mot luften', 'Tråden är rädd'], de: ['Die Elektronen stoßen mit den Atomen im Draht zusammen und geben Energie ab', 'Die Elektronen verbrennen', 'Die Spannung erzeugt Reibung mit der Luft', 'Der Draht hat Angst'] },
        correct: 0,
        expl: { sv: 'Resistans = elektronkrockar med atomgittret. Rörelseenergi blir värme. Tråden är inte rädd. Troligen.', de: 'Widerstand = Elektronen-Crashs mit dem Atomgitter. Bewegungsenergie wird Wärme. Der Draht hat keine Angst. Wahrscheinlich.' } }
    ]
  },

  {
    id: 'karnfysik',
    icon: '☢️',
    title: { sv: 'Kärnfysik', de: 'Kernphysik' },
    intro: {
      sv: 'Radioaktivitet, halveringstid och varför bananer tekniskt sett är radioaktiva. (På riktigt.)',
      de: 'Radioaktivität, Halbwertszeit und warum Bananen technisch gesehen radioaktiv sind. (Wirklich.)'
    },
    theory: [
      {
        h: { sv: 'Atomkärnan', de: 'Der Atomkern' },
        p: {
          sv: 'Atomkärnan består av <b>protoner</b> (positiva) och <b>neutroner</b> (neutrala, gillar bara att hänga). Antalet protoner = <b>atomnumret Z</b> och bestämmer vilket grundämne det är. Protoner + neutroner = <b>masstalet A</b>. Samma ämne med olika antal neutroner kallas <b>isotoper</b> — som syskon med samma efternamn men olika vikt.',
          de: 'Der Atomkern besteht aus <b>Protonen</b> (positiv) und <b>Neutronen</b> (neutral, hängen nur gern rum). Anzahl Protonen = <b>Ordnungszahl Z</b> — sie bestimmt, welches Element es ist. Protonen + Neutronen = <b>Massenzahl A</b>. Gleiches Element mit verschieden vielen Neutronen heißt <b>Isotop</b> — wie Geschwister mit gleichem Nachnamen, aber unterschiedlichem Gewicht.'
        },
        eli5: {
          sv: 'Atomen har en liten boll i mitten: kärnan. Där bor plus-kulor (protoner) och tysta kulor (neutroner). Hur många plus-kulor det finns bestämmer vilket ämne det är — som ett namn!',
          de: 'Das Atom hat eine kleine Kugel in der Mitte: den Kern. Da wohnen Plus-Kugeln (Protonen) und stille Kugeln (Neutronen). Wie viele Plus-Kugeln es sind, bestimmt den Stoff — wie ein Name!'
        },
        f: ['A = Z + N', '¹⁴C: Z=6, N=8']
      },
      {
        h: { sv: 'Radioaktivt sönderfall', de: 'Radioaktiver Zerfall' },
        p: {
          sv: 'Instabila kärnor gör som stressade studenter: de gör sig av med det som tynger. <b>Alfastrålning (α):</b> kärnan spottar ut en heliumkärna (2p + 2n). Stoppas av ett papper. <b>Betastrålning (β):</b> en neutron blir proton + elektron som skjuts ut. Stoppas av aluminiumplåt. <b>Gammastrålning (γ):</b> ren energi, fotoner. Kräver bly eller tjock betong. Gamma är den enda som inte ändrar grundämnet — den bara "rapar" energi.',
          de: 'Instabile Kerne machen es wie gestresste Studenten: sie werfen ab, was sie belastet. <b>Alphastrahlung (α):</b> der Kern spuckt einen Heliumkern aus (2p + 2n). Ein Blatt Papier stoppt sie. <b>Betastrahlung (β):</b> ein Neutron wird Proton + Elektron, das rausgeschossen wird. Aluminiumblech stoppt sie. <b>Gammastrahlung (γ):</b> pure Energie, Photonen. Braucht Blei oder dicken Beton. Gamma ist die einzige, die das Element nicht ändert — der Kern "rülpst" nur Energie.'
        },
        eli5: {
          sv: 'Vissa atomkärnor mår dåligt i magen. Då spottar de ut småbitar (alfa eller beta) eller rapar energi (gamma) tills de mår bra igen. Det är radioaktivitet!',
          de: 'Manche Atomkerne haben Bauchweh. Dann spucken sie kleine Stücke aus (Alpha oder Beta) oder rülpsen Energie (Gamma), bis es ihnen wieder gut geht. Das ist Radioaktivität!'
        },
        f: ['α: A −4, Z −2', 'β⁻: Z +1, A oförändrat']
      },
      {
        h: { sv: 'Halveringstid', de: 'Halbwertszeit' },
        p: {
          sv: '<b>Halveringstiden T½</b> är tiden det tar för hälften av kärnorna i ett prov att sönderfalla. Efter en halveringstid: 50 % kvar. Efter två: 25 %. Efter tre: 12,5 %. Det är som en påse chips på fredagsmys — exponentiellt avtagande, fast chipsen har betydligt kortare halveringstid.',
          de: 'Die <b>Halbwertszeit T½</b> ist die Zeit, in der die Hälfte der Kerne einer Probe zerfällt. Nach einer Halbwertszeit: 50 % übrig. Nach zwei: 25 %. Nach drei: 12,5 %. Wie eine Tüte Chips am Freitagabend — exponentiell abnehmend, nur haben Chips eine deutlich kürzere Halbwertszeit.'
        },
        eli5: {
          sv: 'Tänk en påse med 100 godisar. Varje kväll försvinner hälften. Ikväll: 50 kvar. Imorgon: 25. Sen: 12. Tiden det tar för hälften att försvinna = halveringstid.',
          de: 'Denk an eine Tüte mit 100 Bonbons. Jeden Abend verschwindet die Hälfte. Heute: 50 übrig. Morgen: 25. Dann: 12. Die Zeit, bis die Hälfte weg ist = Halbwertszeit.'
        },
        f: ['N = N₀ · (½)^(t/T½)']
      },
      {
        h: { sv: 'Joniserande strålning och stråldos', de: 'Ionisierende Strahlung und Strahlendosis' },
        p: {
          sv: 'Strålning som kan slå loss elektroner kallas <b>joniserande</b> — den kan skada DNA. Stråldos mäts i <b>sievert (Sv)</b>. En svensk får i snitt ca 3 mSv/år, mest från radon och medicinsk röntgen. En banan ger ca 0,1 µSv tack vare kalium-40. Du behöver alltså äta typ 10 miljoner bananer snabbt för att det ska bli farligt. Utmaningen är magen, inte strålningen.',
          de: 'Strahlung, die Elektronen herausschlagen kann, heißt <b>ionisierend</b> — sie kann DNA schädigen. Die Dosis wird in <b>Sievert (Sv)</b> gemessen. Ein Schwede bekommt im Schnitt ca. 3 mSv/Jahr, meist durch Radon und Röntgen. Eine Banane liefert ca. 0,1 µSv dank Kalium-40. Du müsstest also etwa 10 Millionen Bananen schnell essen, damit es gefährlich wird. Das Problem ist der Magen, nicht die Strahlung.'
        },
        eli5: {
          sv: 'Stark strålning kan göra små hål i kroppens byggritningar (DNA). Lite strålning finns överallt och är okej — även bananer strålar pyttelite. Kroppen lagar små skador själv.',
          de: 'Starke Strahlung kann winzige Löcher in die Baupläne des Körpers (DNA) machen. Ein bisschen Strahlung gibt es überall, das ist okay — sogar Bananen strahlen ein winziges bisschen. Der Körper repariert kleine Schäden selbst.'
        },
        f: ['Dos: sievert (Sv)', 'Aktivitet: becquerel (Bq)']
      }
    ],
    joke: {
      sv: 'En neutron går in på en bar och frågar vad en öl kostar. Bartendern: "För dig? Ingen laddning."',
      de: 'Ein Neutron geht in eine Bar und fragt, was ein Bier kostet. Der Barkeeper: "Für dich? Keine Ladung."'
    },
    drw: {
      sv: 'Halveringstid? Tänk på mitt lördagsgodis: efter tio minuter är hälften borta. Efter tjugo: en fjärdedel. Exponentiellt avtagande — precis som mitt tålamod när ingen pluggat.',
      de: 'Halbwertszeit? Denk an meine Samstagssüßigkeiten: nach zehn Minuten ist die Hälfte weg. Nach zwanzig: ein Viertel. Exponentiell abnehmend — genau wie meine Geduld, wenn keiner gelernt hat.'
    },
    sim: 'decay',
    simTitle: { sv: '🧪 Simulering: Radioaktivt sönderfall', de: '🧪 Simulation: Radioaktiver Zerfall' },
    simDesc: {
      sv: 'Starta sönderfallet och se hur kärnorna (prickarna) dör exponentiellt. Kurvan visar N(t). Ändra halveringstiden och kör igen.',
      de: 'Starte den Zerfall und sieh zu, wie die Kerne (Punkte) exponentiell sterben. Die Kurve zeigt N(t). Ändere die Halbwertszeit und starte neu.'
    },
    quiz: [
      { q: { sv: 'Vad består alfastrålning av?', de: 'Woraus besteht Alphastrahlung?' },
        a: { sv: ['Heliumkärnor (2 protoner + 2 neutroner)', 'Elektroner', 'Fotoner', 'Neutroner'], de: ['Heliumkerne (2 Protonen + 2 Neutronen)', 'Elektronen', 'Photonen', 'Neutronen'] },
        correct: 0,
        expl: { sv: 'Alfapartikel = heliumkärna. Tung och klumpig — stoppas av ett papper eller din hud.', de: 'Alphateilchen = Heliumkern. Schwer und plump — ein Blatt Papier oder deine Haut stoppt es.' } },
      { q: { sv: 'Vilken strålning tränger igenom mest material?', de: 'Welche Strahlung durchdringt am meisten Material?' },
        a: { sv: ['Gamma', 'Alfa', 'Beta', 'Alla lika'], de: ['Gamma', 'Alpha', 'Beta', 'Alle gleich'] },
        correct: 0,
        expl: { sv: 'Gamma är ren elektromagnetisk energi — kräver bly eller tjock betong. Alfa stoppas av papper, beta av aluminium.', de: 'Gamma ist reine elektromagnetische Energie — braucht Blei oder dicken Beton. Alpha stoppt Papier, Beta Aluminium.' } },
      { q: { sv: 'Ett preparat har halveringstiden 10 år. Hur mycket är kvar efter 30 år?', de: 'Ein Präparat hat die Halbwertszeit 10 Jahre. Wie viel ist nach 30 Jahren übrig?' },
        a: { sv: ['12,5 %', '25 %', '33 %', '0 %'], de: ['12,5 %', '25 %', '33 %', '0 %'] },
        correct: 0,
        expl: { sv: '30 år = 3 halveringstider. 100 → 50 → 25 → 12,5 %. Aldrig exakt noll — sönderfall är envist.', de: '30 Jahre = 3 Halbwertszeiten. 100 → 50 → 25 → 12,5 %. Nie exakt null — Zerfall ist stur.' } },
      { q: { sv: 'Vad händer med atomnumret Z vid beta-minus-sönderfall?', de: 'Was passiert mit der Ordnungszahl Z beim Beta-minus-Zerfall?' },
        a: { sv: ['Ökar med 1', 'Minskar med 1', 'Minskar med 2', 'Oförändrat'], de: ['Steigt um 1', 'Sinkt um 1', 'Sinkt um 2', 'Bleibt gleich'] },
        correct: 0,
        expl: { sv: 'En neutron blir en proton + elektron. En proton till = Z ökar med 1. Nytt grundämne, samma masstal.', de: 'Ein Neutron wird Proton + Elektron. Ein Proton mehr = Z steigt um 1. Neues Element, gleiche Massenzahl.' } },
      { q: { sv: 'Vad mäter enheten becquerel (Bq)?', de: 'Was misst die Einheit Becquerel (Bq)?' },
        a: { sv: ['Antal sönderfall per sekund', 'Stråldos i kroppen', 'Strålningens energi', 'Antal protoner'], de: ['Anzahl Zerfälle pro Sekunde', 'Strahlendosis im Körper', 'Energie der Strahlung', 'Anzahl Protonen'] },
        correct: 0,
        expl: { sv: '1 Bq = 1 sönderfall per sekund. Stråldos i kroppen mäts i sievert (Sv).', de: '1 Bq = 1 Zerfall pro Sekunde. Die Dosis im Körper wird in Sievert (Sv) gemessen.' } },
      { q: { sv: 'Varför är bananer (lite) radioaktiva?', de: 'Warum sind Bananen (ein bisschen) radioaktiv?' },
        a: { sv: ['De innehåller kalium-40', 'De innehåller uran', 'De odlas nära kärnkraftverk', 'De är det inte — det är en myt'], de: ['Sie enthalten Kalium-40', 'Sie enthalten Uran', 'Sie wachsen neben Kernkraftwerken', 'Sind sie nicht — das ist ein Mythos'] },
        correct: 0,
        expl: { sv: 'Kalium-40 är en naturligt radioaktiv isotop. Helt ofarligt — din kropp är också radioaktiv av samma anledning.', de: 'Kalium-40 ist ein natürlich radioaktives Isotop. Völlig harmlos — dein Körper ist aus demselben Grund auch radioaktiv.' } },
      { q: { sv: 'Kol-14-metoden används för att …', de: 'Die C-14-Methode benutzt man, um …' },
        a: { sv: ['åldersbestämma organiskt material', 'mäta temperatur i stjärnor', 'skapa energi i kärnkraftverk', 'göra kol fossilfritt'], de: ['organisches Material zu datieren', 'die Temperatur von Sternen zu messen', 'Energie in Kernkraftwerken zu erzeugen', 'Kohle fossilfrei zu machen'] },
        correct: 0,
        expl: { sv: '¹⁴C sönderfaller med T½ ≈ 5730 år. Genom att mäta hur mycket som är kvar kan man datera gamla ben, trä och mumier.', de: '¹⁴C zerfällt mit T½ ≈ 5730 Jahren. Misst man, wie viel übrig ist, kann man alte Knochen, Holz und Mumien datieren.' } },
      { q: { sv: 'Vad är den största källan till svenskars stråldos?', de: 'Was ist die größte Quelle der Strahlendosis in Schweden?' },
        a: { sv: ['Radon i bostäder', 'Kärnkraftverk', 'Mobiltelefoner', 'Flygresor'], de: ['Radon in Wohnungen', 'Kernkraftwerke', 'Handys', 'Flugreisen'] },
        correct: 0,
        expl: { sv: 'Radon från marken som läcker in i hus. Kärnkraft bidrar försumbart, mobiler strålar inte joniserande alls.', de: 'Radon aus dem Boden, das in Häuser sickert. Kernkraft trägt vernachlässigbar bei, Handys strahlen gar nicht ionisierend.' } }
    ]
  },

  {
    id: 'relativitet',
    icon: '🕰️',
    title: { sv: 'Relativitet', de: 'Relativität' },
    intro: {
      sv: 'Einstein, tidsdilatation och varför GPS:en skulle gå vilse utan relativitetsteorin.',
      de: 'Einstein, Zeitdilatation und warum sich das GPS ohne Relativitätstheorie verlaufen würde.'
    },
    theory: [
      {
        h: { sv: 'Ljushastigheten är chefen', de: 'Die Lichtgeschwindigkeit ist der Chef' },
        p: {
          sv: 'Einsteins speciella relativitetsteori bygger på två postulat: 1) Fysikens lagar är samma för alla som rör sig med konstant hastighet. 2) <b>Ljusets hastighet i vakuum, c ≈ 3,0·10⁸ m/s, är samma för alla observatörer.</b> Alltid. Oavsett hur fort du jagar en ljusstråle mäter du samma hastighet. Ljuset bryr sig inte om dina känslor.',
          de: 'Einsteins spezielle Relativitätstheorie ruht auf zwei Postulaten: 1) Die Gesetze der Physik sind für alle gleich, die sich mit konstanter Geschwindigkeit bewegen. 2) <b>Die Lichtgeschwindigkeit im Vakuum, c ≈ 3,0·10⁸ m/s, ist für alle Beobachter gleich.</b> Immer. Egal wie schnell du einem Lichtstrahl hinterherjagst, du misst dieselbe Geschwindigkeit. Dem Licht sind deine Gefühle egal.'
        },
        eli5: {
          sv: 'Ljuset är världens snabbaste och fuskar aldrig. Hur fort du än springer efter det, åker det ifrån dig lika fort ändå. Det är regeln som hela relativiteten bygger på.',
          de: 'Licht ist das Schnellste der Welt und schummelt nie. Egal wie schnell du hinterherrennst, es ist trotzdem immer gleich schnell weg. Das ist die Regel, auf der die ganze Relativität steht.'
        },
        f: ['c ≈ 3,0 · 10⁸ m/s']
      },
      {
        h: { sv: 'Tidsdilatation', de: 'Zeitdilatation' },
        p: {
          sv: 'Rör du dig snabbt går din tid <em>långsammare</em> sett från den som står still. Faktorn kallas <b>gammafaktorn γ</b>. Vid vardagsfart är effekten löjligt liten — men vid 87 % av ljushastigheten går din klocka hälften så fort! Astronauter på ISS åldras faktiskt några millisekunder mindre än vi. Snacka om anti-age-behandling.',
          de: 'Bewegst du dich schnell, vergeht deine Zeit <em>langsamer</em> — aus Sicht dessen, der stillsteht. Der Faktor heißt <b>Gammafaktor γ</b>. Bei Alltagstempo ist der Effekt lächerlich klein — aber bei 87 % der Lichtgeschwindigkeit tickt deine Uhr nur halb so schnell! Astronauten auf der ISS altern tatsächlich ein paar Millisekunden weniger als wir. Anti-Aging deluxe.'
        },
        eli5: {
          sv: 'Ju fortare du åker, desto långsammare tickar din klocka — men bara jättelite, tills du åker nästan lika fort som ljuset. Då blir det på riktigt: din kompis hemma blir äldre än du!',
          de: 'Je schneller du fährst, desto langsamer tickt deine Uhr — aber nur winzig wenig, bis du fast so schnell wie das Licht bist. Dann wird es echt: dein Freund zu Hause wird älter als du!'
        },
        f: ['γ = 1 / √(1 − v²/c²)', 't = γ · t₀']
      },
      {
        h: { sv: 'Längdkontraktion', de: 'Längenkontraktion' },
        p: {
          sv: 'Samma γ krymper längder i färdriktningen: en raket som susar förbi ser <em>kortare</em> ut än när den står still. <b>L = L₀/γ</b>. Nej, du kan inte använda det för att se smalare ut på bild — du måste röra dig i nära ljusfart, och då hinner ingen fota.',
          de: 'Dasselbe γ schrumpft Längen in Bewegungsrichtung: eine vorbeirauschende Rakete sieht <em>kürzer</em> aus als im Stand. <b>L = L₀/γ</b>. Nein, du kannst damit nicht schlanker auf Fotos aussehen — du müsstest dich fast mit Lichtgeschwindigkeit bewegen, und dann kann keiner mehr knipsen.'
        },
        eli5: {
          sv: 'Saker som åker jättefort ser ihoptryckta ut i färdriktningen — som en boll som plattas till. De känner inget själva, det är bara så vi ser dem.',
          de: 'Dinge, die superschnell fahren, sehen in Fahrtrichtung zusammengedrückt aus — wie ein plattgedrückter Ball. Sie merken selbst nichts, nur wir sehen sie so.'
        },
        f: ['L = L₀ / γ']
      },
      {
        h: { sv: 'E = mc² och GPS', de: 'E = mc² und GPS' },
        p: {
          sv: 'Massa är koncentrerad energi: <b>E = mc²</b>. Eftersom c² är enormt ger lite massa absurt mycket energi — det är därför solen och kärnkraftverk funkar. Och GPS? Satelliternas klockor går annorlunda än dina (både p.g.a. fart och gravitation). Utan relativistisk korrigering skulle GPS-positionen driva ~10 km <em>per dag</em>. Einstein hjälper dig alltså hitta till festen.',
          de: 'Masse ist konzentrierte Energie: <b>E = mc²</b>. Weil c² riesig ist, liefert wenig Masse absurd viel Energie — deshalb funktionieren Sonne und Kernkraftwerke. Und GPS? Die Uhren der Satelliten gehen anders als deine (wegen Tempo und Gravitation). Ohne relativistische Korrektur würde die GPS-Position ~10 km <em>pro Tag</em> wegdriften. Einstein hilft dir also, zur Party zu finden.'
        },
        eli5: {
          sv: 'I varje liten sak gömmer sig jättemycket energi — det säger E = mc². Och GPS:en i mobilen funkar bara för att smarta människor räknat med Einsteins regler. Annars skulle kartan visa fel varje dag!',
          de: 'In jedem kleinen Ding versteckt sich riesig viel Energie — das sagt E = mc². Und das GPS im Handy funktioniert nur, weil schlaue Leute mit Einsteins Regeln gerechnet haben. Sonst würde die Karte jeden Tag falsch zeigen!'
        },
        f: ['E = m · c²']
      }
    ],
    joke: {
      sv: 'Einstein, Newton och Pascal leker kurragömma. Einstein räknar. Newton ritar en kvadrat på 1 m² och ställer sig i den. Einstein: "Hittat! Newton!" Newton: "Nej. En Newton per kvadratmeter — jag är Pascal."',
      de: 'Einstein, Newton und Pascal spielen Verstecken. Einstein zählt. Newton malt ein Quadrat von 1 m² und stellt sich hinein. Einstein: "Gefunden! Newton!" Newton: "Nein. Ein Newton pro Quadratmeter — ich bin Pascal."'
    },
    drw: {
      sv: 'Einstein säger att tiden går långsammare när man rör sig fort. Därför joggar jag aldrig — jag vägrar bli yngre än mina studenter. Fysiken förbjuder det. Typ.',
      de: 'Einstein sagt, die Zeit vergeht langsamer, wenn man sich schnell bewegt. Deshalb jogge ich nie — ich weigere mich, jünger zu werden als meine Studenten. Die Physik verbietet das. Quasi.'
    },
    sim: 'relativity',
    simTitle: { sv: '🧪 Simulering: Tidsdilatation', de: '🧪 Simulation: Zeitdilatation' },
    simDesc: {
      sv: 'Skjut iväg raketen i nära ljusfart. Jämför klockan ombord med klockan på jorden. Ju närmare c, desto galnare blir det.',
      de: 'Schieß die Rakete mit fast Lichtgeschwindigkeit los. Vergleich die Borduhr mit der Uhr auf der Erde. Je näher an c, desto verrückter wird es.'
    },
    quiz: [
      { q: { sv: 'Vad är alltid samma för alla observatörer enligt Einstein?', de: 'Was ist laut Einstein für alle Beobachter immer gleich?' },
        a: { sv: ['Ljusets hastighet i vakuum', 'Tiden', 'Längder', 'Massan'], de: ['Die Lichtgeschwindigkeit im Vakuum', 'Die Zeit', 'Längen', 'Die Masse'] },
        correct: 0,
        expl: { sv: 'c är konstant för alla — det är själva grundbulten. Tid, längd och massa får anpassa sig.', de: 'c ist für alle konstant — das ist der Grundpfeiler. Zeit, Länge und Masse müssen sich anpassen.' } },
      { q: { sv: 'En astronaut reser i nära ljushastighet. Sett från jorden går astronautens klocka …', de: 'Ein Astronaut reist mit fast Lichtgeschwindigkeit. Von der Erde aus gesehen geht seine Uhr …' },
        a: { sv: ['långsammare', 'snabbare', 'exakt lika', 'baklänges'], de: ['langsamer', 'schneller', 'exakt gleich', 'rückwärts'] },
        correct: 0,
        expl: { sv: 'Tidsdilatation: rörliga klockor går långsammare sett från den som "står still".', de: 'Zeitdilatation: bewegte Uhren gehen langsamer — aus Sicht dessen, der "stillsteht".' } },
      { q: { sv: 'Vad är gammafaktorn vid v = 0?', de: 'Wie groß ist der Gammafaktor bei v = 0?' },
        a: { sv: ['1', '0', 'Oändlig', 'c'], de: ['1', '0', 'Unendlich', 'c'] },
        correct: 0,
        expl: { sv: 'γ = 1/√(1−0) = 1. Ingen fart = ingen relativistisk effekt = vanlig tråkig vardag.', de: 'γ = 1/√(1−0) = 1. Kein Tempo = kein relativistischer Effekt = ganz normaler langweiliger Alltag.' } },
      { q: { sv: 'Vad händer med γ när v närmar sig c?', de: 'Was passiert mit γ, wenn v sich c nähert?' },
        a: { sv: ['Den växer mot oändligheten', 'Den går mot noll', 'Den blir exakt 2', 'Den blir negativ'], de: ['Er wächst gegen unendlich', 'Er geht gegen null', 'Er wird genau 2', 'Er wird negativ'] },
        correct: 0,
        expl: { sv: 'Nämnaren √(1−v²/c²) går mot noll, så γ exploderar. Därför kan inget med massa nå ljusfarten.', de: 'Der Nenner √(1−v²/c²) geht gegen null, also explodiert γ. Deshalb kann nichts mit Masse Lichtgeschwindigkeit erreichen.' } },
      { q: { sv: 'Vad betyder E = mc²?', de: 'Was bedeutet E = mc²?' },
        a: { sv: ['Massa kan omvandlas till energi (och tvärtom)', 'Energi är alltid elektrisk', 'Massan ökar med tiden', 'Ljuset har massa'], de: ['Masse kann in Energie umgewandelt werden (und umgekehrt)', 'Energie ist immer elektrisch', 'Masse wächst mit der Zeit', 'Licht hat Masse'] },
        correct: 0,
        expl: { sv: 'Massa och energi är två sidor av samma mynt. Lite massa = enorm energi, eftersom c² ≈ 9·10¹⁶.', de: 'Masse und Energie sind zwei Seiten derselben Münze. Wenig Masse = enorme Energie, weil c² ≈ 9·10¹⁶.' } },
      { q: { sv: 'Varför måste GPS-satelliter korrigera för relativitet?', de: 'Warum müssen GPS-Satelliten relativistisch korrigieren?' },
        a: { sv: ['Deras klockor går annorlunda p.g.a. fart och gravitation', 'Radiosignaler böjs av månen', 'Satelliter krymper i rymden', 'De måste inte — det är en myt'], de: ['Ihre Uhren gehen wegen Tempo und Gravitation anders', 'Radiosignale werden vom Mond gebogen', 'Satelliten schrumpfen im All', 'Müssen sie nicht — das ist ein Mythos'] },
        correct: 0,
        expl: { sv: 'Utan korrigering skulle positionen driva ca 10 km per dag. Din kartapp fungerar tack vare Einstein.', de: 'Ohne Korrektur würde die Position ca. 10 km pro Tag wegdriften. Deine Karten-App funktioniert dank Einstein.' } },
      { q: { sv: 'En 100 m lång raket passerar i mycket hög fart. För en observatör på marken ser den …', de: 'Eine 100 m lange Rakete rauscht sehr schnell vorbei. Für einen Beobachter am Boden sieht sie …' },
        a: { sv: ['kortare än 100 m ut', 'längre än 100 m ut', 'exakt 100 m ut', 'ut som en cirkel'], de: ['kürzer als 100 m aus', 'länger als 100 m aus', 'exakt 100 m aus', 'wie ein Kreis aus'] },
        correct: 0,
        expl: { sv: 'Längdkontraktion: L = L₀/γ. Längder krymper i färdriktningen.', de: 'Längenkontraktion: L = L₀/γ. Längen schrumpfen in Bewegungsrichtung.' } },
      { q: { sv: 'Vid vilken fart blir γ ≈ 2 (tiden går hälften så fort)?', de: 'Bei welchem Tempo wird γ ≈ 2 (die Zeit vergeht halb so schnell)?' },
        a: { sv: ['≈ 87 % av c', '≈ 50 % av c', '≈ 99,9 % av c', '≈ 10 % av c'], de: ['≈ 87 % von c', '≈ 50 % von c', '≈ 99,9 % von c', '≈ 10 % von c'] },
        correct: 0,
        expl: { sv: 'v ≈ 0,87c ger γ = 2. Vid 50 % av c är γ bara 1,15 — relativistiska effekter kräver rejäl fart.', de: 'v ≈ 0,87c ergibt γ = 2. Bei 50 % von c ist γ nur 1,15 — relativistische Effekte brauchen richtig Tempo.' } }
    ]
  },

  {
    id: 'energi',
    icon: '🌍',
    title: { sv: 'Energi & Klimat', de: 'Energie & Klima' },
    intro: {
      sv: 'Energiprincipen, växthuseffekten och varför man inte kan bygga en evighetsmaskin (folk har försökt, alla har misslyckats).',
      de: 'Energieerhaltung, Treibhauseffekt und warum man kein Perpetuum mobile bauen kann (viele haben es versucht, alle sind gescheitert).'
    },
    theory: [
      {
        h: { sv: 'Energiprincipen', de: 'Der Energieerhaltungssatz' },
        p: {
          sv: 'Energi kan <b>aldrig skapas eller förstöras</b> — bara omvandlas mellan former: läges-, rörelse-, elektrisk, kemisk, värme... Summan är alltid konstant. Därför är evighetsmaskiner omöjliga. Patentverket i flera länder vägrar numera ens titta på ansökningar om evighetsmaskiner. De har tröttnat.',
          de: 'Energie kann <b>nie erschaffen oder zerstört werden</b> — nur umgewandelt: Lage-, Bewegungs-, elektrische, chemische, Wärmeenergie... Die Summe bleibt immer konstant. Deshalb sind Perpetuum mobile unmöglich. Patentämter mehrerer Länder schauen sich Anträge dazu gar nicht mehr an. Sie haben genug.'
        },
        eli5: {
          sv: 'Energi är som legobitar: du kan bygga om dem till nya saker, men du kan aldrig trolla fram nya bitar eller få bitar att försvinna. Samma antal bitar, alltid!',
          de: 'Energie ist wie Legosteine: du kannst sie zu neuen Sachen umbauen, aber nie neue Steine herzaubern oder Steine verschwinden lassen. Immer gleich viele Steine!'
        },
        f: ['E före = E efter', 'Ep = m·g·h', 'Ek = m·v²/2']
      },
      {
        h: { sv: 'Verkningsgrad', de: 'Wirkungsgrad' },
        p: {
          sv: '<b>Verkningsgraden η</b> = nyttig energi / tillförd energi. En bensinmotor: ~30 % (resten blir värme — dyr uppvärmning av luft). En elmotor: ~90 %. En LED-lampa slår glödlampan med hästlängder. Ingenting når 100 % — termodynamiken tar alltid sin skatt.',
          de: 'Der <b>Wirkungsgrad η</b> = nützliche Energie / zugeführte Energie. Ein Benzinmotor: ~30 % (der Rest wird Wärme — teure Luftheizung). Ein Elektromotor: ~90 %. Eine LED schlägt die Glühbirne um Längen. Nichts erreicht 100 % — die Thermodynamik kassiert immer ihre Steuer.'
        },
        eli5: {
          sv: 'Om du får 10 kulor och bara 3 hamnar i hinken — då är du "30 % bra" på kulkastning. Motorer är likadana: bara en del av energin blir nyttig, resten blir värme.',
          de: 'Wenn du 10 Murmeln wirfst und nur 3 im Eimer landen — dann bist du "30 % gut" im Werfen. Motoren sind genauso: nur ein Teil der Energie wird nützlich, der Rest wird Wärme.'
        },
        f: ['η = E_nyttig / E_tillförd']
      },
      {
        h: { sv: 'Växthuseffekten', de: 'Der Treibhauseffekt' },
        p: {
          sv: 'Solens kortvågiga strålning passerar atmosfären, jorden värms och strålar ut <em>långvågig</em> IR-strålning. Växthusgaser (CO₂, metan, vattenånga) absorberar IR:n och strålar tillbaka en del. Naturlig växthuseffekt = bra (utan den: −18 °C, hela Sverige blir en frys). <b>Förstärkt</b> växthuseffekt av fossila utsläpp = problemet. Det är skillnaden mellan en filt och femton filtar.',
          de: 'Die kurzwellige Sonnenstrahlung durchquert die Atmosphäre, die Erde erwärmt sich und strahlt <em>langwellige</em> IR-Strahlung ab. Treibhausgase (CO₂, Methan, Wasserdampf) absorbieren das IR und strahlen einen Teil zurück. Natürlicher Treibhauseffekt = gut (ohne ihn: −18 °C, ganz Schweden wird zur Tiefkühltruhe). <b>Verstärkter</b> Treibhauseffekt durch fossile Emissionen = das Problem. Der Unterschied zwischen einer Decke und fünfzehn Decken.'
        },
        eli5: {
          sv: 'Jorden har en osynlig filt av gaser som håller oss varma. Utan filten skulle vi frysa ihjäl. Men när vi släpper ut för mycket avgaser blir filten tjockare och tjockare — och nu börjar jorden svettas.',
          de: 'Die Erde hat eine unsichtbare Decke aus Gasen, die uns warm hält. Ohne die Decke würden wir erfrieren. Aber wenn wir zu viele Abgase rauspusten, wird die Decke immer dicker — und jetzt fängt die Erde an zu schwitzen.'
        },
        f: ['Instrålning ≈ Utstrålning (balans)']
      },
      {
        h: { sv: 'Energikällor', de: 'Energiequellen' },
        p: {
          sv: '<b>Förnybara:</b> sol, vind, vatten, biobränsle — fylls på naturligt. <b>Icke förnybara:</b> kol, olja, gas, uran. Sverige: mest vattenkraft + kärnkraft + växande vindkraft, därför låga elutsläpp. Fysikerns uppgift: räkna på effekt, energi och verkningsgrad så besluten bygger på siffror istället för känslor och Facebook-inlägg.',
          de: '<b>Erneuerbar:</b> Sonne, Wind, Wasser, Biomasse — füllt sich natürlich auf. <b>Nicht erneuerbar:</b> Kohle, Öl, Gas, Uran. Schweden: vor allem Wasserkraft + Kernkraft + wachsende Windkraft, deshalb niedrige Stromemissionen. Aufgabe der Physik: Leistung, Energie und Wirkungsgrad ausrechnen, damit Entscheidungen auf Zahlen beruhen statt auf Gefühlen und Facebook-Posts.'
        },
        eli5: {
          sv: 'Vissa energikällor tar aldrig slut: sol, vind och vatten kommer tillbaka hela tiden. Andra tar slut: kol och olja är som godis i en påse — när det är tomt är det tomt.',
          de: 'Manche Energiequellen gehen nie aus: Sonne, Wind und Wasser kommen immer wieder. Andere gehen aus: Kohle und Öl sind wie Bonbons in einer Tüte — wenn sie leer ist, ist sie leer.'
        },
        f: ['1 kWh = 3,6 MJ']
      }
    ],
    joke: {
      sv: 'Termodynamikens tre lagar, fritt översatta: 1) Du kan inte vinna. 2) Du kan inte ens spela oavgjort. 3) Du kan inte lämna spelet.',
      de: 'Die drei Hauptsätze der Thermodynamik, frei übersetzt: 1) Du kannst nicht gewinnen. 2) Du kannst nicht mal unentschieden spielen. 3) Du kannst das Spiel nicht verlassen.'
    },
    drw: {
      sv: 'Energi försvinner aldrig — den byter bara form. Min frukost i morse? Nu är den föreläsningsenergi. Varsågod, det här är toppmodern fysik du får gratis.',
      de: 'Energie verschwindet nie — sie wechselt nur die Form. Mein Frühstück heute Morgen? Ist jetzt Vorlesungsenergie. Bitte sehr, das ist Spitzenphysik gratis für dich.'
    },
    sim: 'energy',
    simTitle: { sv: '🧪 Simulering: Kulan i backen (energiomvandling)', de: '🧪 Simulation: Kugel in der Schüssel (Energieumwandlung)' },
    simDesc: {
      sv: 'Släpp kulan och se lägesenergi bli rörelseenergi och tillbaka. Staplarna visar energiformerna i realtid. Friktionen stjäl långsamt allt — som skatteverket, fast med värme.',
      de: 'Lass die Kugel los und sieh zu, wie Lageenergie zu Bewegungsenergie wird und zurück. Die Balken zeigen die Energieformen in Echtzeit. Die Reibung klaut langsam alles — wie das Finanzamt, nur mit Wärme.'
    },
    quiz: [
      { q: { sv: 'Vad säger energiprincipen?', de: 'Was sagt der Energieerhaltungssatz?' },
        a: { sv: ['Energi kan inte skapas eller förstöras, bara omvandlas', 'Energi försvinner alltid med tiden', 'Energi kan skapas i kärnkraftverk', 'Energi är samma sak som effekt'], de: ['Energie kann nicht erschaffen oder zerstört werden, nur umgewandelt', 'Energie verschwindet immer mit der Zeit', 'Energie kann in Kernkraftwerken erschaffen werden', 'Energie ist dasselbe wie Leistung'] },
        correct: 0,
        expl: { sv: 'Totala energin är konstant — den byter bara form. Kärnkraft omvandlar massa till energi (E=mc²), skapar inget nytt.', de: 'Die Gesamtenergie ist konstant — sie wechselt nur die Form. Kernkraft wandelt Masse in Energie um (E=mc²), erschafft nichts Neues.' } },
      { q: { sv: 'En motor tillförs 1000 J och uträttar 300 J nyttigt arbete. Verkningsgrad?', de: 'Ein Motor bekommt 1000 J und leistet 300 J nützliche Arbeit. Wirkungsgrad?' },
        a: { sv: ['30 %', '70 %', '3 %', '300 %'], de: ['30 %', '70 %', '3 %', '300 %'] },
        correct: 0,
        expl: { sv: 'η = 300/1000 = 0,30 = 30 %. Resten blir värme. Typisk bensinmotor, tyvärr.', de: 'η = 300/1000 = 0,30 = 30 %. Der Rest wird Wärme. Typischer Benzinmotor, leider.' } },
      { q: { sv: 'Varför är växthuseffekten i grunden bra?', de: 'Warum ist der Treibhauseffekt grundsätzlich gut?' },
        a: { sv: ['Utan den vore jordens medeltemperatur ca −18 °C', 'Den skyddar mot meteoriter', 'Den skapar syre', 'Den är inte bra alls'], de: ['Ohne ihn läge die Durchschnittstemperatur bei ca. −18 °C', 'Er schützt vor Meteoriten', 'Er erzeugt Sauerstoff', 'Er ist gar nicht gut'] },
        correct: 0,
        expl: { sv: 'Naturlig växthuseffekt håller oss på +15 °C istället för −18 °C. Problemet är den FÖRSTÄRKTA effekten från fossila utsläpp.', de: 'Der natürliche Treibhauseffekt hält uns bei +15 °C statt −18 °C. Das Problem ist der VERSTÄRKTE Effekt durch fossile Emissionen.' } },
      { q: { sv: 'Vilken av dessa är en förnybar energikälla?', de: 'Welche davon ist eine erneuerbare Energiequelle?' },
        a: { sv: ['Vindkraft', 'Naturgas', 'Kol', 'Uran'], de: ['Windkraft', 'Erdgas', 'Kohle', 'Uran'] },
        correct: 0,
        expl: { sv: 'Vinden tar aldrig slut (fråga vem som helst i Skåne). Kol, gas och uran är ändliga resurser.', de: 'Wind geht nie aus (frag irgendwen in Schonen). Kohle, Gas und Uran sind endliche Ressourcen.' } },
      { q: { sv: 'Hur mycket energi är 1 kWh i megajoule?', de: 'Wie viel Energie ist 1 kWh in Megajoule?' },
        a: { sv: ['3,6 MJ', '1 MJ', '36 MJ', '0,36 MJ'], de: ['3,6 MJ', '1 MJ', '36 MJ', '0,36 MJ'] },
        correct: 0,
        expl: { sv: '1 kWh = 1000 W · 3600 s = 3 600 000 J = 3,6 MJ.', de: '1 kWh = 1000 W · 3600 s = 3 600 000 J = 3,6 MJ.' } },
      { q: { sv: 'En kula släpps från 5 m höjd. Vad har hänt med lägesenergin precis innan den slår i marken (utan luftmotstånd)?', de: 'Eine Kugel fällt aus 5 m Höhe. Was ist mit der Lageenergie kurz vor dem Aufprall passiert (ohne Luftwiderstand)?' },
        a: { sv: ['Allt har blivit rörelseenergi', 'Den är kvar som lägesenergi', 'Den har försvunnit', 'Den har blivit ljus'], de: ['Alles wurde zu Bewegungsenergie', 'Sie ist noch Lageenergie', 'Sie ist verschwunden', 'Sie wurde zu Licht'] },
        correct: 0,
        expl: { sv: 'Ep = m·g·h omvandlas helt till Ek = m·v²/2. Energiprincipen i sin renaste form.', de: 'Ep = m·g·h wird komplett zu Ek = m·v²/2. Energieerhaltung in Reinform.' } },
      { q: { sv: 'Varför kan man inte bygga en evighetsmaskin?', de: 'Warum kann man kein Perpetuum mobile bauen?' },
        a: { sv: ['Friktion och värmeförluster gör att nyttig energi alltid minskar', 'Ingen har haft tillräckligt bra verktyg', 'Det är förbjudet enligt lag', 'Man kan — de finns redan'], de: ['Reibung und Wärmeverluste verringern die nützliche Energie immer', 'Niemand hatte gut genuges Werkzeug', 'Es ist gesetzlich verboten', 'Kann man — es gibt sie schon'] },
        correct: 0,
        expl: { sv: 'Termodynamiken: en del energi blir alltid "oanvändbar" värme. η < 100 % alltid. Fysiken är obarmhärtig.', de: 'Thermodynamik: ein Teil der Energie wird immer "unbrauchbare" Wärme. η < 100 %, immer. Die Physik ist gnadenlos.' } },
      { q: { sv: 'Vilken strålning skickar jorden ut mot rymden?', de: 'Welche Strahlung schickt die Erde ins All?' },
        a: { sv: ['Långvågig IR-strålning (värmestrålning)', 'Kortvågig UV-strålning', 'Gammastrålning', 'Radiovågor från Melodifestivalen'], de: ['Langwellige IR-Strahlung (Wärmestrahlung)', 'Kurzwellige UV-Strahlung', 'Gammastrahlung', 'Radiowellen vom Melodifestivalen'] },
        correct: 0,
        expl: { sv: 'Jorden är sval jämfört med solen och strålar därför i IR. Den fångas delvis av växthusgaser — det ÄR växthuseffekten. (Mello-vågorna är försumbara. Tack och lov.)', de: 'Die Erde ist kühl im Vergleich zur Sonne und strahlt daher im IR. Das wird teils von Treibhausgasen eingefangen — das IST der Treibhauseffekt. (Die Mello-Wellen sind vernachlässigbar. Zum Glück.)' } }
    ]
  },

  {
    id: 'tryck',
    icon: '🌊',
    title: { sv: 'Tryck', de: 'Druck' },
    intro: {
      sv: 'Varför öronen gör ont på havets botten och hur en dammlucka håller emot en hel sjö.',
      de: 'Warum die Ohren am Grund des Meeres wehtun und wie ein Schleusentor einen ganzen See zurückhält.'
    },
    theory: [
      {
        h: { sv: 'Vad är tryck?', de: 'Was ist Druck?' },
        p: {
          sv: 'Tryck = kraft utspridd över en yta: <b>p = F/A</b>. Enheten är pascal (Pa) = 1 N/m². Det är därför en stilettklack gör mer skada på ett trägolv än en elefantfot — mindre yta, monstertryck. Skridskor fungerar på samma princip, fast med is och mindre drama.',
          de: 'Druck = Kraft verteilt auf eine Fläche: <b>p = F/A</b>. Die Einheit ist Pascal (Pa) = 1 N/m². Deshalb richtet ein Stilettoabsatz auf Holzboden mehr Schaden an als ein Elefantenfuß — kleinere Fläche, Monsterdruck. Schlittschuhe funktionieren nach demselben Prinzip, nur mit Eis und weniger Drama.'
        },
        eli5: {
          sv: 'Tryck är hur hårt något trycker på en yta. Trampar någon på din fot med gympasko: aj. Med klack: AJAJAJ. Samma person, mindre yta — mer tryck!',
          de: 'Druck ist, wie fest etwas auf eine Fläche drückt. Tritt dir jemand mit Turnschuh auf den Fuß: aua. Mit Absatz: AUAUA. Gleiche Person, kleinere Fläche — mehr Druck!'
        },
        f: ['p = F / A', '1 Pa = 1 N/m²']
      },
      {
        h: { sv: 'Tryck i vätskor', de: 'Druck in Flüssigkeiten' },
        p: {
          sv: 'I en vätska ökar trycket med djupet: <b>p = ρ·g·h</b>. Vid 10 m vattendjup har trycket ökat med ungefär 1 atmosfär (~100 kPa) — det är därför öronen protesterar när du dyker till botten i simhallens djupa del. Trycket verkar åt <em>alla</em> håll, inte bara nedåt. Vattnet kramar dig, hårt.',
          de: 'In einer Flüssigkeit steigt der Druck mit der Tiefe: <b>p = ρ·g·h</b>. Bei 10 m Wassertiefe ist der Druck um etwa 1 Atmosphäre (~100 kPa) gestiegen — deshalb protestieren die Ohren, wenn du im tiefen Becken zum Boden tauchst. Der Druck wirkt in <em>alle</em> Richtungen, nicht nur nach unten. Das Wasser umarmt dich, fest.'
        },
        eli5: {
          sv: 'Ju djupare du dyker, desto mer vatten ligger ovanpå dig och trycker. Som att ha kompisar som staplar sig på dig — en till för varje meter. Därför säger öronen "plopp"!',
          de: 'Je tiefer du tauchst, desto mehr Wasser liegt auf dir und drückt. Wie Freunde, die sich auf dich stapeln — einer mehr pro Meter. Deshalb machen die Ohren "plopp"!'
        },
        f: ['p = ρ · g · h', 'ρ(vatten) ≈ 1000 kg/m³']
      },
      {
        h: { sv: 'Lufttryck', de: 'Luftdruck' },
        p: {
          sv: 'Vi lever på botten av ett lufthav. Normalt lufttryck ≈ <b>101,3 kPa</b> — motsvarar en kilovikt på varje kvadratcentimeter av din kropp. Att du inte krossas beror på att trycket inuti dig trycker emot. Sugproppar, sugrör och vakuumförpackat kaffe fungerar alla tack vare lufttrycket.',
          de: 'Wir leben am Grund eines Luftmeeres. Normaler Luftdruck ≈ <b>101,3 kPa</b> — entspricht einem Kilogewicht auf jedem Quadratzentimeter deines Körpers. Dass du nicht zerquetscht wirst, liegt daran, dass der Druck in dir dagegenhält. Saugnäpfe, Strohhalme und vakuumverpackter Kaffee funktionieren alle dank des Luftdrucks.'
        },
        eli5: {
          sv: 'Luften ovanför dig är jättetung och trycker på dig hela tiden — men du märker det inte, för din kropp trycker tillbaka inifrån. Det är därför sugproppen fastnar på fönstret!',
          de: 'Die Luft über dir ist superschwer und drückt die ganze Zeit auf dich — aber du merkst es nicht, weil dein Körper von innen zurückdrückt. Deshalb klebt der Saugnapf am Fenster!'
        },
        f: ['p₀ ≈ 101,3 kPa ≈ 1 atm']
      },
      {
        h: { sv: 'Arkimedes princip', de: 'Das Archimedische Prinzip' },
        p: {
          sv: 'Lyftkraften på ett föremål i vätska = tyngden av den undanträngda vätskan: <b>F = ρ·V·g</b>. Flyter gör det som är lättare än vattnet det knuffar undan. Arkimedes kom på det i badkaret och sprang enligt legenden naken genom Syrakusa och skrek "Heureka!". Plugga gärna intensivt — men behåll kläderna på.',
          de: 'Die Auftriebskraft auf einen Körper in Flüssigkeit = das Gewicht der verdrängten Flüssigkeit: <b>F = ρ·V·g</b>. Es schwimmt, was leichter ist als das Wasser, das es wegschiebt. Archimedes kam in der Badewanne darauf und rannte der Legende nach nackt durch Syrakus und rief "Heureka!". Lern gern intensiv — aber behalt die Kleider an.'
        },
        eli5: {
          sv: 'När du lägger något i vatten knuffar det undan vatten. Vattnet knuffar tillbaka uppåt! Om saken är lättare än vattnet den knuffade undan — då flyter den. Därför flyter stora tunga fartyg: de är fulla av luft.',
          de: 'Legst du etwas ins Wasser, schiebt es Wasser weg. Das Wasser schiebt nach oben zurück! Ist das Ding leichter als das weggeschobene Wasser — dann schwimmt es. Deshalb schwimmen große schwere Schiffe: sie sind voller Luft.'
        },
        f: ['F_lyft = ρ_vätska · V · g']
      }
    ],
    joke: {
      sv: 'Vad sa trycket till ytan? "Du får mig att känna mig så liten när du är stor." p = F/A, romantik på fysikvis.',
      de: 'Was sagte der Druck zur Fläche? "Du lässt mich so klein fühlen, wenn du groß bist." p = F/A, Physiker-Romantik.'
    },
    drw: {
      sv: 'Var tionde meter under vattnet: en atmosfär till. Därför håller jag alla mina föreläsningar på land. Säkerheten först — och krittavlan flyter ändå inte.',
      de: 'Alle zehn Meter unter Wasser: eine Atmosphäre mehr. Deshalb halte ich alle meine Vorlesungen an Land. Sicherheit zuerst — und die Kreidetafel schwimmt sowieso nicht.'
    },
    sim: 'pressure',
    simTitle: { sv: '🧪 Simulering: Dyk ner i djupet', de: '🧪 Simulation: Tauch in die Tiefe' },
    simDesc: {
      sv: 'Sänk dykaren och se trycket öka. Vid vilket djup har trycket fördubblats jämfört med ytan?',
      de: 'Lass den Taucher sinken und sieh den Druck steigen. In welcher Tiefe hat sich der Druck gegenüber der Oberfläche verdoppelt?'
    },
    quiz: [
      { q: { sv: 'Formeln för tryck?', de: 'Die Formel für Druck?' },
        a: { sv: ['p = F / A', 'p = F · A', 'p = A / F', 'p = m · g'], de: ['p = F / A', 'p = F · A', 'p = A / F', 'p = m · g'] },
        correct: 0,
        expl: { sv: 'Kraft delat med area. Liten yta + stor kraft = högt tryck. Fråga vilken stilettklack som helst.', de: 'Kraft geteilt durch Fläche. Kleine Fläche + große Kraft = hoher Druck. Frag irgendeinen Stilettoabsatz.' } },
      { q: { sv: 'Hur ändras trycket i vatten när djupet ökar?', de: 'Wie ändert sich der Druck im Wasser mit der Tiefe?' },
        a: { sv: ['Ökar linjärt med djupet', 'Minskar med djupet', 'Konstant överallt', 'Fördubblas varje meter'], de: ['Steigt linear mit der Tiefe', 'Sinkt mit der Tiefe', 'Überall konstant', 'Verdoppelt sich jeden Meter'] },
        correct: 0,
        expl: { sv: 'p = ρgh — dubbelt djup, dubbelt vätsketryck. Vid 10 m djup: +1 atmosfär.', de: 'p = ρgh — doppelte Tiefe, doppelter Wasserdruck. Bei 10 m Tiefe: +1 Atmosphäre.' } },
      { q: { sv: 'Ungefär vilket är normalt lufttryck vid havsytan?', de: 'Wie groß ist ungefähr der normale Luftdruck auf Meereshöhe?' },
        a: { sv: ['101 kPa', '10 kPa', '1013 kPa', '1 kPa'], de: ['101 kPa', '10 kPa', '1013 kPa', '1 kPa'] },
        correct: 0,
        expl: { sv: '101,3 kPa = 1 atm. Ett kilo tryckande luft per kvadratcentimeter av din kropp. Hela tiden.', de: '101,3 kPa = 1 atm. Ein Kilo drückende Luft pro Quadratzentimeter deines Körpers. Die ganze Zeit.' } },
      { q: { sv: 'Varför flyter ett stort stålfartyg fast stål sjunker?', de: 'Warum schwimmt ein großes Stahlschiff, obwohl Stahl sinkt?' },
        a: { sv: ['Skrovet tränger undan vatten som väger mer än fartyget', 'Saltet i havet bär upp det', 'Motorerna trycker det uppåt', 'Stål flyter alltid i stora bitar'], de: ['Der Rumpf verdrängt Wasser, das mehr wiegt als das Schiff', 'Das Salz im Meer trägt es', 'Die Motoren drücken es nach oben', 'Stahl schwimmt in großen Stücken immer'] },
        correct: 0,
        expl: { sv: 'Arkimedes: lyftkraften = den undanträngda vattenmassans tyngd. Skrovets form tränger undan enorma volymer.', de: 'Archimedes: Auftrieb = Gewicht des verdrängten Wassers. Die Rumpfform verdrängt enorme Volumen.' } },
      { q: { sv: 'En kraft på 600 N verkar på 0,03 m². Trycket?', de: 'Eine Kraft von 600 N wirkt auf 0,03 m². Der Druck?' },
        a: { sv: ['20 kPa', '18 Pa', '2 kPa', '200 kPa'], de: ['20 kPa', '18 Pa', '2 kPa', '200 kPa'] },
        correct: 0,
        expl: { sv: 'p = 600/0,03 = 20 000 Pa = 20 kPa. Ungefär en person som står på ett ben.', de: 'p = 600/0,03 = 20 000 Pa = 20 kPa. Ungefähr eine Person auf einem Bein.' } },
      { q: { sv: 'Vilket djup i vatten ger ett övertryck på ca 100 kPa (1 atm)?', de: 'Welche Wassertiefe ergibt einen Überdruck von ca. 100 kPa (1 atm)?' },
        a: { sv: ['ca 10 m', 'ca 1 m', 'ca 100 m', 'ca 50 m'], de: ['ca. 10 m', 'ca. 1 m', 'ca. 100 m', 'ca. 50 m'] },
        correct: 0,
        expl: { sv: 'p = 1000 · 9,82 · 10 ≈ 98 kPa. Tumregel: var tionde meter = en atmosfär till.', de: 'p = 1000 · 9,82 · 10 ≈ 98 kPa. Faustregel: alle zehn Meter = eine Atmosphäre mehr.' } },
      { q: { sv: 'Varför fungerar ett sugrör?', de: 'Warum funktioniert ein Strohhalm?' },
        a: { sv: ['Lufttrycket trycker upp drycken när du sänker trycket i munnen', 'Du drar upp vätskan med muskelkraft', 'Vätskan vill naturligt uppåt', 'Kapillärkraft gör hela jobbet'], de: ['Der Luftdruck drückt das Getränk hoch, wenn du den Druck im Mund senkst', 'Du ziehst die Flüssigkeit mit Muskelkraft hoch', 'Flüssigkeit will von Natur aus nach oben', 'Kapillarkraft macht die ganze Arbeit'] },
        correct: 0,
        expl: { sv: 'Du skapar undertryck — atmosfären utanför trycker då UPP drycken. På månen (vakuum) funkar inga sugrör. Planera dina rymdresor därefter.', de: 'Du erzeugst Unterdruck — die Atmosphäre draußen drückt das Getränk dann HOCH. Auf dem Mond (Vakuum) funktionieren keine Strohhalme. Plane deine Weltraumreisen entsprechend.' } },
      { q: { sv: 'Trycket i en vätska på ett visst djup verkar …', de: 'Der Druck in einer Flüssigkeit in bestimmter Tiefe wirkt …' },
        a: { sv: ['lika mycket åt alla håll', 'bara nedåt', 'bara uppåt', 'bara åt sidorna'], de: ['gleich stark in alle Richtungen', 'nur nach unten', 'nur nach oben', 'nur zur Seite'] },
        correct: 0,
        expl: { sv: 'Vätsketryck är riktningslöst — det trycker åt alla håll samtidigt. Därför känns kramen från vattnet överallt.', de: 'Flüssigkeitsdruck ist richtungslos — er drückt in alle Richtungen gleichzeitig. Deshalb spürt man die Wasser-Umarmung überall.' } }
    ]
  },

  {
    id: 'varme',
    icon: '🔥',
    title: { sv: 'Värmelära', de: 'Wärmelehre' },
    intro: {
      sv: 'Temperatur, värmekapacitet och varför saunan på 90 °C är trevlig men badvatten på 90 °C är ett brott.',
      de: 'Temperatur, Wärmekapazität und warum die Sauna bei 90 °C angenehm ist, Badewasser bei 90 °C aber ein Verbrechen.'
    },
    theory: [
      {
        h: { sv: 'Temperatur vs värme', de: 'Temperatur vs. Wärme' },
        p: {
          sv: '<b>Temperatur</b> = mått på partiklarnas genomsnittliga rörelseenergi. <b>Värme</b> = energi som flödar från varmt till kallt. En gnista från ett tomtebloss (2000 °C men pytteliten massa) skadar dig inte, men 60-gradigt kaffe i knät gör det — mer massa, mer energi. Temperatur är intensitet, värme är mängd.',
          de: '<b>Temperatur</b> = Maß für die mittlere Bewegungsenergie der Teilchen. <b>Wärme</b> = Energie, die von warm nach kalt fließt. Ein Funke von einer Wunderkerze (2000 °C, aber winzige Masse) verletzt dich nicht, 60-Grad-Kaffee im Schoß schon — mehr Masse, mehr Energie. Temperatur ist Intensität, Wärme ist Menge.'
        },
        eli5: {
          sv: 'Allt är byggt av små kulor som skakar. Skakar de fort = varmt. Skakar de långsamt = kallt. Temperatur är bara hur mycket kulorna dansar!',
          de: 'Alles ist aus kleinen Kugeln gebaut, die zittern. Zittern sie schnell = warm. Zittern sie langsam = kalt. Temperatur ist nur, wie doll die Kugeln tanzen!'
        },
        f: ['0 K = −273,15 °C']
      },
      {
        h: { sv: 'Specifik värmekapacitet', de: 'Spezifische Wärmekapazität' },
        p: {
          sv: 'Hur mycket energi krävs för att värma 1 kg av ett ämne 1 grad? Det är <b>specifika värmekapaciteten c</b>. Vatten är extremt: c = 4180 J/(kg·K) — därför tar det evigheter att koka pastavatten och därför mildrar havet kustklimatet. Metaller har låg c: därför bränner du dig på kastrullens handtag men inte på luften i ugnen.',
          de: 'Wie viel Energie braucht man, um 1 kg eines Stoffes um 1 Grad zu erwärmen? Das ist die <b>spezifische Wärmekapazität c</b>. Wasser ist extrem: c = 4180 J/(kg·K) — deshalb dauert Nudelwasser ewig und deshalb mildert das Meer das Küstenklima. Metalle haben niedriges c: deshalb verbrennst du dich am Topfgriff, aber nicht an der Luft im Ofen.'
        },
        eli5: {
          sv: 'Vissa saker är sega att värma, som vatten — det dricker jättemycket energi innan det blir varmt. Andra blir varma direkt, som en metallsked. Vatten är som en jättestor mage: det behöver massor innan det blir mätt.',
          de: 'Manche Sachen sind zäh beim Aufwärmen, wie Wasser — es trinkt riesig viel Energie, bevor es warm wird. Andere werden sofort heiß, wie ein Metalllöffel. Wasser ist wie ein Riesenbauch: es braucht ganz viel, bis es satt ist.'
        },
        f: ['E = c · m · ΔT', 'c(vatten) = 4180 J/(kg·K)']
      },
      {
        h: { sv: 'Fasövergångar', de: 'Phasenübergänge' },
        p: {
          sv: 'Att smälta is eller koka vatten kostar energi <em>utan att temperaturen ändras</em> — energin bryter bindningar istället. <b>Smältvärme</b> och <b>ångbildningsvärme</b>. Vattnets ångbildningsvärme är enorm (2260 kJ/kg) — därför svalkar svett så bra och därför är ånga vid 100 °C mycket farligare än vatten vid 100 °C.',
          de: 'Eis schmelzen oder Wasser kochen kostet Energie, <em>ohne dass sich die Temperatur ändert</em> — die Energie bricht stattdessen Bindungen. <b>Schmelzwärme</b> und <b>Verdampfungswärme</b>. Die Verdampfungswärme von Wasser ist enorm (2260 kJ/kg) — deshalb kühlt Schweiß so gut und deshalb ist Dampf bei 100 °C viel gefährlicher als Wasser bei 100 °C.'
        },
        eli5: {
          sv: 'När is smälter händer något lurigt: temperaturen står still fast du värmer! All energi går åt till att bryta isen loss ur sitt frusna mönster. Först när all is är borta börjar det bli varmare igen.',
          de: 'Wenn Eis schmilzt, passiert etwas Schlaues: die Temperatur bleibt stehen, obwohl du heizt! Die ganze Energie geht dafür drauf, das Eis aus seinem gefrorenen Muster zu lösen. Erst wenn alles Eis weg ist, wird es wieder wärmer.'
        },
        f: ['E = m · l', 'l_ånga = 2260 kJ/kg']
      },
      {
        h: { sv: 'Värmetransport', de: 'Wärmetransport' },
        p: {
          sv: 'Tre sätt: <b>Ledning</b> (via kontakt — metallsked i teet), <b>strömning/konvektion</b> (varm luft/vätska stiger — element, golvvärme) och <b>strålning</b> (IR — solen, brasan, din kompis ansikte efter skidbacken). Termosen bekämpar alla tre samtidigt: vakuum mot ledning/strömning, speglande skikt mot strålning. Respekt till termosen.',
          de: 'Drei Wege: <b>Leitung</b> (über Kontakt — Metalllöffel im Tee), <b>Strömung/Konvektion</b> (warme Luft/Flüssigkeit steigt — Heizung, Fußbodenheizung) und <b>Strahlung</b> (IR — Sonne, Lagerfeuer, das Gesicht deines Kumpels nach der Skipiste). Die Thermoskanne bekämpft alle drei gleichzeitig: Vakuum gegen Leitung/Strömung, Spiegelschicht gegen Strahlung. Respekt an die Thermoskanne.'
        },
        eli5: {
          sv: 'Värme reser på tre sätt: den kryper genom saker (skeden i teet blir varm), den åker hiss uppåt med varm luft, och den flyger som osynliga strålar (solen värmer ditt ansikte). Tre olika resor, samma värme!',
          de: 'Wärme reist auf drei Arten: sie kriecht durch Dinge (der Löffel im Tee wird heiß), sie fährt mit warmer Luft Aufzug nach oben, und sie fliegt als unsichtbare Strahlen (die Sonne wärmt dein Gesicht). Drei Reisen, gleiche Wärme!'
        },
        f: ['Ledning · Konvektion · Strålning']
      }
    ],
    joke: {
      sv: 'Varför är saunan på 90 °C skön men vatten på 90 °C livsfarligt? Luft har låg värmekapacitet och leder värme uselt — vattnet dumpar hundra gånger mer energi i dig. Fysik räddar liv (och bastukvällar).',
      de: 'Warum ist die Sauna bei 90 °C angenehm, aber Wasser bei 90 °C lebensgefährlich? Luft hat niedrige Wärmekapazität und leitet Wärme miserabel — Wasser kippt hundertmal mehr Energie in dich. Physik rettet Leben (und Saunaabende).'
    },
    drw: {
      sv: 'Vatten har enorm värmekapacitet — därför tar mitt tekök en evighet. Perfekt: då hinner vi alltid med en genomgång till medan vi väntar. Ni är välkomna.',
      de: 'Wasser hat eine enorme Wärmekapazität — deshalb braucht mein Teekessel eine Ewigkeit. Perfekt: dann schaffen wir beim Warten immer noch eine Wiederholung. Gern geschehen.'
    },
    sim: 'heat',
    simTitle: { sv: '🧪 Simulering: Koka vattnet', de: '🧪 Simulation: Wasser kochen' },
    simDesc: {
      sv: 'Tillför effekt och se temperaturen stiga enligt E = cmΔT. Notera platån vid 100 °C — fasövergången slukar energi utan att temperaturen rör sig.',
      de: 'Führe Leistung zu und sieh die Temperatur nach E = cmΔT steigen. Beachte das Plateau bei 100 °C — der Phasenübergang verschlingt Energie, ohne dass sich die Temperatur bewegt.'
    },
    quiz: [
      { q: { sv: 'Vad är temperatur egentligen ett mått på?', de: 'Wofür ist Temperatur eigentlich ein Maß?' },
        a: { sv: ['Partiklarnas genomsnittliga rörelseenergi', 'Mängden värme i föremålet', 'Antalet partiklar', 'Föremålets densitet'], de: ['Die mittlere Bewegungsenergie der Teilchen', 'Die Wärmemenge im Objekt', 'Die Anzahl der Teilchen', 'Die Dichte des Objekts'] },
        correct: 0,
        expl: { sv: 'Ju snabbare partiklarna skakar och far omkring, desto högre temperatur. Vid 0 K står nästan allt still.', de: 'Je schneller die Teilchen zittern und herumflitzen, desto höher die Temperatur. Bei 0 K steht fast alles still.' } },
      { q: { sv: 'Hur mycket energi krävs för att värma 2,0 kg vatten från 20 °C till 100 °C? (c = 4180 J/(kg·K))', de: 'Wie viel Energie braucht man, um 2,0 kg Wasser von 20 °C auf 100 °C zu erwärmen? (c = 4180 J/(kg·K))' },
        a: { sv: ['ca 670 kJ', 'ca 84 kJ', 'ca 6,7 kJ', 'ca 1,2 MJ'], de: ['ca. 670 kJ', 'ca. 84 kJ', 'ca. 6,7 kJ', 'ca. 1,2 MJ'] },
        correct: 0,
        expl: { sv: 'E = c·m·ΔT = 4180 · 2,0 · 80 ≈ 669 000 J ≈ 670 kJ. Pastan får vänta en stund.', de: 'E = c·m·ΔT = 4180 · 2,0 · 80 ≈ 669 000 J ≈ 670 kJ. Die Nudeln müssen warten.' } },
      { q: { sv: 'Varför ändras inte temperaturen medan is smälter?', de: 'Warum ändert sich die Temperatur nicht, während Eis schmilzt?' },
        a: { sv: ['Energin går åt till att bryta bindningarna, inte öka rörelsen', 'Isen isolerar sig själv', 'Termometern fryser', 'Temperaturen ändras visst'], de: ['Die Energie bricht die Bindungen, statt die Bewegung zu erhöhen', 'Das Eis isoliert sich selbst', 'Das Thermometer friert ein', 'Die Temperatur ändert sich doch'] },
        correct: 0,
        expl: { sv: 'Fasövergång: all tillförd energi bryter kristallstrukturen. Först när allt smält stiger temperaturen igen.', de: 'Phasenübergang: alle zugeführte Energie bricht die Kristallstruktur. Erst wenn alles geschmolzen ist, steigt die Temperatur wieder.' } },
      { q: { sv: 'Vilket värmetransportsätt fungerar även i vakuum?', de: 'Welcher Wärmetransport funktioniert auch im Vakuum?' },
        a: { sv: ['Strålning', 'Ledning', 'Konvektion', 'Inget av dem'], de: ['Strahlung', 'Leitung', 'Konvektion', 'Keiner davon'] },
        correct: 0,
        expl: { sv: 'IR-strålning behöver inget medium — därför når solens värme oss genom 150 miljoner km tomrum.', de: 'IR-Strahlung braucht kein Medium — deshalb erreicht uns die Sonnenwärme durch 150 Millionen km Leere.' } },
      { q: { sv: 'Varför känns metall kallare än trä vid samma temperatur?', de: 'Warum fühlt sich Metall kälter an als Holz bei gleicher Temperatur?' },
        a: { sv: ['Metall leder bort din kroppsvärme snabbare', 'Metall är faktiskt kallare', 'Trä producerar värme', 'Metall innehåller is'], de: ['Metall leitet deine Körperwärme schneller ab', 'Metall ist tatsächlich kälter', 'Holz produziert Wärme', 'Metall enthält Eis'] },
        correct: 0,
        expl: { sv: 'Samma temperatur, men metall är en utmärkt värmeledare — den dränerar din hud på värme. Termometern håller med: samma temp.', de: 'Gleiche Temperatur, aber Metall ist ein exzellenter Wärmeleiter — es saugt deiner Haut die Wärme ab. Das Thermometer bestätigt: gleiche Temperatur.' } },
      { q: { sv: 'Absoluta nollpunkten är …', de: 'Der absolute Nullpunkt ist …' },
        a: { sv: ['−273,15 °C, där partikelrörelsen är minimal', '0 °C, där vatten fryser', '−100 °C', 'temperaturen i rymden exakt'], de: ['−273,15 °C, wo die Teilchenbewegung minimal ist', '0 °C, wo Wasser gefriert', '−100 °C', 'exakt die Temperatur im Weltall'] },
        correct: 0,
        expl: { sv: '0 K = −273,15 °C. Kallare än så finns inte — rörelseenergin kan inte bli mindre än minimum.', de: '0 K = −273,15 °C. Kälter geht nicht — die Bewegungsenergie kann nicht unter das Minimum fallen.' } },
      { q: { sv: 'Varför svalkar svett?', de: 'Warum kühlt Schweiß?' },
        a: { sv: ['Avdunstningen kräver ångbildningsvärme som tas från huden', 'Svett är kallare än kroppen', 'Saltet kyler huden', 'Det är psykologiskt'], de: ['Die Verdunstung braucht Verdampfungswärme, die der Haut entzogen wird', 'Schweiß ist kälter als der Körper', 'Das Salz kühlt die Haut', 'Es ist psychologisch'] },
        correct: 0,
        expl: { sv: 'Varje gram svett som avdunstar stjäl ~2,3 kJ från din hud. Kroppens egen klimatanläggning — gratis dessutom.', de: 'Jedes Gramm Schweiß, das verdunstet, klaut ~2,3 kJ von deiner Haut. Die körpereigene Klimaanlage — und gratis.' } },
      { q: { sv: 'Havet gör kustklimat mildare eftersom vatten …', de: 'Das Meer macht Küstenklima milder, weil Wasser …' },
        a: { sv: ['har hög specifik värmekapacitet och lagrar värme länge', 'reflekterar solljus', 'innehåller salt', 'alltid är 15 grader'], de: ['hohe spezifische Wärmekapazität hat und Wärme lange speichert', 'Sonnenlicht reflektiert', 'Salz enthält', 'immer 15 Grad hat'] },
        correct: 0,
        expl: { sv: 'c = 4180 J/(kg·K) — havet är ett gigantiskt värmebatteri som jämnar ut sommar och vinter. Tack, havet.', de: 'c = 4180 J/(kg·K) — das Meer ist ein gigantischer Wärmespeicher, der Sommer und Winter ausgleicht. Danke, Meer.' } }
    ]
  }
];

const LEVELS = [
  { xp: 0, title: { sv: 'Fysik-Turist 🧳', de: 'Physik-Tourist 🧳' } },
  { xp: 100, title: { sv: 'Formelsamlare 📐', de: 'Formelsammler 📐' } },
  { xp: 250, title: { sv: 'Labbråtta 🐭', de: 'Laborratte 🐭' } },
  { xp: 450, title: { sv: 'Newtons Lärling 🍎', de: 'Newtons Lehrling 🍎' } },
  { xp: 700, title: { sv: 'Einsteins Kompis 🧠', de: 'Einsteins Kumpel 🧠' } },
  { xp: 1000, title: { sv: 'Nobelkandidat 🏅', de: 'Nobelpreis-Kandidat 🏅' } },
  { xp: 1400, title: { sv: 'Fysikens Överherre ⚡👑', de: 'Overlord der Physik ⚡👑' } }
];
