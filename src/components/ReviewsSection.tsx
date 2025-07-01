
import { Card } from '@/components/ui/card';
import { Star, User } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      rating: 5,
      comment: 'Do Scan has revolutionized how I handle receipts and invoices. The OCR feature is incredibly accurate and saves me hours of manual data entry.',
      avatar: 'SJ',
      color: '#2147A8'
    },
    {
      name: 'Michael Chen',
      role: 'Student',
      rating: 5,
      comment: 'Perfect for scanning lecture notes and textbook pages. The auto-crop feature works flawlessly, and the PDF export is exactly what I need.',
      avatar: 'MC',
      color: '#2147A8'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Freelance Designer',
      rating: 5,
      comment: 'Clean interface, fast processing, and excellent quality scans. The folder organization keeps all my client documents perfectly sorted.',
      avatar: 'ER',
      color: '#2147A8'
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of users worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{review.comment}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold" style={{ backgroundColor: review.color }}>
                  {review.avatar}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-gray-50 rounded-2xl px-8 py-4">
            <div className="flex items-center">
              <Star className="h-6 w-6 text-yellow-400 fill-current" />
              <span className="ml-2 text-2xl font-bold text-gray-900">4.8</span>
            </div>
            <div className="text-gray-600">
              <div className="font-semibold">Excellent</div>
              <div className="text-sm">Based on 12,000+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
