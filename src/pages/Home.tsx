import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Database, LayoutTemplate, Layers, GitBranch, ArrowRight, Code, Terminal, Zap } from 'lucide-react';

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
              <p className="text-sm uppercase tracking-widest font-mono opacity-60 mb-6 text-[var(--theme-accent)]">Technical Partner for Designers</p>
              <p className="text-xl md:text-2xl leading-relaxed font-secondary opacity-80 mb-6">
                Ich übersetze außergewöhnliche visuelle Entwürfe in unerschütterliche technische Fundamente.
              </p>
              <p className="text-lg leading-relaxed font-secondary opacity-60">
                Informatik trifft Gestaltung. Ich baue die unsichtbare Struktur, die Webdesign zum Wirken bringt. Updatesicher, performant und pixelgenau – damit kreative Ideen nicht an technischer Instabilität scheitern.
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
                 <Code className="w-32 h-32 text-[var(--theme-accent)]" />
              </div>
              <h3 className="text-4xl md:text-5xl font-primary uppercase mb-2 relative z-10">Fundament<br />Studio</h3>
              <p className="text-[var(--theme-accent)] font-mono text-sm uppercase tracking-widest mb-8 relative z-10 mt-6">Development Partner</p>
              
              <p className="font-secondary opacity-80 mb-8 text-lg relative z-10">
                Die technische Verlängerung für Webdesignerinnen. Ich übernehme die Umsetzung, Stabilisierung und Wartung komplexer Projekte, während du dich auf die Kreation konzentrierst.
              </p>
              
              <ul className="space-y-4 font-secondary opacity-70 relative z-10">
                <li className="flex items-start gap-3">
                   <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)] shrink-0" />
                   Pixelgenaue WordPress-Umsetzung
                </li>
                <li className="flex items-start gap-3">
                   <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)] shrink-0" />
                   WordPress-Rettung & technisches Refactoring
                </li>
                <li className="flex items-start gap-3">
                   <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)] shrink-0" />
                   Ghost-Setup für Publizistinnen & Autoren
                </li>
                <li className="flex items-start gap-3">
                   <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)] shrink-0" />
                   Langfristiges Tech-Backup & Mentoring
                </li>
              </ul>
              
              <a href="https://fundament-studio.de" target="_blank" rel="noopener noreferrer" className="mt-12 inline-flex items-center gap-2 font-primary uppercase border-b border-[var(--theme-border)] pb-1 hover:text-[var(--theme-accent)] hover:border-[var(--theme-accent)] transition-all relative z-10 hover-trigger">
                Visit Studio <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Codex Journal */}
            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="p-8 md:p-12 border border-[var(--theme-border)]/30 group hover:bg-[var(--theme-text)]/5 transition-colors duration-500 relative overflow-hidden bg-[var(--theme-card)]"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                 <Terminal className="w-32 h-32 text-[var(--theme-text)]" />
              </div>
              <h3 className="text-4xl md:text-5xl font-primary uppercase mb-2 relative z-10">Codex<br />Journal</h3>
              <p className="text-[var(--theme-accent)] font-mono text-sm uppercase tracking-widest mb-8 mt-6 relative z-10">Technical Sovereignty</p>
              
              <p className="font-secondary opacity-80 mb-8 text-lg relative z-10">
                Mein publizistischer Raum für technische Souveränität. Hier dokumentiere ich den strukturellen Wandel des Webs und wie wir Architektur als Emanzipation nutzen können.
              </p>
              
              <ul className="space-y-4 font-secondary opacity-70 relative z-10">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)] shrink-0" />
                Informatik als Basis für Design-Souveränität
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--theme-border)] shrink-0 opacity-60" />
                Architektur technischer Systeme
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--theme-border)] shrink-0 opacity-60" />
                Web-Infrastruktur & Unabhängigkeit
              </li>
            </ul>
              <a href="https://codex.fundament-studio.de" target="_blank" rel="noopener noreferrer" className="mt-12 inline-flex items-center gap-2 font-primary uppercase border-b border-[var(--theme-border)] pb-1 hover:text-[var(--theme-accent)] hover:border-[var(--theme-accent)] transition-all relative z-10 hover-trigger">
                Visit Journal <ArrowUpRight className="w-4 h-4" />
              </a>
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
                  <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-primary uppercase mb-8 leading-[0.9]">Übersetzung</h2>
                  <div className="w-12 h-[2px] bg-[var(--theme-accent)] mb-8" />
                  <p className="font-secondary opacity-80 text-xl leading-relaxed mb-8">
                    Ich übersetze kreative Visionen in sauberen Code. Structure before Surface bedeutet: Die Technik schützt das Design.
                  </p>
                  <ul className="space-y-4 font-secondary opacity-70">
                    <li className="flex gap-4 items-center border border-[var(--theme-border)]/20 p-4"><Zap className="w-5 h-5 text-[var(--theme-accent)] flex-shrink-0" /> WordPress Design-Umsetzung (Figma/XD ↔ Code)</li>
                    <li className="flex gap-4 items-center border border-[var(--theme-border)]/20 p-4"><Zap className="w-5 h-5 text-[var(--theme-accent)] flex-shrink-0" /> Rettung festgefahrener Legacy-Systeme</li>
                    <li className="flex gap-4 items-center border border-[var(--theme-border)]/20 p-4"><Zap className="w-5 h-5 text-[var(--theme-accent)] flex-shrink-0" /> Aufbau wartbarer Gutenberg-Komponenten</li>
                    <li className="flex gap-4 items-center border border-[var(--theme-border)]/20 p-4"><Zap className="w-5 h-5 text-[var(--theme-accent)] flex-shrink-0" /> Tech-Mentoring für Designerinnen</li>
                  </ul>
                </div>
              </div>

              <div className="w-[100vw] flex-shrink-0 px-6 md:px-12 flex items-center">
                <div className="max-w-2xl">
                  <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-primary uppercase mb-8 leading-[0.9]">System-Wahl</h2>
                  <div className="w-12 h-[2px] bg-[var(--theme-text)] opacity-30 mb-8" />
                  <p className="font-secondary opacity-80 text-xl leading-relaxed mb-8">
                    Ich arbeite werkzeugneutral. Die Anforderung deiner Gestaltung definiert das CMS.
                  </p>
                  <div className="space-y-6">
                    <div className="p-6 bg-[var(--theme-text)]/5 border-l-4 border-[var(--theme-border)]">
                      <h3 className="font-primary text-xl uppercase mb-2 text-[var(--theme-text)]">WordPress Custom</h3>
                      <p className="font-secondary opacity-60">Wenn volle Kontrolle über das Design und eine einfache Content-Pflege für die Kundin oberste Priorität haben. Keine fertigen Themes, nur sauberer Code.</p>
                    </div>
                    <div className="p-6 bg-[var(--theme-text)]/5 border-l-4 border-[var(--theme-border)]">
                      <h3 className="font-primary text-xl uppercase mb-2 text-[var(--theme-text)]">Ghost Editorial</h3>
                      <p className="font-secondary opacity-60">Wenn der Content die Hauptrolle spielt. Für Redaktionen und Autorinnen, die ein blitzschnelles, fokussiertes System brauchen.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[100vw] flex-shrink-0 px-6 md:px-12 flex items-center">
                <div className="max-w-2xl">
                  <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-primary uppercase mb-8 leading-[0.9]">Informatik & Design</h2>
                  <div className="w-12 h-[2px] bg-[var(--theme-accent)] mb-8" />
                  <p className="font-secondary opacity-80 text-xl leading-relaxed mb-8">
                    Mein Background als Informatikerin sorgt dafür, dass deine Entwürfe auf einer Architektur stehen, die nicht nach drei Updates zusammenbricht.
                  </p>
                  <div className="space-y-6">
                    <div className="p-6 bg-[var(--theme-text)]/5 border-l-4 border-[var(--theme-accent)]">
                      <h3 className="font-primary text-xl uppercase mb-2 text-[var(--theme-accent)]">Structure before Surface</h3>
                      <p className="font-secondary opacity-60">Erst wenn die Datenstruktur, das Hosting und die CMS-Architektur perfekt stehen, wird die Oberfläche zum Leben erweckt. Das garantiert maximale Langlebigkeit.</p>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
         </div>
      </section>

      {/* 4. System Thinking & Reveal */}
      <section ref={section4Ref} className="relative h-[250vh]">
        <motion.div 
          style={{ clipPath }}
          className="sticky top-0 h-screen w-full flex items-center justify-center bg-[var(--theme-text)] text-[var(--theme-bg)] overflow-hidden border-b border-[var(--theme-bg)]/30"
        >
          <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 py-12 md:py-24 h-full flex flex-col justify-center overflow-y-auto md:overflow-visible">
            
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16 items-center">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
               >
                 <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-primary uppercase mb-4 md:mb-6 leading-none">Denkweise</h2>
                 <p className="text-lg md:text-xl font-secondary opacity-70 mb-8 md:mb-12 border-b border-[var(--theme-bg)]/20 pb-4 md:pb-8">Mein Versprechen an deine Gestaltung:</p>
                 
                 <div className="space-y-4 md:space-y-8 font-secondary">
                   <motion.div className="flex gap-4 md:gap-6 group hover-trigger cursor-default">
                      <span className="font-mono text-[var(--theme-bg)] opacity-50 mt-1 text-xs">/01</span>
                      <h4 className="font-primary text-lg md:text-xl uppercase mb-1 md:mb-2 group-hover:text-[var(--theme-accent)] transition-colors">Keine Baukasten-Kompromisse</h4>
                   </motion.div>
                   <motion.div className="flex gap-4 md:gap-6 group hover-trigger cursor-default">
                      <span className="font-mono text-[var(--theme-bg)] opacity-50 mt-1 text-xs">/02</span>
                      <h4 className="font-primary text-lg md:text-xl uppercase mb-1 md:mb-2 group-hover:text-[var(--theme-bg)] transition-colors">Saubere Trennung von Struktur & Design</h4>
                   </motion.div>
                   <motion.div className="flex gap-4 md:gap-6 group hover-trigger cursor-default">
                      <span className="font-mono text-[var(--theme-bg)] opacity-50 mt-1 text-xs">/03</span>
                      <h4 className="font-primary text-lg md:text-xl uppercase mb-1 md:mb-2 group-hover:text-[var(--theme-accent)] transition-colors">Wartbare Backends für deine Kundinnen</h4>
                   </motion.div>
                   <motion.div className="flex gap-4 md:gap-6 group hover-trigger cursor-default">
                      <span className="font-mono text-[var(--theme-bg)] opacity-50 mt-1 text-xs">/04</span>
                      <h4 className="font-primary text-lg md:text-xl uppercase mb-1 md:mb-2 group-hover:text-[var(--theme-bg)] transition-colors">Informatik-Logik statt Agentur-Pfusch</h4>
                   </motion.div>
                 </div>
               </motion.div>
   
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="p-6 md:p-16 border border-[var(--theme-bg)]/30 bg-[var(--theme-bg)]/10 relative overflow-hidden"
               >
                  <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--theme-accent)] to-transparent opacity-50" />
                  <h3 className="text-2xl md:text-3xl font-primary uppercase mb-6 md:mb-8 text-[var(--theme-bg)]">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2 md:gap-4 font-mono text-[10px] md:text-sm uppercase tracking-widest">
                    {['React', 'TypeScript', 'WordPress', 'Ghost', 'PHP', 'Tailwind', 'Strapi', 'Docker'].map((tech, i) => (
                      <motion.span 
                        key={i} 
                        whileHover={{ y: -5, borderColor: 'var(--theme-accent)' }}
                        className="px-3 md:px-6 py-2 md:py-3 border border-[var(--theme-bg)]/40 hover:text-[var(--theme-accent)] transition-colors cursor-default bg-[var(--theme-text)]"
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
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--theme-accent)] to-[var(--theme-border)]" />
           <h2 className="text-3xl md:text-5xl font-primary uppercase mb-6">Das technische Profil</h2>
           <p className="text-xl md:text-2xl font-secondary opacity-80 mb-12">
             Diese Seite dient als technische Referenz meiner Arbeit für Webdesignerinnen – eine Dokumentation der Informatik hinter dem Design.
           </p>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto font-secondary opacity-80 text-lg mb-16">
             <motion.div className="border-t border-[var(--theme-accent)] pt-4">
               Zeigt die <span className="text-[var(--theme-accent)] font-medium">Struktur</span> hinter außergewöhnlichen Oberflächen.
             </motion.div>
             <motion.div className="border-t border-[var(--theme-text)] pt-4">
               Dokumentiert die <span className="text-[var(--theme-text)] font-medium">technische Sicherheit</span> für deine Kundenprojekte.
             </motion.div>
             <motion.div className="border-t border-[var(--theme-border)] pt-4">
               Veranschaulicht das Zusammenspiel von <span className="text-[var(--theme-border)] font-medium">Informatik und Ästhetik</span>.
             </motion.div>
           </div>
           
           <div className="p-6 border border-[var(--theme-border)]/30 bg-[var(--theme-accent)]/5 inline-flex items-center gap-4">
             <Code className="w-8 h-8 text-[var(--theme-border)]" />
             <p className="text-sm uppercase tracking-widest font-mono text-[var(--theme-text)] text-left">
               Fundament Studio: Die technische Basis für kreative Exzellenz.
             </p>
           </div>
        </motion.div>
        
        <div className="max-w-[1400px] w-full grid grid-cols-1 md:grid-cols-2 gap-12 text-sm uppercase tracking-widest font-mono opacity-60 border-t border-[var(--theme-border)]/30 pt-16">
          <div>
            <p className="mb-6 text-[var(--theme-text)] font-primary text-2xl uppercase opacity-100">Kanäle</p>
            <ul className="space-y-4 font-secondary text-base">
              <li><a href="https://fundament-studio.de" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--theme-accent)] transition-colors inline-block hover-trigger">Fundament Studio (B2B Partner) ↗</a></li>
              <li><a href="https://codex.fundament-studio.de" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--theme-accent)] transition-colors inline-block hover-trigger">Codex (Tech Journal) ↗</a></li>
              <li><a href="https://instagram.com/fundament.studio/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--theme-accent)] transition-colors inline-block hover-trigger">Instagram ↗</a></li>
              <li><a href="https://github.com/sophie-ischenko" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--theme-accent)] transition-colors inline-block hover-trigger">GitHub ↗</a></li>
              <li><a href="/grounding" className="hover:text-[var(--theme-accent)] transition-colors inline-block hover-trigger">Entität & Grounding</a></li>
            </ul>
          </div>
          
          <div className="md:text-right flex flex-col justify-between">
            <a href="https://fundament-studio.de" target="_blank" rel="noopener noreferrer" className="group inline-flex flex-col items-center md:items-end hover-trigger outline-none mb-12">
              <img src="./Logo.svg" alt="Fundament Studio" className="h-40 w-auto" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
