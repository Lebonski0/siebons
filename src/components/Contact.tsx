import React from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you would send this to an API
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
                Vraag Vandaag Nog Uw <br />
                <span className="text-blue-600">Gratis Offerte</span> Aan
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Heeft u een dringend probleem of plant u een renovatie? Vul het formulier in en wij nemen binnen 2 uur contact met u op.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Bel Ons</h4>
                  <p className="text-gray-600">0470 00 00 00</p>
                  <p className="text-xs text-blue-600 font-bold uppercase tracking-widest mt-1">24/7 Bereikbaar</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Ons</h4>
                  <p className="text-gray-600">info@aquaflow.be</p>
                  <p className="text-xs text-blue-600 font-bold uppercase tracking-widest mt-1">Snel Antwoord</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Onze Regio</h4>
                  <p className="text-gray-600">Heel West-Vlaanderen</p>
                  <p className="text-xs text-blue-600 font-bold uppercase tracking-widest mt-1">Lokaal & Snel</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Openingsuren</h4>
                  <p className="text-gray-600">Ma - Zo: 24/7</p>
                  <p className="text-xs text-blue-600 font-bold uppercase tracking-widest mt-1">Altijd Open</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50">
              <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Waarom Kiezen Voor AquaFlow?
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <span>Transparante prijzen zonder verrassingen</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <span>Gecertificeerde vakmannen met 10+ jaar ervaring</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <span>Gebruik van A-merken (Vaillant, Hansgrohe)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[40px] shadow-2xl shadow-blue-200/30 border border-gray-100"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Bedankt voor uw aanvraag!</h3>
                <p className="text-gray-600">Wij hebben uw bericht ontvangen en nemen binnen 2 uur contact met u op.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-600 font-bold hover:underline"
                >
                  Nog een bericht sturen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900 uppercase tracking-widest">Naam</label>
                    <input
                      required
                      type="text"
                      placeholder="Uw volledige naam"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900 uppercase tracking-widest">Telefoon</label>
                    <input
                      required
                      type="tel"
                      placeholder="Uw telefoonnummer"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900 uppercase tracking-widest">Email</label>
                  <input
                    required
                    type="email"
                    placeholder="Uw emailadres"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900 uppercase tracking-widest">Stad / Gemeente</label>
                  <select className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all">
                    <option>Brugge</option>
                    <option>Oostende</option>
                    <option>Kortrijk</option>
                    <option>Roeselare</option>
                    <option>Andere...</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900 uppercase tracking-widest">Bericht / Probleem</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Beschrijf uw probleem of project..."
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                  />
                </div>
                <button type="submit" className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 transition-all">
                  Verzend Aanvraag
                  <Send className="w-5 h-5" />
                </button>
                <p className="text-center text-xs text-gray-400">
                  Door te verzenden gaat u akkoord met onze privacyverklaring. <br />
                  Wij verwerken uw gegevens enkel voor uw aanvraag.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
