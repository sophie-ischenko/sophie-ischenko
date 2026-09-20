/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  ArrowUpRight,
  Code,
  Terminal,
  Zap,
} from 'lucide-react';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.2],
    [0, 100]
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.15],
    [1, 0]
  );

  const horizontalRef = useRef<HTMLElement>(null);

  const {
    scrollYProgress: horizontalProgress,
  } = useScroll({
    target: horizontalRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(
    horizontalProgress,
    [0, 1],
    ['0%', '-66.666%']
  );

  const section4Ref = useRef<HTMLElement>(null);

  const {
    scrollYProgress: section4Progress,
  } = useScroll({
    target: section4Ref,
    offset: ['start center', 'end center'],
  });

  const clipPath = useTransform(
    section4Progress,
    [0, 0.4],
    ['inset(100% 0 0 0)', 'inset(0% 0 0 0)']
  );

  return (
    <main className="relative w-full bg-[var(--theme-bg)] text-[var(--theme-text)] selection:bg-[var(--theme-accent)] selection:text-[var(--theme-bg)]" ref={containerRef}>

      {/* =====================================================
          1. INTRO
      ===================================================== */}

      <section
        aria-label="Intro"
        className="
          relative
          flex
          min-h-[90vh]
          flex-col
          justify-end
          overflow-hidden
          border-b
          border-brand-border
          px-6
          pb-20
          pt-32
          md:px-12
          md:pb-24
        "
      >

        {/* Decorative background shapes */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-[420px]
            w-[420px]
            rounded-full
            bg-brand-lime
            opacity-50
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-32
            -left-32
            h-[420px]
            w-[420px]
            rounded-full
            bg-brand-pink
            opacity-35
          "
        />

        {/* Editorial grid */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            flex
            justify-between
            px-6
            opacity-30
            md:px-12
          "
        >
          <div className="h-full w-px bg-brand-border" />

          <div className="hidden h-full w-px bg-brand-border md:block" />

          <div className="h-full w-px bg-brand-border" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col justify-between gap-12 md:flex-row md:items-end">

          {/* Name */}

          <motion.div
            className="flex-1"
            style={{
              y: heroY,
              opacity: heroOpacity,
            }}
          >

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <div
                className="
                  mb-6
                  inline-block
                  -rotate-1
                  bg-brand-blue
                  px-3
                  py-1.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-brand-text
                "
              >
                Informatik trifft Ästhetik
              </div>

              <h1
                className="
                  font-display
                  text-[clamp(4rem,9vw,9rem)]
                  font-light
                  uppercase
                  leading-[0.82]
                  tracking-[-0.025em]
                "
              >
                Sophie
                <br />

                <span className="italic text-brand-blue">
                  Ischenko
                </span>
              </h1>

            </motion.div>

          </motion.div>


          {/* Intro copy */}

          <motion.div
            className="max-w-xl flex-1 pb-2"
            style={{
              y: heroY,
              opacity: heroOpacity,
            }}
          >

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
                duration: 1,
              }}
            >

              <p
                className="
                  mb-6
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-brand-blue
                "
              >
                Technical Partner for Designers
              </p>

              <p
                className="
                  mb-6
                  font-body
                  text-xl
                  leading-relaxed
                  md:text-2xl
                "
              >
                Ich baue das Fundament für deine kreative Vision.
              </p>

              <p
                className="
                  font-body
                  text-base
                  leading-relaxed
                  text-brand-text/65
                  md:text-lg
                "
              >
                Informatik trifft Gestaltung. Ich entwickle die
                technischen Strukturen hinter anspruchsvollem
                Webdesign, damit aus einer starken Idee ein
                stabiles, performantes und wartbares System wird.
              </p>

              <div className="mt-8 flex items-center gap-2">
                <span className="h-2 w-14 bg-brand-lime" />
                <span className="h-2 w-7 bg-brand-blue" />
                <span className="h-2 w-3 bg-brand-pink" />
              </div>

            </motion.div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          2. CORE ENTITIES
      ===================================================== */}

      <section
        className="
          relative
          border-b
          border-brand-border
          px-6
          py-24
          md:px-12
          md:py-40
        "
      >

        <div className="mx-auto max-w-[1400px]">

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">

            {/* Fundament Studio */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[2.5rem]
                border
                border-brand-lime
                bg-brand-lime
                p-8
                transition-transform
                duration-500
                hover:-translate-y-1
                md:p-12
              "
            >

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-12
                  -top-12
                  h-40
                  w-40
                  rounded-full
                  bg-brand-blue
                  opacity-30
                  transition-transform
                  duration-700
                  group-hover:scale-125
                "
              />

              <Code
                className="
                  absolute
                  right-8
                  top-8
                  h-24
                  w-24
                  text-brand-text
                  opacity-10
                  transition-opacity
                  duration-500
                  group-hover:opacity-20
                  md:h-32
                  md:w-32
                "
              />

              <div className="relative z-10">

                <p
                  className="
                    mb-6
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-brand-text/60
                  "
                >
                  Fundament Studio
                </p>

                <h3
                  className="
                    mb-3
                    font-display
                    text-4xl
                    font-light
                    uppercase
                    leading-[0.9]
                    md:text-5xl
                  "
                >
                  Technische
                  <br />
                  Partnerin
                </h3>

                <p
                  className="
                    mb-8
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-brand-text/60
                  "
                >
                  Für Webdesignerinnen
                </p>

                <p
                  className="
                    mb-8
                    font-body
                    text-lg
                    leading-relaxed
                    text-brand-text/80
                  "
                >
                  Ich übernehme die technische Umsetzung
                  hinter deinem Design, damit du dich auf
                  Gestaltung und deine Kundinnen konzentrieren
                  kannst.
                </p>

                <ul className="space-y-4 font-body text-brand-text/75">

                  {[
                    'Design-Umsetzung mit WordPress & Oxygen',
                    'Technische Hilfe bei bestehenden Systemen',
                    'Ghost-Setups für digitales Publishing',
                    'Technisches Mentoring',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-text" />
                      <span>{item}</span>
                    </li>
                  ))}

                </ul>

                <a
                  href="https://fundament-studio.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-12
                    inline-flex
                    items-center
                    gap-2
                    border-b
                    border-brand-text
                    pb-1
                    font-display
                    text-sm
                    uppercase
                    tracking-[0.12em]
                    text-brand-text
                    transition-all
                    hover:border-brand-blue
                    hover:text-brand-blue
                  "
                >
                  Fundament Studio
                  <ArrowUpRight className="h-4 w-4" />
                </a>

              </div>
            </motion.div>


            {/* Codex */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[2.5rem]
                border
                border-brand-blue
                bg-brand-blue
                p-8
                transition-transform
                duration-500
                hover:-translate-y-1
                md:p-12
              "
            >

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-16
                  -right-16
                  h-48
                  w-48
                  rounded-full
                  bg-brand-pink
                  opacity-40
                  transition-transform
                  duration-700
                  group-hover:scale-125
                "
              />

              <Terminal
                className="
                  absolute
                  right-8
                  top-8
                  h-24
                  w-24
                  text-brand-text
                  opacity-10
                  transition-opacity
                  duration-500
                  group-hover:opacity-20
                  md:h-32
                  md:w-32
                "
              />

              <div className="relative z-10">

                <p
                  className="
                    mb-6
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-brand-text/60
                  "
                >
                  Codex Journal
                </p>

                <h3
                  className="
                    mb-3
                    font-display
                    text-4xl
                    font-light
                    uppercase
                    leading-[0.9]
                    md:text-5xl
                  "
                >
                  Struktur
                  <br />
                  verstehen
                </h3>

                <p
                  className="
                    mb-8
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-brand-text/60
                  "
                >
                  Technik & digitale Souveränität
                </p>

                <p
                  className="
                    mb-8
                    font-body
                    text-lg
                    leading-relaxed
                    text-brand-text/80
                  "
                >
                  Ein Journal über die technischen
                  Entscheidungen hinter dem Web. Systeme,
                  Infrastruktur, Publishing und die Frage,
                  wem digitale Strukturen eigentlich gehören.
                </p>

                <ul className="space-y-4 font-body text-brand-text/75">

                  {[
                    'Technik verständlich erklärt',
                    'Infrastruktur & Publishing',
                    'WordPress, Ghost & moderne Systeme',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-text" />
                      <span>{item}</span>
                    </li>
                  ))}

                </ul>

                <a
                  href="https://codex.fundament-studio.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-12
                    inline-flex
                    items-center
                    gap-2
                    border-b
                    border-brand-text
                    pb-1
                    font-display
                    text-sm
                    uppercase
                    tracking-[0.12em]
                    text-brand-text
                    transition-all
                    hover:border-brand-pink
                    hover:text-brand-pink
                  "
                >
                  Codex Journal
                  <ArrowUpRight className="h-4 w-4" />
                </a>

              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* =====================================================
          3. LOGIC & THINKING
      ===================================================== */}

      <section
        ref={horizontalRef}
        className="
          relative
          h-[300vh]
          bg-brand-blue
        "
      >

        <div className="sticky top-0 flex h-screen items-center overflow-hidden">

          <motion.div
            style={{ x }}
            className="flex w-[300vw]"
          >

            {/* ARCHITEKTUR */}

            <div className="flex w-[100vw] shrink-0 items-center px-6 md:px-12">

              <div className="max-w-2xl">

                <p
                  className="
                    mb-5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-brand-text/60
                  "
                >
                  01 / Fundament
                </p>

                <h2
                  className="
                    mb-8
                    font-display
                    text-[clamp(2.8rem,6vw,5.5rem)]
                    font-light
                    uppercase
                    leading-[0.85]
                  "
                >
                  Architektur
                </h2>

                <div className="mb-8 h-2 w-16 bg-brand-lime" />

                <p
                  className="
                    mb-8
                    font-body
                    text-xl
                    leading-relaxed
                    text-brand-text/80
                  "
                >
                  Structure before Surface. Code ist kein
                  Selbstzweck. Er ist das Fundament, auf dem
                  dein Design zuverlässig funktionieren kann.
                </p>

                <ul className="space-y-3 font-body text-brand-text/70">

                  {[
                    'Design-to-Code Integrität',
                    'Restrukturierung komplexer Systeme',
                    'Modulare, wartbare Strukturen',
                    'Technische Beratung für Design-Teams',
                  ].map((item) => (
                    <li
                      key={item}
                      className="
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-brand-text/15
                        bg-brand-text/5
                        p-4
                      "
                    >
                      <Zap className="h-5 w-5 shrink-0 text-brand-lime" />
                      {item}
                    </li>
                  ))}

                </ul>

              </div>
            </div>


            {/* SYSTEME */}

            <div className="flex w-[100vw] shrink-0 items-center px-6 md:px-12">

              <div className="max-w-2xl">

                <p
                  className="
                    mb-5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-brand-text/60
                  "
                >
                  02 / Werkzeuge
                </p>

                <h2
                  className="
                    mb-8
                    font-display
                    text-[clamp(2.8rem,6vw,5.5rem)]
                    font-light
                    uppercase
                    leading-[0.85]
                  "
                >
                  Das richtige
                  <br />
                  System
                </h2>

                <div className="mb-8 h-2 w-16 bg-brand-pink" />

                <p
                  className="
                    mb-8
                    font-body
                    text-xl
                    leading-relaxed
                    text-brand-text/80
                  "
                >
                  Nicht jede Website braucht dasselbe CMS.
                  Die Anforderungen bestimmen die Architektur,
                  nicht die Gewohnheit.
                </p>

                <div className="space-y-5">

                  <div
                    className="
                      rounded-[2rem]
                      bg-brand-text
                      p-6
                      text-brand-bg
                    "
                  >
                    <h3
                      className="
                        mb-2
                        font-display
                        text-xl
                        uppercase
                      "
                    >
                      WordPress
                    </h3>

                    <p className="font-body text-sm leading-relaxed opacity-70">
                      Für individuelle Websites mit flexibler
                      Redaktion und präziser Design-Umsetzung.
                    </p>
                  </div>

                  <div
                    className="
                      rounded-[2rem]
                      bg-brand-lime
                      p-6
                    "
                  >
                    <h3
                      className="
                        mb-2
                        font-display
                        text-xl
                        uppercase
                      "
                    >
                      Ghost
                    </h3>

                    <p className="font-body text-sm leading-relaxed text-brand-text/70">
                      Wenn Publishing, Newsletter und
                      Leserschaft im Mittelpunkt stehen.
                    </p>
                  </div>

                </div>

              </div>
            </div>


            {/* INFORMATIK */}

            <div className="flex w-[100vw] shrink-0 items-center px-6 md:px-12">

              <div className="max-w-2xl">

                <p
                  className="
                    mb-5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-brand-text/60
                  "
                >
                  03 / Hintergrund
                </p>

                <h2
                  className="
                    mb-8
                    font-display
                    text-[clamp(2.8rem,6vw,5.5rem)]
                    font-light
                    uppercase
                    leading-[0.85]
                  "
                >
                  Informatik
                  <br />
                  & Design
                </h2>

                <div className="mb-8 h-2 w-16 bg-brand-pink" />

                <p
                  className="
                    mb-8
                    font-body
                    text-xl
                    leading-relaxed
                    text-brand-text/80
                  "
                >
                  Mein Informatik-Hintergrund verändert den
                  Blick auf Gestaltung. Nicht nur Oberfläche,
                  sondern Daten, Systeme, Abhängigkeiten und
                  Wartbarkeit gehören zum Entwurf dazu.
                </p>

                <div
                  className="
                    rounded-[2.5rem]
                    bg-brand-bg
                    p-6
                    text-brand-text
                    md:p-8
                  "
                >

                  <h3
                    className="
                      mb-4
                      font-display
                      text-xl
                      uppercase
                    "
                  >
                    Structure before Surface
                  </h3>

                  <p className="font-body leading-relaxed text-brand-text/65">
                    Erst wenn Datenstruktur, Hosting und
                    technische Architektur sauber ineinandergreifen,
                    kann die Oberfläche langfristig funktionieren.
                  </p>

                </div>

              </div>
            </div>

          </motion.div>
        </div>
      </section>


      {/* =====================================================
          4. PRINCIPLES
      ===================================================== */}

      <section
        ref={section4Ref}
        className="
          relative
          h-[250vh]
        "
      >

        <motion.div
          style={{ clipPath }}
          className="
            sticky
            top-0
            flex
            h-screen
            w-full
            items-center
            justify-center
            overflow-hidden
            border-b
            border-brand-bg/20
            bg-brand-text
            text-brand-bg
          "
        >

          <div
            className="
              mx-auto
              flex
              h-full
              w-full
              max-w-[1400px]
              flex-col
              justify-center
              overflow-y-auto
              px-6
              py-12
              md:overflow-visible
              md:px-12
              md:py-24
            "
          >

            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16">

              {/* Principles */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
              >

                <p
                  className="
                    mb-5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-brand-bg/50
                  "
                >
                  04 / Haltung
                </p>

                <h2
                  className="
                    mb-5
                    font-display
                    text-[clamp(2.8rem,6vw,5.5rem)]
                    font-light
                    uppercase
                    leading-[0.85]
                  "
                >
                  Prinzipien
                </h2>

                <p
                  className="
                    mb-10
                    border-b
                    border-brand-bg/20
                    pb-6
                    font-body
                    text-lg
                    text-brand-bg/65
                  "
                >
                  Mein Anspruch an technische Umsetzung.
                </p>

                <div className="space-y-5">

                  {[
                    'Methodik statt Workaround',
                    'Saubere Trennung von Systemen',
                    'Technische Souveränität',
                    'Wartbarkeit statt kurzfristiger Lösung',
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      className="
                        group
                        flex
                        gap-5
                        border-b
                        border-brand-bg/10
                        pb-5
                      "
                    >

                      <span
                        className="
                          mt-1
                          font-mono
                          text-xs
                          text-brand-bg/40
                        "
                      >
                        /0{index + 1}
                      </span>

                      <h4
                        className="
                          font-display
                          text-lg
                          uppercase
                          transition-colors
                          group-hover:text-brand-lime
                          md:text-xl
                        "
                      >
                        {item}
                      </h4>

                    </motion.div>
                  ))}

                </div>

              </motion.div>


              {/* Stack */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[2.5rem]
                  border
                  border-brand-bg/20
                  bg-brand-bg/10
                  p-6
                  md:p-12
                "
              >

                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-2
                    w-full
                    bg-brand-lime
                  "
                />

                <h3
                  className="
                    mb-8
                    font-display
                    text-2xl
                    uppercase
                    md:text-3xl
                  "
                >
                  Tech Stack
                </h3>

                <div className="flex flex-wrap gap-3">

                  {[
                    'React',
                    'TypeScript',
                    'WordPress',
                    'Oxygen',
                    'Ghost',
                    'PHP',
                    'Tailwind',
                    'Strapi',
                    'Docker',
                  ].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{
                        y: -4,
                      }}
                      className="
                        rounded-full
                        border
                        border-brand-bg/30
                        bg-brand-text
                        px-4
                        py-2
                        font-mono
                        text-[10px]
                        uppercase
                        tracking-[0.15em]
                        text-brand-bg
                        transition-colors
                        hover:border-brand-lime
                        hover:text-brand-lime
                        md:px-5
                        md:py-3
                      "
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


      {/* =====================================================
          5. TECHNISCHE REFERENZ
      ===================================================== */}

      <footer
        className="
          relative
          flex
          flex-col
          items-center
          border-t
          border-brand-border
          bg-brand-bg
          px-6
          pb-12
          pt-24
          md:px-12
          md:pt-32
        "
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
            mb-24
            w-full
            max-w-[1000px]
            overflow-hidden
            rounded-[3rem]
            border
            border-brand-border
            bg-brand-pink
            p-8
            text-center
            md:mb-32
            md:p-20
          "
        >

          <div
            className="
              absolute
              -right-20
              -top-20
              h-56
              w-56
              rounded-full
              bg-brand-blue
              opacity-30
            "
          />

          <div
            className="
              absolute
              -bottom-20
              -left-20
              h-56
              w-56
              rounded-full
              bg-brand-lime
              opacity-40
            "
          />

          <div className="relative z-10">

            <p
              className="
                mb-6
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-brand-text/60
              "
            >
              Structure before Surface
            </p>

            <h2
              className="
                mb-6
                font-display
                text-3xl
                font-light
                uppercase
                leading-[0.9]
                md:text-5xl
              "
            >
              Die technische
              <br />
              Referenz
            </h2>

            <p
              className="
                mx-auto
                mb-12
                max-w-2xl
                font-body
                text-lg
                leading-relaxed
                text-brand-text/70
                md:text-xl
              "
            >
              Diese Präsenz zeigt nicht nur Oberfläche.
              Sie zeigt, wie Informatik, Struktur und
              Gestaltung zusammenarbeiten können.
            </p>

            <div
              className="
                mx-auto
                mb-12
                grid
                max-w-4xl
                grid-cols-1
                gap-8
                text-left
                md:grid-cols-3
              "
            >

              <div className="border-t-2 border-brand-blue pt-4">
                <p className="font-body text-lg text-brand-text/75">
                  Macht die{' '}
                  <span className="font-medium text-brand-blue">
                    Struktur
                  </span>{' '}
                  hinter der Ästhetik sichtbar.
                </p>
              </div>

              <div className="border-t-2 border-brand-text pt-4">
                <p className="font-body text-lg text-brand-text/75">
                  Zeigt, wie{' '}
                  <span className="font-medium">
                    technische Systeme
                  </span>{' '}
                  langfristig funktionieren.
                </p>
              </div>

              <div className="border-t-2 border-brand-lime pt-4">
                <p className="font-body text-lg text-brand-text/75">
                  Verbindet{' '}
                  <span className="font-medium">
                    Informatik und Design
                  </span>{' '}
                  zu einem System.
                </p>
              </div>

            </div>

            <div
              className="
                inline-flex
                items-center
                gap-4
                rounded-full
                bg-brand-text
                px-6
                py-4
                text-brand-bg
              "
            >

              <Code className="h-6 w-6 text-brand-lime" />

              <p
                className="
                  text-left
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                "
              >
                Fundament Studio
                <br />
                Technische Basis für kreative Arbeit
              </p>

            </div>

          </div>
        </motion.div>


        {/* Footer navigation */}

        <div
          className="
            grid
            w-full
            max-w-[1400px]
            grid-cols-1
            gap-12
            border-t
            border-brand-border
            pt-12
            text-sm
            md:grid-cols-2
          "
        >

          <div>

            <p
              className="
                mb-6
                font-display
                text-2xl
                uppercase
              "
            >
              Kanäle
            </p>

            <ul className="space-y-4 font-body text-base text-brand-text/65">

              <li>
                <a
                  href="https://fundament-studio.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    transition-colors
                    hover:text-brand-blue
                  "
                >
                  Fundament Studio ↗
                </a>
              </li>

              <li>
                <a
                  href="https://codex.fundament-studio.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    transition-colors
                    hover:text-brand-blue
                  "
                >
                  Codex Journal ↗
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/fundament.studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    transition-colors
                    hover:text-brand-blue
                  "
                >
                  Instagram ↗
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/sophie-ischenko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    transition-colors
                    hover:text-brand-blue
                  "
                >
                  GitHub ↗
                </a>
              </li>

              <li>
                <a
                  href="/entitaet"
                  className="
                    transition-colors
                    hover:text-brand-blue
                  "
                >
                  Entität & Grounding
                </a>
              </li>

            </ul>

          </div>


          <div className="flex flex-col items-start md:items-end">

            <a
              href="https://fundament-studio.de"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                outline-none
              "
            >
              <img
                src="./Logo.svg"
                alt="Fundament Studio"
                className="h-32 w-auto md:h-40"
              />
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}