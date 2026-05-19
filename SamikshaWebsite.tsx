export default function SamikshaWebsite() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative font-sans">
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-red-900 rounded-full blur-3xl top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-pink-900 rounded-full blur-3xl bottom-[-100px] right-[-100px] animate-pulse" />
      </div>

      <section className="h-screen flex flex-col items-center justify-center relative text-center px-6">
        <div className="absolute inset-0 bg-black opacity-70" />

        <div className="relative z-10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 bg-white/5 shadow-2xl max-w-2xl">
          <p className="uppercase tracking-[0.4em] text-white/50 text-xs mb-5">
            open this whenever your birthday actually is
          </p>

          <h1 className="text-7xl md:text-9xl font-serif font-light tracking-tight">
            samiksha
          </h1>

          <p className="mt-6 text-white/70 text-lg">
            some people stay longer than expected
          </p>

          <button className="mt-10 px-8 py-4 rounded-full bg-white text-black hover:scale-105 transition-all duration-300 shadow-xl">
            enter
          </button>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-5xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.4em] text-white/40 text-xs mb-5">
              december 2024 → now
            </p>

            <h2 className="text-6xl md:text-8xl font-serif leading-none font-light">
              you stayed
            </h2>

            <p className="mt-8 text-white/70 text-lg leading-relaxed">
              when i genuinely thought nobody ever would.
            </p>

            <div className="mt-10 space-y-4 text-white/60">
              <p>• sugar monster allegations</p>
              <p>• panda jokes at 2am</p>
              <p>• random shoulder pain updates</p>
              <p>• gym freak behavior</p>
              <p>• disappearing and returning</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-red-900/30 blur-3xl rounded-full" />

            <div className="relative rounded-[2rem] h-[500px] bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
              add her photo here
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-3xl backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 md:p-16 bg-white/5 shadow-2xl">
          <h2 className="text-5xl font-serif font-light mb-10">
            a thing i never said properly
          </h2>

          <div className="space-y-8 text-white/80 text-lg leading-loose">
            <p>
              i remember saying nobody stays for more than a day.
              somehow you became the only person who actually did.
            </p>

            <p>
              somewhere between random late night conversations,
              gym updates, disappearing and returning, and all the
              chaos in between, you slowly became important to me.
            </p>

            <p>
              maybe more than i admitted.
            </p>

            <p>
              i know you hate birthdays so i didnt want this to feel loud.
              i just wanted there to exist one tiny corner of the internet
              that celebrates you softly.
            </p>
          </div>

          <div className="mt-14 border-l border-white/20 pl-6 italic text-2xl text-white/90 font-serif">
            “in every universe it’s you for me”
          </div>
        </div>
      </section>

      <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-red-900/30 rounded-full blur-3xl" />

        <div className="relative z-10">
          <h2 className="text-5xl md:text-8xl font-serif font-light leading-tight max-w-5xl">
            maybe you were always worthy of love
          </h2>

          <p className="mt-10 text-white/70 text-lg">
            even on the days you couldnt see it yourself
          </p>

          <div className="mt-20">
            <h3 className="text-4xl md:text-6xl font-serif font-light">
              happy 18th samiksha
            </h3>

            <p className="mt-6 text-white/50">
              — amrit
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
