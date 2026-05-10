import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Database, LayoutTemplate, Layers, GitBranch, ArrowRight, Code } from 'lucide-react';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const horizontalRef = useRef<HTMLElement>(null);
  const { scrollYProgress: horizontalProgress } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"]
  });
  const x = useTransform(horizontalProgress, [0, 1], ["0%", "-66.666%"]);

  const section4Ref = useRef<HTMLElement>(null);
  const { scrollYProgress: section4Progress } = useScroll({
    target: section4Ref,
    offset: ["start center", "end center"]
  });
  const clipPath = useTransform(section4Progress, [0, 0.4], ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]);

  return (
    <main className="relative w-full bg-[var(--theme-bg)] text-[var(--theme-text)] selection:bg-[var(--theme-accent)] selection:text-[var(--theme-bg)]" ref={containerRef}>
      
      {/* 1. Intro */}
      <section aria-label="Intro" className="min-h-[90vh] flex flex-col justify-end pb-24 px-6 md:px-12 pt-32 relative border-b border-[var(--theme-border)]/30">
        <div className="absolute inset-0 pointer-events-none flex justify-between px-6 md:px-12 z-0 opacity-20">
          <div className="w-[1px] h-full bg-[var(--theme-border)]" />
          <div className="w-[1px] h-full bg-[var(--theme-border)] hidden md:block" />
          <div className="w-[1px] h-full bg-[var(--theme-border)]" />
        </div>

        <div className="max-w-[1400px] w-full mx-auto relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
          <motion.div className="flex-1" style={{ y: heroY, opacity: heroOpacity }}>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3.5rem,8vw,8rem)] font-primary leading-[0.9] tracking-tight uppercase"
            >
              Sophie
              <br/>
              <span className="text-[var(--theme-accent)] italic" style={{ fontWeight: 400 }}>Ischenko</span>
            </motion.h1>
          </motion.div>
          <motion.div className="flex-1 max-w-xl pb-2" style={{ y: heroY, opacity: heroOpacity }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <p className="text-sm uppercase tracking-widest font-mono opacity-60 mb-6 text-[var(--theme-accent)]">System Documentation</p>
              <p className="text-xl md:text-2xl leading-relaxed font-secondary opacity-80 mb-6">
                Ich entwickle Websysteme für Unternehmen und Marken, die über ihre erste digitale Infrastruktur hinausgewachsen sind.
              </p>
              <p className="text-lg leading-relaxed font-secondary opacity-60">
                Meine Arbeit liegt an der Schnittstelle von Architektur, Content-Struktur und technischer Umsetzung. Das Ziel: Systeme, die nicht nur heute funktionieren, sondern in zwei Jahren noch zur Realität des Unternehmens passen.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Core Entities */}
      <section className="py-24 md:py-40 px-6 md:px-12 relative border-b border-[var(--theme-border)]/30">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {/* Fundament Studio */}
            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="p-8 md:p-12 border border-[var(--theme-border)]/30 group hover:bg-[var(--theme-text)]/5 transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                 <LayoutTemplate className="w-32 h-32 text-[var(--theme-accent)]" />
              </div>
              <h3 className="text-4xl md:text-5xl font-primary uppercase mb-2 relative z-10">Fundament<br />Studio</h3>
              <p className="text-[var(--theme-accent)] font-mono text-sm uppercase tracking-widest mb-8 relative z-10 mt-6">Strategische Webarchitektur</p>
              
              <p className="font-secondary opacity-80 mb-8 text-lg relative z-10">
                Ich entwickle keine Websites. Ich entwickle Systeme – mit definierten Datenflüssen, dokumentierten Strukturen und der Grundlage, dass der Betreiber am Ende versteht, was er hat.
              </p>
              
              <ul className="space-y-4 font-secondary opacity-70 relative z-10">
                <li className="flex items-start gap-3">
                   <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)] shrink-0" />
                   Conversion-orientierte Webarchitektur
                </li>
                <li className="flex items-start gap-3">
                   <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)] shrink-0" />
                   CMS-Systeme (WordPress · Ghost · Strapi)
                </li>
                <li className="flex items-start gap-3">
                   <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)] shrink-0" />
                   React Frontend Entwicklung
                </li>
                <li className="flex items-start gap-3">
                   <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)] shrink-0" />
                   Content-Struktur & Informationsarchitektur
                </li>
              </ul>
              
              <a href="https://fundament-studio.de" target="_blank" rel="noopener noreferrer" className="mt-12 inline-flex items-center gap-2 font-primary uppercase border-b border-[var(--theme-border)] pb-1 hover:text-[var(--theme-accent)] hover:border-[var(--theme-accent)] transition-all relative z-10 hover-trigger">
                Visit Studio <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Codex Magazin */}
            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="p-8 md:p-12 border border-[var(--theme-border)]/30 group hover:bg-[var(--theme-text)]/5 transition-colors duration-500 relative overflow-hidden bg-[var(--theme-card)]"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                 <Layers className="w-32 h-32 text-[var(--theme-text)]" />
              </div>
              <h3 className="text-4xl md:text-5xl font-primary uppercase mb-2 relative z-10">Codex<br />Magazin</h3>
              <p className="text-[var(--theme-accent)] font-mono text-sm uppercase tracking-widest mb-8 mt-6 relative z-10">Publizistischer Raum</p>
              
              <p className="font-secondary opacity-80 mb-8 text-lg relative z-10">
                Kein Blog. Ein Meinungs- und Wissensraum für Menschen, die verstehen wollen, wie sich Machtstrukturen im digitalen Raum verschieben – und was das für ihre Arbeit bedeutet. Betrieben auf Ghost. Weil das System zum Inhalt passen sollte.
              </p>
              
              <ul className="space-y-4 font-secondary opacity-70 relative z-10">
                <li className="flex items-start gap-3">
                   <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--theme-secondary)] shrink-0" />
                   Web & KI im strukturellen Wandel
                </li>
                <li className="flex items-start gap-3">
                   <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--theme-text)] shrink-0 opacity-50" />
                   Digitale Souveränität
                </li>
                <li className="flex items-start gap-3">
                   <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--theme-text)] shrink-0 opacity-50" />
                   Machtstrukturen im digitalen Raum
                </li>
                <li className="flex items-start gap-3">
                   <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--theme-text)] shrink-0 opacity-50" />
                   Bildung & digitale Selbstbestimmung
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Logic & Thinking (Horizontal Scroll) */}
      <section ref={horizontalRef} className="relative h-[300vh] bg-[var(--theme-card)]">
         <div className="sticky top-0 h-screen flex items-center overflow-hidden">
            <motion.div style={{ x }} className="flex w-[300vw]">
              
              <div className="w-[100vw] flex-shrink-0 px-6 md:px-12 flex items-center">
                <div className="max-w-2xl">
                  <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-primary uppercase mb-8 leading-[0.9]">Was ich baue</h2>
                  <div className="w-12 h-[2px] bg-[var(--theme-accent)] mb-8" />
                  <p className="font-secondary opacity-80 text-xl leading-relaxed mb-8">
                    Keine isolierten Websites. Zusammenhängende Systeme mit definierten Strukturen und dokumentierten Entscheidungen.
                  </p>
                  <ul className="space-y-4 font-secondary opacity-70">
                    <li className="flex gap-4 items-center border border-[var(--theme-border)]/20 p-4"><Code className="w-5 h-5 text-[var(--theme-accent)] flex-shrink-0" /> CMS-Architekturen (WordPress · Ghost · Strapi)</li>
                    <li className="flex gap-4 items-center border border-[var(--theme-border)]/20 p-4"><Code className="w-5 h-5 text-[var(--theme-accent)] flex-shrink-0" /> React Frontend Systeme</li>
                    <li className="flex gap-4 items-center border border-[var(--theme-border)]/20 p-4"><Code className="w-5 h-5 text-[var(--theme-accent)] flex-shrink-0" /> Headless Webarchitekturen</li>
                    <li className="flex gap-4 items-center border border-[var(--theme-border)]/20 p-4"><Code className="w-5 h-5 text-[var(--theme-accent)] flex-shrink-0" /> Migration von Legacy-Systemen</li>
                    <li className="flex gap-4 items-center border border-[var(--theme-border)]/20 p-4"><Code className="w-5 h-5 text-[var(--theme-accent)] flex-shrink-0" /> Content- und Datenstrukturen für skalierbare Plattformen</li>
                  </ul>
                </div>
              </div>

              <div className="w-[100vw] flex-shrink-0 px-6 md:px-12 flex items-center">
                <div className="max-w-2xl">
                  <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-primary uppercase mb-8 leading-[0.9]">CMS-Logik</h2>
                  <div className="w-12 h-[2px] bg-[var(--theme-text)] opacity-30 mb-8" />
                  <p className="font-secondary opacity-80 text-xl leading-relaxed mb-8">
                    Ich arbeite nicht tool-zentriert, sondern systemzentriert. Das Werkzeug folgt der Anforderung – nicht umgekehrt.
                  </p>
                  <div className="space-y-6">
                    <div className="p-6 bg-[var(--theme-text)]/5 border-l-4 border-[var(--theme-border)]">
                      <h3 className="font-primary text-xl uppercase mb-2 text-[var(--theme-text)]">WordPress</h3>
                      <p className="font-secondary opacity-60">Wenn Kontrolle, Flexibilität und ein breites Integrations-Ökosystem gefragt sind. Für Unternehmen, die ihr System selbst betreiben wollen.</p>
                    </div>
                    <div className="p-6 bg-[var(--theme-text)]/5 border-l-4 border-[var(--theme-secondary)]">
                      <h3 className="font-primary text-xl uppercase mb-2 text-[var(--theme-text)]">Ghost <span className="text-[var(--theme-secondary)] italic text-sm">Editorial</span></h3>
                      <p className="font-secondary opacity-60">Wenn Content das Kerngeschäft ist und das System nicht im Weg stehen soll. Für Redaktionen und contentgetriebene Marken.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[100vw] flex-shrink-0 px-6 md:px-12 flex items-center">
                <div className="max-w-2xl">
                  <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-primary uppercase mb-8 leading-[0.9]">Strapi + React</h2>
                  <div className="w-12 h-[2px] bg-[var(--theme-accent)] mb-8" />
                  <p className="font-secondary opacity-80 text-xl leading-relaxed mb-8">
                    Wenn Inhalte heute skalieren sollen, ohne morgen neu gebaut zu werden.
                  </p>
                  <div className="space-y-6">
                    <div className="p-6 bg-[var(--theme-text)]/5 border-l-4 border-[var(--theme-accent)]">
                      <h3 className="font-primary text-xl uppercase mb-2 text-[var(--theme-accent)]">Headless Architektur</h3>
                      <p className="font-secondary opacity-60">Strapi trennt Inhalt von Darstellung. Inhalte werden einmal strukturiert gepflegt und auf jeder Oberfläche ausgespielt – Website, App, Drittanbieter. Für Unternehmen, die mehrere Kanäle bespielen oder Agentur-Setups aufbauen.</p>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
         </div>
      </section>

      {/* 4. System Thinking & Stack (Reveal Effect) */}
      <section ref={section4Ref} className="relative h-[200vh]">
        <motion.div 
          style={{ clipPath }}
          className="sticky top-0 h-screen w-full flex items-center justify-center bg-[var(--theme-text)] text-[var(--theme-bg)] overflow-hidden border-b border-[var(--theme-bg)]/30"
        >
          <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 py-24 h-full flex flex-col justify-center">
            
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 items-center">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
               >
                 <h2 className="text-[clamp(3rem,6vw,5rem)] font-primary uppercase mb-6 leading-none">Systemdenken</h2>
                 <p className="text-xl font-secondary opacity-70 mb-12 border-b border-[var(--theme-bg)]/20 pb-8">Websites sind keine Oberflächen. Sie sind:</p>
                 
                 <div className="space-y-8 font-secondary">
                   <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="flex gap-6 group hover-trigger cursor-default"
                   >
                      <span className="font-mono text-[var(--theme-bg)] opacity-50 mt-1">/01</span>
                      <div>
                        <h4 className="font-primary text-xl uppercase mb-2 group-hover:text-[var(--theme-accent)] transition-colors">Strukturierte Informationssysteme</h4>
                        <p className="opacity-50 text-sm">Mit definierten Hierarchien und Entscheidungspfaden.</p>
                      </div>
                   </motion.div>
                   <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="flex gap-6 group hover-trigger cursor-default"
                   >
                      <span className="font-mono text-[var(--theme-bg)] opacity-50 mt-1">/02</span>
                      <div>
                        <h4 className="font-primary text-xl uppercase mb-2 group-hover:text-[var(--theme-bg)] transition-colors">Datenflüsse (CMS → API → Frontend)</h4>
                        <p className="opacity-50 text-sm">Kein Copy-paste zwischen Systemen. Kein manueller Umweg.</p>
                      </div>
                   </motion.div>
                   <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="flex gap-6 group hover-trigger cursor-default"
                   >
                      <span className="font-mono text-[var(--theme-bg)] opacity-50 mt-1">/03</span>
                      <div>
                        <h4 className="font-primary text-xl uppercase mb-2 group-hover:text-[var(--theme-accent)] transition-colors">Entscheidungsarchitekturen für Nutzerführung</h4>
                        <p className="opacity-50 text-sm">Struktur, die Verhalten lenkt, ohne es zu erzwingen.</p>
                      </div>
                   </motion.div>
                   <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="flex gap-6 group hover-trigger cursor-default"
                   >
                      <span className="font-mono text-[var(--theme-bg)] opacity-50 mt-1">/04</span>
                      <div>
                        <h4 className="font-primary text-xl uppercase mb-2 group-hover:text-[var(--theme-bg)] transition-colors">Übergaben, die funktionieren</h4>
                        <p className="opacity-50 text-sm">Ich übergebe Systeme so, dass jemand anderes damit weiterarbeiten kann – ohne mich.</p>
                      </div>
                   </motion.div>
                 </div>
               </motion.div>
  
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="p-8 md:p-16 border border-[var(--theme-bg)]/30 bg-[var(--theme-bg)]/10 relative overflow-hidden"
               >
                  <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--theme-accent)] to-transparent opacity-50" />
                  <h3 className="text-3xl font-primary uppercase mb-8 text-[var(--theme-bg)]">Tech Stack</h3>
                  <div className="flex flex-wrap gap-4 font-mono text-sm uppercase tracking-widest">
                    {['React', 'TypeScript', 'Strapi', 'WordPress', 'Ghost', 'Node.js', 'Docker', 'Kubernetes', 'Terraform'].map((tech, i) => (
                      <motion.span 
                        key={i} 
                        whileHover={{ y: -5, borderColor: 'var(--theme-accent)' }}
                        className="px-6 py-3 border border-[var(--theme-bg)]/40 hover:text-[var(--theme-accent)] transition-colors cursor-default bg-[var(--theme-text)]"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
               </motion.div>
            </div>
  
          </div>
        </motion.div>
      </section>

      {/* 5. Ziel dieser Präsenz / Footer */}
      <footer className="pt-32 pb-12 px-6 md:px-12 relative bg-[var(--theme-bg)] flex flex-col items-center border-t-8 border-[var(--theme-text)]">
        
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-[1000px] w-full text-center mb-32 border border-[var(--theme-border)]/20 p-12 md:p-24 bg-[var(--theme-text)]/5 rounded-sm relative overflow-hidden"
        >
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--theme-accent)] to-[var(--theme-secondary)]" />
           <h2 className="text-3xl md:text-5xl font-primary uppercase mb-6">Dieses Profil</h2>
           <p className="text-xl md:text-2xl font-secondary opacity-80 mb-12">
             Die technische Referenzebene meiner Arbeit – nicht als Selbstdarstellung, sondern als Dokumentation von Denkweise und Entscheidungen.
           </p>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto font-secondary opacity-80 text-lg mb-16">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="border-t border-[var(--theme-accent)] pt-4"
             >
               Zeigt, wie ich <span className="text-[var(--theme-accent)] font-medium">Systeme architektonisch</span> denke – vor dem ersten Entwurf.
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="border-t border-[var(--theme-text)] pt-4"
             >
               Dokumentiert <span className="text-[var(--theme-text)] font-medium">technische Entscheidungen</span> – nicht nur Ergebnisse.
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="border-t border-[var(--theme-border)] pt-4"
             >
               Veranschaulicht das Zusammenspiel von Content, CMS und Frontend als zusammenhängendes System.
             </motion.div>
           </div>
           
           <div className="p-6 border border-[var(--theme-accent)]/30 bg-[var(--theme-accent)]/5 inline-flex items-center gap-4">
             <Code className="w-8 h-8 text-[var(--theme-accent)]" />
             <p className="text-sm uppercase tracking-widest font-mono text-[var(--theme-text)] text-left">
               Die technische Ebene eines Gesamtsystems aus Business (Fundament Studio) und publizistischer Arbeit (Codex).
             </p>
           </div>
        </motion.div>
        
        <div className="max-w-[1400px] w-full grid grid-cols-1 md:grid-cols-2 gap-12 text-sm uppercase tracking-widest font-mono opacity-60 border-t border-[var(--theme-border)]/30 pt-16">
          <div>
            <p className="mb-6 text-[var(--theme-text)] font-primary text-2xl uppercase opacity-100">Kanäle</p>
            <ul className="space-y-4 font-secondary text-base">
              <li><a href="https://fundament-studio.de" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--theme-accent)] transition-colors inline-block hover-trigger">Business / Fundament Studio ↗</a></li>
              <li><span className="hover:text-[var(--theme-secondary)] transition-colors cursor-default text-[var(--theme-text)]">Magazin: Codex (publizistischer Raum)</span></li>
              <li><a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--theme-accent)] transition-colors inline-block hover-trigger">Instagram ↗</a></li>
              <li><a href="https://github.com/sophie-ischenko" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--theme-accent)] transition-colors inline-block hover-trigger">GitHub ↗</a></li>
              <li><span className="opacity-50">YouTube (geplant)</span></li>
              <li><span className="opacity-50">Podcast (geplant)</span></li>
                    
            </ul>
          </div>
          
          <div className="md:text-right flex flex-col justify-between">
            <a href="https://fundament-studio.de" target="_blank" rel="noopener noreferrer" className="group inline-flex flex-col items-center md:items-end hover-trigger outline-none mb-12">
              <img
                    src="./Logo.svg"
                    alt="Fundament Studio"
                    className="h-60 w-auto"
                  />
            </a>
            
          </div>
        </div>
      </footer>
    </main>
  );
}
