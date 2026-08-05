// Allt innehåll för Williams Fysiklabb — Fysik 1b fortsättning
// Struktur: moduler med teori, simulering och quiz. Allt på svenska, med skämt.

const MODULES = [
  {
    id: 'ellara',
    icon: '⚡',
    title: 'Ellära',
    intro: 'Ström, spänning och resistans — eller: varför du inte ska sticka in gaffeln i brödrosten.',
    theory: [
      {
        h: 'Spänning, ström och resistans',
        p: `Tänk dig en vattenrutschkana. <b>Spänningen (U)</b> är hur högt upp rutschkanan börjar — den "trycker" laddningarna framåt. <b>Strömmen (I)</b> är hur mycket vatten som forsar per sekund. <b>Resistansen (R)</b> är hur trång och krånglig kanan är. Hög resistans = elektronerna köar som på Systembolaget dagen före midsommar.`,
        f: ['U = R · I', 'Enheter: volt (V), ampere (A), ohm (Ω)']
      },
      {
        h: 'Ohms lag',
        p: `Ohms lag <b>U = R·I</b> är ellärans superstjärna. Vet du två av storheterna kan du alltid räkna ut den tredje. Dubblar du spänningen över en fast resistans? Då dubblas strömmen. Enkelt som en pannkaka — fast med elektroner.`,
        f: ['I = U / R', 'R = U / I']
      },
      {
        h: 'Elektrisk effekt och energi',
        p: `Effekten <b>P = U·I</b> talar om hur snabbt elenergi omvandlas — till exempel till ljus och värme i en lampa. Energin är effekt gånger tid: <b>E = P·t</b>. Det är den där <em>kilowattimmen</em> (kWh) på elräkningen som får din pappa att släcka lampor som en besatt.`,
        f: ['P = U · I', 'P = R · I²', 'E = P · t']
      },
      {
        h: 'Serie- och parallellkoppling',
        p: `<b>Seriekoppling:</b> komponenterna sitter på rad som vagnar i ett tåg — samma ström genom alla, spänningen delas upp. Resistanserna adderas: R = R₁ + R₂. <b>Parallellkoppling:</b> strömmen delar upp sig som köer i mataffären — samma spänning över alla grenar, totala resistansen blir <em>mindre</em> än den minsta grenen. Ja, mindre. Fysik är konstigt ibland.`,
        f: ['Serie: R = R₁ + R₂', 'Parallell: 1/R = 1/R₁ + 1/R₂']
      }
    ],
    joke: 'Ohm, Ohm på hemmet... förlåt. Vi går vidare.',
    sim: 'circuit',
    simTitle: '🧪 Simulering: Ohms lag i praktiken',
    simDesc: 'Dra i reglagen och se hur strömmen och lampans ljusstyrka ändras. Elektronerna är de små prickarna — snälla mot dem.',
    quiz: [
      { q: 'Vad säger Ohms lag?', a: ['U = R · I', 'U = R / I', 'U = I² · t', 'U = m · g'], correct: 0, expl: 'U = R·I. Spänning = resistans gånger ström. Ellärans hjärta.' },
      { q: 'En lampa har resistansen 6,0 Ω och kopplas till 12 V. Hur stor blir strömmen?', a: ['2,0 A', '0,5 A', '72 A', '6,0 A'], correct: 0, expl: 'I = U/R = 12/6,0 = 2,0 A. Lugnt och fint.' },
      { q: 'Vad händer med totala resistansen när du parallellkopplar två motstånd?', a: ['Den blir mindre än det minsta motståndet', 'Den blir summan av motstånden', 'Den blir exakt medelvärdet', 'Den blir oändlig'], correct: 0, expl: 'Fler parallella vägar = lättare för strömmen. Totala resistansen sjunker under det minsta motståndet.' },
      { q: 'En elvisp drar 2,0 A vid 230 V. Vilken effekt har den?', a: ['460 W', '115 W', '232 W', '4,6 kW'], correct: 0, expl: 'P = U·I = 230 · 2,0 = 460 W. Grädden vispas med vetenskap.' },
      { q: 'I en seriekoppling är strömmen …', a: ['lika stor genom alla komponenter', 'störst genom största motståndet', 'noll i mitten', 'olika i varje komponent'], correct: 0, expl: 'Tågprincipen: samma ström överallt i en seriekrets. Vagnarna kan inte köra om varandra.' },
      { q: 'Vad kostar det (ungefär) att ha en 2000 W-element på i 3 timmar om elen kostar 2 kr/kWh?', a: ['12 kr', '2 kr', '120 kr', '6 kr'], correct: 0, expl: 'E = P·t = 2 kW · 3 h = 6 kWh. 6 · 2 kr = 12 kr. Billigare än en kanelbulle på Espresso House.' },
      { q: 'Två motstånd på 10 Ω och 20 Ω seriekopplas. Total resistans?', a: ['30 Ω', '6,7 Ω', '15 Ω', '200 Ω'], correct: 0, expl: 'Serie: bara addera. 10 + 20 = 30 Ω.' },
      { q: 'Varför blir en glödtråd varm när ström flyter genom den?', a: ['Elektronerna krockar med atomerna i tråden och avger energi', 'Elektronerna brinner upp', 'Spänningen skapar friktion mot luften', 'Tråden är rädd'], correct: 0, expl: 'Resistans = elektronkrockar med atomgittret. Rörelseenergi blir värme. Tråden är inte rädd. Troligen.' }
    ]
  },

  {
    id: 'karnfysik',
    icon: '☢️',
    title: 'Kärnfysik',
    intro: 'Radioaktivitet, halveringstid och varför bananer tekniskt sett är radioaktiva. (På riktigt.)',
    theory: [
      {
        h: 'Atomkärnan',
        p: `Atomkärnan består av <b>protoner</b> (positiva) och <b>neutroner</b> (neutrala, gillar bara att hänga). Antalet protoner = <b>atomnumret Z</b> och bestämmer vilket grundämne det är. Protoner + neutroner = <b>masstalet A</b>. Samma ämne med olika antal neutroner kallas <b>isotoper</b> — som syskon med samma efternamn men olika vikt.`,
        f: ['A = Z + N', 'Exempel: ¹⁴C har Z=6, N=8']
      },
      {
        h: 'Radioaktivt sönderfall',
        p: `Instabila kärnor gör som stressade studenter: de gör sig av med det som tynger. <b>Alfastrålning (α):</b> kärnan spottar ut en heliumkärna (2p + 2n). Stoppas av ett papper. <b>Betastrålning (β):</b> en neutron blir proton + elektron som skjuts ut. Stoppas av aluminiumplåt. <b>Gammastrålning (γ):</b> ren energi, fotoner. Kräver bly eller tjock betong. Gamma är den enda som inte ändrar grundämnet — den bara "rapar" energi.`,
        f: ['α: A minskar 4, Z minskar 2', 'β⁻: Z ökar 1, A oförändrat']
      },
      {
        h: 'Halveringstid',
        p: `<b>Halveringstiden T½</b> är tiden det tar för hälften av kärnorna i ett prov att sönderfalla. Efter en halveringstid: 50 % kvar. Efter två: 25 %. Efter tre: 12,5 %. Det är som en påse chips på fredagsmys — exponentiellt avtagande, fast chipsen har betydligt kortare halveringstid.`,
        f: ['N = N₀ · (½)^(t/T½)']
      },
      {
        h: 'Joniserande strålning och stråldos',
        p: `Strålning som kan slå loss elektroner kallas <b>joniserande</b> — den kan skada DNA. Stråldos mäts i <b>sievert (Sv)</b>. En svensk får i snitt ca 3 mSv/år, mest från radon och medicinsk röntgen. En banan ger ca 0,1 µSv tack vare kalium-40. Du behöver alltså äta typ 10 miljoner bananer snabbt för att det ska bli farligt. Utmaningen är magen, inte strålningen.`,
        f: ['Dos: sievert (Sv)', 'Aktivitet: becquerel (Bq) = sönderfall/sekund']
      }
    ],
    joke: 'En neutron går in på en bar och frågar vad en öl kostar. Bartendern: "För dig? Ingen laddning."',
    sim: 'decay',
    simTitle: '🧪 Simulering: Radioaktivt sönderfall',
    simDesc: 'Starta sönderfallet och se hur kärnorna (prickarna) dör exponentiellt. Kurvan visar N(t). Ändra halveringstiden och kör igen.',
    quiz: [
      { q: 'Vad består alfastrålning av?', a: ['Heliumkärnor (2 protoner + 2 neutroner)', 'Elektroner', 'Fotoner', 'Neutroner'], correct: 0, expl: 'Alfapartikel = heliumkärna. Tung och klumpig — stoppas av ett papper eller din hud.' },
      { q: 'Vilken strålning tränger igenom mest material?', a: ['Gamma', 'Alfa', 'Beta', 'Alla lika'], correct: 0, expl: 'Gamma är ren elektromagnetisk energi — kräver bly eller tjock betong. Alfa stoppas av papper, beta av aluminium.' },
      { q: 'Ett preparat har halveringstiden 10 år. Hur mycket är kvar efter 30 år?', a: ['12,5 %', '25 %', '33 %', '0 %'], correct: 0, expl: '30 år = 3 halveringstider. 100 → 50 → 25 → 12,5 %. Aldrig exakt noll — sönderfall är envist.' },
      { q: 'Vad händer med atomnumret Z vid beta-minus-sönderfall?', a: ['Ökar med 1', 'Minskar med 1', 'Minskar med 2', 'Oförändrat'], correct: 0, expl: 'En neutron blir en proton + elektron. En proton till = Z ökar med 1. Nytt grundämne, samma masstal.' },
      { q: 'Vad mäter enheten becquerel (Bq)?', a: ['Antal sönderfall per sekund', 'Stråldos i kroppen', 'Strålningens energi', 'Antal protoner'], correct: 0, expl: '1 Bq = 1 sönderfall per sekund. Stråldos i kroppen mäts i sievert (Sv).' },
      { q: 'Varför är bananer (lite) radioaktiva?', a: ['De innehåller kalium-40', 'De innehåller uran', 'De odlas nära kärnkraftverk', 'De är det inte — det är en myt'], correct: 0, expl: 'Kalium-40 är en naturligt radioaktiv isotop. Helt ofarligt — din kropp är också radioaktiv av samma anledning.' },
      { q: 'Kol-14-metoden används för att …', a: ['åldersbestämma organiskt material', 'mäta temperatur i stjärnor', 'skapa energi i kärnkraftverk', 'göra kol fossilfritt'], correct: 0, expl: '¹⁴C sönderfaller med T½ ≈ 5730 år. Genom att mäta hur mycket som är kvar kan man datera gamla ben, trä och mumier.' },
      { q: 'Vad är den största källan till svenskars stråldos?', a: ['Radon i bostäder', 'Kärnkraftverk', 'Mobiltelefoner', 'Flygresor'], correct: 0, expl: 'Radon från marken som läcker in i hus. Kärnkraft bidrar försumbart, mobiler strålar inte joniserande alls.' }
    ]
  },

  {
    id: 'relativitet',
    icon: '🕰️',
    title: 'Relativitet',
    intro: 'Einstein, tidsdilatation och varför GPS:en skulle gå vilse utan relativitetsteorin.',
    theory: [
      {
        h: 'Ljushastigheten är chefen',
        p: `Einsteins speciella relativitetsteori bygger på två postulat: 1) Fysikens lagar är samma för alla som rör sig med konstant hastighet. 2) <b>Ljusets hastighet i vakuum, c ≈ 3,0·10⁸ m/s, är samma för alla observatörer.</b> Alltid. Oavsett hur fort du jagar en ljusstråle mäter du samma hastighet. Ljuset bryr sig inte om dina känslor.`,
        f: ['c ≈ 3,0 · 10⁸ m/s']
      },
      {
        h: 'Tidsdilatation',
        p: `Rör du dig snabbt går din tid <em>långsammare</em> sett från den som står still. Faktorn kallas <b>gammafaktorn γ</b>. Vid vardagsfart är effekten löjligt liten — men vid 87 % av ljushastigheten går din klocka hälften så fort! Astronauter på ISS åldras faktiskt några millisekunder mindre än vi. Snacka om anti-age-behandling.`,
        f: ['γ = 1 / √(1 − v²/c²)', 't = γ · t₀']
      },
      {
        h: 'Längdkontraktion',
        p: `Samma γ krymper längder i färdriktningen: en raket som susar förbi ser <em>kortare</em> ut än när den står still. <b>L = L₀/γ</b>. Nej, du kan inte använda det för att se smalare ut på bild — du måste röra dig i nära ljusfart, och då hinner ingen fota.`,
        f: ['L = L₀ / γ']
      },
      {
        h: 'E = mc² och GPS',
        p: `Massa är koncentrerad energi: <b>E = mc²</b>. Eftersom c² är enormt ger lite massa absurt mycket energi — det är därför solen och kärnkraftverk funkar. Och GPS? Satelliternas klockor går annorlunda än dina (både p.g.a. fart och gravitation). Utan relativistisk korrigering skulle GPS-positionen driva ~10 km <em>per dag</em>. Einstein hjälper dig alltså hitta till festen.`,
        f: ['E = m · c²']
      }
    ],
    joke: 'Einstein, Newton och Pascal leker kurragömma. Einstein räknar. Newton ritar en kvadrat på 1 m² och ställer sig i den. Einstein: "Hittat! Newton!" Newton: "Nej. En Newton per kvadratmeter — jag är Pascal."',
    sim: 'relativity',
    simTitle: '🧪 Simulering: Tidsdilatation',
    simDesc: 'Skjut iväg raketen i nära ljusfart. Jämför klockan ombord med klockan på jorden. Ju närmare c, desto galnare blir det.',
    quiz: [
      { q: 'Vad är alltid samma för alla observatörer enligt Einstein?', a: ['Ljusets hastighet i vakuum', 'Tiden', 'Längder', 'Massan'], correct: 0, expl: 'c är konstant för alla — det är själva grundbulten. Tid, längd och massa får anpassa sig.' },
      { q: 'En astronaut reser i nära ljushastighet. Sett från jorden går astronautens klocka …', a: ['långsammare', 'snabbare', 'exakt lika', 'baklänges'], correct: 0, expl: 'Tidsdilatation: rörliga klockor går långsammare sett från den som "står still".' },
      { q: 'Vad är gammafaktorn vid v = 0?', a: ['1', '0', 'Oändlig', 'c'], correct: 0, expl: 'γ = 1/√(1−0) = 1. Ingen fart = ingen relativistisk effekt = vanlig tråkig vardag.' },
      { q: 'Vad händer med γ när v närmar sig c?', a: ['Den växer mot oändligheten', 'Den går mot noll', 'Den blir exakt 2', 'Den blir negativ'], correct: 0, expl: 'Nämnaren √(1−v²/c²) går mot noll, så γ exploderar. Därför kan inget med massa nå ljusfarten.' },
      { q: 'Vad betyder E = mc²?', a: ['Massa kan omvandlas till energi (och tvärtom)', 'Energi är alltid elektrisk', 'Massan ökar med tiden', 'Ljuset har massa'], correct: 0, expl: 'Massa och energi är två sidor av samma mynt. Lite massa = enorm energi, eftersom c² ≈ 9·10¹⁶.' },
      { q: 'Varför måste GPS-satelliter korrigera för relativitet?', a: ['Deras klockor går annorlunda p.g.a. fart och gravitation', 'Radiosignaler böjs av månen', 'Satelliter krymper i rymden', 'De måste inte — det är en myt'], correct: 0, expl: 'Utan korrigering skulle positionen driva ca 10 km per dag. Din kartapp fungerar tack vare Einstein.' },
      { q: 'En 100 m lång raket passerar i mycket hög fart. För en observatör på marken ser den …', a: ['kortare än 100 m ut', 'längre än 100 m ut', 'exakt 100 m ut', 'ut som en cirkel'], correct: 0, expl: 'Längdkontraktion: L = L₀/γ. Längder krymper i färdriktningen.' },
      { q: 'Vid vilken fart blir γ ≈ 2 (tiden går hälften så fort)?', a: ['≈ 87 % av c', '≈ 50 % av c', '≈ 99,9 % av c', '≈ 10 % av c'], correct: 0, expl: 'v ≈ 0,87c ger γ = 2. Vid 50 % av c är γ bara 1,15 — relativistiska effekter kräver rejäl fart.' }
    ]
  },

  {
    id: 'energi',
    icon: '🌍',
    title: 'Energi & Klimat',
    intro: 'Energiprincipen, växthuseffekten och varför man inte kan bygga en evighetsmaskin (folk har försökt, alla har misslyckats).',
    theory: [
      {
        h: 'Energiprincipen',
        p: `Energi kan <b>aldrig skapas eller förstöras</b> — bara omvandlas mellan former: läges-, rörelse-, elektrisk, kemisk, värme... Summan är alltid konstant. Därför är evighetsmaskiner omöjliga. Patentverket i flera länder vägrar numera ens titta på ansökningar om evighetsmaskiner. De har tröttnat.`,
        f: ['E före = E efter', 'Ep = m·g·h', 'Ek = m·v²/2']
      },
      {
        h: 'Verkningsgrad',
        p: `<b>Verkningsgraden η</b> = nyttig energi / tillförd energi. En bensinmotor: ~30 % (resten blir värme — dyr uppvärmning av luft). En elmotor: ~90 %. En LED-lampa slår glödlampan med hästlängder. Ingenting når 100 % — termodynamiken tar alltid sin skatt.`,
        f: ['η = E_nyttig / E_tillförd']
      },
      {
        h: 'Växthuseffekten',
        p: `Solens kortvågiga strålning passerar atmosfären, jorden värms och strålar ut <em>långvågig</em> IR-strålning. Växthusgaser (CO₂, metan, vattenånga) absorberar IR:n och strålar tillbaka en del. Naturlig växthuseffekt = bra (utan den: −18 °C, hela Sverige blir en frys). <b>Förstärkt</b> växthuseffekt av fossila utsläpp = problemet. Det är skillnaden mellan en filt och femton filtar.`,
        f: ['Instrålning ≈ Utstrålning (balans)']
      },
      {
        h: 'Energikällor',
        p: `<b>Förnybara:</b> sol, vind, vatten, biobränsle — fylls på naturligt. <b>Icke förnybara:</b> kol, olja, gas, uran. Sverige: mest vattenkraft + kärnkraft + växande vindkraft, därför låga elutsläpp. Fysikerns uppgift: räkna på effekt, energi och verkningsgrad så besluten bygger på siffror istället för känslor och Facebook-inlägg.`,
        f: ['1 kWh = 3,6 MJ']
      }
    ],
    joke: 'Termodynamikens tre lagar, fritt översatta: 1) Du kan inte vinna. 2) Du kan inte ens spela oavgjort. 3) Du kan inte lämna spelet.',
    sim: 'energy',
    simTitle: '🧪 Simulering: Kulan i backen (energiomvandling)',
    simDesc: 'Släpp kulan och se lägesenergi bli rörelseenergi och tillbaka. Staplarna visar energiformerna i realtid. Friktionen stjäl långsamt allt — som skatteverket, fast med värme.',
    quiz: [
      { q: 'Vad säger energiprincipen?', a: ['Energi kan inte skapas eller förstöras, bara omvandlas', 'Energi försvinner alltid med tiden', 'Energi kan skapas i kärnkraftverk', 'Energi är samma sak som effekt'], correct: 0, expl: 'Totala energin är konstant — den byter bara form. Kärnkraft omvandlar massa till energi (E=mc²), skapar inget nytt.' },
      { q: 'En motor tillförs 1000 J och uträttar 300 J nyttigt arbete. Verkningsgrad?', a: ['30 %', '70 %', '3 %', '300 %'], correct: 0, expl: 'η = 300/1000 = 0,30 = 30 %. Resten blir värme. Typisk bensinmotor, tyvärr.' },
      { q: 'Varför är växthuseffekten i grunden bra?', a: ['Utan den vore jordens medeltemperatur ca −18 °C', 'Den skyddar mot meteoriter', 'Den skapar syre', 'Den är inte bra alls'], correct: 0, expl: 'Naturlig växthuseffekt håller oss på +15 °C istället för −18 °C. Problemet är den FÖRSTÄRKTA effekten från fossila utsläpp.' },
      { q: 'Vilken av dessa är en förnybar energikälla?', a: ['Vindkraft', 'Naturgas', 'Kol', 'Uran'], correct: 0, expl: 'Vinden tar aldrig slut (fråga vem som helst i Skåne). Kol, gas och uran är ändliga resurser.' },
      { q: 'Hur mycket energi är 1 kWh i megajoule?', a: ['3,6 MJ', '1 MJ', '36 MJ', '0,36 MJ'], correct: 0, expl: '1 kWh = 1000 W · 3600 s = 3 600 000 J = 3,6 MJ.' },
      { q: 'En kula släpps från 5 m höjd. Vad har hänt med lägesenergin precis innan den slår i marken (utan luftmotstånd)?', a: ['Allt har blivit rörelseenergi', 'Den är kvar som lägesenergi', 'Den har försvunnit', 'Den har blivit ljus'], correct: 0, expl: 'Ep = m·g·h omvandlas helt till Ek = m·v²/2. Energiprincipen i sin renaste form.' },
      { q: 'Varför kan man inte bygga en evighetsmaskin?', a: ['Friktion och värmeförluster gör att nyttig energi alltid minskar', 'Ingen har haft tillräckligt bra verktyg', 'Det är förbjudet enligt lag', 'Man kan — de finns redan'], correct: 0, expl: 'Termodynamiken: en del energi blir alltid "oanvändbar" värme. η < 100 % alltid. Fysiken är obarmhärtig.' },
      { q: 'Vilken strålning skickar jorden ut mot rymden?', a: ['Långvågig IR-strålning (värmestrålning)', 'Kortvågig UV-strålning', 'Gammastrålning', 'Radiovågor från Melodifestivalen'], correct: 0, expl: 'Jorden är sval jämfört med solen och strålar därför i IR. Den fångas delvis av växthusgaser — det ÄR växthuseffekten. (Mello-vågorna är försumbara. Tack och lov.)' }
    ]
  },

  {
    id: 'tryck',
    icon: '🌊',
    title: 'Tryck',
    intro: 'Varför öronen gör ont på havets botten och hur en dammlucka håller emot en hel sjö.',
    theory: [
      {
        h: 'Vad är tryck?',
        p: `Tryck = kraft utspridd över en yta: <b>p = F/A</b>. Enheten är pascal (Pa) = 1 N/m². Det är därför en stilettklack gör mer skada på ett trägolv än en elefantfot — mindre yta, monstertryck. Skridskor fungerar på samma princip, fast med is och mindre drama.`,
        f: ['p = F / A', '1 Pa = 1 N/m²']
      },
      {
        h: 'Tryck i vätskor',
        p: `I en vätska ökar trycket med djupet: <b>p = ρ·g·h</b>. Vid 10 m vattendjup har trycket ökat med ungefär 1 atmosfär (~100 kPa) — det är därför öronen protesterar när du dyker till botten i simhallens djupa del. Trycket verkar åt <em>alla</em> håll, inte bara nedåt. Vattnet kramar dig, hårt.`,
        f: ['p = ρ · g · h', 'ρ(vatten) ≈ 1000 kg/m³']
      },
      {
        h: 'Lufttryck',
        p: `Vi lever på botten av ett lufthav. Normalt lufttryck ≈ <b>101,3 kPa</b> — motsvarar en kilovikt på varje kvadratcentimeter av din kropp. Att du inte krossas beror på att trycket inuti dig trycker emot. Sugproppar, sugrör och vakuumförpackat kaffe fungerar alla tack vare lufttrycket.`,
        f: ['p₀ ≈ 101,3 kPa ≈ 1 atm']
      },
      {
        h: 'Arkimedes princip',
        p: `Lyftkraften på ett föremål i vätska = tyngden av den undanträngda vätskan: <b>F = ρ·V·g</b>. Flyter gör det som är lättare än vattnet det knuffar undan. Arkimedes kom på det i badkaret och sprang enligt legenden naken genom Syrakusa och skrek "Heureka!". Plugga gärna intensivt — men behåll kläderna på.`,
        f: ['F_lyft = ρ_vätska · V · g']
      }
    ],
    joke: 'Vad sa trycket till ytan? "Du får mig att känna mig så liten när du är stor." p = F/A, romantik på fysikvis.',
    sim: 'pressure',
    simTitle: '🧪 Simulering: Dyk ner i djupet',
    simDesc: 'Sänk dykaren och se trycket öka. Vid vilket djup har trycket fördubblats jämfört med ytan?',
    quiz: [
      { q: 'Formeln för tryck?', a: ['p = F / A', 'p = F · A', 'p = A / F', 'p = m · g'], correct: 0, expl: 'Kraft delat med area. Liten yta + stor kraft = högt tryck. Fråga vilken stilettklack som helst.' },
      { q: 'Hur ändras trycket i vatten när djupet ökar?', a: ['Ökar linjärt med djupet', 'Minskar med djupet', 'Konstant överallt', 'Fördubblas varje meter'], correct: 0, expl: 'p = ρgh — dubbelt djup, dubbelt vätsketryck. Vid 10 m djup: +1 atmosfär.' },
      { q: 'Ungefär vilket är normalt lufttryck vid havsytan?', a: ['101 kPa', '10 kPa', '1013 kPa', '1 kPa'], correct: 0, expl: '101,3 kPa = 1 atm. Ett kilo tryckande luft per kvadratcentimeter av din kropp. Hela tiden.' },
      { q: 'Varför flyter ett stort stålfartyg fast stål sjunker?', a: ['Skrovet tränger undan vatten som väger mer än fartyget', 'Saltet i havet bär upp det', 'Motorerna trycker det uppåt', 'Stål flyter alltid i stora bitar'], correct: 0, expl: 'Arkimedes: lyftkraften = den undanträngda vattenmassans tyngd. Skrovets form tränger undan enorma volymer.' },
      { q: 'En kraft på 600 N verkar på 0,03 m². Trycket?', a: ['20 kPa', '18 Pa', '2 kPa', '200 kPa'], correct: 0, expl: 'p = 600/0,03 = 20 000 Pa = 20 kPa. Ungefär en person som står på ett ben.' },
      { q: 'Vilket djup i vatten ger ett övertryck på ca 100 kPa (1 atm)?', a: ['ca 10 m', 'ca 1 m', 'ca 100 m', 'ca 50 m'], correct: 0, expl: 'p = 1000 · 9,82 · 10 ≈ 98 kPa. Tumregel: var tionde meter = en atmosfär till.' },
      { q: 'Varför fungerar ett sugrör?', a: ['Lufttrycket trycker upp drycken när du sänker trycket i munnen', 'Du drar upp vätskan med muskelkraft', 'Vätskan vill naturligt uppåt', 'Kapillärkraft gör hela jobbet'], correct: 0, expl: 'Du skapar undertryck — atmosfären utanför trycker då UPP drycken. På månen (vakuum) funkar inga sugrör. Planera dina rymdresor därefter.' },
      { q: 'Trycket i en vätska på ett visst djup verkar …', a: ['lika mycket åt alla håll', 'bara nedåt', 'bara uppåt', 'bara åt sidorna'], correct: 0, expl: 'Vätsketryck är riktningslöst — det trycker åt alla håll samtidigt. Därför känns kramen från vattnet överallt.' }
    ]
  },

  {
    id: 'varme',
    icon: '🔥',
    title: 'Värmelära',
    intro: 'Temperatur, värmekapacitet och varför saunan på 90 °C är trevlig men badvatten på 90 °C är ett brott.',
    theory: [
      {
        h: 'Temperatur vs värme',
        p: `<b>Temperatur</b> = mått på partiklarnas genomsnittliga rörelseenergi. <b>Värme</b> = energi som flödar från varmt till kallt. En gnista från ett tomtebloss (2000 °C men pytteliten massa) skadar dig inte, men 60-gradigt kaffe i knät gör det — mer massa, mer energi. Temperatur är intensitet, värme är mängd.`,
        f: ['0 K = −273,15 °C (absoluta nollpunkten)']
      },
      {
        h: 'Specifik värmekapacitet',
        p: `Hur mycket energi krävs för att värma 1 kg av ett ämne 1 grad? Det är <b>specifika värmekapaciteten c</b>. Vatten är extremt: c = 4180 J/(kg·K) — därför tar det evigheter att koka pastavatten och därför mildrar havet kustklimatet. Metaller har låg c: därför bränner du dig på kastrullens handtag men inte på luften i ugnen.`,
        f: ['E = c · m · ΔT', 'c(vatten) = 4180 J/(kg·K)']
      },
      {
        h: 'Fasövergångar',
        p: `Att smälta is eller koka vatten kostar energi <em>utan att temperaturen ändras</em> — energin bryter bindningar istället. <b>Smältvärme</b> och <b>ångbildningsvärme</b>. Vattnets ångbildningsvärme är enorm (2260 kJ/kg) — därför svalkar svett så bra och därför är ånga vid 100 °C mycket farligare än vatten vid 100 °C.`,
        f: ['E = m · l (fasövergång)', 'l_ånga(vatten) = 2260 kJ/kg']
      },
      {
        h: 'Värmetransport',
        p: `Tre sätt: <b>Ledning</b> (via kontakt — metallsked i teet), <b>strömning/konvektion</b> (varm luft/vätska stiger — element, golvvärme) och <b>strålning</b> (IR — solen, brasan, din kompis ansikte efter skidbacken). Termosen bekämpar alla tre samtidigt: vakuum mot ledning/strömning, speglande skikt mot strålning. Respekt till termosen.`,
        f: ['Ledning · Konvektion · Strålning']
      }
    ],
    joke: 'Varför är saunan på 90 °C skön men vatten på 90 °C livsfarligt? Luft har låg värmekapacitet och leder värme uselt — vattnet dumpar hundra gånger mer energi i dig. Fysik räddar liv (och bastukvällar).',
    sim: 'heat',
    simTitle: '🧪 Simulering: Koka vattnet',
    simDesc: 'Tillför effekt och se temperaturen stiga enligt E = cmΔT. Notera platån vid 100 °C — fasövergången slukar energi utan att temperaturen rör sig.',
    quiz: [
      { q: 'Vad är temperatur egentligen ett mått på?', a: ['Partiklarnas genomsnittliga rörelseenergi', 'Mängden värme i föremålet', 'Antalet partiklar', 'Föremålets densitet'], correct: 0, expl: 'Ju snabbare partiklarna skakar och far omkring, desto högre temperatur. Vid 0 K står nästan allt still.' },
      { q: 'Hur mycket energi krävs för att värma 2,0 kg vatten från 20 °C till 100 °C? (c = 4180 J/(kg·K))', a: ['ca 670 kJ', 'ca 84 kJ', 'ca 6,7 kJ', 'ca 1,2 MJ'], correct: 0, expl: 'E = c·m·ΔT = 4180 · 2,0 · 80 ≈ 669 000 J ≈ 670 kJ. Pastan får vänta en stund.' },
      { q: 'Varför ändras inte temperaturen medan is smälter?', a: ['Energin går åt till att bryta bindningarna, inte öka rörelsen', 'Isen isolerar sig själv', 'Termometern fryser', 'Temperaturen ändras visst'], correct: 0, expl: 'Fasövergång: all tillförd energi bryter kristallstrukturen. Först när allt smält stiger temperaturen igen.' },
      { q: 'Vilket värmetransportsätt fungerar även i vakuum?', a: ['Strålning', 'Ledning', 'Konvektion', 'Inget av dem'], correct: 0, expl: 'IR-strålning behöver inget medium — därför når solens värme oss genom 150 miljoner km tomrum.' },
      { q: 'Varför känns metall kallare än trä vid samma temperatur?', a: ['Metall leder bort din kroppsvärme snabbare', 'Metall är faktiskt kallare', 'Trä producerar värme', 'Metall innehåller is'], correct: 0, expl: 'Samma temperatur, men metall är en utmärkt värmeledare — den dränerar din hud på värme. Termometern håller med: samma temp.' },
      { q: 'Absoluta nollpunkten är …', a: ['−273,15 °C, där partikelrörelsen är minimal', '0 °C, där vatten fryser', '−100 °C', 'temperaturen i rymden exakt'], correct: 0, expl: '0 K = −273,15 °C. Kallare än så finns inte — rörelseenergin kan inte bli mindre än minimum.' },
      { q: 'Varför svalkar svett?', a: ['Avdunstningen kräver ångbildningsvärme som tas från huden', 'Svett är kallare än kroppen', 'Saltet kyler huden', 'Det är psykologiskt'], correct: 0, expl: 'Varje gram svett som avdunstar stjäl ~2,3 kJ från din hud. Kroppens egen klimatanläggning — gratis dessutom.' },
      { q: 'Havet gör kustklimat mildare eftersom vatten …', a: ['har hög specifik värmekapacitet och lagrar värme länge', 'reflekterar solljus', 'innehåller salt', 'alltid är 15 grader'], correct: 0, expl: 'c = 4180 J/(kg·K) — havet är ett gigantiskt värmebatteri som jämnar ut sommar och vinter. Tack, havet.' }
    ]
  }
];

const LEVELS = [
  { xp: 0, title: 'Fysik-Turist 🧳' },
  { xp: 100, title: 'Formelsamlare 📐' },
  { xp: 250, title: 'Labbråtta 🐭' },
  { xp: 450, title: 'Newtons Lärling 🍎' },
  { xp: 700, title: 'Einsteins Kompis 🧠' },
  { xp: 1000, title: 'Nobelkandidat 🏅' },
  { xp: 1400, title: 'Fysikens Överherre ⚡👑' }
];

const PRAISE = [
  'Snyggt! Einstein nickar gillande. 🧠',
  'Korrekt! Du är på väg mot Nobelpriset. 🏅',
  'Boom! Rätt svar. 💥',
  'Exakt! Newton hade varit stolt. 🍎',
  'Rätt! Din hjärna accelererar. 🚀',
  'Japp! Fysiken är med dig. ⚛️'
];

const ROAST = [
  'Nej! Men bra gissat — sa ingen. 😅',
  'Fel! Gravitationen drog ner det svaret. 🕳️',
  'Ajdå. Även Einstein hade dåliga dagar. 🤷',
  'Nix. Men fel svar är bara rätt svar i ett parallellt universum. 🌌',
  'Nope. Läs förklaringen — den bits inte. 📖'
];
