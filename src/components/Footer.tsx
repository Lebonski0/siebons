import React from 'react';
import { Droplets, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="space-y-8">
            <a href="/" className="flex items-center gap-2 group">
              <div className="p-2 rounded-xl bg-blue-600 text-white transition-colors duration-300">
                <Droplets className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                AquaFlow <span className="text-blue-500">Loodgieter</span>
              </span>
            </a>
            <p className="text-gray-400 leading-relaxed">
              Uw vakkundige partner voor alle sanitaire installaties, verwarming en badkamerrenovaties in heel West-Vlaanderen. 24/7 bereikbaar voor spoedgevallen.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-blue-600 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-blue-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-blue-600 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white uppercase tracking-widest">Diensten</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Dringende Herstellingen</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Badkamerrenovatie</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Centrale Verwarming</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Lekdetectie</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Sanitair Onderhoud</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white uppercase tracking-widest">Regio's</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Loodgieter Brugge</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Loodgieter Oostende</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Loodgieter Kortrijk</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Loodgieter Roeselare</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Loodgieter Waregem</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white uppercase tracking-widest">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="text-blue-500 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <span className="text-gray-400">Grote Markt 1, <br />8000 Brugge</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="text-blue-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <span className="text-gray-400">0470 00 00 00</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="text-blue-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <span className="text-gray-400">info@aquaflow.be</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            © {currentYear} AquaFlow Loodgieter & Sanitair. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacybeleid</a>
            <a href="#" className="hover:text-white transition-colors">Algemene Voorwaarden</a>
            <a href="#" className="hover:text-white transition-colors">Cookiebeleid</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
