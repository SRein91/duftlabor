function loadContent(page) {
    let content = document.getElementById('content');
    
    switch (page) {
        case 'workshops':
            content.innerHTML = `
                <div class="workshop-container">
                    <img src="./img/Workshop.png" alt="Workshop Image" class="workshop-image">
                    <div class="text-content">
                        <div class="workshop-details">
                            <h1>Entdecke die Welt der Düfte – Dein Parfüm-Workshop</h1>
                            <p>Bist du bereit, in die aufregende Welt der Düfte einzutauchen? Unser Parfüm-Workshop ist das perfekte Erlebnis, um deine Sinne zu wecken und deine Kreativität auszuleben!</p>
                            <p>Ob als Erlebniss in einer bunt gemischten Workshop-Gruppe, als Event für eure nächste Firmenfeier oder für einen besonderen Junggesellenabschied - seid jetzt dabei.</p>                            
                            <h2>Unsere Highlights auf einen Blick</h2>
                            <ul>
                                <li>Hintergrundinfos zur Parfümherstellung</li>
                                <li>Ein Törtchen und ein warmes Getränk der Pâtisserie CØR (Mannheim) / Ein warmes Getränk (Hamburg)</li>
                                <li>Die Möglichkeit neue Kontakte zu knüpfen und nette Leute kennen zu lernen</li>
                                <li>Einen 50 ml Flakon mit deinem selbstkreierten Parfüm, den du mit nach Hause nehmen darfst</li>
                            </ul>

                            <h2>Was du sonst noch wissen solltest</h2>
                            <p>Der Workshop ist nicht für Duftstoff-Allergiker geeignet.</p>

                            <p>Unsere Workshops finden in regelmäßigen Abständen in Mannheim und Hamburg statt.</p>

                            <h2>Nächste Termine Mannheim</h2>
                            <ul>
                                <li>So, 16. Februar 2025 10:00 Uhr - 13:30 Uhr</li>
                                <li>Sa, 29. März 2025 10:00 Uhr - 13:30 Uhr</li>
                                <li>So, 30. März 2025 10:00 Uhr - 13:30 Uhr</li>
                                <li>Sa, 26. April 2025 10:00 Uhr - 13:30 Uhr</li>
                            </ul>

                            <h2>Nächste Termine Hamburg</h2>
                            <ul>
                                <li>Sa, 08. März 2025 in Hamburg 14:30 Uhr - 18:00 Uhr</li>
                                <li>Sa, 12. April 2025 in Hamburg 10:00 Uhr - 13:30 Uhr</li>
                                <li>Sa, 12. April 2025 in Hamburg 14:30 Uhr - 18:00 Uhr</li>
                            </ul>
                            <h2>Wo</h2>
                            <p>Mannheim: Pâtisserie CØR<br>Lameystraße 17<br>68165 Mannheim</p>
                            <p>Hamburg: Alte Brotfabrik<br>Rellinger Str. 23<br>20257 Hamburg</p>

                            <h2>Kosten</h2>
                            <p>89 Euro</p>

                            <h2>Anmeldung</h2>
                            <p>Schicke uns ganz einfach eine Mail an <a href="mailto:duftlabor@gmail.com">duftlabor@gmail.com</a> oder schreibe uns eine WhatsApp <a href="tel:+491786142934">+49 178 6142934</a>.</p>
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
                                <li>Telefon &nbsp; &nbsp; &nbsp; <a href="tel:+491786142934">+49 178 6142934</a></li>
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
                            Wir – Stella, Sonja und Theodora – sind drei begeisterte Workshop-Fans und lieben
                            es, in entspannter Atmosphäre gemeinsam kreativ zu sein. Für uns ist das der perfekte
                            Ausgleich nach einem langen Arbeitstag: Im Moment sein, Neues ausprobieren und unsere
                            Sinne aktivieren. Workshops geben uns genau das – die Möglichkeit, in guter Gesellschaft
                            dem Alltag zu entfliehen und uns kreativ auszutoben.
                            </p>
                            <p>
                            Besonders Düfte haben uns von Anfang an fasziniert, denn sie beeinflussen unsere
                            Stimmung und unser Wohlbefinden. Mit einem Duft können wir unsere Persönlichkeit
                            ausdrücken und etwas ganz Eigenes schaffen. Nach zahlreichen Parfüm-Lehrgängen haben
                            wir nun den Wunsch, diese Leidenschaft für Düfte nicht nur mit Freunden, sondern mit euch
                            zu teilen! Deshalb haben wir unser Start-Up duftlabor hier in Mannheim gegründet.
                            </p>
                            <p>
                            In unseren DIY-Parfüm-Workshops kannst du eigene Duftkreationen entwickeln, neue
                            Menschen kennenlernen und dich inspirieren lassen.
                            </p>
                            <p>
                            Lass uns zusammen die Welt der Düfte entdecken – wir freuen uns auf dich!
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
                    
                    <p><strong>Telefon:</strong> +49 178 6142934<br>
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
