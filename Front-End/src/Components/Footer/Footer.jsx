import { Link } from "react-router-dom";
import { Brain, Facebook, Twitter, Instagram, Heart, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-teal-600 text-white">
                <Brain className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-teal-600">
                Calm Corner
              </span>
            </div>
            <p className="text-slate-600">
              Dedicated platform for mental health support. Promoting well-being & guidance for a healthier mind.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://facebook.com" 
                className="text-slate-500 hover:text-purple-600 transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                className="text-slate-500 hover:text-teal-600 transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                className="text-slate-500 hover:text-amber-600 transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-slate-600 hover:text-purple-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/aboutus" 
                  className="text-slate-600 hover:text-purple-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/wellnesshub" 
                  className="text-slate-600 hover:text-purple-600 transition-colors"
                >
                  Wellness Hub
                </Link>
              </li>
              <li>
                <Link 
                  to="wellnesshub/resources" 
                  className="text-slate-600 hover:text-purple-600 transition-colors"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/wellnesshub/mood" 
                  className="text-slate-600 hover:text-teal-600 transition-colors flex items-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  <span>Self-Care Guidance</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/wellnesshub/track-mood" 
                  className="text-slate-600 hover:text-teal-600 transition-colors flex items-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  <span>Community Support</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/wellnesshub/resources" 
                  className="text-slate-600 hover:text-teal-600 transition-colors flex items-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  <span>Expert Resources</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/wellnesshub/wellness-tips" 
                  className="text-slate-600 hover:text-teal-600 transition-colors flex items-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  <span>Meditation Guides</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-600">
                <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>123 Calm Street, Calmville, CA 12345</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <Phone className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <Mail className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span>info@calmcorner.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 text-center">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Calm Corner. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}