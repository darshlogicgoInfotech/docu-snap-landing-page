
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Smartphone, Download, LogIn, ScanLine } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-brand-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:pr-8 animate-fade-in">
            <div className="flex items-center mb-6">
              <ScanLine className="h-12 w-12 text-brand-600" />
              <h1 className="ml-4 text-4xl lg:text-6xl font-bold text-gray-900">
                Do Scan
              </h1>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Scan. Save. Share.
              <span className="text-brand-600 block">Effortlessly.</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Do Scan helps you digitize documents, receipts, and notes in seconds. 
              Transform your phone into a powerful document scanner with AI-powered enhancement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="text-lg px-8 py-6">
                <LogIn className="h-5 w-5 mr-2" />
                Login Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Download className="h-5 w-5 mr-2" />
                Download App
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="h-12 w-12 bg-brand-100 rounded-lg flex items-center justify-center mr-3">
                  <Smartphone className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">100K+</div>
                  <div>Downloads</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 bg-brand-100 rounded-lg flex items-center justify-center mr-3">
                  <div className="text-brand-600 font-bold text-lg">4.8</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">★★★★★</div>
                  <div>App Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - App Preview */}
          <div className="mt-12 lg:mt-0 animate-slide-in-right">
            <Card className="p-8 bg-white shadow-xl">
              <div className="aspect-[3/4] bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <ScanLine className="h-24 w-24 text-brand-600 mx-auto mb-4" />
                  <p className="text-brand-700 font-medium">App Preview</p>
                  <p className="text-sm text-brand-600 mt-2">Clean Dashboard UI</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">DocuSnap Dashboard</h3>
                <p className="text-sm text-gray-600">Modern, intuitive interface for all your documents</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
