import { useState, useRef, useEffect } from "react";

export function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isOpen]);

  return (
    <>
      <div className="relative flex items-center">
        <button
          className="mt-3 w-full rounded-md border border-[#131126] px-4 py-6 text-left"
          onClick={toggleDropdown}
        >
          {question}
        </button>
        {isOpen ? (
          <span className="absolute right-4 block">-</span>
        ) : (
          <span className="absolute right-4 block">+</span>
        )}
      </div>
      <div
        ref={contentRef}
        className="transition-max-height mx-4 mt-4 overflow-hidden duration-500 ease-in-out"
        style={{ maxHeight: "0px" }}
      >
        <p>{answer}</p>
      </div>
    </>
  );
}
