import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="border-b border-gray-300">
      <div
        className="bg-[#0009EA] text-white p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        {title}
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-100 border-t border-gray-300">
          {children}
        </div>
      )}
    </div>
  );
};

interface AccordionProps {
  data: { id: number; content: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      {data.map((item) => (
        <AccordionItem key={item.id} title={item.content}>
          <p>{item.content}.</p>
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
