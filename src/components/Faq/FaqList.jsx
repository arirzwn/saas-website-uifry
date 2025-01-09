import { FaqItem } from "./FaqItem.jsx";

export function FaqList() {
  const faqs = [
    {
      id: 1,
      question: "What is the best way to create a saas business today?",
      answer:
        "Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.",
    },
    {
      id: 2,
      question: "What is the best way to create a saas business today?",
      answer:
        "Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.",
    },
    {
      id: 3,
      question: "What is the best way to create a saas business today?",
      answer:
        "Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.",
    },
  ];

  return (
    <>
      <div>
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </>
  );
}
