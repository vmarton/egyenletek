const tasks = [
    // your JSON content here
      {
        "task_id": 1,
        "task_text": "Egy 36 éves apának 3 éves fia van. Hány év múlva lesz az apa négyszer annyi idős, mint a fia?",
        "explanation": "<p>Legyen <b>x</b> az évek száma, amely után az apa négyszer annyi idős lesz, mint a fia.</p><p>Az apa életkora <b>x</b> év múlva: <b>36 + x</b>.</p><p>A fiú életkora <b>x</b> év múlva: <b>3 + x</b>.</p><p>Feltétel: az apa életkora <b>4-szerese</b> lesz a fiú életkorának.</p><p>Ezért felírható a következő egyenlet: <b>36 + x = 4 * (3 + x)</b>.</p>",
        "equation": {
          "base_equation": "36 + x = 4 * (3 + x)",
          "detailed_solution": "<p>Zárójel feloldása:</p><p>36 + x = 12 + 4x</p><p>Változó egy oldalra hozása:</p><p>36 = 12 + 3x</p><p>Egyszerűsítés:</p><p>24 = 3x</p>"
        },
        "result": "x=8"
      },
      {
        "task_id": 2,
        "task_text": "Három testvér életkorának összege 18 év. A legidősebb 6 évvel idősebb a legfiatalabbnál. Mennyi idősek a testvérek, ha egyenlő időközönként születtek?",
        "explanation": "<p>Legyen a legfiatalabb testvér életkora <b>x</b>.</p><p>Ha egyenlő időközönként születtek, akkor a középső testvér életkora <b>x + k</b>, a legidősebbé pedig <b>x + 2k</b>.</p><p>Az életkorok összege: <b>x + (x + k) + (x + 2k) = 18</b>.</p><p>A legidősebb 6 évvel idősebb a legfiatalabbnál: <b>x + 2k - x = 6</b>, tehát <b>2k = 6</b>.</p>",
        "equation": {
          "base_equation": "x + (x + k) + (x + 2k) = 18",
          "detailed_solution": "<p>Zárójel feloldása:</p><p>3x + 3k = 18</p><p>Egyszerűsítés:</p><p>x + k = 6</p><p>k = 2</p><p>3x + 6 = 18</p><p>3x = 12</p>"
        },
        "result": "Legfiatalabb: 4, középső: 6, legnagyobb: 10"          
      },
      {
        "task_id": 3,
        "task_text": "Két természetes szám közül az egyik 5-tel nagyobb, mint a másik. Mi lehet ez a két szám, ha az összegük legfeljebb 30?",
        "explanation": "<p>Legyen az egyik szám <b>x</b>, a másik pedig <b>x + 5</b>.</p><p>Az összegük legfeljebb 30: <b>x + (x + 5) ≤ 30</b>.</p>",
        "equation": {
          "base_equation": "x + (x + 5) ≤ 30",
          "detailed_solution": "<p>2x + 5 ≤ 30</p><p>2x ≤ 25</p><p>x ≤ 12</p>"
        },
        "result": "x ≤ 12, x+5 ≤ 17"
      },
      {
        "task_id": 4,
        "task_text": "Két természetes szám aránya 2 : 3. Mi lehet ez a két szám, ha különbségük nagyobb 10-nél?",
        "explanation": "<p>Legyen a kisebbik szám <b>2x</b>, a nagyobbik szám pedig <b>3x</b>.</p><p>A különbségük nagyobb 10-nél: <b>3x - 2x > 10</b>.</p>",
        "equation": {
          "base_equation": "3x - 2x > 10",
          "detailed_solution": "<p>x > 10</p>"
        },
        "result": "x > 10, 2x > 20, 3x > 30"
      },
      {
        "task_id": 5,
        "task_text": "Gondoltam egy számot, hozzáadtam a nála 2-vel nagyobb szám kétszeresét, így 2,4-del kisebb számot kaptam, mint a gondolt szám négyszerese. Melyik számra gondoltam?",
        "explanation": "<p>Legyen a gondolt szám <b>x</b>.</p><p>A gondolt szám négyszerese: <b>4x</b>.</p><p>A gondolt számhoz hozzáadva a nála 2-vel nagyobb szám kétszeresét: <b>x + 2 * (x + 2)</b>.</p><p>Ez 2,4-del kisebb a gondolt szám négyszeresénél: <b>x + 2 * (x + 2) = 4x - 2.4</b>.</p>",
        "equation": {
          "base_equation": "x + 2 * (x + 2) = 4x - 2.4",
          "detailed_solution": "<p>x + 2x + 4 = 4x - 2.4</p><p>3x + 4 = 4x - 2.4</p><p>4 + 2.4 = x</p>"
        },
        "result": "x = 6.4"
      },
      {
        "task_id": 6,
        "task_text": "Gondoltam egy számot, elvettem belőle 20-at, az eredményt megkétszereztem, újra elvettem belőle 20-at, az eredményt újra megkétszereztem, majd újra elvettem belőle 20-at. Az eredmény 0 lett. Melyik számra gondoltam?",
        "explanation": "<p>Legyen a gondolt szám <b>x</b>.</p><p>A gondolt szám négyszerese: <b>4x</b>.</p><p>A gondolt számhoz hozzáadva a nála 2-vel nagyobb szám kétszeresét: <b>x + 2 * (x + 2)</b>.</p><p>Ez 2,4-del kisebb a gondolt szám négyszeresénél: <b>x + 2 * (x + 2) = 4x - 2.4</b>.</p>",
        "equation": {
          "base_equation": "2 * (2 * (2 * (x - 20) - 20) - 20) = 0",
          "detailed_solution": "<p>2 * (2 * (2x - 40 - 20) - 20) = 0</p><p>2 * (2 * (2x - 60) - 20) = 0</p><p>2 * (4x - 120 - 20) = 0</p><p>2 * (4x - 140) = 0</p><p>8x - 280 = 0</p>"
        },
        "result": "x = 35"
      },
      {
        "task_id": 7,
        "task_text": "Egy téglalap egyik oldalának hossza kétszerese a másik oldal hosszának. Mi lehet a téglalap oldalainak hossza, ha a kerülete 48 cm?",
        "explanation": "<p>Legyen a rövidebb oldal hossza <b>x</b>, a hosszabbik oldal pedig <b>2x</b>.</p><p>A kerület: <b>2 * (x + 2x) = 48</b>.</p>",
        "equation": {
          "base_equation": "2 * (x + 2x) = 48",
          "detailed_solution": "<p>2 * 3x = 48</p><p>6x = 48</p>"
        },
        "result": "x = 8, 2x = 16"
      },
      {
        "task_id": 8,
        "task_text": "Egy háromszög három oldalának aránya 3 : 4 : 5. Mi lehet a háromszög oldalainak hossza, ha a kerülete 36 cm?",
        "explanation": "<p>Legyenek az oldalak <b>3x</b>, <b>4x</b>, és <b>5x</b>.</p><p>A kerület: <b>3x + 4x + 5x = 36</b>.</p>",
        "equation": {
          "base_equation": "3x + 4x + 5x = 36",
          "detailed_solution": "<p>12x = 36</p>"
        },
        "result": "x = 3, oldalak: 9, 12, 15"
      },
      {
        "task_id": 9,
        "task_text": "Egy szám háromszorosa 10-zel nagyobb, mint a szám kétszerese. Melyik ez a szám?",
        "explanation": "<p>Legyen a keresett szám <b>x</b>.</p><p>A szám háromszorosa: <b>3x</b>.</p><p>A szám kétszerese: <b>2x</b>.</p><p>A feltétel: <b>3x = 2x + 10</b>.</p>",
        "equation": {
          "base_equation": "3x = 2x + 10",
          "detailed_solution": "<p>3x - 2x = 10</p>"
        },
        "result": "x = 10"
      },
      {
        "task_id": 10,
        "task_text": "Mekkorák annak a háromszögnek a szögei, amelynek legnagyobb szöge 4,2-szerese a legkisebb szögnek, a középső szög pedig kétszerese?",
        "explanation": "<p>Legyen a legkisebb szög <b>x</b>. A középső szög <b>2x</b>, a legnagyobb szög pedig <b>4.2x</b>.</p><p>A háromszög szögeinek összege: <b>x + 2x + 4.2x = 180</b>.</p>",
        "equation": {
          "base_equation": "x + 2x + 4.2x = 180",
          "detailed_solution": "<p>7.2x = 180</p>"
        },
        "result": "x = 25, 2x = 50, 4.2x = 105"
      },
      {
        "task_id": 11,
        "task_text": "Robiék felhasználták az ősszel vásárolt burgonya 2/5 részét és még 4 kg-ot. Így az eredeti mennyiség felénél kevesebb burgonyájuk maradt meg. Mennyi burgonyát vásárolhattak ősszel?",
        "explanation": "<p>Legyen az ősszel vásárolt burgonya mennyisége x (kg). </p><p>A felhasznált mennyiség: <code>2/5 * x + 4</code></p><p>A megmaradt mennyiség: <code>x - (2/5 * x + 4)</code></p><p>Ez kisebb az eredeti mennyiség felénél: <code>x - (2/5 * x + 4) &lt; x / 2</code></p>",
        "equation": {
          "base_equation": "x - (2/5 * x + 4) = x / 2",
          "detailed_solution": "<p><code>x - 2/5 * x - 4 = x / 2</code></p><p>Egyenlővé tesszük az eredeti mennyiség felét és a megmaradt mennyiséget. Ekkor:</p><p><code>3/5 * x - 4 = x / 2</code></p><p>Közös nevezőre hozzuk a törteket:</p><p><code>6/10 * x - 4 = 5/10 * x</code></p><p>Kivonjuk a bal oldalból a jobb oldalon található <code>5/10 * x</code>-et:</p><p><code>1/10 * x = 4</code></p><p>Mindkét oldalt megszorozzuk 10-zel:</p><p><code>x = 40</code></p><p>Ez azt jelenti, hogy ősszel 40 kg burgonyát vásároltak.</p>"
        },
        "result": "x = 40"
      },
      {
        "task_id": 12,
        "task_text": "Három testvér mindegyikénél van valamennyi pénz. Dórinál 200 Ft híján háromszor annyi, mint Balázsnál, Gergőé pedig Balázs pénzének kétszerese. Mennyi pénzük van a testvéreknek külön-külön, ha együtt 4600 Ft-juk van?",
        "explanation": "<p>Legyen Balázs pénze x (Ft).</p><p>Dóri pénze: <code>3x - 200</code></p><p>Gergő pénze: <code>2x</code></p><p>Összesen: <code>x + (3x - 200) + 2x = 4600</code></p>",
        "equation": {
          "base_equation": "x + 3x - 200 + 2x = 4600",
          "detailed_solution": "<p><code>x + 3x - 200 + 2x = 4600</code></p><p>Egyesítjük az x-eket a bal oldalon:</p><p><code>6x - 200 = 4600</code></p><p>Hozzáadunk 200-at mindkét oldalhoz:</p><p><code>6x = 4800</code></p><p>Elosztjuk mindkét oldalt 6-tal:</p><p><code>x = 800</code></p><p>Tehát Balázsnak 800 Ft-ja van. Dóri pénze:</p><p><code>3x - 200 = 3 * 800 - 200 = 2200</code></p><p>Gergő pénze:</p><p><code>2x = 2 * 800 = 1600</code></p><p>Összesen:</p><p><code>800 + 2200 + 1600 = 4600</code></p>"
        },
        "result": "x = 800, Dóri: 2200 Ft, Gergő: 1600 Ft, Balázs: 800 Ft"
      },
      {
        "task_id": 13,
        "task_text": "Anna 15 óra alatt, Béla 10 óra alatt ássa fel a kertet egyedül. Mennyi idő alatt végeznének, ha együtt dolgoznának?",
        "explanation": "<p>Anna egy óra alatt felássa a kert <code>1/15</code> részét.</p><p>Béla egy óra alatt felássa a kert <code>1/10</code> részét.</p><p>Együtt egy óra alatt felássák: <code>1/15 + 1/10</code> részt.</p><p>A közös munka ideje: <code>1 / (1/15 + 1/10)</code></p>",
        "equation": {
          "base_equation": "1 / (1/15 + 1/10)",
          "detailed_solution": "<p><code>1 / (1/15 + 1/10)</code></p><p>Közös nevezőre hozzuk a törteket:</p><p><code>1 / (2/30 + 3/30)</code></p><p>Összeadjuk a törtjelek alatti értékeket:</p><p><code>1 / (5/30)</code></p><p>A reciprok értékét vesszük:</p><p><code>30/5</code></p><p>Végeredmény:</p><p><code>6</code></p><p>Tehát együtt 6 óra alatt végeznének a munkával.</p>"
        },
        "result": "x = 6 óra"
      },
      {
        "task_id": 14,
        "task_text": "Az A csap 60 perc alatt, a B csap 45 perc alatt, a C csap 90 perc alatt tölti meg a medencét. Mennyi idő alatt telik meg a medence, ha mindhárom csapot egyszerre kinyitjuk?",
        "explanation": "<p>A csapok egy perc alatt megtöltenek a medencéből: <code>1/60</code>, <code>1/45</code>, és <code>1/90</code> részt.</p><p>Ha egyszerre kinyitjuk őket, akkor egy perc alatt megtöltik: <code>1/60 + 1/45 + 1/90</code> részt.</p><p>A medence megtelési ideje: <code>1 / (1/60 + 1/45 + 1/90)</code></p>",
        "equation": {
          "base_equation": "1 / (1/60 + 1/45 + 1/90)",
          "detailed_solution": "1 / (1/60 + 1/45 + 1/90)<p>1 / (3/180 + 4/180 + 2/180)<p>1 / (9/180)<p>180/9<p>20"
        },
        "result": "x = 20 perc"
      },
      {
        "task_id": 15,
        "task_text": "Egy csap 12 perc alatt tölti meg a kádat, a lefolyón 15 perc alatt ürülne ki a kád. Egyszer elfelejtették bedugni a dugót a lefolyóba és így nyitották meg a csapot, Mennyi idő alatt telik meg a kád?",
        "explanation": "<p>A csap egy perc alatt megtölti a kád <code>1/12</code> részét.</p><p>A lefolyó egy perc alatt leereszti a kád <code>1/15</code> részét.</p><p>Együtt egy perc alatt feltöltik a kád <code>1/12 - 1/15</code> részét.</p><p>A kád megtelési ideje: <code>1 / (1/12 - 1/15)</code></p>",
        "equation": {
          "base_equation": "1 / (1/12 - 1/15)",
          "detailed_solution": "1 / (1/12 - 1/15)<p>1 / (5/60 - 4/60)<p>1 / (1/60)<p>60"
        },
        "result": "x = 60 perc"
      },
      {
        "task_id": 16,
        "task_text": "Andinak háromszor annyi könyve van, mint Gyurinak. Kettejüknek összesen 844 könyvük van. Hány könyve van Gyurinak és Andinak külön-külön?",
        "explanation": "<p>Legyen Gyurinak x könyve.</p><p>Andinak háromszor annyi könyve van: <code>3x</code>.</p><p>Kettejüknek összesen: <code>x + 3x = 844</code>.</p>",
        "equation": {
          "base_equation": "x + 3x = 844",
          "detailed_solution": "x + 3x = 844<p>4x = 844<p>x = 211"
        },
        "result": "Gyuri: 211, Andi: 633"
      },
      {
        "task_id": 17,
        "task_text": "János a büfében vett egy üdítőt és egy sütit, és 470 forintot fizetett. Julcsi üdítőt és egy pizzaszeletet vett és ő 530 forintot fizetett. Károly pedig vett egy pizzaszeletet és egy sütit 560 forintért. Mennyi az egyes termékek ára?",
        "explanation": "<p>Legyen az üdítő ára x (Ft), a süti ára y (Ft), és a pizzaszelet ára z (Ft).</p><p>A három egyenlet:</p><ul><li>János: <code>x + y = 470</code></li><li>Julcsi: <code>x + z = 530</code></li><li>Károly: <code>z + y = 560</code></li></ul>",
        "equation": {
          "base_equation": "x + y = 470, x + z = 530, z + y = 560",
          "detailed_solution": "x + y = 470<p>x + z = 530<p>z + y = 560<p>z = 530 - x<p>y = 470 - x<p>(530 - x) + (470 - x) = 560<p>1000 - 2x = 560<p>2x = 440<p>x = 220<p>z = 530 - 220 = 310<p>y = 470 - 220 = 250"
        },
        "result": "Üdítő: 220 Ft, Süti: 250 Ft, Pizzaszelet: 310 Ft"
      },
      {
        "task_id": 18,
        "task_text": "Egy kosárlabda-egyesületbe hússzal több lány jár, mint fiú. Ha csak feleennyi lány járna, a fiúk 5-tel többen lennének. Hány sportoló van összesen az egyesületben? Hány fiú és hány lány jár az egyesületbe?",
        "explanation": "<p>Legyen a fiúk száma x, a lányok száma pedig x + 20.</p><p>Ha a lányok fele járna: <code>(x + 20) / 2</code>.</p><p>Ekkor a fiúk 5-tel többen lennének: <code>x = (x + 20) / 2 + 5</code>.</p>",
        "equation": {
          "base_equation": "x = (x + 20) / 2 + 5",
          "detailed_solution": "x = (x + 20) / 2 + 5<p>2x = x + 20 + 10<p>2x - x = 30<p>x = 30<p>Lányok: x + 20 = 50"
        },
        "result": "Fiúk: 30, Lányok: 50, Összesen: 80"
      },
      {
        "task_id": 19,
        "task_text": "Egy faluban a számítógép-tulajdonosok 30%-a az AlfaNet, egynegyed része a BétaNet, a számítógép-tulajdonosok 20%-ánál 1600-zal kevesebben a GammaNet szolgáltatótól rendeltek internet előfizetést. 4800 számítógép-tulajdonos még nem rendelkezik internet-előfizetéssel. Hány számítógép-tulajdonos lakik a faluban?",
        "explanation": "<p>Legyen a számítógép-tulajdonosok száma x.</p><p>AlfaNet előfizetők: <code>0.3x</code>.</p><p>BétaNet előfizetők: <code>0.25x</code>.</p><p>GammaNet előfizetők: <code>0.2x - 1600</code>.</p><p>Nem előfizetők: <code>4800</code>.</p><p>Összesen: <code>0.3x + 0.25x + (0.2x - 1600) + 4800 = x</code>.</p>",
        "equation": {
          "base_equation": "0.3x + 0.25x + 0.2x - 1600 + 4800 = x",
          "detailed_solution": "0.3x + 0.25x + 0.2x - 1600 + 4800 = x<p>0.75x + 3200 = x<p>x - 0.75x = 3200<p>0.25x = 3200<p>x = 12800"
        },
        "result": "x = 12800"
      },
      {
        "task_id": 20,
        "task_text": "Gondoltam egy számra. Hozzáadtam 3-at, majd az eredményt elosztottam 5-tel. A kapott számhoz hozzáadtam a gondolt szám felét, így a gondolt számnál 9-cel kisebb számot kaptam. Melyik számra gondoltam?",
        "explanation": "<p>Legyen a gondolt szám x.</p><p>Az eredmény: <code>(x + 3) / 5</code>.</p><p>A kapott számhoz hozzáadtam a szám felét: <code>(x + 3) / 5 + x / 2</code>.</p><p>Ez a szám: <code>x - 9</code>.</p>",
        "equation": {
          "base_equation": "(x + 3) / 5 + x / 2 = x - 9",
          "detailed_solution": "(x + 3) / 5 + x / 2 = x - 9<p>2(x + 3) + 5x = 10(x - 9)<p>2x + 6 + 5x = 10x - 90<p>7x + 6 = 10x - 90<p>6 + 90 = 3x<p>96 = 3x<p>x = 32"
        },
        "result": "x = 32"
      },
      {
        "task_id": 21,
        "task_text": "Peti és az öccse, Marci egy könyvet vásároltak édesanyjuk születésnapjára az édesapjukkal közösen. A két gyerek együtt feleannyit fizetett, mint az édesapa. Peti harmadannyit fizetett, mint az öccse és az édesapja együtt. Marci 1000 Ft-ot fizetett. Hány forintba került a könyv?",
        "explanation": "<p>Legyen Peti által fizetett összeg x, Marci által fizetett összeg 1000 Ft, és az édesapa által fizetett összeg y.</p><p>A feltételek szerint:</p><ul><li><code>x + 1000 = y / 2</code> (a két gyerek együtt feleannyit fizetett, mint az édesapa).</li><li><code>x = (1000 + y) / 3</code> (Peti harmadannyit fizetett, mint Marci és az édesapja együtt).</li></ul>",
        "equation": {
          "base_equation": "x + 1000 = y / 2, x = (1000 + y) / 3",
          "detailed_solution": "x + 1000 = y / 2<p>x = (1000 + y) / 3<p>(1000 + y) / 3 + 1000 = y / 2<p>2(1000 + y) + 6000 = 3y<p>2000 + 2y + 6000 = 3y<p>8000 = y<p>x = (1000 + 8000) / 3<p>x = 3000"
        },
        "result": "Peti: 3000 Ft, Marci: 1000 Ft, Édesapa: 8000 Ft, Összesen: 12000 Ft"
      },
      {
        "task_id": 22,
        "task_text": "Andrásék négynapos túrán vettek részt a Tátrában. Az első túranapon az út nagyon meredek volt, ezért csak a teljes út egyötöd részét tették meg. A második nap végén a teljes út felénél lévő táborhelyükre érkeztek. A harmadik napon ismét egy meredek részhez értek, így csak a hátralévő út egyharmad részét tették meg. A negyedik napra 20 km hosszú út maradt. Hány kilométert tettek meg az első napon?",
        "explanation": "<p>Legyen az összes megtett út hossza x (km).</p><p>Első nap: <code>x / 5</code>.</p><p>Második nap: <code>x / 2 - x / 5</code>.</p><p>Harmadik nap: <code>(x - x / 2) / 3</code>.</p><p>Negyedik nap: <code>20</code>.</p><p>Összesen: <code>x / 5 + (x / 2 - x / 5) + (x - x / 2) / 3 + 20 = x</code>.</p>",
        "equation": {
          "base_equation": "x / 5 + (x / 2 - x / 5) + (x - x / 2) / 3 + 20 = x",
          "detailed_solution": "x / 5 + x / 2 - x / 5 + (x / 2) / 3 + 20 = x<p>x / 2 + x / 6 + 20 = x<p>3x / 6 + x / 6 + 20 = x<p>4x / 6 + 20 = x<p>2x / 3 + 20 = x<p>20 = x - 2x / 3<p>20 = x / 3<p>x = 60<p>Első nap: x / 5 = 60 / 5 = 12"
        },
        "result": "Első nap: 12 km"
      },
      {
        "task_id": 23,
        "task_text": "Egy társaságból a jelenlévők mindegyike mindenkivel kezet fogott. Hány kézfogás történt, ha összesen 12 ember volt jelen?",
        "explanation": "<p>Ha egy társaságban mindenki mindenkivel kezet fog, akkor a kézfogások száma a következőképpen számítható ki:</p><ul><li>Az első ember 11 emberrel fog kezet.</li><li>A második ember már csak 10 emberrel (mivel az elsővel már megtörtént).</li><li>Ez így folytatódik az utolsó emberig.</li></ul><p>Ez valójában az összes lehetséges pár számát adja, ami kombinatorikusan a <code>C(n, 2)</code> képlettel számítható: <code>n(n-1)/2</code>.</p>",
        "equation": {
          "base_equation": "n(n-1)/2",
          "detailed_solution": "<p>n = 12</p><p>A képlet: <code>12(12-1)/2</code></p><p><code>12 × 11 / 2 = 66</code></p><p>Tehát összesen 66 kézfogás történt.</p>"
        },
        "result": "66 kézfogás"
      },
      {
        "task_id": 24,
        "task_text": "Egy kertben három almafa van. Az első almafa a teljes termés 40%-át, a második a 30%-át, míg a harmadik az összes többi almát adta. Ha a harmadik fa 360 almát termett, hány alma termett összesen?",
        "explanation": "<p>Legyen az összes alma száma x.</p><p>Az első fa termése: <code>0.4x</code>.</p><p>A második fa termése: <code>0.3x</code>.</p><p>A harmadik fa termése: <code>x - 0.4x - 0.3x = 0.3x</code>.</p><p>Ez az érték megegyezik 360-nal: <code>0.3x = 360</code>.</p>",
        "equation": {
          "base_equation": "0.3x = 360",
          "detailed_solution": "<p>0.3x = 360</p><p>Osszuk mindkét oldalt 0.3-mal:</p><p><code>x = 360 / 0.3</code></p><p><code>x = 1200</code>.</p><p>Tehát összesen 1200 alma termett.</p>"
        },
        "result": "1200 alma"
      },
      {
        "task_id": 25,
        "task_text": "Egy parkolóban a járművek száma 50, és ezek között csak autók és motorok találhatók. A kerekek száma összesen 120. Hány autó és hány motor van a parkolóban?",
        "explanation": "<p>Legyen az autók száma x, a motorok száma pedig y.</p><p>A feltételek szerint:</p><ul><li><code>x + y = 50</code> (az összes jármű száma).</li><li><code>4x + 2y = 120</code> (az összes kerék száma).</li></ul>",
        "equation": {
          "base_equation": "x + y = 50, 4x + 2y = 120",
          "detailed_solution": "<p>Az első egyenletből kifejezzük y-t: <code>y = 50 - x</code>.</p><p>A második egyenletbe helyettesítjük:</p><p><code>4x + 2(50 - x) = 120</code></p><p><code>4x + 100 - 2x = 120</code></p><p><code>2x = 20</code></p><p><code>x = 10</code></p><p>Ezután <code>y = 50 - 10 = 40</code>.</p><p>Tehát 10 autó és 40 motor van a parkolóban.</p>"
        },
        "result": "Autók: 10, Motorok: 40"
      },
      {
        "task_id": 26,
        "task_text": "Gabi egy perselybe gyűjtötte a vásárláskor visszakapott kétforintosokat és ötforintosokat. Karácsony előtt összeszámolta a persely tartalmát. Az összegyűjtött 157 darab pénzérme értéke 503 forint volt. Hány kétforintos és hány ötforintos volt a perselyben?",
        "explanation": "<p>Legyen a kétforintosok száma x, az ötforintosok száma y.</p><p>Feltételek:</p><ul><li><code>x + y = 157</code> (az érmék száma).</li><li><code>2x + 5y = 503</code> (az érmék értéke).</li></ul>",
        "equation": {
          "base_equation": "x + y = 157, 2x + 5y = 503",
          "detailed_solution": "x + y = 157<p>y = 157 - x<p>2x + 5(157 - x) = 503<p>2x + 785 - 5x = 503<p>-3x = -282<p>x = 94<p>y = 157 - 94 = 63"
        },
        "result": "Kétforintosok: 94 db, Ötforintosok: 63 db"
      },
      {
        "task_id": 27,
        "task_text": "Az iskolai boltból egyik délelőtt az összes füzetet megvásárolták. Aladár megvette az összes füzet kétötödét, Balázs a maradék egyharmadát, Csaba pedig ezután a maradék háromnegyedét. A megmaradt három füzetet az iskolatitkár vásárolta meg. Hány füzet volt eredetileg a boltban?",
        "explanation": "<p>Legyen az összes füzet száma x.</p><p>Feltételek:</p><ul><li>Aladár: <code>2x / 5</code>.</li><li>Balázs: <code>(x - 2x / 5) / 3</code>.</li><li>Csaba: <code>(x - 2x / 5 - (x - 2x / 5) / 3) * 3 / 4</code>.</li><li>Iskolatitkár: <code>3</code>.</li></ul><p>Összesen: <code>2x / 5 + (x - 2x / 5) / 3 + (x - 2x / 5 - (x - 2x / 5) / 3) * 3 / 4 + 3 = x</code>.</p>",
        "equation": {
          "base_equation": "2x / 5 + (x - 2x / 5) / 3 + (x - 2x / 5 - (x - 2x / 5) / 3) * 3 / 4 + 3 = x",
          "detailed_solution": "x = 60"
        },
        "result": "Eredetileg 60 füzet volt."
      },
      {
        "task_id": 28,
        "task_text": "A piacon egy árus háromféle almát árul: goldent, jonatánt és starkingot. Egy vevő megkérdezte, hogy mennyibe kerülnek. Az árus így válaszolt: – Nagyon olcsón adom! Ha vesz 1 kg jonatánt és 1 kg starkingot, akkor 120 forintot fizet. 1 kg starking és 1 kg golden éppen kétszer ennyibe kerül. Ennél pedig éppen 30 forinttal fizet kevesebbet, ha 1 kg goldent és 1 kg jonatánt vesz. Mennyibe kerül 1 kg golden és 1 kg jonatán összesen?",
        "explanation": "<p>Legyen a golden ára x Ft, a jonatán ára y Ft, és a starking ára z Ft.</p><p>Feltételek:</p><ul><li><code>y + z = 120</code> (jonatán és starking).</li><li><code>z + x = 240</code> (starking és golden).</li><li><code>x + y = 210</code> (golden és jonatán).</li></ul><p>Összesen: <code>y + z = 120, z + x = 240, x + y = 210</code>.</p>",
        "equation": {
          "base_equation": "y + z = 120, z + x = 240, x + y = 210",
          "detailed_solution": "y + z = 120<p>z = 240 - x<p>x + y = 210<p>x + 120 - z = 210<p>x + 120 - (240 - x) = 210<p>2x - 120 = 210<p>2x = 330<p>x = 165<p>y = 210 - 165 = 45<p>z = 240 - 165 = 75"
        },
        "result": "Golden: 165 Ft/kg, Jonatán: 45 Ft/kg, Összesen: 210 Ft"
      },
      {
        "task_id": 29,
        "task_text": "Kertész gazda egy kosár almát vitt a piacra. Az első vevő megvette az almák felét, a második a maradék harmadát, a harmadik a még megmaradt almák ötödét. A negyedik vevő elvitte a megmaradt nyolc almát. Hány alma volt a kosárban eredetileg?",
        "explanation": "<p>Legyen az eredeti alma mennyisége x.</p><p>Feltételek:</p><ul><li>Első vevő: <code>x / 2</code>.</li><li>Második vevő: <code>(x - x / 2) / 3</code>.</li><li>Harmadik vevő: <code>((x - x / 2) - (x - x / 2) / 3) / 5</code>.</li><li>Negyedik vevő: <code>8</code>.</li></ul><p>Összesen: <code>x / 2 + (x - x / 2) / 3 + ((x - x / 2) - (x - x / 2) / 3) / 5 + 8 = x</code>.</p>",
        "equation": {
          "base_equation": "x / 2 + (x - x / 2) / 3 + ((x - x / 2) - (x - x / 2) / 3) / 5 + 8 = x",
          "detailed_solution": "x = 120"
        },
        "result": "Eredetileg 120 alma volt."
      },
      {
        "task_id": 30,
        "task_text": "Egy négyzet egyik oldalának hossza 4 cm-rel nagyobb, mint egy téglalap rövidebbik oldala, és a négyzet kerülete 40 cm. Milyen hosszú a téglalap rövidebb oldala?",
        "explanation": "<p>Legyen a téglalap rövidebbik oldalának hossza <b>x</b>, a négyzet oldalának hossza pedig <b>x + 4</b>.</p><p>A kerület: <b>4 * (x + 4) = 40</b>.</p>",
        "equation": {
          "base_equation": "4 * (x + 4) = 40",
          "detailed_solution": "<p>4x + 16 = 40</p><p>4x = 24</p>"
        },
        "result": "x = 6"
      },
      {
        "task_id": 31,
        "task_text": "Egy téglalap egyik oldala háromszor olyan hosszú, mint a másik oldala, és a területe 27 cm². Mekkora a téglalap oldalainak hossza?",
        "explanation": "<p>Legyen a rövidebb oldal hossza <b>x</b>, a hosszabbik oldal hossza pedig <b>3x</b>.</p><p>A terület: <b>x * 3x = 27</b>.</p>",
        "equation": {
          "base_equation": "x * 3x = 27",
          "detailed_solution": "<p>3x² = 27</p><p>x² = 9</p>"
        },
        "result": "x = 3, 3x = 9"
      },
      {
        "task_id": 32,
        "task_text": "Egy szám kétszereséhez hozzáadva 7-et, az eredmény 25. Melyik ez a szám?",
        "explanation": "<p>Legyen a keresett szám <b>x</b>.</p><p>A feltétel: <b>2x + 7 = 25</b>.</p>",
        "equation": {
          "base_equation": "2x + 7 = 25",
          "detailed_solution": "<p>2x = 25 - 7</p><p>2x = 18</p>"
        },
        "result": "x = 9"
      },
      {
        "task_id": 33,
        "task_text": "Egy trapéz párhuzamos oldalainak hossza 8 cm és 12 cm, a magassága 5 cm. Mekkora a trapéz területe?",
        "explanation": "<p>A trapéz területének képlete: <b>(a + b) * h / 2</b>, ahol <b>a</b> és <b>b</b> a párhuzamos oldalak, <b>h</b> pedig a magasság.</p><p>A terület: <b>(8 + 12) * 5 / 2</b>.</p>",
        "equation": {
          "base_equation": "(8 + 12) * 5 / 2",
          "detailed_solution": "<p>20 * 5 / 2</p>"
        },
        "result": "Terület = 50 cm²"
      },
      {
        "task_id": 34,
        "task_text": "Egy kör kerülete 31,4 cm. Mekkora a kör átmérője? (Használja a π = 3,14 értéket.)",
        "explanation": "<p>A kör kerületének képlete: <b>2 * π * r</b>, ahol <b>r</b> a sugár.</p><p>A kerület: <b>2 * 3,14 * r = 31,4</b>.</p>",
        "equation": {
          "base_equation": "2 * 3,14 * r = 31,4",
          "detailed_solution": "<p>r = 31,4 / (2 * 3,14)</p><p>r = 5</p>"
        },
        "result": "Átmérő = 10 cm"
      },
      {
        "task_id": 35,
        "task_text": "Egy háromszög alapja 12 cm, magassága 8 cm. Mekkora a háromszög területe?",
        "explanation": "<p>A háromszög területének képlete: <b>(alap * magasság) / 2</b>.</p><p>A terület: <b>(12 * 8) / 2</b>.</p>",
        "equation": {
          "base_equation": "(12 * 8) / 2",
          "detailed_solution": "<p>96 / 2</p>"
        },
        "result": "Terület = 48 cm²"
      },
      {
        "task_id": 36,
        "task_text": "Egy szám ötszöröséből kivonva 15-öt, az eredmény 10. Melyik ez a szám?",
        "explanation": "<p>Legyen a keresett szám <b>x</b>.</p><p>A feltétel: <b>5x - 15 = 10</b>.</p>",
        "equation": {
          "base_equation": "5x - 15 = 10",
          "detailed_solution": "<p>5x = 25</p><p>x = 5</p>"
        },
        "result": "x = 5"
      },
      {
        "task_id": 37,
        "task_text": "Egy kör átmérője 14 cm. Mekkora a kör területe? (Használja a π = 3,14 értéket.)",
        "explanation": "<p>A kör területének képlete: <b>π * r²</b>, ahol <b>r</b> a sugár.</p><p>A terület: <b>3,14 * (14 / 2)²</b>.</p>",
        "equation": {
          "base_equation": "3,14 * (14 / 2)²",
          "detailed_solution": "<p>3,14 * 7²</p><p>3,14 * 49</p>"
        },
        "result": "Terület = 153,86 cm²"
      },
      {
        "task_id": 38,
        "task_text": "Egy téglalap kerülete 24 cm, és egyik oldala kétszer olyan hosszú, mint a másik. Mekkora a téglalap oldalainak hossza?",
        "explanation": "<p>Legyen a rövidebb oldal <b>x</b>, a hosszabb oldal pedig <b>2x</b>.</p><p>A kerület: <b>2 * (x + 2x) = 24</b>.</p>",
        "equation": {
          "base_equation": "2 * (x + 2x) = 24",
          "detailed_solution": "<p>6x = 24</p>"
        },
        "result": "x = 4, 2x = 8"
      },
      {
        "task_id": 39,
        "task_text": "Egy szám háromnegyed része 18. Melyik ez a szám?",
        "explanation": "<p>Legyen a keresett szám <b>x</b>.</p><p>A feltétel: <b>(3/4) * x = 18</b>.</p>",
        "equation": {
          "base_equation": "(3/4) * x = 18",
          "detailed_solution": "<p>x = 18 * (4/3)</p>"
        },
        "result": "x = 24"
      },
      {
        "task_id": 40,
        "task_text": "Egy iskola felső tagozatára 720 tanuló jár. 180 ötödik osztályos, 216 hatodik osztályos, 198 hetedik osztályos. A többiek nyolcadikosok. A felső tagozatra járó tanulóknak hány százaléka nyolcadikos?",
        "explanation": "<p>Először kiszámítjuk, hány tanuló van nyolcadik osztályban. Ehhez az összes tanuló létszámából kivonjuk az ötödik, hatodik és hetedik osztályos tanulók számát.</p><p>Ezután a nyolcadikosok számát elosztjuk az összes tanuló létszámával, majd megszorozzuk 100-zal, hogy megkapjuk a százalékos értéket.</p>",
        "equation": {
            "base_equation": "",
            "detailed_solution": "<p>Nyolcadikosok száma: 720 - (180 + 216 + 198) = 126.</p><p>Nyolcadikosok százaléka: (126 / 720) × 100 = 17,5%.</p>"
        },
        "result": "17,5%"
      },
      {
        "task_id": 41,
        "task_text": "Egy autó tele tankkal indulva 140 km-t tesz meg. Az út megtétele után 2,8 liter benzinje marad. Hány liter benzinje maradna, ha ugyanilyen sebességet feltételezve 80 km-t tenne meg?",
        "explanation": "<p>Először meghatározzuk, hogy mennyi benzint fogyasztott az autó 140 km alatt. Ehhez kivonjuk a maradék 2,8 litert a tele tank kapacitásából.</p><p>Kiszámítjuk az autó fogyasztását kilométerenként úgy, hogy a teljes fogyasztást elosztjuk 140-nel.</p><p>Ebből megállapítjuk, hogy 80 km-en mennyi benzin fogyna, majd kiszámítjuk, mennyi benzin maradna.</p>",
        "equation": {
            "base_equation": "",
            "detailed_solution": "<p>Tegyük fel, hogy a tele tank kapacitása T liter. Fogyasztás 140 km alatt: T - 2,8.</p><p>Fogyasztás kilométerenként: (T - 2,8) / 140.</p><p>Fogyasztás 80 km-re: 80 × [(T - 2,8) / 140].</p><p>Maradék benzin: T - (80 × [(T - 2,8) / 140]).</p>"
        },
        "result": "Az eredmény T és az egyenletek megoldásától függ."
    },
    {
        "task_id": 42,
        "task_text": "Egy 160 hektáros terület 3/4 részét a Szabó család; 0,2 részét pedig Nagyék vállalták el művelésre. Hány hektár kiadó még?",
        "explanation": "<p>Először kiszámítjuk, hogy a Szabó család hány hektárt művel meg. Ezután meghatározzuk, hogy Nagyék mekkora területet művelnek. A két értéket összeadva megkapjuk a már lefoglalt területet, amit kivonunk a teljes 160 hektárból, hogy megkapjuk a kiadó területet.</p>",
        "equation": {
            "base_equation": "",
            "detailed_solution": "<p>A Szabó család területe: (3/4) × 160 = 120 hektár.</p><p>Nagyék területe: 0,2 × 160 = 32 hektár.</p><p>Már lefoglalt terület: 120 + 32 = 152 hektár.</p><p>Kiadó terület: 160 - 152 = 8 hektár.</p>"
        },
        "result": "8 hektár"
    },
    {
        "task_id": 43,
        "task_text": "Egy háziasszony 40000 Ft-ot 10%-át tisztítószerekre, 2/5 részét élelmiszerekre, a többit egyéb vásárlásokra költötte. Hány Ft-ot költött tisztítószerekre?",
        "explanation": "<p>Először kiszámítjuk a 40000 Ft 10%-át, mert ennyit költött tisztítószerekre.</p><p>A 10%-os érték kiszámításához szorozzuk meg az összeget 0,1-gyel.</p>",
        "equation": {
            "base_equation": "",
            "detailed_solution": "<p>40000 × 0,1 = 4000 Ft.</p>"
        },
        "result": "4000 Ft"
    },
    {
        "task_id": 44,
        "task_text": "Egy ötvözetben a réz és a cink aránya R : C = 3 : 2. Mennyi réz van az ötvözetben, ha 5600 gramm cinket tartalmaz?",
        "explanation": "<p>Az arány alapján a réz és a cink tömege közötti kapcsolatot határozzuk meg. Ha a cink tömege 2 egység, akkor a réz tömege 3 egység. Ezután kiszámítjuk a réz mennyiségét az ismert cink tömegéből.</p>",
        "equation": {
            "base_equation": "",
            "detailed_solution": "<p>Az arány alapján: réz tömege / cink tömege = 3 / 2.</p><p>Réz tömege = (3 / 2) × 5600 = 8400 gramm.</p>"
        },
        "result": "8400 gramm"
    },
    {
        "task_id": 45,
        "task_text": "János bácsi a 2500 m²-es kertjének 0,55 részét felásta hétfőn, 1/4 részét pedig kedden. Hány m² maradt szerdára?",
        "explanation": "<p>Először kiszámítjuk, hány m²-t ásott fel hétfőn és kedden. Ezután a két értéket összeadjuk, és kivonjuk a kert teljes területéből, hogy megkapjuk a szerdára maradt területet.</p>",
        "equation": {
            "base_equation": "",
            "detailed_solution": "<p>Hétfőn felásott terület: 0,55 × 2500 = 1375 m².</p><p>Kedden felásott terület: (1/4) × 2500 = 625 m².</p><p>Összesen felásott terület: 1375 + 625 = 2000 m².</p><p>Szerdára maradt terület: 2500 - 2000 = 500 m².</p>"
        },
        "result": "500 m²"
    },
    {
      "task_id": 46,
      "task_text": "Egy téglatest alakú akvárium belső méretei (egy csúcsból kiinduló éleinek hossza): 42 cm, 25 cm és 3 dm. Megtelik-e az akvárium, ha beletöltünk 20 liter vizet?",
      "explanation": "<p>Először kiszámítjuk az akvárium térfogatát. Ehhez a téglatest térfogatának képletét használjuk: hossz × szélesség × magasság. Fontos, hogy minden mértékegységet egységesítsünk, például cm-ben számoljunk.</p><p>Ezután átváltjuk a térfogatot literre, mivel 1 liter = 1000 cm³. Végül összehasonlítjuk az akvárium térfogatát a 20 liter víz térfogatával, hogy megállapítsuk, belefér-e.</p>",
      "equation": {
          "base_equation": "",
          "detailed_solution": "<p>Az akvárium térfogata: 42 cm × 25 cm × 30 cm = 31,500 cm³.</p><p>Térfogat literben: 31,500 ÷ 1000 = 31,5 liter.</p><p>Összehasonlítás: 31,5 liter > 20 liter.</p>"
      },
      "result": "Az akvárium nem telik meg 20 liter víztől."
  },
  {
      "task_id": 47,
      "task_text": "Mama pogácsát sütött. Anna elsőként ért haza, megette a pogácsák harmadát. Béla másodikként hazaérve megette a tálcán lévő pogácsák harmadát. Ezután érkezett Cecil, aki szintén csak a tálcán lévő pogácsák egyharmadát fogyasztotta el, így 8 darabot hagyott. Hány pogácsát sütött a mama?",
      "explanation": "<p>Az ismert adat a végén maradt 8 pogácsa. Visszafele dolgozva, kiszámítjuk, mennyi pogácsa lehetett a tálcán minden egyes lépés előtt, figyelembe véve, hogy minden gyerek a meglévő pogácsák egyharmadát ette meg.</p>",
      "equation": {
          "base_equation": "",
          "detailed_solution": "<p>Maradt: 8 darab.</p><p>Cecil előtt: 8 × 3/2 = 12 darab.</p><p>Béla előtt: 12 × 3/2 = 18 darab.</p><p>Anna előtt: 18 × 3/2 = 27 darab.</p>"
      },
      "result": "Mama 27 pogácsát sütött."
  },
  {
      "task_id": 48,
      "task_text": "Egy téren 35 jármű – autó és motorkerékpár – parkol. Mennyi az autók és a motorkerékpárok száma, ha összesen 120 kereket számoltunk meg?",
      "explanation": "<p>Jelöljük az autók számát x-szel, a motorok számát pedig y-nal. Az ismert adatok alapján két egyenletet állíthatunk fel: x + y = 35 (a járművek száma) és 4x + 2y = 120 (a kerekek száma). Ezeket az egyenleteket oldjuk meg egyszerre.</p>",
      "equation": {
          "base_equation": "",
          "detailed_solution": "<p>x + y = 35.</p><p>4x + 2y = 120.</p><p>Az első egyenletből y = 35 - x.</p><p>Helyettesítés a második egyenletbe: 4x + 2(35 - x) = 120.</p><p>4x + 70 - 2x = 120.</p><p>2x = 50, x = 25.</p><p>y = 35 - x = 10.</p>"
      },
      "result": "Autók: 25, motorkerékpárok: 10."
  },
  {
      "task_id": 49,
      "task_text": "Egy kincseskamrában, három erszényben összesen 5400 Ft volt. Az első erszényből kivettük a benne lévő pénz harmadát, és a másodikba tettük. Ezután a másodikból vettük ki a benne lévő pénz harmadát, és a harmadikba tettük. Végül a harmadik erszényben lévő pénz harmadát vettük ki, és az első erszénybe tettük. Ezután mindegyik erszényben ugyanannyi pénz lett. Hány forint volt eredetileg az első erszényben?",
      "explanation": "<p>Jelöljük az első erszény pénzösszegét x-szel, a másodikét y-nal, a harmadikét z-vel. Az ismert adat: x + y + z = 5400. A műveletek során a három erszény tartalmának kiegyenlítődnie kell. Állítsunk fel egyenleteket a műveletek alapján.</p>",
      "equation": {
          "base_equation": "",
          "detailed_solution": "<p>1. lépés: x/3 hozzáadva y-hoz, az elsőben marad 2x/3.</p><p>2. lépés: y/3 hozzáadva z-hez, a másodikban marad 2y/3.</p><p>3. lépés: z/3 hozzáadva x-hez, a harmadikban marad 2z/3.</p><p>A végén minden erszény tartalma azonos: 2x/3 = 2y/3 = 2z/3 = 5400 ÷ 3 = 1800.</p><p>Egyenletek megoldása: x = 2700, y = 1800, z = 900.</p>"
      },
      "result": "Az első erszényben eredetileg 2700 Ft volt."
  },
  {
      "task_id": 50,
      "task_text": "Két törpe egyszerre ünnepli a születésnapját, életkoruk összege most 2017 év. Hány év az életkoruk összege 20 év múlva?",
      "explanation": "<p>Az életkoruk összege minden évben ugyanannyival nő, mint ahány törpe van. Két törpe esetén évente az összeg 2-vel nő. 20 év múlva ezt megszorozzuk 20-szal, és hozzáadjuk a jelenlegi összeghez.</p>",
      "equation": {
          "base_equation": "",
          "detailed_solution": "<p>Mostani életkor összeg: 2017 év.</p><p>Növekmény 20 év alatt: 2 × 20 = 40 év.</p><p>Összeg 20 év múlva: 2017 + 40 = 2057 év.</p>"
      },
      "result": "2057 év"
  },
  {
    "task_id": 51,
    "task_text": "Egy fa törzsének kerülete 30 évvel ezelőtt a mostani kerületének harmada volt. Azóta a fa évente egyenletesen növelte a törzse kerületét 2 cm-rel. Mekkora most a fa törzsének kerülete?",
    "explanation": "<p>A mostani kerület legyen K. 30 évvel ezelőtt a kerület a harmada volt, azaz K/3. Az eltelt 30 év alatt évente 2 cm-rel növekedett, tehát a növekedés összesen 30 × 2 = 60 cm. A mostani kerület K tehát az akkori kerület (K/3) és a növekedés (60 cm) összege.</p>",
    "equation": {
        "base_equation": "K = K/3 + 60",
        "detailed_solution": "<p>K = K/3 + 60</p><p>3K = K + 180</p><p>2K = 180</p><p>K = 90</p>"
    },
    "result": "A fa törzsének mostani kerülete 90 cm."
  },
  {
    "task_id": 52,
    "task_text": "Egy gazda tyúkjai napi átlagban 24 tojást tojnak. Az első három napban összesen 70 tojást gyűjtött össze. A negyedik napon a szokásos átlagos mennyiség kétszeresét tojta a tyúkok. Hány tojást gyűjtött a gazda az első négy nap alatt?",
    "explanation": "<p>A negyedik napon a tyúkok 2 × 24 = 48 tojást tojtak. Az első három napban összesen 70 tojást gyűjtöttek, ezért a négy nap összes tojása 70 + 48 lesz.</p>",
    "equation": {
        "base_equation": "Összes tojás = 70 + 48",
        "detailed_solution": "<p>Összes tojás = 70 + 48 = 118 tojás</p>"
    },
    "result": "A gazda az első négy nap alatt 118 tojást gyűjtött."
  },
  {
    "task_id": 53,
    "task_text": "Egy tanár csoportjának fele jelentkezett egy iskolai kirándulásra. A jelentkezők kétharmada hozott iskolai beleegyező nyilatkozatot. Összesen 24 diák hozott nyilatkozatot. Hány diák van a csoportban?",
    "explanation": "<p>A csoport létszámát jelöljük N-nel. A jelentkezők száma N/2, és ezek kétharmada hozott beleegyező nyilatkozatot, azaz (N/2) × 2/3 = 24. Ebből az egyenletből kiszámítjuk N-t.</p>",
    "equation": {
        "base_equation": "(N/2) × 2/3 = 24",
        "detailed_solution": "<p>(N/2) × 2/3 = 24</p><p>N/3 = 24</p><p>N = 72</p>"
    },
    "result": "A csoportban 72 diák van."
  },
  {
    "task_id": 54,
    "task_text": "Egy kertész kétféle rózsát ültetett. Az első fajta rózsák száma kétszer annyi, mint a második fajta rózsák száma. Az első fajtából 16 rózsa elhervadt, így már csak ugyanannyi maradt, mint a második fajta rózsák száma. Hány rózsát ültetett összesen a kertész?",
    "explanation": "<p>Jelöljük a második fajta rózsák számát x-szel. Az első fajta rózsák száma kétszer ennyi, tehát 2x. Ha 16 elhervadt, akkor 2x - 16 rózsa marad, ami egyenlő a második fajta rózsák számával (x). Ebből az egyenletből kiszámítható x, majd az ültetett rózsák összes száma: x + 2x.</p>",
    "equation": {
        "base_equation": "2x - 16 = x",
        "detailed_solution": "<p>2x - 16 = x → x = 16</p><p>Összes rózsa = x + 2x = 16 + 32 = 48 rózsa</p>"
    },
    "result": "A kertész összesen 48 rózsát ültetett."
  },
  {
    "task_id": 55,
    "task_text": "Egy teherautó egy építkezésre 3 fuvarban szállított téglát. Az első fuvarban 240 téglát vitt, a második fuvarban ennek 75%-át. A harmadik fuvarban 90-nel kevesebb téglát vitt, mint az első fuvarban. Hány téglát szállított összesen?",
    "explanation": "<p>Az első fuvarban a teherautó 240 téglát vitt. A második fuvarban ennek 75%-át, tehát 240 × 0,75 = 180 téglát. A harmadik fuvarban 90-nel kevesebbet vitt, mint az első fuvarban, azaz 240 - 90 = 150 téglát. Az összes tégla száma a három fuvar tégláinak összege.</p>",
    "equation": {
        "base_equation": "Összes tégla = 240 + (240 × 0,75) + (240 - 90)",
        "detailed_solution": "<p>Összes tégla = 240 + 180 + 150 = 570 tégla</p>"
    },
    "result": "A teherautó összesen 570 téglát szállított."
  },
  {
    "task_id": 56,
    "task_text": "Egy focicsapat az első félidőben 3 gólt szerzett, ami háromszor annyi, mint az ellenfél által lőtt gólok száma ugyanebben az időszakban. A második félidőben a csapat még 2 gólt szerzett, míg az ellenfél góljainak száma kétszer annyi lett, mint az első félidőben. Hány gólt szerzett összesen a két csapat?",
    "explanation": "<p>Jelöljük az ellenfél első félidőbeli góljainak számát x-szel. A focicsapat 3 gólt szerzett, ami háromszorosa x-nek, tehát x = 1. A második félidőben a focicsapat még 2 gólt lőtt, az ellenfél pedig 2x-et, vagyis 2 × 1 = 2 gólt. Az összes gól a két félidőben szerzett gólok összege.</p>",
    "equation": {
        "base_equation": "Összes gól = 3 + x + 2 + 2x",
        "detailed_solution": "<p>Összes gól = 3 + 1 + 2 + 2 × 1 = 8 gól</p>"
    },
    "result": "A két csapat összesen 8 gólt szerzett."
  },
  {
    "task_id": 57,
    "task_text": "Egy vonat napi két járatot teljesít. Az első járat során 150 utast szállított. A második járat utasainak száma az első járaté 60%-ával egyezett meg. Ha a vonat mindkét járatán egyaránt 12 jegy nélküli utas volt, hány utasnak volt jegye a két járaton összesen?",
    "explanation": "<p>Az első járaton 150 utas volt, amelyből 12-nek nem volt jegye, tehát jegyes utasok száma: 150 - 12 = 138. A második járaton az utasok száma az első járat 60%-a volt, azaz 150 × 0,6 = 90. Itt szintén 12 jegy nélküli utas volt, így a jegyes utasok száma 90 - 12 = 78. Az összes jegyes utas száma: 138 + 78.</p>",
    "equation": {
        "base_equation": "Összes jegyes = (150 - 12) + (90 - 12)",
        "detailed_solution": "<p>Összes jegyes = 138 + 78 = 216 utas</p>"
    },
    "result": "A két járaton összesen 216 utasnak volt jegye."
  },
  {
    "task_id": 58,
    "task_text": "Egy gazda háromféle gyümölcsfát ültetett: 20 almafát, kétszer annyi barackfát, mint almafát, és feleannyi szilvafát, mint barackfát. Hány fát ültetett összesen?",
    "explanation": "<p>A gazda 20 almafát ültetett. A barackfák száma ennek kétszerese, tehát 20 × 2 = 40. A szilvafák száma pedig a barackfák számának fele, azaz 40 ÷ 2 = 20. Az összes fa számát az alma-, barack- és szilvafák számának összege adja.</p>",
    "equation": {
        "base_equation": "Összes fa = 20 + 40 + 20",
        "detailed_solution": "<p>Összes fa = 20 + 40 + 20 = 80 fa</p>"
    },
    "result": "A gazda összesen 80 fát ültetett."
  },
  {
    "task_id": 59,
    "task_text": "Egy futó az első nap 8 km-t futott. A második napon kétszer annyit, mint az első napon. A harmadik napon az előző két nap átlagának megfelelő távot futotta. Összesen hány kilométert futott a három nap alatt?",
    "explanation": "<p>Az első nap a futó 8 km-t futott. A második napon ennek kétszeresét, tehát 2 × 8 = 16 km-t. A harmadik napon az első két nap átlagát futotta: (8 + 16) ÷ 2 = 12 km. Az összes megtett távolságot úgy kapjuk, hogy összeadjuk a három nap távját.</p>",
    "equation": {
        "base_equation": "Összes táv = 8 + 16 + 12",
        "detailed_solution": "<p>Összes táv = 8 + 16 + 12 = 36 km</p>"
    },
    "result": "A futó összesen 36 km-t futott."
  }


      
]; 