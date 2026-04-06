import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
          alt="Luxe badkamerrenovatie West-Vlaanderen"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wider uppercase">
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <span>Gecertificeerd Loodgieter West-Vlaanderen</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
            De #1 Loodgieter in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              West-Vlaanderen
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed">
            Van dringende herstellingen in <span className="text-white font-semibold">Brugge</span> tot luxe badkamerrenovaties in <span className="text-white font-semibold">Kortrijk</span>. Wij staan 24/7 voor u klaar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0.4)", "0 0 0 20px rgba(59, 130, 246, 0)", "0 0 0 0 rgba(59, 130, 246, 0)"],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-600/20"
            >
              Gratis Offerte
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            
            <a
              href="tel:+32470000000"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all"
            >
              Bel Nu: 0470 00 00 00
            </a>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 pt-6">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span>24/7 Spoedservice</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span>10 Jaar Garantie</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span>Gecertificeerd Team</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Image / Secondary Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block relative group"
        >
          <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-2xl group-hover:bg-blue-500/30 transition-all duration-500" />
          <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1585909693684-05c3ebf555b2?q=80&w=2070&auto=format&fit=crop"
              alt="Loodgieter aan het werk Brugge"
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                  <img src="https://i.pravatar.cc/150?u=plumber" alt="Team AquaFlow" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="text-white font-bold">Jan Peeters</p>
                  <p className="text-blue-400 text-xs font-medium uppercase tracking-widest">Hoofd Loodgieter</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
