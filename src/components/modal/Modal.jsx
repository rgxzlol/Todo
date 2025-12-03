import { useState } from 'react';
import { close } from '../../utils/import';
import './modal.css'

const Modal = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const onSave = () => {
    props.onSave(title, description);
  }
  
  if (!props.clicked) return null;
  return (
    <div className="modal">
      <div className="modal__box">
        <button className="modal__close" onClick={props.onClose}>
          <img className="modal__close_img" src={close} alt="Close" />
        </button>
        <h3 className="modal__title">Title</h3>
        <input value={title} onChange={e => setTitle(e.target.value)} className="modal__input" type="text" placeholder="Title" />
        <h3 className="modal__desc">Description</h3>
        <textarea value={description} onChange={e => setDescription(e.target.value)} className="modal__textarea" placeholder="Description"></textarea>
        <button onClick={onSave} className="modal__btn">Save</button>
      </div>
    </div>
  );
};

export default Modal;
