function loadContent(page) {
    let content = document.getElementById('content');
    
    switch (page) {
        case 'workshops':
            content.innerHTML = `
                <div class="workshop-container">
                    <img src="./img/imgworkshop.png" alt="Workshop Image" class="workshop-image">
                    <div class="text-content">
                        <div class="workshop-details">
                            <h1>Entdecke die Welt der Düfte – Dein Parfüm-Workshop</h1>
                            <p>Bist du bereit, in die aufregende Welt der Düfte einzutauchen? Unser Parfüm-Workshop ist das perfekte Erlebnis, um deine Sinne zu wecken und deine Kreativität auszuleben!</p>

                            <h2>Deine sensorische Reise</h2>
                            <p>Erlebe eine Reise durch faszinierende Duftwelten – von spritzigen Zitronengras über warmen Moschus bis hin zu blumigen Aromen. Hier hast du die Möglichkeit, die Kunst der Parfümkreation auf eine völlig neue Art zu entdecken. Unsere Workshops finden dabei regelmäßig in ausgewählten, stilvollen Locations statt, die eine inspirierende Atmosphäre bieten, um kreativ zu werden.</p>

                            <h2>Kreativ sein und experimentieren</h2>
                            <p>In unserem Parfüm-Workshop erhältst du nicht nur wertvolles Wissen über die Kunst des Parfümhandwerks, sondern auch die Freiheit, deinen eigenen Duft zu kreieren. Wir begleiten dich dabei, während du mit verschiedenen Duftnoten experimentierst. Und ganz nebenbei hast du die Chance, neue Kontakte zu knüpfen und Gleichgesinnte kennenzulernen!</p>

                            <h2>Genuss und Verwöhnmomente</h2>
                            <p>Und weil es bei uns nicht nur um Düfte geht, lassen wir es uns richtig gut gehen! Genieße ein köstliches Törtchen von der Pâtisserie CØR, erfrischenden Sekt und ein warmes Getränk, während du kreativ wirst. So wird der Workshop zu einem echten Verwöhnmoment für alle Sinne!</p>

                            <h2>Dein persönliches Parfüm</h2>
                            <p>Am Ende des Workshops wirst du dein ganz eigenes Parfüm kreiert haben – ein Duft, der perfekt zu dir passt. Und das Beste: Du darfst 50 ml deines Parfüms am Ende des Workshops in einem schönen Flakon mit nach Hause nehmen.</p>

                            <h2>Werde Teil unserer Duft-Community</h2>
                            <p>Mach mit und erlebe die Kunst der Parfümkreation in einer inspirierenden, kreativen Umgebung. Lass uns gemeinsam unvergessliche Düfte kreieren und neue Freunde gewinnen!</p>

                            <br>
                            <h2>Unsere Highlights auf einen Blick</h2>
                            <ul>
                                <li>Hintergrundinfos zur Parfümherstellung</li>
                                <li>Einen Begrüßungssekt</li>
                                <li>Ein Törtchen und ein warmes Getränk der Pâtisserie CØR</li>
                                <li>Die Möglichkeit neue Kontakte zu knüpfen und nette Leute kennen zu lernen</li>
                                <li>Einen 50 ml Flakon mit deinem selbstkreierten Parfüm, den du mit nach Hause nehmen darfst</li>
                            </ul>

                            <h2>Was du sonst noch wissen solltest</h2>
                            <p>Der Workshop ist nicht für Duftstoff-Allergiker geeignet.</p>

                            <p>Unsere Workshops finden in regelmäßigen Abständen in Mannheim, Heidelberg, Kassel und Hamburg statt.</p>

                            <h2>Nächster freier Termin</h2>
                            <p>Sa, 23. November 2024 in Mannheim</p>

                            <h2>Uhrzeit</h2>
                            <p>11:00 Uhr - 13:30 Uhr</p>

                            <h2>Wo</h2>
                            <p>Pâtisserie CØR<br>Lameystraße 17<br>68165 Mannheim</p>

                            <h2>Kosten</h2>
                            <p>79 Euro</p>

                            <h2>Anmeldung</h2>
                            <p>Schicke uns ganz einfach eine Mail an <a href="mailto:duftlabor@gmail.com">duftlabor@gmail.com</a>. <!-- oder ruf uns unter der <a href="tel:+491786142934">+49 178 6142934</a> an. --> </p>
                        </div>
                            
                    </div>
                </div>

                `;
            break;

        case 'kontakt':
            content.innerHTML = `
                <div class="workshop-container">
                    <img src="./img/kontakt.png" alt="Workshop Image" class="workshop-image">
                    <div class="text-content">
                        <div class="kontakt-section">
                            <h1>Kontakt</h1>
                            <p>Hast du eine Frage, eine Anregung, oder brauchst du eine Beratung?</p>
                            <p>Melde dich gerne unter:</p>
                            <ul>
                                <li>Email &nbsp; &nbsp; &nbsp; &nbsp; <a href="mailto:duftlabor@gmail.com">duftlabor@gmail.com</a></li>
                                <li>Instagram&nbsp; <a href="https://www.instagram.com/duftlabor/?hl=en" target="_blank">@duftlabor</a></li>
                                <!-- <li>Telefon &nbsp; &nbsp; &nbsp; <a href="tel:+491786142934">+49 178 6142934</a></li> -->
                            </ul>
                            <p>Stella, Theodora & Sonja</p>
                        </div>
                    </div>
                </div>
                `;
            break;

        case 'uberUns':
            content.innerHTML = `
                <div class="workshop-container">
                    <img src="./img/uberuns.png" alt="Workshop Image" class="workshop-image">
                    <div class="text-content">
                        <div class="about-section">
                            <h1>Willkommen bei duftlabor!</h1>
                            <p>
                                duftlabor wurde 2024 von drei reisebegeisterten Freundinnen ins Leben gerufen, die auf ihren Abenteuern nicht nur atemberaubende Landschaften, sondern auch faszinierende Düfte entdeckten. Von Lavendelfeldern über leuchtende Orangenbäume bis hin zum warmen Holzgeruch im Wald – es sind diese intensiven Aromen, die uns auf unseren Reisen begleiten und uns in Erinnerung bleiben.
                            </p>
                            <p>
                                Um tiefer in die faszinierende Welt der Düfte einzutauchen, haben sich die Freundinnen auf unterschiedliche Weise weitergebildet: Stella machte eine Ausbildung zur Aromatherapeutin, Sonja reiste nach Grasse, dem Herzen der europäischen Parfümindustrie, um mehr über die Geschichte der Parfümherstellung zu erfahren, und Theodora besuchte verschiedene Workshops zur Herstellung von Naturkosmetik mit ätherischen Ölen. Gemeinsam besuchten sie aufbauend verschiedene Lehrgänge zur Parfümherstellung und experimentierten mit unterschiedlichen Parfümölen, die ihre Leidenschaft für Düfte weiter entfachte.
                            </p>
                            <h2>Warum wir Düfte lieben?</h2>
                            <p>
                                Weil sie unser Wohlbefinden und unsere Stimmung entscheidend beeinflussen. Mit der Wahl eines Duftes verleihen wir unserer Persönlichkeit Ausdruck. Zudem glauben wir fest daran, dass Kreativität und der bewusste Einsatz unserer Sinne zu einem erfüllten Leben beitragen.
                            </p>
                            <p>
                                Unsere Leidenschaft für Duft möchten wir mit dir teilen! In unseren Parfüm-Workshops kannst du kreativ werden, neue Duftkombinationen entwickeln, spannende Menschen kennenlernen und dich austauschen – und der Spaß kommt dabei nicht zu kurz! Tauche ein in die Welt der Düfte und entdecke, was deine Sinne inspiriert!
                            </p>
                            <p>
                                Werde ein Teil der duftlabor-Community <a href="https://www.instagram.com/duftlabor/?hl=en" target="_blank">@duftlabor</a>
                            </p>
                        </div>
                    </div>
                </div>
                `;
            break;

        case 'schenken':
            content.innerHTML = `
                <div class="workshop-container">
                    <img src="./img/geschenkkarte.png" alt="Workshop Image" class="workshop-image">
                    <div class="text-content">
                        <div class="gift-section">
                            <h1>Verschenke ein kreatives Erlebnis</h1>
                            <p>
                                Suchst du nach einem individuellen Geschenk? Mit einer Geschenkkarte von duftlabor schenkst du deinen Liebsten ein individuelles und kreatives Erlebnis – nicht einfach nur Dinge!
                            </p>
                            <p>
                                Unsere Geschenkkarten sind für alle unsere Parfüm-Workshops einlösbar und eignen sich ideal für alle, die etwas Außergewöhnliches verschenken möchten.
                            </p>
                            <p>
                                Wenn du eine Geschenkkarte kaufen möchtest, schicke uns einfach eine E-Mail mit deinem Wunschbetrag an <a href="mailto:duftlabor@gmail.com">duftlabor@gmail.com</a>.
                            </p>
                        </div>
                    </div>
                </div>
                `;
            break;

        case 'agb':
            fetch('./AGBFooter.html') 
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading the AGB content:', error);
            });
            break;

        case 'impressum':
            content.innerHTML = `
                <div class="company-info">
                    <p><strong>duftlabor GbR</strong><br>
                    Kleinfeldstraße 31<br>
                    68165 Mannheim<br>
                    Deutschland</p>
                    
                    <!-- <p><strong>Telefon:</strong> +49 178 6142934<br> -->
                    <strong>Email:</strong> <a href="mailto:duftlabor@gmail.com">duftlabor@gmail.com</a></p>

                    <p><strong>Vertreten durch die geschäftsführenden Gesellschafter:</strong></p>
                    <ul>
                        <li>Stella Norwig</li>
                        <li>Sonja Reinholz</li>
                        <li>Theodora Tunc</li>
                    </ul>

                    <p><strong>Informationen zur Online-Streitbeilegung:</strong><br>
                    Die EU-Kommission hat eine Internetplattform zur Online-Beilegung von Streitigkeiten (sog. „OS-Plattform“) geschaffen. Die OS-Plattform dient als Anlaufstelle zur außergerichtlichen Beilegung von Streitigkeiten betreffend vertragliche Verpflichtungen, die aus Online-Kaufverträgen erwachsen. Sie können die OS-Plattform unter dem folgenden Link erreichen: <a href="http://ec.euopa.eu/consumers/odr" target="_blank">http://ec.euopa.eu/consumers/odr</a>.</p>

                    <p><em>Hinweis gemäß § 36 Verbraucherstreitbeilegungsgesetz (VSBG):</em> Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit.</p>
                </div>
                `;
            break;

        default:
            content.innerHTML = `<h1>Seite nicht gefunden</h1>`;
    }
}

// Load the default 'Workshops' page on initial load
document.addEventListener("DOMContentLoaded", function() {
    loadContent('workshops');
});
