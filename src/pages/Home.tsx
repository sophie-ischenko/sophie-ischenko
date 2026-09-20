import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import {
  ArrowUpRight,
  ArrowRight,
  Code,
  Terminal,
  Zap,
  Layers,
  Database,
  GitBranch,
  LayoutTemplate,
} from 'lucide-react';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const horizontalRef = useRef<HTMLElement>(null);

  const { scrollYProgress: horizontalProgress } = useScroll({
    target: horizontalRef,
    offset: ['start start', 'end end'],
  });

  const smoothHorizontalProgress = useSpring(horizontalProgress, {
    stiffness: 90,
    damping: 30,
    mass: 0.5,
  });

  const x = useTransform(
    smoothHorizontalProgress,
    [0, 1],
    ['0%', '-66.666%']
  );

  const section4Ref = useRef<HTMLElement>(null);

  const { scrollYProgress: section4Progress } = useScroll({
    target: section4Ref,
    offset: ['start center', 'end center'],
  });

  const smoothSection4Progress = useSpring(section4Progress, {
    stiffness: 90,
    damping: 30,
    mass: 0.5,
  });

  const clipPath = useTransform(
    smoothSection4Progress,
    [0, 0.4],
    ['inset(100% 0 0 0)', 'inset(0% 0 0 0)']
  );

  return (
    <main
      ref={containerRef}
      className="
        relative
        w-full
        bg-brand-bg
        text-brand-text
        selection:bg-brand-blue
        selection:text-brand-text
        overflow-hidden
      "
    >

      {/* =========================================================
          1. INTRO
      ========================================================= */}

      <section
        aria-label="Intro"
        className="
          min-h-[90vh]
          flex
          flex-col
          justify-end
          pb-20
          md:pb-24
          px-6
          md:px-12
          pt-32
          relative
          border-b
          border-brand-border
        "
      >
        {/* Organic background shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="
              absolute
              -top-32
              -right-32
              w-[32rem]
              h-[32rem]
              rounded-full
              bg-brand-blue
              opacity-20
              blur-3xl
            "
          />

          <div
            className="
              absolute
              bottom-[-10rem]
              left-[-8rem]
              w-[26rem]
              h-[26rem]
              rounded-full
              bg-brand-lime
              opacity-30
              blur-3xl
            "
          />

          <div
            className="
              absolute
              top-[35%]
              right-[25%]
              w-40
              h-40
              rounded-full
              bg-brand-pink
              opacity-35
              blur-2xl
            "
          />
        </div>

        {/* Editorial grid */}
        <div className="absolute inset-0 pointer-events-none flex justify-between px-6 md:px-12 z-0 opacity-30">
          <div className="w-px h-full bg-brand-border" />
          <div className="w-px h-full bg-brand-border hidden md:block" />
          <div className="w-px h-full bg-brand-border" />
        </div>

        <div className="max-w-[1400px] w-full mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">

            <motion.div
              className="flex-1"
              style={{ y: heroY, opacity: heroOpacity }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span
                  className="
                    inline-flex
                    items-center
                    px-4
                    py-2
                    rounded-full
                    bg-brand-lime
                    text-brand-text
                    text-xs
                    uppercase
                    tracking-[0.18em]
                    font-secondary
                    mb-8
                  "
                >
                  Informatik trifft Gestaltung
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  text-[clamp(3.5rem,8vw,8rem)]
                  font-primary
                  uppercase
                  leading-[0.95]
                  tracking-[0.02em]
                "
              >
                Sophie
                <br />
                <span className="text-brand-blue italic">
                  Ischenko
                </span>
              </motion.h1>
            </motion.div>

            <motion.div
              className="flex-1 max-w-xl pb-2"
              style={{ y: heroY, opacity: heroOpacity }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 1,
                }}
              >
                <p
                  className="
                    text-sm
                    uppercase
                    tracking-[0.18em]
                    font-secondary
                    text-brand-blue
                    mb-6
                  "
                >
                  Technical Partner for Designers
                </p>

                <p
                  className="
                    text-xl
                    md:text-2xl
                    leading-relaxed
                    font-secondary
                    mb-6
                  "
                >
                  Ich baue das technische Fundament für
                  anspruchsvolles Webdesign.
                </p>

                <p
                  className="
                    text-lg
                    leading-relaxed
                    font-secondary
                    opacity-70
                  "
                >
                  Informatik trifft Gestaltung. Ich entwickle
                  Systeme, die Design nicht einschränken, sondern
                  zuverlässig in die Realität bringen.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Color markers */}
        <div className="absolute bottom-0 left-0 right-0 flex h-2">
          <div className="w-1/3 bg-brand-blue" />
          <div className="w-1/3 bg-brand-lime" />
          <div className="w-1/3 bg-brand-pink" />
        </div>
      </section>


      {/* =========================================================
          2. CORE ENTITIES
      ========================================================= */}

      <section
        className="
          py-24
          md:py-40
          px-6
          md:px-12
          relative
          bg-brand-bg
        "
      >
        <div className="max-w-[1400px] mx-auto">

          <div className="mb-16 md:mb-24 max-w-3xl">
            <p className="text-brand-blue font-secondary text-sm uppercase tracking-[0.18em] mb-5">
              Zwei Seiten derselben Arbeit
            </p>

            <h2
              className="
                text-[clamp(2.8rem,6vw,5.5rem)]
                font-primary
                uppercase
                leading-[0.95]
              "
            >
              Systeme bauen.
              <br />
              <span className="italic text-brand-blue">
                Wissen teilen.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

            {/* Fundament Studio */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                p-8
                md:p-12
                rounded-[2rem]
                bg-brand-blue
                text-brand-text
                relative
                overflow-hidden
                group
              "
            >
              <div
                className="
                  absolute
                  -right-12
                  -top-12
                  w-56
                  h-56
                  rounded-full
                  bg-brand-pink
                  opacity-70
                  group-hover:scale-125
                  transition-transform
                  duration-700
                "
              />

              <div
                className="
                  absolute
                  right-8
                  top-8
                  w-24
                  h-24
                  rounded-full
                  bg-brand-lime
                  opacity-80
                "
              />

              <Code
                className="
                  absolute
                  right-10
                  top-10
                  w-24
                  h-24
                  opacity-30
                "
              />

              <div className="relative z-10">

                <span className="
                  inline-flex
                  px-3
                  py-1.5
                  rounded-full
                  bg-brand-text/10
                  text-xs
                  uppercase
                  tracking-[0.15em]
                  font-secondary
                  mb-8
                ">
                  Development Partner
                </span>

                <h3
                  className="
                    text-4xl
                    md:text-6xl
                    font-primary
                    uppercase
                    leading-[0.9]
                    mb-8
                  "
                >
                  Fundament
                  <br />
                  Studio
                </h3>

                <p className="font-secondary text-lg leading-relaxed mb-10 max-w-xl">
                  Das technische Rückgrat für Designstudios.
                  Implementierung, Systeme und technische
                  Unterstützung, damit Gestaltung nicht an
                  technischen Grenzen hängen bleibt.
                </p>

                <ul className="space-y-4 font-secondary">
                  {[
                    'WordPress Design-Umsetzung',
                    'Technische Hilfe & Systempflege',
                    'Ghost-Infrastrukturen',
                    'Technisches Mentoring',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <span className="
                        w-2
                        h-2
                        rounded-full
                        bg-brand-lime
                        shrink-0
                      " />
                      {item}
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
                    font-primary
                    uppercase
                    px-5
                    py-3
                    rounded-full
                    bg-brand-text
                    text-brand-bg
                    hover:bg-brand-lime
                    hover:text-brand-text
                    transition-colors
                  "
                >
                  Visit Studio
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>


            {/* Codex */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="
                p-8
                md:p-12
                rounded-[2rem]
                bg-brand-pink
                relative
                overflow-hidden
                group
              "
            >
              <div
                className="
                  absolute
                  -right-20
                  -bottom-20
                  w-72
                  h-72
                  rounded-full
                  bg-brand-blue
                  opacity-40
                  group-hover:scale-125
                  transition-transform
                  duration-700
                "
              />

              <div
                className="
                  absolute
                  right-10
                  top-10
                  w-20
                  h-20
                  rounded-full
                  bg-brand-lime
                "
              />

              <Terminal
                className="
                  absolute
                  right-10
                  top-10
                  w-20
                  h-20
                  opacity-25
                "
              />

              <div className="relative z-10">

                <span className="
                  inline-flex
                  px-3
                  py-1.5
                  rounded-full
                  bg-brand-text/10
                  text-xs
                  uppercase
                  tracking-[0.15em]
                  font-secondary
                  mb-8
                ">
                  Technical Journal
                </span>

                <h3
                  className="
                    text-4xl
                    md:text-6xl
                    font-primary
                    uppercase
                    leading-[0.9]
                    mb-8
                  "
                >
                  Codex
                  <br />
                  Journal
                </h3>

                <p className="font-secondary text-lg leading-relaxed mb-10 max-w-xl">
                  Ein Raum für technische Zusammenhänge,
                  Systeme, Infrastruktur und die Frage, wie
                  viel Kontrolle wir eigentlich über unsere
                  digitale Umgebung haben.
                </p>

                <ul className="space-y-4 font-secondary">
                  {[
                    'Informatik als Werkzeug',
                    'Dekonstruktion technischer Systeme',
                    'Infrastruktur & Unabhängigkeit',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <span className="
                        w-2
                        h-2
                        rounded-full
                        bg-brand-blue
                        shrink-0
                      " />
                      {item}
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
                    font-primary
                    uppercase
                    px-5
                    py-3
                    rounded-full
                    bg-brand-text
                    text-brand-bg
                    hover:bg-brand-blue
                    transition-colors
                  "
                >
                  Visit Journal
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* =========================================================
          3. LOGIC & THINKING
      ========================================================= */}

      <section
        ref={horizontalRef}
        className="
          relative
          h-[450vh]
          bg-brand-lime
        "
      >
        <div className="
          sticky
          top-0
          h-screen
          flex
          items-center
          overflow-hidden
        ">
          <motion.div
            style={{ x }}
            className="flex w-[300vw]"
          >

            {/* PANEL 1 */}
            <div className="
              w-[100vw]
              flex-shrink-0
              px-6
              md:px-12
              flex
              items-center
            ">
              <div className="max-w-3xl">

                <span className="
                  inline-flex
                  px-4
                  py-2
                  rounded-full
                  bg-brand-blue
                  text-brand-text
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  font-secondary
                  mb-8
                ">
                  01 / Architektur
                </span>

                <h2
                  className="
                    text-[clamp(3rem,7vw,6rem)]
                    font-primary
                    uppercase
                    leading-[0.9]
                    mb-8
                  "
                >
                  Architektur
                </h2>

                <p className="
                  font-secondary
                  text-xl
                  md:text-2xl
                  leading-relaxed
                  mb-10
                  max-w-2xl
                ">
                  Structure before Surface.
                  Code ist kein Selbstzweck, sondern das
                  Fundament dafür, dass dein Design in der
                  Realität genauso funktioniert wie in Figma.
                </p>

                <div className="grid gap-3">
                  {[
                    'Design-to-Code Integrität',
                    'Restrukturierung komplexer Systeme',
                    'Modulare, wartbare Systeme',
                    'Technical Consulting',
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        gap-4
                        items-center
                        p-5
                        rounded-2xl
                        bg-brand-bg
                        border
                        border-brand-text/10
                      "
                    >
                      <Zap className="w-5 h-5 text-brand-blue shrink-0" />
                      <span className="font-secondary">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>


            {/* PANEL 2 */}
            <div className="
              w-[100vw]
              flex-shrink-0
              px-6
              md:px-12
              flex
              items-center
              bg-brand-blue
            ">
              <div className="max-w-3xl">

                <span className="
                  inline-flex
                  px-4
                  py-2
                  rounded-full
                  bg-brand-pink
                  text-brand-text
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  font-secondary
                  mb-8
                ">
                  02 / Systemwahl
                </span>

                <h2
                  className="
                    text-[clamp(3rem,7vw,6rem)]
                    font-primary
                    uppercase
                    leading-[0.9]
                    mb-8
                  "
                >
                  System-
                  <br />
                  neutralität
                </h2>

                <p className="
                  font-secondary
                  text-xl
                  md:text-2xl
                  leading-relaxed
                  mb-10
                  max-w-2xl
                ">
                  Nicht jedes Projekt braucht dasselbe CMS.
                  Die Anforderungen bestimmen das Werkzeug.
                </p>

                <div className="grid md:grid-cols-2 gap-5">

                  <div className="
                    p-6
                    rounded-[1.5rem]
                    bg-brand-bg
                    text-brand-text
                  ">
                    <div className="
                      w-12
                      h-12
                      rounded-full
                      bg-brand-lime
                      flex
                      items-center
                      justify-center
                      mb-6
                    ">
                      <LayoutTemplate className="w-5 h-5" />
                    </div>

                    <h3 className="
                      font-primary
                      text-2xl
                      uppercase
                      mb-3
                    ">
                      WordPress
                    </h3>

                    <p className="font-secondary opacity-70">
                      Für flexible Websites mit visueller
                      Freiheit und intuitiver Redaktion.
                    </p>
                  </div>

                  <div className="
                    p-6
                    rounded-[1.5rem]
                    bg-brand-pink
                    text-brand-text
                  ">
                    <div className="
                      w-12
                      h-12
                      rounded-full
                      bg-brand-blue
                      flex
                      items-center
                      justify-center
                      mb-6
                    ">
                      <Layers className="w-5 h-5" />
                    </div>

                    <h3 className="
                      font-primary
                      text-2xl
                      uppercase
                      mb-3
                    ">
                      Ghost
                    </h3>

                    <p className="font-secondary opacity-70">
                      Für Content-first-Projekte, Publikationen
                      und schlanke digitale Plattformen.
                    </p>
                  </div>

                </div>
              </div>
            </div>


            {/* PANEL 3 */}
            <div className="
              w-[100vw]
              flex-shrink-0
              px-6
              md:px-12
              flex
              items-center
              bg-brand-pink
            ">
              <div className="max-w-3xl">

                <span className="
                  inline-flex
                  px-4
                  py-2
                  rounded-full
                  bg-brand-lime
                  text-brand-text
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  font-secondary
                  mb-8
                ">
                  03 / Informatik & Design
                </span>

                <h2
                  className="
                    text-[clamp(3rem,7vw,6rem)]
                    font-primary
                    uppercase
                    leading-[0.9]
                    mb-8
                  "
                >
                  Informatik
                  <br />
                  <span className="text-brand-blue italic">
                    & Design
                  </span>
                </h2>

                <p className="
                  font-secondary
                  text-xl
                  md:text-2xl
                  leading-relaxed
                  mb-10
                  max-w-2xl
                ">
                  Gute technische Umsetzung bedeutet nicht,
                  dass Design weniger wichtig wird. Im Gegenteil.
                  Sie sorgt dafür, dass es seine Wirkung behalten kann.
                </p>

                <div className="
                  p-7
                  md:p-10
                  rounded-[2rem]
                  bg-brand-bg
                  text-brand-text
                  relative
                  overflow-hidden
                ">
                  <div className="
                    absolute
                    top-0
                    right-0
                    w-32
                    h-32
                    rounded-full
                    bg-brand-blue
                    opacity-20
                    -translate-y-1/2
                    translate-x-1/2
                  " />

                  <h3 className="
                    font-primary
                    text-2xl
                    md:text-3xl
                    uppercase
                    mb-4
                  ">
                    Structure before Surface
                  </h3>

                  <p className="
                    font-secondary
                    text-lg
                    leading-relaxed
                    opacity-70
                  ">
                    Datenstruktur, Hosting, Code und Oberfläche
                    müssen zusammenspielen. Erst dann wird aus
                    einer schönen Idee ein belastbares System.
                  </p>
                </div>

              </div>
            </div>

          </motion.div>
        </div>
      </section>


      {/* =========================================================
          4. PRINCIPLES
      ========================================================= */}

      <section
        ref={section4Ref}
        className="
          relative
          h-[350vh]
          bg-brand-bg
        "
      >
        <motion.div
          style={{ clipPath }}
          className="
            sticky
            top-0
            h-screen
            w-full
            flex
            items-center
            justify-center
            bg-brand-text
            text-brand-bg
            overflow-hidden
          "
        >
          {/* Decorative circles */}
          <div className="
            absolute
            -top-32
            -right-32
            w-96
            h-96
            rounded-full
            bg-brand-blue
            opacity-80
          " />

          <div className="
            absolute
            -bottom-40
            -left-40
            w-[30rem]
            h-[30rem]
            rounded-full
            bg-brand-lime
            opacity-80
          " />

          <div className="
            absolute
            top-[20%]
            left-[40%]
            w-32
            h-32
            rounded-full
            bg-brand-pink
            opacity-80
          " />

          <div
            className="
              max-w-[1400px]
              w-full
              mx-auto
              px-6
              md:px-12
              py-12
              md:py-24
              h-full
              flex
              flex-col
              justify-center
              relative
              z-10
            "
          >

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-[1fr_1.5fr]
                gap-10
                md:gap-16
                items-center
              "
            >

              <motion.div
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
              >
                <span className="
                  inline-flex
                  px-4
                  py-2
                  rounded-full
                  bg-brand-lime
                  text-brand-text
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  font-secondary
                  mb-8
                ">
                  Prinzipien
                </span>

                <h2
                  className="
                    text-[clamp(3rem,6vw,5.5rem)]
                    font-primary
                    uppercase
                    leading-[0.9]
                    mb-6
                  "
                >
                  Meine
                  <br />
                  <span className="text-brand-blue italic">
                    Arbeitsweise
                  </span>
                </h2>

                <p className="
                  text-lg
                  md:text-xl
                  font-secondary
                  opacity-70
                  mb-10
                  max-w-xl
                ">
                  Technische Qualität entsteht nicht durch
                  möglichst viel Code, sondern durch gute Entscheidungen.
                </p>

                <div className="space-y-4 font-secondary">

                  {[
                    ['01', 'Methodik statt Workaround'],
                    ['02', 'Architektur statt Flickwerk'],
                    ['03', 'Verständliche Systeme'],
                    ['04', 'Engineering-Mentalität'],
                  ].map(([number, title]) => (
                    <motion.div
                      key={number}
                      whileHover={{ x: 8 }}
                      className="
                        flex
                        gap-5
                        items-center
                        p-4
                        rounded-2xl
                        border
                        border-brand-bg/10
                        hover:border-brand-blue
                        transition-colors
                        cursor-default
                      "
                    >
                      <span className="
                        font-mono
                        text-brand-lime
                        text-xs
                      ">
                        /{number}
                      </span>

                      <h4 className="
                        font-primary
                        text-lg
                        md:text-xl
                        uppercase
                      ">
                        {title}
                      </h4>
                    </motion.div>
                  ))}

                </div>
              </motion.div>


              {/* Tech Stack */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                className="
                  p-6
                  md:p-12
                  rounded-[2rem]
                  bg-brand-bg
                  text-brand-text
                  relative
                  overflow-hidden
                "
              >
                <div className="
                  absolute
                  top-0
                  right-0
                  w-40
                  h-40
                  rounded-full
                  bg-brand-pink
                  opacity-70
                  -translate-y-1/2
                  translate-x-1/2
                " />

                <div className="
                  absolute
                  bottom-0
                  left-0
                  w-28
                  h-28
                  rounded-full
                  bg-brand-lime
                  opacity-80
                  translate-y-1/2
                  -translate-x-1/2
                " />

                <div className="relative z-10">

                  <div className="
                    flex
                    items-center
                    gap-4
                    mb-8
                  ">
                    <div className="
                      w-12
                      h-12
                      rounded-full
                      bg-brand-blue
                      flex
                      items-center
                      justify-center
                    ">
                      <Code className="w-5 h-5" />
                    </div>

                    <h3 className="
                      text-2xl
                      md:text-3xl
                      font-primary
                      uppercase
                    ">
                      Tech Stack
                    </h3>
                  </div>

                  <div className="
                    flex
                    flex-wrap
                    gap-3
                    font-mono
                    text-xs
                    uppercase
                    tracking-widest
                  ">
                    {[
                      'React',
                      'TypeScript',
                      'WordPress',
                      'Ghost',
                      'PHP',
                      'Tailwind',
                      'Strapi',
                      'Docker',
                    ].map((tech, i) => {

                      const backgrounds = [
                        'bg-brand-blue',
                        'bg-brand-lime',
                        'bg-brand-pink',
                      ];

                      return (
                        <motion.span
                          key={tech}
                          whileHover={{
                            y: -5,
                            rotate: i % 2 === 0 ? -2 : 2,
                          }}
                          className={`
                            px-4
                            py-3
                            rounded-full
                            ${backgrounds[i % 3]}
                            text-brand-text
                            cursor-default
                          `}
                        >
                          {tech}
                        </motion.span>
                      );
                    })}
                  </div>

                  <div className="
                    mt-10
                    pt-8
                    border-t
                    border-brand-border
                    grid
                    grid-cols-3
                    gap-4
                  ">
                    <div>
                      <Database className="w-5 h-5 text-brand-blue mb-3" />
                      <span className="text-xs font-secondary opacity-60">
                        Daten
                      </span>
                    </div>

                    <div>
                      <GitBranch className="w-5 h-5 text-brand-pink mb-3" />
                      <span className="text-xs font-secondary opacity-60">
                        Systeme
                      </span>
                    </div>

                    <div>
                      <Layers className="w-5 h-5 text-brand-lime mb-3" />
                      <span className="text-xs font-secondary opacity-60">
                        Struktur
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </section>


      {/* =========================================================
          5. FOOTER / TECHNISCHE REFERENZ
      ========================================================= */}

      <footer
        className="
          pt-24
          md:pt-32
          pb-12
          px-6
          md:px-12
          relative
          bg-brand-bg
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
          viewport={{ once: true }}
          className="
            max-w-[1100px]
            w-full
            mx-auto
            mb-24
            md:mb-32
            rounded-[2rem]
            bg-brand-blue
            p-8
            md:p-20
            relative
            overflow-hidden
          "
        >

          <div className="
            absolute
            -right-20
            -top-20
            w-72
            h-72
            rounded-full
            bg-brand-pink
            opacity-70
          " />

          <div className="
            absolute
            -left-16
            -bottom-16
            w-56
            h-56
            rounded-full
            bg-brand-lime
            opacity-90
          " />

          <div className="relative z-10">

            <span className="
              inline-flex
              px-4
              py-2
              rounded-full
              bg-brand-text
              text-brand-bg
              text-xs
              uppercase
              tracking-[0.18em]
              font-secondary
              mb-8
            ">
              Fundament Studio
            </span>

            <h2
              className="
                text-[clamp(2.8rem,6vw,5rem)]
                font-primary
                uppercase
                leading-[0.95]
                mb-8
              "
            >
              Die technische
              <br />
              <span className="italic">
                Referenz.
              </span>
            </h2>

            <p className="
              text-xl
              md:text-2xl
              font-secondary
              leading-relaxed
              mb-12
              max-w-3xl
            ">
              Diese Präsenz zeigt, was passiert, wenn
              Informatik und Gestaltung nicht getrennt
              voneinander gedacht werden.
            </p>

            <div className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-4
              mb-12
            ">

              <div className="
                bg-brand-bg
                rounded-2xl
                p-6
                text-brand-text
              ">
                <span className="
                  block
                  text-3xl
                  font-primary
                  mb-3
                ">
                  01
                </span>

                <p className="font-secondary">
                  Struktur wird sichtbar.
                </p>
              </div>

              <div className="
                bg-brand-lime
                rounded-2xl
                p-6
                text-brand-text
              ">
                <span className="
                  block
                  text-3xl
                  font-primary
                  mb-3
                ">
                  02
                </span>

                <p className="font-secondary">
                  Systeme bleiben wartbar.
                </p>
              </div>

              <div className="
                bg-brand-pink
                rounded-2xl
                p-6
                text-brand-text
              ">
                <span className="
                  block
                  text-3xl
                  font-primary
                  mb-3
                ">
                  03
                </span>

                <p className="font-secondary">
                  Design bekommt Raum.
                </p>
              </div>

            </div>

            <div className="
              inline-flex
              items-center
              gap-4
              bg-brand-text
              text-brand-bg
              rounded-full
              px-6
              py-4
            ">
              <Code className="w-6 h-6 text-brand-lime" />

              <p className="
                text-xs
                md:text-sm
                uppercase
                tracking-[0.14em]
                font-mono
              ">
                Fundament Studio · Structure before Surface
              </p>
            </div>

          </div>
        </motion.div>


        {/* Footer Navigation */}
        <div className="
          max-w-[1400px]
          w-full
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-2
          gap-12
          border-t
          border-brand-border
          pt-16
        ">

          <div>
            <p className="
              mb-6
              text-brand-text
              font-primary
              text-2xl
              uppercase
            ">
              Kanäle
            </p>

            <ul className="
              space-y-3
              font-secondary
              text-base
            ">

              <li>
                <a
                  href="https://fundament-studio.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    hover:text-brand-blue
                    transition-colors
                  "
                >
                  Fundament Studio
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </li>

              <li>
                <a
                  href="https://codex.fundament-studio.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    hover:text-brand-blue
                    transition-colors
                  "
                >
                  Codex
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/fundament.studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    hover:text-brand-blue
                    transition-colors
                  "
                >
                  Instagram
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/sophie-ischenko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    hover:text-brand-blue
                    transition-colors
                  "
                >
                  GitHub
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </li>

              <li>
                <a
                  href="/grounding"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    hover:text-brand-blue
                    transition-colors
                  "
                >
                  Entität & Grounding
                  <ArrowRight className="w-4 h-4" />
                </a>
              </li>

            </ul>
          </div>


          <div className="
            md:text-right
            flex
            flex-col
            justify-end
            items-start
            md:items-end
          ">
            <a
              href="https://fundament-studio.de"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block"
            >
              <img
                src="./Logo.svg"
                alt="Fundament Studio"
                className="
                  h-32
                  md:h-40
                  w-auto
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />
            </a>
          </div>

        </div>

        {/* Bottom color bar */}
        <div className="
          max-w-[1400px]
          mx-auto
          mt-16
          h-2
          flex
          rounded-full
          overflow-hidden
        ">
          <div className="flex-1 bg-brand-blue" />
          <div className="flex-1 bg-brand-lime" />
          <div className="flex-1 bg-brand-pink" />
        </div>

      </footer>
    </main>
  );
}
