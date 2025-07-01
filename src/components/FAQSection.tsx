
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is Do Scan free to use?",
      answer: "Do Scan offers a free version with basic scanning features. Premium features like OCR text recognition, cloud storage, and advanced editing tools are available with our Pro subscription."
    },
    {
      question: "How accurate is the OCR text recognition?",
      answer: "Our OCR technology achieves over 95% accuracy on clear, well-lit documents. The accuracy may vary depending on document quality, handwriting clarity, and language."
    },
    {
      question: "Can I scan multiple pages into one PDF?",
      answer: "Yes! Do Scan supports multi-page scanning. You can scan multiple documents and combine them into a single PDF file for easy sharing and storage."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use end-to-end encryption for all document uploads and storage. Your documents are stored securely in the cloud and only accessible by you."
    },
    {
      question: "Which file formats does Do Scan support?",
      answer: "Do Scan supports multiple formats including PDF, JPEG, PNG, and TIFF. You can export your scanned documents in any of these formats based on your needs."
    },
    {
      question: "Can I edit scanned documents?",
      answer: "Yes, Do Scan includes basic editing tools such as rotation, cropping, brightness/contrast adjustment, and color filters to enhance your scanned documents."
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
            Got questions? We've got answers.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg border border-gray-200 px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900" style={{ '--hover-color': '#2147A8' }}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="font-semibold hover:opacity-75 transition-colors" style={{ color: '#2147A8' }}>
            Contact our support team →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
