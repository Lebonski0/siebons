import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function LocalSEO() {
  const locations = [
    {
      city: "Brugge",
      description: "Uw betrouwbare loodgieter in Brugge en omstreken. Wij lossen alle sanitaire problemen snel en vakkundig op.",
      image: "https://images.unsplash.com/photo-1512100356956-c1227c3317bb?q=80&w=2070&auto=format&fit=crop",
      services: ["Dringende herstellingen", "Lekdetectie", "Sanitair"]
    },
    {
      city: "Oostende",
      description: "Sanitair specialist in Oostende. Van kleine reparaties tot volledige badkamerrenovaties aan de kust.",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eaa0ae?q=80&w=2070&auto=format&fit=crop",
      services: ["Badkamerrenovatie", "Verwarming", "Onderhoud"]
    },
    {
      city: "Kortrijk",
      description: "Erkend loodgieter in Kortrijk. Wij staan garant voor kwaliteit en een persoonlijke aanpak voor al uw projecten.",
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop",
      services: ["Ketelvervanging", "Vloerverwarming", "Ontstopping"]
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
            Actief in heel <span className="text-blue-600">West-Vlaanderen</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wij zijn lokaal verankerd en kunnen daardoor snel ter plaatse zijn voor al uw sanitaire noden en verwarmingsproblemen.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {locations.map((loc, idx) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group"
            >
              <div className="relative h-[300px] rounded-3xl overflow-hidden mb-8 shadow-2xl shadow-gray-200">
                <img
                  src={loc.image}
                  alt={`Loodgieter ${loc.city}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-2xl font-bold">{loc.city}</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Loodgieter {loc.city}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {loc.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {loc.services.map((s) => (
                    <span key={s} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all pt-4"
                >
                  Bekijk Tarieven in {loc.city}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
