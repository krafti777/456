import { useState, useEffect } from 'react';
import "./Main_page.css"
import { Link } from "react-router-dom";
import fon from ".//fon.png"

export default function MainPage() {
    const getRandomPosition = () => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        return { x, y };
    };

    const createDot = () => {
        const dot = document.createElement('div');
        dot.classList.add('dot');

        const start = getRandomPosition();
        const mid1 = getRandomPosition();
        const mid2 = getRandomPosition();
        const end = getRandomPosition();

        dot.style.setProperty('--x1', `${start.x}px`);
        dot.style.setProperty('--y1', `${start.y}px`);
        dot.style.setProperty('--x2', `${mid1.x}px`);
        dot.style.setProperty('--y2', `${mid1.y}px`);
        dot.style.setProperty('--x3', `${mid2.x}px`);
        dot.style.setProperty('--y3', `${mid2.y}px`);
        dot.style.setProperty('--x4', `${end.x}px`);
        dot.style.setProperty('--y4', `${end.y}px`);

        document.body.appendChild(dot);

        dot.addEventListener('animationiteration', () => {
            dot.remove();
        });
    };

    useEffect(() => {
        document.body.style.backgroundImage = `url(${fon})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat'

        const interval = setInterval(createDot, 200);
        return () => clearInterval(interval);

    }, []);


    const [lang,setLang] = useState("Open")
    const clicked = ({ language }) => {
        if (language === "ru"){
            setLang("ОТКРЫТЬ")
        }else {
            setLang("OPEN")
        }
    };

    return (
        <div className="main">
            <div className="shapka">
                <h2>CASINO AI HACK</h2>
            </div>

            <div className="languages">
                <img src="/photos/ru.png" alt="Кнопка" onClick={() => clicked({language: "ru"})}/>
                <img src="/photos/en.png" alt="Кнопка" onClick={() => clicked({language: "en"})}/>
            </div>

            <div className="games">
                <div className="game">
                    <img src="/photos/1.png" alt=""/>
                    <h3>MINES</h3>

                    <Link to="/mines">
                        <button>{lang}</button>
                    </Link>
                </div>
                <div className="game">
                    <img src="/photos/mimines.jpg" alt=""/>
                    <h3>MINES SPIBE</h3>
                    <button>{lang}</button>
                </div>
                <div className="game">
                    <img src="/photos/4.png" alt=""/>
                    <h3>BOMBUCKS</h3>
                    <button>{lang}</button>
                </div>
                <div className="game">
                    <img src="/photos/3.png" alt=""/>
                    <h3>BRAWL PIRATES</h3>
                    <button>{lang}</button>
                </div>
                <div className="game">
                    <img src="/photos/2.png" alt=""/>
                    <h3>ROYAL MINERS</h3>
                    <button>{lang}</button>
                </div>
                <div className="game">
                    <img src="/photos/6.png" alt=""/>
                    <h3>AVIATOR</h3>
                    <button>{lang}</button>
                </div>
                <div className="game">
                    <img src="/photos/5.png" alt=""/>
                    <h3>LUCKYJET</h3>
                    <button>{lang}</button>
                </div>
                <div className="game">
                    <img src="/photos/footxiconca.png" alt=""/>
                    <h3>PENALTY SHOOT</h3>
                    <button>{lang}</button>
                </div>
                <div className="game">
                    <img src="/photos/penafon.png" alt=""/>
                    <h3>FOOTBALL X</h3>
                    <button>{lang}</button>
                </div>
            </div>
        </div>


    );
}
