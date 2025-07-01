
import { Card } from '@/components/ui/card';
import { Crop, Type, FileText, FolderOpen, Shield } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Auto-Cropping',
      description: 'Intelligent edge detection automatically crops your documents to perfection',
      icon: Crop,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'OCR Text Recognition',
      description: 'Extract and search text from your scanned documents with high accuracy',
      icon: Type,
      gradient: 'from-green-500 to-green-600'
    },
    {
      title: 'Multi-page PDF Support',
      description: 'Combine multiple scans into a single professional PDF document',
      icon: FileText,
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Folder Organization',
      description: 'Keep your documents organized with customizable folder structures',
      icon: FolderOpen,
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Secure Cloud Backup',
      description: 'Your documents are safely stored and synchronized across all devices',
      icon: Shield,
      gradient: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to digitize, organize, and manage your documents efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in">
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-brand-500 to-brand-600 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-brand-100 mb-6">Join thousands of users who trust Do Scan for their document needs</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-brand-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Download for iOS
              </button>
              <button className="px-8 py-3 bg-white text-brand-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Download for Android
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
