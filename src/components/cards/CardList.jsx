import { useState } from "react";
import Card from "./Card";
import "./card.css";
import DelModal from "../modal/DelModal";

const CardsList = ({ cards, setCards }) => {
  const [modalActive, setModalActive] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

  const openModal = (card) => {
    setCurrentCard(card);
    setModalActive(true);
  };

  const handleSave = (newTitle, newDesc) => {
    setCards(p =>
      p.map(card =>
        card === currentCard
          ? { ...card, title: newTitle, description: newDesc }
          : card
      )
    );
    setModalActive(false);
  };

  const handleDelete = () => {
    setCards(p => p.filter(card => card !== currentCard));
    setModalActive(false);
  };

  return (
    <>
      <div className="card container">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            onOpen={() => openModal(card)}
          />
        ))}
      </div>

      <DelModal
        active={modalActive}
        setActive={setModalActive}
        card={currentCard}
        onSave={handleSave}
        onDelete={handleDelete}
      >
        {currentCard && (
          <>
            <h2>{currentCard.title}</h2>
            <p>{currentCard.description}</p>
          </>
        )}
      </DelModal>
    </>
  );
};
export default CardsList  