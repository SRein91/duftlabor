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

                            <h3>Unsere Highlights auf einen Blick:</h3>
                            <ul>
                                <li>Hintergrundinfos zur Parfümherstellung</li>
                                <li>Einen Begrüßungssekt</li>
                                <li>Ein Törtchen und ein warmes Getränk der Pâtisserie CØR</li>
                                <li>Die Möglichkeit neue Kontakte zu knüpfen und nette Leute kennen zu lernen</li>
                                <li>Einen 50 ml Flakon mit deinem selbstkreierten Parfüm, den du mit nach Hause nehmen darfst</li>
                            </ul>

                            <h3>Was du sonst noch wissen solltest</h3>
                            <p>Der Workshop ist nicht für Duftstoff-Allergiker geeignet.</p>

                            <p>Unsere Workshops finden in regelmäßigen Abständen in Mannheim, Heidelberg, Kassel und Hamburg statt.</p>

                            <h3>Nächster freier Termin:</h3>
                            <p>Sa, 23. November 2024 in Mannheim</p>

                            <h3>Uhrzeit:</h3>
                            <p>11:00 - 13:30</p>

                            <h3>Wo:</h3>
                            <p>Pâtisserie CØR, Lameystraße 17, 68165 Mannheim</p>

                            <h3>Kosten:</h3>
                            <p>79 Euro</p>

                            <h3>Anmeldung:</h3>
                            <p>Schicke uns ganz einfach eine Mail an <a href="mailto:duflabor@gmail.com">duflabor@gmail.com</a> oder ruf uns unter der 0172 - 9129703 an.</p>
                        </div>
                            
                    </div>
                </div>

                `;
            break;

        case 'kontakt':
            content.innerHTML = `
                <img src="./img/imgworkshop.png" alt="Kontakt Image">
                <div class="text-content">
                    <h1>Kontaktieren Sie uns</h1>
                    <p>Sie können uns über dieses Formular kontaktieren.</p>
                </div>`;
            break;

        case 'uberUns':
            content.innerHTML = `
                <img src="about.jpg" alt="Über Uns Image">
                <div class="text-content">
                    <h1>Über Uns</h1>
                    <p>Erfahren Sie mehr über unser Team und unsere Geschichte.</p>
                </div>`;
            break;

        case 'schenken':
            content.innerHTML = `
                <img src="gift.jpg" alt="Schenken Image">
                <div class="text-content">
                    <h1>Geschenke</h1>
                    <p>Entdecken Sie unsere Geschenkoptionen für Ihre Liebsten.</p>
                </div>`;
            break;

        default:
            content.innerHTML = `<h1>Seite nicht gefunden</h1>`;
    }
}

// Load the default 'Workshops' page on initial load
document.addEventListener("DOMContentLoaded", function() {
    loadContent('workshops');
});
