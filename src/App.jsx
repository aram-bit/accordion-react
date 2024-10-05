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
function AccorionItem({ item }) {
  return (
    <div className="accordion-item">
      <div className="accordion-item__header">
        {item.title}
      </div>
      <div className="accordion-item__content">{item.text}</div>
    </div>
  );
}
