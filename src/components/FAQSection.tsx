
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "Is Do Scan free to use?",
      answer: "Do Scan offers a free version with basic scanning features. Premium features like advanced OCR, cloud storage, and bulk processing are available with our Pro subscription."
    },
    {
      question: "What file formats does Do Scan support?",
      answer: "Do Scan can export your scanned documents as PDF, JPEG, or PNG files. You can also create multi-page PDFs from multiple scans."
    },
    {
      question: "How secure is my data?",
      answer: "Your documents are encrypted both in transit and at rest. We use industry-standard security measures and never access your personal documents."
    },
    {
      question: "Can I sync documents across devices?",
      answer: "Yes! With a Do Scan account, your documents automatically sync across all your devices through secure cloud storage."
    },
    {
      question: "Does Do Scan work offline?",
      answer: "Basic scanning and editing features work offline. Cloud sync and OCR features require an internet connection."
    },
    {
      question: "What languages does OCR support?",
      answer: "Our OCR technology supports over 50 languages including English, Spanish, French, German, Chinese, Japanese, and many more."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about Do Scan
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-sm border border-gray-200 px-6 hover:shadow-md transition-shadow duration-200"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#2147A8] transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-[#2147A8] text-white font-medium rounded-lg hover:bg-[#1d3d96] transition-colors duration-200"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
