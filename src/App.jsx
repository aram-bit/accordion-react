import { useState } from "react";

const data = [
  {
    id: 1,
    title: "accordion one",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Totam id officia sed ut fuga qui consectetur unde harum, aperiam blanditiis.",
  },
  {
    id: 2,
    title: "accordion two",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Totam id officia sed ut fuga qui consectetur unde harum, aperiam blanditiis.",
  },
  {
    id: 3,
    title: "accordion there",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Totam id officia sed ut fuga qui consectetur unde harum, aperiam blanditiis.",
  },
];
function App() {
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccorionItem item={item} key={item.id} />
      ))}
    </div>
  );
}
export default App;
import { ChevronDownIcon } from "@heroicons/react/24/outline";
function AccorionItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div
        className="accordion-item__header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span> {item.title}</span>
        <ChevronDownIcon
          style={{ width: "1.2rem", rotate: isOpen ? "180deg" : "0deg" }}
        />
      </div>
      <div className="accordion-item__content">{item.text}</div>
    </div>
  );
}
