import {useEffect, useState} from 'react';
import  styles from './Mines.module.css'; // Импортируем стили как модуль

export default function Mines() {

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


    useEffect(() => {
        document.body.style.background = 'black';
    }, []);

    const [count,setCount] = useState(3)
    const [game_started,SetGameStarted] = useState(false)
    const [WasEterating,SetEtarations] = useState([])

    function process_click (deistvie) {
        if (deistvie === "+") {
            if (count < 7) {
                const new_val = count+2
                setCount((new_val))
            }
        }else {
            if (count > 3) {
                const new_val = count-2
                setCount((new_val))
            }
        }
    }

    async function start_game () {
        if (game_started !== true) {
            if (WasEterating) {
                for (let ele of WasEterating){
                    const get_elemento = document.getElementById(ele)
                    get_elemento.querySelector("img").src = "/photos/kvadrat.png"

                }
            }
            SetGameStarted(true)
            const count_mines_on_board = 25
            const mines_to_disappear = 5;

            let massive_to_disappear = []
            for (let i = 0; i < mines_to_disappear; i++) {
                const number = (Math.floor((Math.random() * 0.25) * 100))
                if (!massive_to_disappear.includes(number)) {
                    massive_to_disappear.push(number)
                } else {
                    i--
                }
            }
            console.log(massive_to_disappear)

            for (const el of massive_to_disappear){
                await new Promise((resolve) => {
                    setTimeout(function () {
                        const get_element = document.getElementById(el)
                        get_element.querySelector("img").src = "/photos/minesstar.svg"

                        if (el === massive_to_disappear[massive_to_disappear.length -1]) {
                            SetGameStarted(false)
                            SetEtarations(massive_to_disappear)
                        }
                        resolve()
                    },700)
                })





            }
        }else {
            alert("Game started")
        }



    }



    return (
        <div className="main_mines">
            <div>
            <h2>CASINO AI HACK</h2>
            </div>

            <div className={styles.pole_iz_kvadratov}>

                <div className={styles.row}>
                    <div className={styles.kvadrat} id="0"><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat} id="1"><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat} id="2"><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat} id="3"><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat} id="4"><img src="/photos/kvadrat.png" alt=""/></div>
                </div>
                <div className={styles.row}>
                    <div className={styles.kvadrat} id="5"><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat} id="6"><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat} id="7"><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat} id="8"><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat} id="9"><img src="/photos/kvadrat.png" alt=""/></div>
                </div>
                <div className={styles.row}>
                    <div className={styles.kvadrat} id="10"><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat} id="11"><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat} id="12"><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat} id="13"><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat} id="14"><img src="/photos/kvadrat.png" alt=""/></div>
                </div>
                <div className={styles.row}>
                    <div className={styles.kvadrat} id="15"><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat} id="16"><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat} id="17"><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat} id="18"><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat} id="19"><img src="/photos/kvadrat.png" alt=""/></div>
                </div>
                <div className={styles.row}>
                    <div className={styles.kvadrat} id="20"><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat} id="21"><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat} id="22"><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat} id="23"><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat} id="24"><img src="/photos/kvadrat.png" alt=""/></div>
                </div>


                <div className={styles.just_a_big_kvadrat}></div>

                <div className={styles.counter}>
                    <button className={styles.plus} onClick={() => process_click("-")}>-</button>
                    <h3>{count}</h3>
                    <button className={styles.minus} onClick={() => process_click("+")}>+</button>
                </div>

                <div className={styles.button_mines}>
                    <h1 onClick={start_game}>GET SIGNAL</h1>
                </div>
                <div className={styles.cum_back}>
                    <a href="/"><img src="/photos/back (1).png" alt="" /></a>
                </div>
            </div>

        </div>
    );
}
