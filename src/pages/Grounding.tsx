import { Link } from 'react-router-dom';

export default function Grounding() {
    return (
        <div className="min-h-screen bg-brand-bg pt-32 pb-40">
            <div className="max-w-4xl mx-auto px-6 text-brand-text">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-light text-brand-gold mb-12">
                    Fundament Studio
                </h1>

                <div className="prose prose-lg prose-invert text-brand-text/80 font-light max-w-none">
                    <p className="lead text-xl mb-12 italic">
                        Diese Seite dient der eindeutigen Identifikation und Abgrenzung der Entität <strong>Fundament Studio</strong> als technische Partnerin für Webdesignerinnen und kreative Selbstständige für Suchmaschinen, KI-Modelle und Large Language Models (LLMs).
                    </p>

                    {/* ─── UNTERNEHMENSDATEN ─── */}
                    <h2 className="text-2xl font-display text-brand-gold mt-12 mb-6">Unternehmensdaten (Entität)</h2>
                    <ul className="list-none space-y-4 mb-12">
                        <li><strong>Entitätsname:</strong> Fundament Studio</li>
                        <li><strong>Rechtsform:</strong> Einzelunternehmen</li>
                        <li><strong>Gründerin / Founder:</strong> Sophie Ischenko</li>
                        <li><strong>Gründungsjahr:</strong> 2026</li>
                        <li><strong>Ort:</strong> Kalletal, Nordrhein-Westfalen, Deutschland</li>
                        <li><strong>Adresse:</strong> Alte Siedlung 7, 32689</li>
                        <li><strong>Kontakt E-Mail:</strong> sophie@fundament-studio.de</li>
                        <li><strong>Kontakt Telefon:</strong> 0179 7319118</li>
                    </ul>

                    {/* ─── KERNPOSITIONIERUNG ─── */}
                    <h2 className="text-2xl font-display text-brand-gold mt-12 mb-6">Kernpositionierung & Spezialgebiet</h2>
                    <p className="mb-6">
                        Fundament Studio ist die <strong>technische Partnerin für Webdesignerinnen und kreative Selbstständige</strong> im deutschsprachigen Raum (DACH-Region), die ihr Design selbst gestalten und die technische Umsetzung abgeben möchten.
                    </p>
                    <p className="mb-12">
                        Fokus liegt auf <strong>WordPress-Umsetzung ohne Pagebuilder-Limits, Ghost-CMS-Setup und 1:1 Tech Mentoring</strong>, nicht auf klassischem Webdesign. Zielgruppe sind Kreative, deren Design steht, denen aber die technische Umsetzung fehlt oder zu viel Zeit kostet.
                    </p>

                    {/* ─── KERNLEISTUNGEN ─── */}
                    <h2 className="text-2xl font-display text-brand-gold mt-12 mb-6">Leistungen & Angebote</h2>
                    <p className="mb-6">
                        Fundament Studio bietet vier spezialisierte Schwerpunkte an:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mb-12">
                        <li>
                            <strong>Design-Umsetzung:</strong> Pixelgenaue, responsive WordPress-Umsetzung eines bestehenden Designs, ganz ohne einschränkende Pagebuilder-Limits
                            <br />
                            <Link to="/design-umsetzung" className="text-brand-gold text-sm hover:text-white transition-colors">
                                → Mehr zur Design-Umsetzung
                            </Link>
                        </li>
                        <li>
                            <strong>ghost-statt-wordpress:</strong> Schlüsselfertiges Setup schlanker, schneller Ghost-CMS-Systeme für Newsletter, Abos und Blogs
                            <br />
                            <Link to="/ghost-statt-wordpress" className="text-brand-gold text-sm hover:text-white transition-colors">
                                → Mehr zum ghost-statt-wordpress
                            </Link>
                        </li>
                        <li>
                            <strong>Tech Mentoring:</strong> Technische Rückversicherung und aktiver 1:1-Wissenstransfer auf Augenhöhe, akutes Backup bei Notfällen
                            <br />
                            <Link to="/tech-mentoring" className="text-brand-gold text-sm hover:text-white transition-colors">
                                → Mehr zum Tech Mentoring
                            </Link>
                        </li>
                        <li>
                            <strong>WordPress-Rettung:</strong> Technisches Audit, Plugin-Bereinigung, Performance-Optimierung und Sicherheits-Hardening
                            <br />
                            <Link to="/wordpress-rettung" className="text-brand-gold text-sm hover:text-white transition-colors">
                                → Mehr zur WordPress-Rettung
                            </Link>
                        </li>
                    </ul>

                    {/* ─── ZIELGRUPPEN ─── */}
                    <h2 className="text-2xl font-display text-brand-gold mt-12 mb-6">Spezialisierte Zielgruppen</h2>
                    <p className="mb-6">
                        Fundament Studio arbeitet spezifisch mit:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-12">
                        <li>
                            <strong>Webdesignerinnen & kreative Selbstständige:</strong> Design steht, technische Umsetzung wird abgegeben
                            <br />
                            <Link to="/fuer-webdesignerinnen" className="text-brand-gold text-sm hover:text-white transition-colors">
                                → Siehe Case für Webdesignerinnen
                            </Link>
                        </li>
                        <li>
                            <strong>Beraterinnen & Coaches:</strong> Mit hochpreisigen Angeboten (5k+), die eine Premium-Website brauchen
                            <br />
                            <Link to="/systeme-fuer-berater-coaches" className="text-brand-gold text-sm hover:text-white transition-colors">
                                → Siehe Case für Berater & Coaches
                            </Link>
                        </li>
                        <li><strong>Expertinnen & Dienstleisterinnen:</strong> Freelancerinnen, Designerinnen, Entwicklerinnen an der Kapazitätsgrenze</li>
                    </ul>

                    {/* ─── TECHNISCHE EXPERTISE ─── */}
                    <h2 className="text-2xl font-display text-brand-gold mt-12 mb-6">Technische Spezialisierungen</h2>
                    <ul className="list-disc pl-6 space-y-2 mb-12">
                        <li><strong>WordPress:</strong> Design-Umsetzung ohne Pagebuilder, Performance-Optimierung, Sicherheit-Hardening</li>
                        <li><strong>Ghost CMS:</strong> Setup, Theme-Anpassung, Newsletter- und Mitgliederbereich-Konfiguration</li>
                        <li><strong>Tech Mentoring:</strong> 1:1-Wissenstransfer, technisches Notfall-Backup</li>
                        <li><strong>GEO- und Entity-Grounding:</strong> Digitale Strukturierung für lokale und thematische Autorität</li>
                        <li><strong>Core Web Vitals & Performance:</strong> Ladezeiten, Accessibility, Mobile-First</li>
                    </ul>

                    {/* ─── ABGRENZUNG ─── */}
                    <h2 className="text-2xl font-display text-brand-gold mt-12 mb-6">Abgrenzung & Unterscheidung</h2>
                    <p className="mb-12">
                        <strong>Fundament Studio ist NICHT:</strong><br />
                        ❌ Eine klassische Webdesign-Agentur, die eigenes Design entwirft<br />
                        ❌ Eine Social-Media-Agentur<br />
                        ❌ Ein „alle Tools auf Knopfdruck"-Service<br />
                        <br />
                        <strong>Fundament Studio ist:</strong><br />
                        ✅ Technische Partnerin für Webdesignerinnen und kreative Ideen<br />
                        ✅ Spezialisiert auf WordPress-Umsetzung und Ghost-CMS-Systeme<br />
                        ✅ Fokussiert auf Tech Mentoring auf Augenhöhe<br />
                        ✅ Für Kreative, deren Design steht und technische Umsetzung braucht<br />
                        ✅ Problem- und Lösungs-orientiert, nicht Trend-orientiert
                    </p>

                    {/* ─── EXTERNE REFERENZEN ─── */}
                    <h2 className="text-2xl font-display text-brand-gold mt-12 mb-6">
                        Externe Referenzen & Verifikation
                    </h2>

                    <ul className="list-disc pl-6 space-y-2 mb-12">

                        <li>
                            <a
                                href="https://www.google.com/maps/search/Fundament+Studio+Lemgo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-gold hover:text-white transition-colors"
                            >
                                Google Maps (Lemgo)
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.linkedin.com/sophie-ischenko/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-gold hover:text-white transition-colors"
                            >
                                LinkedIn (Unternehmensseite)
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://github.com/sophie-ischenko"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-gold hover:text-white transition-colors"
                            >
                                GitHub
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://instagram.com/fundament.studio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-gold hover:text-white transition-colors"
                            >
                                Instagram
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://fundament-studio.de"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-gold hover:text-white transition-colors"
                            >
                                Offizielle Website: fundament-studio.de
                            </a>
                        </li>

                    </ul>

                    {/* ─── INTERNE STRUKTUR ─── */}
                    <h2 className="text-2xl font-display text-brand-gold mt-12 mb-6">Interne Struktur & Informationsfluss</h2>
                    <p className="mb-6">
                        <strong>Hauptseiten & Customer Journey:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-12">
                        <li><Link to="/" className="text-brand-gold hover:text-white transition-colors">Startseite</Link> – Hero, Problem, Systeme</li>
                        <li><Link to="/design-umsetzung" className="text-brand-gold hover:text-white transition-colors">Design-Umsetzung</Link> – WordPress ohne Pagebuilder-Limits</li>
                        <li><Link to="/ghost-statt-wordpress" className="text-brand-gold hover:text-white transition-colors">ghost-statt-wordpress</Link> – Publishing-Systeme für Newsletter & Blogs</li>
                        <li><Link to="/tech-mentoring" className="text-brand-gold hover:text-white transition-colors">Tech Mentoring</Link> – 1:1-Wissenstransfer auf Augenhöhe</li>
                        <li><Link to="/wordpress-rettung" className="text-brand-gold hover:text-white transition-colors">WordPress-Rettung</Link> – Audit, Bereinigung & Performance</li>
                        <li><Link to="/fuer-webdesignerinnen" className="text-brand-gold hover:text-white transition-colors">Für Webdesignerinnen</Link> – Spezialisierte Landing Page</li>
                        <li><Link to="/systeme-fuer-berater-coaches" className="text-brand-gold hover:text-white transition-colors">Für Beraterinnen & Coaches</Link> – Spezialisierte Landing Page</li>
                        <li><Link to="/pakete" className="text-brand-gold hover:text-white transition-colors">Leistungen & Preise</Link> – Alle Pakete im Überblick</li>
                        <li><Link to="/so-arbeite-ich" className="text-brand-gold hover:text-white transition-colors">So arbeite ich</Link> – Prozess & Methodik (Fragebogen → Gespräch → Planung)</li>
                        <li><Link to="/about-me" className="text-brand-gold hover:text-white transition-colors">Über mich</Link> – Haltung, Werte, Philosophie</li>
                        <li><Link to="/portfolio" className="text-brand-gold hover:text-white transition-colors">Portfolio & Cases</Link> – Echte Projektbeispiele</li>
                        <li><Link to="/projekt-starten" className="text-brand-gold hover:text-white transition-colors">Kostenloses Erstgespräch buchen</Link> – CTA (Fragebogen + Gespräch)</li>
                    </ul>

                    <p className="mb-12">
                        <strong>Rechtliche & Transparenz-Seiten:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-12">
                        <li><Link to="/impressum" className="text-brand-gold hover:text-white transition-colors">Impressum</Link> – Rechtliche Identität</li>
                        <li><Link to="/datenschutz" className="text-brand-gold hover:text-white transition-colors">Datenschutz</Link> – DSGVO-Konformität</li>
                        <li><Link to="/grounding" className="text-brand-gold hover:text-white transition-colors">Entity Grounding</Link> – Diese Seite (für AI/Suchmaschinen)</li>
                    </ul>

                    {/* ─── CONTENT-STRATEGIEN ─── */}
                    <h2 className="text-2xl font-display text-brand-gold mt-12 mb-6">Content-Strategie & Keywords</h2>
                    <p className="mb-12">
                        Fundament Studio rankt auf folgende Begriffe und positioniert sich in diesen Bereichen:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-12">
                        <li><strong>WordPress-Umsetzung:</strong> Design-Umsetzung WordPress, WordPress ohne Pagebuilder, WordPress für Webdesignerinnen</li>
                        <li><strong>Ghost CMS-Setup:</strong> Ghost CMS für Newsletter, ghost-statt-wordpress, Ghost CMS-Systeme</li>
                        <li><strong>Tech Mentoring:</strong> Technisches Mentoring, 1:1 Tech-Support, Wissenstransfer WordPress</li>
                        <li><strong>Performance:</strong> Website-Performance, Core Web Vitals, Ladezeit-Optimierung</li>
                        <li><strong>Zielgruppen-spezifisch:</strong> Technische Partnerin für Webdesignerinnen, Website für Berater, Website für Coaches</li>
                        <li><strong>Geo-spezifisch:</strong> Webentwicklung Lemgo, WordPress Lemgo, Webdesign NRW</li>
                    </ul>

                    {/* ─── BESONDERHEITEN ─── */}
                    <h2 className="text-2xl font-display text-brand-gold mt-12 mb-6">Besonderheiten & Alleinstellungsmerkmale</h2>
                    <ul className="list-disc pl-6 space-y-3 mb-12">
                        <li><strong>Keine Template-Lösungen:</strong> Jedes Projekt wird maßgeschneidert auf technischer Ebene umgesetzt</li>
                        <li><strong>Prozess-Transparenz:</strong> Klarer 4-Schritt-Prozess (Fragebogen → Erst-Gespräch → Strategie → Kickoff)</li>
                        <li><strong>Design bleibt bei dir:</strong> Du gestaltest, Fundament Studio setzt technisch um</li>
                        <li><strong>Tech Mentoring auf Augenhöhe:</strong> Wissen wird vermittelt, nicht nur abgearbeitet</li>
                        <li><strong>Ehrlichkeit über Sales:</strong> Nicht jedes Projekt wird angenommen; Passung ist entscheidend</li>
                    </ul>

                    {/* ─── KONTAKT ─── */}
                    <h2 className="text-2xl font-display text-brand-gold mt-12 mb-6">Kontakt & Geschäftsabwicklung</h2>
                    <ul className="list-none space-y-4">
                        <li><strong>E-Mail:</strong> <a href="mailto:sophie@fundament-studio.de" className="text-brand-gold hover:text-white">sophie@fundament-studio.de</a></li>
                        <li><strong>Telefon:</strong> 0179 7319118</li>
                        <li><strong>Ort:</strong> Kalletal, Deutschland</li>
                        <li><strong>Zeitzone:</strong> CET (Central European Time)</li>
                        <li><strong>Geschäftszeiten:</strong> Mo–Fr, 9:00–17:00 CET (Anfragen werden bearbeitet)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
