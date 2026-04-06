import React from 'react';
import { motion } from 'motion/react';
import { Droplets, Flame, Bath, Wrench, ShieldCheck, Clock } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Dringende Herstellingen",
      description: "Lekkages, verstoppingen of gesprongen leidingen? Onze spoedservice is 24/7 bereikbaar in heel West-Vlaanderen.",
      icon: <Clock className="w-8 h-8" />,
      color: "bg-red-50 text-red-600"
    },
    {
      title: "Sanitair & Loodgieterij",
      description: "Van kraanvervanging tot complete leidingrenovatie. Wij zorgen voor een vakkundige installatie van al uw sanitair.",
      icon: <Droplets className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Badkamerrenovatie",
      description: "Droomt u van een nieuwe badkamer? Wij regelen alles van A tot Z: afbraak, leidingen, tegels en installatie.",
      icon: <Bath className="w-8 h-8" />,
      color: "bg-cyan-50 text-cyan-600"
    },
    {
      title: "Centrale Verwarming",
      description: "Onderhoud, herstelling of vervanging van uw CV-ketel. Erkend technicus voor Vaillant, Viessmann en meer.",
      icon: <Flame className="w-8 h-8" />,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Lekdetectie",
      description: "Onzichtbare lekkages opsporen zonder breekwerk met onze geavanceerde thermische camera's en ultrasone apparatuur.",
      icon: <Wrench className="w-8 h-8" />,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Onderhoud & Keuring",
      description: "Wettelijk verplicht onderhoud van uw verwarmingsketel inclusief officieel attest voor uw verzekering.",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "bg-green-50 text-green-600"
    }
  ];

  return (
    <section id="diensten" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
            Onze <span className="text-blue-600">Diensten</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Als ervaren loodgieter bieden wij een breed scala aan diensten aan. Of het nu gaat om een kleine herstelling of een groot project, wij staan voor u klaar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-blue-200/30 transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 shadow-sm`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Before/After Teaser */}
        <div id="badkamer" className="mt-32 bg-gray-900 rounded-[40px] overflow-hidden relative group">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-12 lg:p-20 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase">
                Badkamerrenovatie Kortrijk
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Van Verouderd naar <br />
                <span className="text-blue-500">Pure Luxe</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Wij transformeren uw oude badkamer in een moderne oase van rust. Onze vakmannen zorgen voor een naadloze afwerking met de beste materialen.
              </p>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">100+</p>
                  <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">Projecten</p>
                </div>
                <div className="w-[1px] h-12 bg-gray-800" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">10j</p>
                  <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">Garantie</p>
                </div>
              </div>
              <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-blue-500 hover:text-white transition-all">
                Bekijk Portfolio
              </button>
            </div>
            <div className="relative h-[400px] lg:h-full min-h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1620626011761-9963d7b69763?q=80&w=2070&auto=format&fit=crop"
                alt="Luxe badkamer renovatie resultaat"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent hidden lg:block" />
              
              {/* Before/After Overlay Badge */}
              <div className="absolute top-8 right-8 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest">
                Resultaat Kortrijk
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
