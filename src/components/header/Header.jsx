import { useState, useEffect } from 'react';
import { loop } from '../../utils/import';
import './header.css';
import Modal from '../modal/Modal';

const Header = ({ onSave, onSearch }) => {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("theme");
        return saved === "dark" ? true : false;
    });

    const [clicked, setClicked] = useState(false);
    const [search, setSearch] = useState('');

    const changeTheme = () => setTheme(prev => !prev);

    useEffect(() => {
        if (theme) {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    const handleSearchChange = (e) => setSearch(e.target.value);

    const handleSearchClick = () => onSearch(search);

    return (
        <nav className='header__nav'>
            <div className="container header__box">
                <button onClick={() => setClicked(true)} className="header__btn">+</button>
                <h2 className="header__title">ToDo</h2>

                <label className='header__switch'>
                    <input type="checkbox" checked={theme} onChange={changeTheme} />
                    <span className="header__slider"></span>
                </label>

                <div className="header__find">
                    <input
                        className='header__input'
                        type="text"
                        value={search}
                        onChange={handleSearchChange}
                        placeholder="Search..."
                    />
                    <button className="header__input_btn" onClick={handleSearchClick}>
                        <img className='header__img' src={loop} alt="search" />
                    </button>
                </div>
            </div>

            {clicked && <Modal clicked={clicked} onClose={() => setClicked(false)} onSave={onSave} />}
        </nav>
    );
};

export default Header;
