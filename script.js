function loadContent(page, push = true) {
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
                            <p>Neben unseren Workshops in 
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
                                    <li>Do, 05.06.2025 17:30 Uhr - 20:30 Uhr (ausgebucht)</li>
                                    <li>Sa, 07.06.2025 10:30 Uhr - 13:30 Uhr</li>
                                    <li>Sa, 05.07.2025 14:30 Uhr - 17:30 Uhr</li>
                                    <li>So, 06.07.2025 14:30 Uhr - 17:30 Uhr (ausgebucht)</li>
                                </ul>
                                <h2>Wo</h2>
                                <p>05.06: Studio Garage<br>Uhlandstraße 26A<br>68167 Mannheim</p>
                                <p>07.06 & 06.07 & 05.07: MeerRaum<br>Meerwiesenstraße 1<br>68163 Mannheim</p>
    
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
                                        <li>So, 15.06.2025 14:00 Uhr - 17:00 Uhr (ausgebucht)</li>
                                        <li>So, 15.06.2025 17:45 Uhr - 20:45 Uhr (ausgebucht)</li>
                                        <li>Do, 10.07.2025 17:30 Uhr - 20:30 Uhr (ausgbeucht)</li>
                                        <li>Fr, 11.07.2025 17:00 Uhr - 20:00 Uhr (ausgebucht)</li>
                                        <li>Do, 24.07.2025 17:30 Uhr - 20:30 Uhr</li>
                                        <li>Fr, 08.08.2025 17:30 Uhr - 20:30 Uhr</li>
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
                        <div class="blog-list">
                            <div class="blog-preview">
                                <img src="./img/Emotionen.png" alt="Emotionen" class="blog-thumb">
                                <h3>Die Psychologie der Düfte</h3>
                                <p>Wie Gerüche unsere Emotionen beeinflussen...</p>
                                <button onclick="loadContent('blog-emotionen')">Mehr lesen</button>
                            </div>
                            <!-- Add more blog previews here if needed -->
                        </div>
                    `;
                    break;                
                
                case 'blog-emotionen':
                    content.innerHTML = `
                        <div class="workshop-container">
                            <img src="./img/Emotionen.png" alt="Workshop Image" class="workshop-image">
                            <div class="text-content">
                                <div class="workshop-details">
                                    <h1>Die Psychologie der Düfte: Wie Gerüche unsere Stimmung beeinflussen</h1>
                                    <p>Düfte haben eine beachtliche Fähigkeit, unsere Emotionen zu beeinflussen und Erinnerungen wachzurufen. Diese Wirkung beruht auf der engen Verbindung zwischen unserem Geruchssinn und bestimmten Hirnregionen, die für Emotionen und Erinnerungen zuständig sind.</p>                         
                                    
                                    <h2>Gerüche und emotionale Reaktionen</h2>
                                    <p>Bestimmte Düfte können starke emotionale Reaktionen hervorrufen. Zum Beispiel kann der Geruch von Lavendel beruhigend wirken und Stress reduzieren, während der Duft von Zitrusfrüchten wie Orange oder Grapefruit eine belebende und erfrischende Wirkung hat. Diese Reaktionen sind oft mit positiven oder negativen Erinnerungen verbunden, da der Geruchssinn direkt mit dem limbischen System verbunden ist, das auch für die Speicherung von Erinnerungen verantwortlich ist.</p>
        
                                    <h2>Lavendel und Entspannung</h2>
                                    <p>Lavendel wird häufig in Aromatherapien verwendet, um Angstzustände zu lindern und Schlafstörungen zu bekämpfen. Der beruhigende Duft von Lavendel hat eine entspannende Wirkung auf den Körper, reduziert die Herzfrequenz und kann den Blutdruck senken. Dieser Effekt wird oft in der Kosmetikindustrie verwendet, um eine entspannte Atmosphäre zu schaffen.</p>
                                    
                                    <h2>Zitrusfrüchte und Energie</h2>
                                    <p>Zitrusdüfte, wie die von Zitronen oder Orangen, können die Stimmung heben und eine stimulierende Wirkung haben. Sie fördern das allgemeine Wohlbefinden und sind oft in Produkten enthalten, die darauf abzielen, Energie und Frische zu vermitteln. Der Duft von Zitrusfrüchten kann auch die Konzentration verbessern und den Geist aktivieren.</p>

                                    <h2>Vanille und Wohlbefinden</h2>
                                    <p>Der süße, warme Duft von Vanille hat eine beruhigende Wirkung auf die Psyche. Vanille wird mit Geborgenheit und Wohlgefühl assoziiert und kann Gefühle von Trost und Geborgenheit wecken. Dieser Duft wird oft in Schlafzimmern oder Wohnzimmern verwendet, um eine gemütliche und einladende Atmosphäre zu schaffen.</p>
                                    
                                    <h2>Rose und romantische Gefühle</h2>
                                    <p>Der Duft von Rosen wird oft mit Liebe, Romantik und Wohlgefühl in Verbindung gebracht. Viele Menschen finden den Geruch von Rosen angenehm und beruhigend, was auch mit seiner Geschichte in der Parfümindustrie und seiner Symbolik in verschiedenen Kulturen zu tun hat. Der Rosenduft kann dazu beitragen, romantische oder angenehme Emotionen zu verstärken.</p>

                                    <h2>Aromatherapie und medizinische Anwendungen</h2>
                                    <p>In der Aromatherapie werden ätherische Öle verwendet, um die Gesundheit und das emotionale Wohlbefinden zu fördern. Düfte wie Pfefferminze und Eukalyptus können helfen, die Konzentration zu steigern und Kopfschmerzen zu lindern. Kamille und Bergamotte hingegen werden oft zur Beruhigung und Entspannung eingesetzt.</p>

                                    <h2>Der perfekte Duft beim ersten Date</h2>
                                    <p>Es gibt kein Parfüm, das eine so extrem aphrodisierende Wirkung hat, dass sich dein Date-Partner sofort in dich verliebt. Dennoch kannst du bei der Wahl deines Parfüms darauf achten, dass du einen Duft wählst, der aphrodisierende Duftnoten wie z.B. Moschus, Amber oder Tonkabohne enthält. Als weiteren Tipp empfehlen wir dir einen Duft aufzutragen, der deine Persönlichkeit unterstreicht und mit dem du dich selbstsicher und gut fühlst, denn dann strahlst du das auch aus. Bei duftlabor bist du genau richtig -  in unserem Workshop kannst du deinen individuellen Duft kreieren und nicht nur dir, sondern auch deinem potenziellen Duft-Partner eine Freude bereiten.</p>
                                
                                    <h2>Fazit von duftlabor</h2>
                                    <p>Die Psychologie der Düfte zeigt uns, wie tiefgreifend der Einfluss von Gerüchen auf unsere Stimmung und unser Verhalten sein kann. Sie wirken nicht nur auf unsere Sinne, sondern können auch unbewusst unser Wohlbefinden steigern oder unsere Emotionen beeinflussen. Düfte sind ein mächtiges Werkzeug, das wir bewusst einsetzen können, um unsere Stimmung zu steuern, unser Umfeld angenehmer zu gestalten oder uns bei der Entspannung zu unterstützen.</p>
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
