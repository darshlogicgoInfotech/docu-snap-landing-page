
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Smartphone, LogIn } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Smartphone className="h-8 w-8" style={{ color: '#2147A8' }} />
              <span className="ml-2 text-xl font-bold text-gray-900">Do Scan</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-[#2147A8] px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="outline" className="mr-3 border-[#2147A8] text-[#2147A8] hover:bg-[#2147A8] hover:text-white">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button className="bg-[#2147A8] hover:bg-[#1d3d96] text-white">
              Download App
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-[#2147A8] block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full border-[#2147A8] text-[#2147A8] hover:bg-[#2147A8] hover:text-white">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button className="w-full bg-[#2147A8] hover:bg-[#1d3d96] text-white">
                  Download App
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
