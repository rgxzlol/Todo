import { edit } from '../../utils/import'
import './card.css'

const Card = ({ title, description, onOpen }) => {
    return (
        <div className="card__card">
            <h4 className="card__title">{title}</h4>
            <div className="card__info">
                <p className="card__desc">{description}</p>
                <span className="card__date">23.11.25</span>
            </div>
            <button className="card__btn">
                <img onClick={onOpen} className='header__svg' src={edit} alt="" />
            </button>
        </div>
    );
};

export default Card;
