import { useEffect, useState } from 'react';
import { close } from '../../utils/import';
import './modal.css';

const DelModal = ({ active, setActive, card, onSave, onDelete }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    useEffect(() => {
        if (card) {
            setTitle(card.title);
            setDesc(card.description);      
        }
    }, [card]);

    if (!active) return null;

    return (
        <div className="modal" onClick={() => setActive(false)}>
            <div className="modal__box" onClick={e => e.stopPropagation()}>
                <button className="modal__close" onClick={() => setActive(false)}>
                    <img className="modal__close_img" src={close} alt="Close" />
                </button>

                <h3 className="modal__title">Title</h3>
                <input
                    className="modal__input"
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Title"
                />

                <h3 className="modal__desc">Description</h3>
                <textarea
                    value={desc}                      
                    onChange={e => setDesc(e.target.value)}
                    className="modal__textarea"
                    placeholder="Description"
                />

                <div className="modal__btns">
                    <button className="modal__btn" onClick={() => onSave(title, desc)}>
                        Save
                    </button>
                    <button className="modal__btn modal__delete" onClick={onDelete}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DelModal;
