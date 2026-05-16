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
                        Diese Seite dient der eindeutigen Identifikation und Abgrenzung der Entität <strong>Fundament Studio</strong> als spezialisierte Infrastruktur- und WordPress-Systemberatung für Suchmaschinen, KI-Modelle und Large Language Models (LLMs).
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
                        Fundament Studio ist eine spezialisierte <strong>Infrastruktur- und Webseiten-Systemberatung</strong> für etablierte Selbstständige, Beraterinnen, Coaches und Experten-Dienstleister im deutschsprachigen Raum (DACH-Region).
                    </p>
                    <p className="mb-12">
                        Fokus liegt auf <strong>technischen Systemarchitekturen, Prozessautomatisierung und digitaler Stabilität</strong>, nicht allein auf klassischem Webdesign. Zielgruppe sind Unternehmen mit veralteter oder instabiler digitaler Infrastruktur, die Leads und Umsatz brauchen statt Design-Awards.
                    </p>

                    {/* ─── KERNLEISTUNGEN ─── */}
                    <h2 className="text-2xl font-display text-brand-gold mt-12 mb-6">Leistungen & Angebote</h2>
                    <p className="mb-6">
                        Fundament Studio bietet drei spezialisierte Leistungspakete an:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mb-12">
                        <li>
                            <strong>Stabilisierung:</strong> Audit und Reparatur bestehender WordPress-Systeme (Performance, Sicherheit, Datenstruktur)
                            <br />
                            <Link to="/stabilisierung" className="text-brand-gold text-sm hover:text-white transition-colors">
                                → Mehr zur Stabilisierung
                            </Link>
                        </li>
                        <li>
                            <strong>Systemarchitektur:</strong> Maßgeschneiderte WordPress- oder Ghost-Setups mit Entity-Grounding, GEO-Struktur und Conversion-Logik
                            <br />
                            <Link to="/systemarchitektur" className="text-brand-gold text-sm hover:text-white transition-colors">
                                → Mehr zur Systemarchitektur
                            </Link>
                        </li>
                        <li>
                            <strong>Operations & Automatisierung:</strong> Workflow-Integration (n8n, NocoDB, Listmonk), Lead-Management, CRM-Anbindung
                            <br />
                            <Link to="/operations-automatisierung" className="text-brand-gold text-sm hover:text-white transition-colors">
                                → Mehr zu Automatisierung
                            </Link>
                        </li>
                        <li>
                            <strong>System Care:</strong> Laufender Betrieb mit Monitoring, Updates, Sicherheit
                        </li>
                    </ul>

                    {/* ─── ZIELGRUPPEN ─── */}
                    <h2 className="text-2xl font-display text-brand-gold mt-12 mb-6">Spezialisierte Zielgruppen</h2>
                    <p className="mb-6">
                        Fundament Studio arbeitet spezifisch mit:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-12">
                        <li>
                            <strong>Beraterinnen & Coaches:</strong> Mit hochpreisigen Angeboten (5k+), die eine Premium-Website brauchen
                            <br />
                            <Link to="/systeme-fuer-berater-coaches" className="text-brand-gold text-sm hover:text-white transition-colors">
                                → Siehe Case für Berater & Coaches
                            </Link>
                        </li>
                        <li>
                            <strong>Expertinnen & Dienstleisterinnen:</strong> Freelancerinnen, Designerinnen, Entwicklerinnen an der Kapazitätsgrenze
                            <br />
                            <Link to="/systeme-fuer-experten-dienstleister" className="text-brand-gold text-sm hover:text-white transition-colors">
                                → Siehe Case für Dienstleisterinnen
                            </Link>
                        </li>
                        <li><strong>KMU & Mittelstand:</strong> Mit technisch veralteter Infrastruktur und Skalierungsbedarf</li>
                    </ul>

                    {/* ─── TECHNISCHE EXPERTISE ─── */}
                    <h2 className="text-2xl font-display text-brand-gold mt-12 mb-6">Technische Spezialisierungen</h2>
                    <ul className="list-disc pl-6 space-y-2 mb-12">
                        <li><strong>WordPress:</strong> Custom-Entwicklung, Performance-Optimierung, Sicherheit-Hardening</li>
                        <li><strong>GEO- und Entity-Grounding:</strong> Digitale Strukturierung für lokale und thematische Autorität</li>
                        <li><strong>Automatisierungen:</strong> n8n, NocoDB, Listmonk, CRM-Integration, Lead-Workflows</li>
                        <li><strong>Core Web Vitals & Performance:</strong> Ladezeiten, Accessibility, Mobile-First</li>
                        <li><strong>Datenarchitektur:</strong> Zentrale Datenbanken statt Tabellenchaos</li>
                    </ul>

                    {/* ─── ABGRENZUNG ─── */}
                    <h2 className="text-2xl font-display text-brand-gold mt-12 mb-6">Abgrenzung & Unterscheidung</h2>
                    <p className="mb-12">
                        <strong>Fundament Studio ist NICHT:</strong><br />
                        ❌ Eine klassische Webdesign-Agentur<br />
                        ❌ Eine Social-Media-Agentur<br />
                        ❌ Ein „alle Tools auf Knopfdruck"-Service<br />
                        <br />
                        <strong>Fundament Studio ist:</strong><br />
                        ✅ Eine Infrastruktur- und Systems-Beratung<br />
                        ✅ Spezialisiert auf WordPress- und Ghost CMS-Systeme<br />
                        ✅ Fokussiert auf Prozessautomatisierung<br />
                        ✅ Für etablierte Expertinnen und hochpreisige Angebote<br />
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
                        <li><Link to="/stabilisierung" className="text-brand-gold hover:text-white transition-colors">Stabilisierung</Link> – Erste Hilfe für kaputte Websites</li>
                        <li><Link to="/systemarchitektur" className="text-brand-gold hover:text-white transition-colors">Systemarchitektur</Link> – Maßgeschneiderter Aufbau</li>
                        <li><Link to="/operations-automatisierung" className="text-brand-gold hover:text-white transition-colors">Operations & Automatisierung</Link> – Prozesse automatisieren</li>
                        <li><Link to="/systeme-fuer-berater-coaches" className="text-brand-gold hover:text-white transition-colors">Für Beraterinnen & Coaches</Link> – Spezialisierte Landing Page</li>
                        <li><Link to="/systeme-fuer-experten-dienstleister" className="text-brand-gold hover:text-white transition-colors">Für Expertinnen & Dienstleisterinnen</Link> – Spezialisierte Landing Page</li>
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
                        <li><strong>WordPress-Entwicklung:</strong> Custom WordPress, WordPress-Systeme, WordPress-Infrastruktur</li>
                        <li><strong>Ghost CMS-Entwicklung:</strong> Custom Ghost CMS, Ghost CMS-Systeme, Ghost CMS-Infrastruktur</li>
                        <li><strong>Automatisierung:</strong> Workflow-Automatisierung, Lead-Automation, CRM-Integration</li>
                        <li><strong>Performance:</strong> Website-Performance, Core Web Vitals, Ladezeit-Optimierung</li>
                        <li><strong>Systemarchitektur:</strong> Digitale Infrastruktur, Website-Architektur, System-Design</li>
                        <li><strong>Zielgruppen-spezifisch:</strong> Website für Berater, Website für Coaches, Website für Dienstleister</li>
                        <li><strong>Geo-spezifisch:</strong> Webentwicklung Lemgo, WordPress Lemgo, Webdesign NRW</li>
                    </ul>

                    {/* ─── BESONDERHEITEN ─── */}
                    <h2 className="text-2xl font-display text-brand-gold mt-12 mb-6">Besonderheiten & Alleinstellungsmerkmale</h2>
                    <ul className="list-disc pl-6 space-y-3 mb-12">
                        <li><strong>Keine Template-Lösungen:</strong> Jedes Projekt wird maßgeschneidert auf Infrastruktur-Ebene</li>
                        <li><strong>Prozess-Transparenz:</strong> Klarer 4-Schritt-Prozess (Fragebogen → Erst-Gespräch → Strategie → Kickoff)</li>
                        <li><strong>Laufender Betrieb im Fokus:</strong> System Care Retainer (nicht nur einmaliger Launch)</li>
                        <li><strong>Automation statt manueller Arbeit:</strong> Ziel ist, dass dein Business selbst läuft</li>
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