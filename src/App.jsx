import { useState } from "react";
import Header from "./components/header/Header";      
import CardsList from "./components/cards/CardList"; 

const App = () => {
  const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem("cards");
    return saved ? JSON.parse(saved) : [];
  });

  const [searchTerm, setSearchTerm] = useState('');

  const handleSave = (title, description) => {
    setCards(prev => [...prev, { title, description }]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm) ||
    card.description.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <Header onSave={handleSave} onSearch={handleSearch} />
      <CardsList cards={filteredCards} setCards={setCards} />
    </div>
  );
};

export default App;
