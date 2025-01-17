function loadContent(page) {
    let content = document.getElementById('content');
    
    switch (page) {
        case 'workshops':
            content.innerHTML = `
                <div class="workshop-container">
                    <img src="./img/Workshop.png" alt="Workshop Image" class="workshop-image">
                    <div class="text-content">
                        <div class="workshop-details">
                            <h1>Dein DIY Parfüm Workshop in Hamburg, Mannheim und Umgebung</h1>
                            <p>Tauche ein in die faszinierende Welt der Düfte!</p>
                            <p>Unser Parfüm-Workshop ist das ideale Erlebnis, um deine Sinne zu wecken, deiner Kreativität freien Lauf zu lassen und schon bald deinen selbst kreierten Lieblingsduft mit nach Hause zu nehmen.</p>                            
                            
                            <h2>Für jeden Anlass geeignet</h2>
                            <p>Egal, ob du ein unvergessliches Erlebnis in einer bunt gemischten Workshop-Gruppe suchst, eine besondere Aktivität für eure nächste Firmenfeier planst oder einen kreativen Junggesellenabschied gestalten möchtest – unser Parfüm-Workshop ist genau das Richtige für dich.</p>

                            <h2>Individuelle Anfragen willkommen</h2>
                            <p>Neben unseren regelmäßigen Workshops in 
                            <a href="#" onclick="loadContent('mannheim')">Mannheim</a> und 
                            <a href="#" onclick="loadContent('hamburg')">Hamburg</a> 
                            bieten wir auch individuelle Veranstaltungen für den Raum Heidelberg, Frankfurt, Mannheim und Hamburg an. Perfekt für private Gruppen, maßgeschneiderte Events oder besondere Wünsche.</p>
                            
                            <h2>Kontaktiere uns jetzt</h2>
                            <p>Schicke uns ganz einfach deine Anfrage per Mail an <a href="mailto:duftlabor@gmail.com">duftlabor@gmail.com</a> oder schreibe uns eine WhatsApp <a href="tel:+491786142934">+49 178 6142934</a>.</p>
                        </div>                          
                    </div>
                </div>

                `;
            break;
            case 'mannheim':
                content.innerHTML = `
                    <div class="workshop-container">
                        <img src="./img/Mannheim.png" alt="Workshop Image" class="workshop-image">
                        <div class="text-content">
                            <div class="workshop-details">
                                <h1>Entdecke die Welt der Düfte – Dein Parfüm-Workshop</h1>
                                <p>Bist du bereit, in die aufregende Welt der Düfte einzutauchen? Unser Parfüm-Workshop ist das perfekte Erlebnis, um deine Sinne zu wecken.</p>
                                <p>In unserem Parfüm-Workshop in Mannheim erwartet Dich ein unvergessliches Erlebnis, bei dem Du die Grundlagen der Parfümherstellung erlernst und Deine Kreativität voll ausleben kannst.</p> 
                                <p>Unter fachkundiger Anleitung mischst Du Deinen eigenen, ganz persönlichen Duft und erfährst Spannendes über die Parfümherstellung. Genieße in stilvollem Ambiente köstliche Törtchen von der Pâtisserie CØR und warmen Tee oder Kaffee – und nimm am Ende 50 ml Deines selbstkreierten Parfüms mit nach Hause!</p>                       
                                <h2>Unsere Highlights auf einen Blick</h2>
                                <ul>
                                    <li>Hintergrundinfos zur Parfümherstellung</li>
                                    <li>Ein Törtchen und ein warmes Getränk der Pâtisserie CØR</li>
                                    <li>Die Möglichkeit neue Kontakte zu knüpfen und nette Leute kennen zu lernen</li>
                                    <li>Einen 50 ml Flakon mit deinem selbstkreierten Parfüm, den du mit nach Hause nehmen darfst</li>
                                </ul>
    
                                <h2>Was du sonst noch wissen solltest</h2>
                                <p>Der Workshop ist nicht geeignet für Menschen mit Duftstoff-Allergien und Schwangere.</p>
    
                                <h2>Nächste Workshop Termine Mannheim</h2>
                                <ul>
                                    <li>So, 16.02.2025 10:00 Uhr - 13:30 Uhr (ausgebucht)</li>
                                    <li>Sa, 29.03.2025 10:00 Uhr - 13:30 Uhr</li>
                                    <li>So, 30.03.2025 10:00 Uhr - 13:30 Uhr</li>
                                    <li>Sa, 26.04.2025 10:00 Uhr - 13:30 Uhr</li>
                                </ul>
                                <h2>Wo</h2>
                                <p>Pâtisserie CØR<br>Lameystraße 17<br>68165 Mannheim</p>
    
                                <h2>Kosten</h2>
                                <p>89 Euro</p>
    
                                <h2>Anmeldung</h2>
                                <p>Schicke uns ganz einfach eine Mail an <a href="mailto:duftlabor@gmail.com">duftlabor@gmail.com</a> oder schreibe uns eine WhatsApp <a href="tel:+491786142934">+49 178 6142934</a>.</p>
                            </div>
                                
                        </div>
                    </div>
    
                    `;
                break;
                case 'hamburg':
                    content.innerHTML = `
                        <div class="workshop-container">
                            <img src="./img/Hamburg.png" alt="Workshop Image" class="workshop-image">
                            <div class="text-content">
                                <div class="workshop-details">
                                    <h1>Entdecke die Welt der Düfte – Dein Parfüm-Workshop</h1>
                                    <p>Bist du bereit, in die aufregende Welt der Düfte einzutauchen? Unser Parfüm-Workshop ist das perfekte Erlebnis, um deine Sinne zu wecken.</p>
                                    <p>In unserem Parfüm-Workshop in Hamburg erwartet Dich ein unvergessliches Erlebnis, bei dem Du die Grundlagen der Parfümherstellung erlernst und Deine Kreativität voll ausleben kannst.</p> 
                                    <p>Unter fachkundiger Anleitung mischst Du Deinen eigenen, ganz persönlichen Duft und erfährst Spannendes über die Parfümherstellung. Genieße in kreativem Ambiente dein Heißgetränk – und nimm am Ende 50 ml Deines selbstkreierten Parfüms mit nach Hause!</p>                      
                                    <h2>Unsere Highlights auf einen Blick</h2>
                                    <ul>
                                        <li>Hintergrundinfos zur Parfümherstellung</li>
                                        <li>Ein warmes Getränk</li>
                                        <li>Die Möglichkeit neue Kontakte zu knüpfen und nette Leute kennen zu lernen</li>
                                        <li>Einen 50 ml Flakon mit deinem selbstkreierten Parfüm, den du mit nach Hause nehmen darfst</li>
                                    </ul>
        
                                    <h2>Was du sonst noch wissen solltest</h2>
                                    <p>Der Workshop ist nicht geeignet für Menschen mit Duftstoff-Allergien und Schwangere.</p>
        
                                    <h2>Nächste Termine Hamburg</h2>
                                    <ul>
                                        <li>Sa, 08.03.2025 10:00 Uhr - 13:30 Uhr (ausgebucht)</li>
                                        <li>Sa, 08.03.2025 14:30 Uhr - 18:00 Uhr</li>
                                        <li>Sa, 12.04.2025 10:00 Uhr - 13:30 Uhr</li>
                                        <li>Sa, 12.04.2025 14:30 Uhr - 18:00 Uhr</li>
                                    </ul>
                                    <h2>Wo</h2>
                                    <p>Alte Brotfabrik<br>Rellinger Str. 23<br>20257 Hamburg</p>
        
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
