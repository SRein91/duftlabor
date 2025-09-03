function loadContent(page, push = true) {
    let content = document.getElementById('content');
    
    switch (page) {
        case 'workshops':
            content.innerHTML = `
                <div class="workshop-container">
                    <img src="./img/Workshop.png" alt="Workshop Image" class="workshop-image">
                    <div class="text-content">
                        <div class="workshop-details">
                            <h1>Dein DIY Parfüm Workshop in Frankfurt, Hamburg, Mannheim, und Umgebung</h1>
                            <p>Tauche ein in die faszinierende Welt der Düfte!</p>
                            <p>Unser Parfüm-Workshop ist das ideale Erlebnis, um deine Sinne zu wecken, deiner Kreativität freien Lauf zu lassen und schon bald deinen selbst kreierten Lieblingsduft mit nach Hause zu nehmen.</p>                            
                            
                            <h2>Für jeden Anlass geeignet</h2>
                            <p>Egal, ob du ein unvergessliches Erlebnis in einer bunt gemischten Workshop-Gruppe suchst, eine besondere Aktivität für eure nächste Firmenfeier planst oder einen kreativen Junggesellenabschied gestalten möchtest – unser Parfüm-Workshop ist genau das Richtige für dich.</p>

                            <h2>Individuelle Anfragen willkommen</h2>
                            <p>Neben unseren Workshops in 
                            <a href="#" onclick="loadContent('mannheim')">Mannheim</a>,
                            <a href="#" onclick="loadContent('frankfurt')">Frankfurt</a> und 
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
                                <p>Unter fachkundiger Anleitung mischst Du Deinen eigenen, ganz persönlichen Duft und erfährst Spannendes über die Parfümherstellung - und nimm am Ende 50 ml Deines selbstkreierten Parfüms mit nach Hause!</p>                       
                                <h2>Unsere Highlights auf einen Blick</h2>
                                <ul>
                                    <li>Hintergrundinfos zur Parfümherstellung</li>
                                    <li>Die Möglichkeit neue Kontakte zu knüpfen und nette Leute kennen zu lernen</li>
                                    <li>Einen 50 ml Flakon mit deinem selbstkreierten Parfüm, den du mit nach Hause nehmen darfst</li>
                                </ul>
    
                                <h2>Was du sonst noch wissen solltest</h2>
                                <p>Der Workshop ist nicht geeignet für Menschen mit Duftstoff-Allergien und Schwangere.</p>
    
                                <h2>Nächste Workshop Termine Mannheim</h2>
                                <ul>
                                    <li>Sa, 27.09.2025 10:00 Uhr - 13:00 Uhr (noch ein Platz)</li>
                                    <li>Sa, 27.09.2025 14:30 Uhr - 17:30 Uhr (ausgebucht)</li> 
                                    <li>Sa, 18.10.2025 14:30 Uhr - 17:30 Uhr (noch ein Platz)</li>
                                    <li>Do, 30.10.2025 17:30 Uhr - 20:30 Uhr</li>
                                    <li>Sa, 15.11.2025 14:30 Uhr - 17:30 Uhr</li>
                                    <li>Do, 20.11.2025 17:30 Uhr - 20:30 Uhr</li>
                                    <li>Do, 11.12.2025 17:30 Uhr - 20:30 Uhr</li>
                                </ul>
                                <h2>Wo</h2>
                                <p>27.09 & 18.10 & 15.11: MeerRaum<br>Meerwiesenstraße 1<br>68163 Mannheim</p>
                                <p>30.10 & 20.11 & 11.12: Studio Garage<br>Uhlandstraße 26A<br>68167 Mannheim</p>
    
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
                                    <p>Unter fachkundiger Anleitung mischst Du Deinen eigenen, ganz persönlichen Duft und erfährst Spannendes über die Parfümherstellung – und nimm am Ende 50 ml Deines selbstkreierten Parfüms mit nach Hause!</p>                      
                                    <h2>Unsere Highlights auf einen Blick</h2>
                                    <ul>
                                        <li>Hintergrundinfos zur Parfümherstellung</li>
                                        <li>Ein Getränk</li>
                                        <li>Die Möglichkeit neue Kontakte zu knüpfen und nette Leute kennen zu lernen</li>
                                        <li>Einen 50 ml Flakon mit deinem selbstkreierten Parfüm, den du mit nach Hause nehmen darfst</li>
                                    </ul>
        
                                    <h2>Was du sonst noch wissen solltest</h2>
                                    <p>Der Workshop ist nicht geeignet für Menschen mit Duftstoff-Allergien und Schwangere.</p>
        
                                    <h2>Nächste Termine Hamburg</h2>
                                    <ul>
                                        <li>Zur Zeit keine Termine</li>
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
                case 'frankfurt':
                    content.innerHTML = `
                        <div class="workshop-container">
                            <img src="./img/Frankfurt.png" alt="Workshop Image" class="workshop-image">
                            <div class="text-content">
                                <div class="workshop-details">
                                    <h1>Entdecke die Welt der Düfte – Dein Parfüm-Workshop</h1>
                                    <p>Bist du bereit, in die aufregende Welt der Düfte einzutauchen? Unser Parfüm-Workshop ist das perfekte Erlebnis, um deine Sinne zu wecken.</p>
                                    <p>In unserem Parfüm-Workshop in Hamburg erwartet Dich ein unvergessliches Erlebnis, bei dem Du die Grundlagen der Parfümherstellung erlernst und Deine Kreativität voll ausleben kannst.</p> 
                                    <p>Unter fachkundiger Anleitung mischst Du Deinen eigenen, ganz persönlichen Duft und erfährst Spannendes über die Parfümherstellung – und nimm am Ende 50 ml Deines selbstkreierten Parfüms mit nach Hause!</p>                      
                                    <h2>Unsere Highlights auf einen Blick</h2>
                                    <ul>
                                        <li>Hintergrundinfos zur Parfümherstellung</li>
                                        <li>Ein Getränk</li>
                                        <li>Die Möglichkeit neue Kontakte zu knüpfen und nette Leute kennen zu lernen</li>
                                        <li>Einen 50 ml Flakon mit deinem selbstkreierten Parfüm, den du mit nach Hause nehmen darfst</li>
                                    </ul>
        
                                    <h2>Was du sonst noch wissen solltest</h2>
                                    <p>Der Workshop ist nicht geeignet für Menschen mit Duftstoff-Allergien und Schwangere.</p>
        
                                    <h2>Nächste Termine Frankfurt</h2>
                                    <ul>
                                        <li>So, 28.09.2025 14:00 Uhr - 17:00 Uhr (ausgebucht)</li>
                                        <li>So, 26.10.2025 14:00 Uhr - 17:00 Uhr</li>
                                        <li>Sa, 15.11.2025 13:00 Uhr - 16:00 Uhr</li>
                                    </ul>
                                    <h2>Wo</h2>
                                    <p>Rosmarinparty<br>Kalkentalstraße 4-6<br>60489 Frankfurt</p>
        
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
                            <p>Stella & Sonja</p>
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

            case 'faq':
                content.innerHTML = `
                    <div class="workshop-container">
                        <img src="./img/faq.png" alt="Workshop Image" class="workshop-image">
                        <div class="text-content">
                            <div class="gift-section">
                                <h1>FAQ</h1>
                                <h3>Ist der Workshop für Männer geeignet? </h3>
                                <p>
                                Ja, der Workshop ist für Männer genauso geeignet wie für Frauen! Wir bringen immer genügend Duftstoffe mit, die sich perfekt für die Kreation von Männer-Parfüms eignen.
                                <h3>Ist der Workshop für Beginner oder Fortgeschrittene empfehlenswert?</h3>
                                <p>
                                Unser Workshop ist für beide geeignet! Es geht ums Experimentieren und Ausprobieren, sodass immer wieder einzigartige Düfte entstehen.
                                </p>
                                <h3>Wie läuft ein Workshop bei duftlabor ab?</h3>
                                <p>
                                Unser Workshop kombiniert Theorie mit einem großen Anteil Praxis: Zunächst erhälst du Infos zu den Grundlagen der Duftkomposition und der Struktur eines Parfüms. Anschließend kannst du ganz praktisch verschiedene Duftnoten bewerten, mit diesen experimentieren und in der Zusammensetzung dein eigenes Parfüm kreieren.
                                </p>
                                <h3>Muss ich etwas mitbringen?</h3>
                                <p>
                                Du musst nichts mitbringen, wir stellen alles bereit.
                                </p>
                                <h3>Wie viele Duftnoten stehen zur Verfügung?</h3>
                                <p>
                                Wir haben immer 18 Standard- und mehrere Spezialduftnoten im Gepäck, die eine große Vielfalt an Kombinationsmöglichkeiten bieten – für jeden Geschmack, ohne die Nase zu überfordern.
                                </p>
                                <h3>Woher bezieht duftlabor seine Duftstoffe?</h3>
                                <p>
                                Unsere Duftstoffe beziehen wir von spezialisierten Parfümstoffhändlern in Deutschland, um höchste Qualität zu gewährleisten.
                                </p>
                                <h3>Ich möchte ein Teamevent mit duftlabor organisieren - ist das möglich?</h3>
                                <p>
                                Gerne richten wir dir ein Teamevent aus - Schreibe uns dazu am Besten eine Mail an <a href="mailto:duftlabor@gmail.com">duftlabor@gmail.com</a>.
                                </p>
                                <h3>Wie kann ich eine Geschenkkarte kaufen?</h3>
                                <p>
                                Ganz einfach: Schick uns eine E-Mail an <a href="mailto:duftlabor@gmail.com">duftlabor@gmail.com</a>.
                                </p>
                                <h3>Ist der Workshop für Allergiker geeignet?</h3>
                                <p>
                                Der Workshop ist nicht für Personen mit Duftstoffallergien geeignet. Bitte beachte dies bei deiner Anmeldung.
                                </p>
                            </div>
                        </div>
                    </div>
                    `;
                break;

                case 'blog':
                    content.innerHTML = `
                            <div class="blog-preview">
                                <img src="./img/Produkte.png" alt="Produkte" class="blog-thumb">
                                <h3>Produkte für dein DIY-duftlabor für Zuhause</h3>
                                <p>Du möchtest nach unserem Workshop weiter...</p>
                                <button onclick="loadContent('blog-produkte')">Mehr lesen</button>
                        </div>
                    `;
                    break;                
                
                    case 'blog-produkte':
                        content.innerHTML = `
                            <div class="workshop-container">
                                <img src="./img/Produkte.png" alt="Workshop Image" class="workshop-image">
                                <div class="text-content">
                                    <div class="workshop-details">
                                        <h1>Produkte für dein DIY-Duftlabor für Zuhause</h1>
                                        <p>Du möchtest nach unserem Workshop weiter in die Welt der Düfte eintauchen? Hier findest du unsere Produktempfehlungen für deine eigenen Duftkreationen zu Hause.</p>
                                        <p><strong>Transparenz-Hinweis:</strong> Einige der folgenden Links sind sogenannte Affiliate-Links. Wenn du über sie einkaufst, erhalten wir eine kleine Provision. Als Amazon-Partner verdienen wir an qualifizierten Verkäufen. Für dich ändert sich nichts am Preis – vielen Dank für deine Unterstützung!</p>
                    
                                        <h2>Grundstoffe & Arbeitsmaterialien</h2>
                                        <p>Kosmetisches Basiswasser (1 Liter – Sala)<br><a href="https://amzn.to/43lCgMy" target="_blank">Zum Produkt</a></p>
                                        <p>Einwegpipetten<br><a href="https://amzn.to/3GY2pt8" target="_blank">Zum Produkt</a></p>
                                        <p>Becherglas (zum Mischen deiner Öle)<br><a href="https://amzn.to/3YRMTW2" target="_blank">Zum Produkt</a></p>
                                        <p>Handschuhe (Einweg)<br><a href="https://amzn.to/4jaT9PH" target="_blank">Zum Produkt</a></p>
                                        <p>Etiketten zur Beschriftung der Pipetten & Fläschchen<br><a href="https://amzn.to/3FmmJUy" target="_blank">Zum Produkt</a></p>
                    
                                        <h2>Dosieren & Wiegen</h2>
                                        <p>Feinwaage – Variante 1 (unter 30 €)<br><a href="https://amzn.to/4j60UGA" target="_blank">Zum Produkt</a></p>
                                        <p>Feinwaage – Variante 2 (unter 60 €)<br><a href="https://amzn.to/4koky1R" target="_blank">Zum Produkt</a></p>
                                        <p>Elektrische Pipetten mit Aufsätzen<br>Variante 1 <a href="https://amzn.to/4kmQcfY" target="_blank">Zum Produkt</a><br>Variante 2 <a href="https://amzn.to/4kassMk" target="_blank">Zum Produkt</a></p>
                    
                                        <h2>Testen deiner Kreationen</h2>
                                        <p>Duftstreifen – Variante 1<br><a href="https://amzn.to/4koky1R" target="_blank">Zum Produkt</a></p>
                                        <p>Duftstreifen – Variante 2<br><a href="https://amzn.to/4jaSGwV" target="_blank">Zum Produkt</a></p>
                    
                                        <h2>Abfüllen & Aufbewahren</h2>
                                        <p>Pipettenflaschen (ideal für Alkohol-Duftstoffgemische)<br><a href="https://amzn.to/4mlYvKP" target="_blank">Zum Produkt</a></p>
                                        <p>Experimentier-Fläschchen<br>5 ml <a href="https://amzn.to/45dCZ4M" target="_blank">Zum Produkt</a><br>10 ml <a href="https://amzn.to/4dikhuW" target="_blank">Zum Produkt</a></p>
                                        <p>Flakons für fertige Parfums<br>10 ml <a href="https://amzn.to/3EYJOwF" target="_blank">Zum Produkt</a><br>30 ml <a href="https://amzn.to/4dmq1nz" target="_blank">Zum Produkt 1</a>, <a href="https://amzn.to/4dikhuW" target="_blank">Produkt 2</a><br>50 ml <a href="https://amzn.to/4knsctg" target="_blank">Zum Produkt</a></p>
                    
                                        <h2>Lesetipp für Duftliebhaber:innen</h2>
                                        <p>„Parfum – Alles über die Welt der Düfte“<br>Ein wunderschönes Buch über Duftstoffe, Geschichte und Herstellung.<br><a href="https://amzn.to/4kgt6rw" target="_blank">Zum Buch</a></p>
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
                    </ul>

                    <p>USt-IdNr.: DE 370186872</p>
                    
                    <p><strong>Informationen zur Online-Streitbeilegung:</strong><br>
                    Die EU-Kommission hat eine Internetplattform zur Online-Beilegung von Streitigkeiten (sog. „OS-Plattform“) geschaffen. Die OS-Plattform dient als Anlaufstelle zur außergerichtlichen Beilegung von Streitigkeiten betreffend vertragliche Verpflichtungen, die aus Online-Kaufverträgen erwachsen. Sie können die OS-Plattform unter dem folgenden Link erreichen: <a href="http://ec.euopa.eu/consumers/odr" target="_blank">http://ec.euopa.eu/consumers/odr</a>.</p>

                    <p><em>Hinweis gemäß § 36 Verbraucherstreitbeilegungsgesetz (VSBG):</em> Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit.</p>
                </div>
                `;
            break;

        default:
            content.innerHTML = `<h1>Seite nicht gefunden</h1>`;
    }
    // Push to browser history if needed
    if (push) {
        history.pushState({ page: page }, '', page);
    }
}

//This listens to the browser’s back/forward events and reloads the correct content.
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.page) {
        loadContent(event.state.page, false);
    }
});

// Load the correct page based on URL path on initial load
document.addEventListener("DOMContentLoaded", function() {
    let path = window.location.pathname.replace('/', '') || 'workshops';
    loadContent(path, false);
});
