import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function TrustSignals() {
  const reviews = [
    {
      name: "Marc Janssens",
      location: "Brugge",
      text: "AquaFlow heeft onze badkamer volledig gerenoveerd. Het resultaat is prachtig en de communicatie was top. Een echte aanrader!",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=marc"
    },
    {
      name: "Sophie De Smet",
      location: "Oostende",
      text: "Dringende herstelling van een lek in het weekend. Binnen 30 minuten ter plaatse en vakkundig opgelost. Bedankt Jan!",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=sophie"
    },
    {
      name: "Pieter Verstraete",
      location: "Kortrijk",
      text: "Nieuwe Vaillant ketel laten plaatsen. Zeer professionele installatie en alles netjes achtergelaten. Top service!",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=pieter"
    }
  ];

  const logos = [
    { name: "Vaillant", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Vaillant_logo.svg/2560px-Vaillant_logo.svg.png" },
    { name: "Hansgrohe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Hansgrohe_logo.svg/2560px-Hansgrohe_logo.svg.png" },
    { name: "Grohe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Grohe_logo.svg/2560px-Grohe_logo.svg.png" },
    { name: "Viessmann", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Viessmann_logo.svg/2560px-Viessmann_logo.svg.png" }
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certification Logos */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-6">Erkend Installateur & Partner</p>
          <div className="flex flex-wrap items-center justify-center gap-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {logos.map((logo) => (
              <img
                key={logo.name}
                src={logo.url}
                alt={logo.name}
                className="h-8 sm:h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>

        {/* Reviews Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Wat Onze Klanten in <span className="text-blue-600">West-Vlaanderen</span> Zeggen
            </h2>
            <p className="text-lg text-gray-600">
              Wij zijn trots op onze 4.9/5 score op Google Reviews. Uw tevredenheid is onze hoogste prioriteit.
            </p>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/150?u=user${i}`}
                  alt="Reviewer"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm font-bold text-gray-900">127+ Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 relative group"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-blue-500/5 group-hover:text-blue-500/10 transition-colors" />
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
