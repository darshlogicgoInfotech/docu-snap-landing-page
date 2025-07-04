
import { Smartphone, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Smartphone className="h-8 w-8" style={{ color: '#2147A8' }} />
              <span className="ml-2 text-xl font-bold">Do Scan</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transform your phone into a powerful document scanner. Scan, save, and share documents effortlessly with AI-powered enhancement.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#2147A8] transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#2147A8] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#2147A8] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#2147A8] transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-[#2147A8] transition-colors duration-200">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-[#2147A8] transition-colors duration-200">How It Works</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-[#2147A8] transition-colors duration-200">Reviews</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-[#2147A8] transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="/privacy" className="text-gray-400 hover:text-[#2147A8] transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-[#2147A8] transition-colors duration-200">Terms & Conditions</a></li>
              <li><a href="/support" className="text-gray-400 hover:text-[#2147A8] transition-colors duration-200">Support</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#2147A8] transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Do Scan. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Made with ❤️ for document scanning
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
