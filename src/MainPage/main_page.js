import { useState, useEffect } from 'react';
import './Main_page.css';
import { Link } from 'react-router-dom';
import fon from './/fon.png';

export default function MainPage() {
    const [lang, setLang] = useState('Open');

    const clicked = ({ language }) => {
        if (language === 'ru') {
            setLang('ОТКРЫТЬ');
        } else {
            setLang('OPEN');
        }
    };

    useEffect(() => {
        const container = document.createElement('div');
        container.id = 'animation-container';
        document.body.appendChild(container);

        const createDot = () => {
            const dot = document.createElement('div');
            dot.classList.add('dot');

            const startX = Math.random() * window.innerWidth;
            const startY = Math.random() * window.innerHeight;
            const dx = Math.random() * 2 - 1; // от -1 до 1
            const dy = Math.random() * 2 - 1; // от -1 до 1

            dot.style.left = `${startX}px`;
            dot.style.top = `${startY}px`;
            dot.style.setProperty('--dx', dx);
            dot.style.setProperty('--dy', dy);

            container.appendChild(dot);
            setTimeout(() => dot.remove(), 5000);
        };

        const interval = setInterval(createDot, 100);

        return () => {
            clearInterval(interval);
            container.remove();
        };
    }, []);

    return (
        <div className="main">
            <div className="shapka">
                <h2>CASINO AI HACK</h2>
            </div>

            <div className="languages">
                <img
                    src="/photos/ru.png"
                    alt="Кнопка"
                    onClick={() => clicked({ language: 'ru' })}
                />
                <img
                    src="/photos/en.png"
                    alt="Кнопка"
                    onClick={() => clicked({ language: 'en' })}
                />
            </div>

            <div className="games">
                <div className="game">
                    <img src="/photos/1.png" alt="" />
                    <h3>MINES</h3>
                    <Link to="/mines">
                        <button>{lang}</button>
                    </Link>
                </div>
                <div className="game">
                    <img src="/photos/mimines.jpg" alt="" />
                    <h3>MINES SPIBE</h3>
                    <button>{lang}</button>
                </div>
                <div className="game">
                    <img src="/photos/4.png" alt="" />
                    <h3>BOMBUCKS</h3>
                    <button>{lang}</button>
                </div>
                <div className="game">
                    <img src="/photos/3.png" alt="" />
                    <h3>BRAWL PIRATES</h3>
                    <button>{lang}</button>
                </div>
                <div className="game">
                    <img src="/photos/2.png" alt="" />
                    <h3>ROYAL MINERS</h3>
                    <button>{lang}</button>
                </div>
                <div className="game">
                    <img src="/photos/6.png" alt="" />
                    <h3>AVIATOR</h3>
                    <button>{lang}</button>
                </div>
                <div className="game">
                    <img src="/photos/5.png" alt="" />
                    <h3>LUCKYJET</h3>
                    <button>{lang}</button>
                </div>
                <div className="game">
                    <img src="/photos/footxiconca.png" alt="" />
                    <h3>PENALTY SHOOT</h3>
                    <button>{lang}</button>
                </div>
                <div className="game">
                    <img src="/photos/penafon.png" alt="" />
                    <h3>FOOTBALL X</h3>
                    <button>{lang}</button>
                </div>
            </div>
        </div>
    );
}
