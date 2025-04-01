export default function Item({ name, quantity, category, onSelect }) {
    return (
      <section
        className="bg-slate-300 m-2 p-2 cursor-pointer hover:bg-slate-400 transition-colors"
        onClick={onSelect} 
      >
        <h2 className="font-bold text-xl text-blue-600">{name}</h2>
        <p className="ml-1">quantity: {quantity}</p>
        <p className="ml-1">category: {category}</p>
      </section>
    );
  }