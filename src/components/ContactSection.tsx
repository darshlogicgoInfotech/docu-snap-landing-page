
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions, suggestions, or need support? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Let's start a conversation
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you're experiencing issues, have feature requests, or just want to share your experience with Do Scan, we're here to help.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email Support</h4>
                  <p className="text-gray-600">support@doscan.app</p>
                  <p className="text-sm text-gray-500">Response within 24 hours</p>
                </div>
              </Card>

              <Card className="p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Live Chat</h4>
                  <p className="text-gray-600">Available 9 AM - 6 PM EST</p>
                  <p className="text-sm text-gray-500">Monday to Friday</p>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <Button type="submit" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
