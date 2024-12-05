import {useEffect, useState} from 'react';
import  styles from './Mines.module.css'; // Импортируем стили как модуль

export default function Mines() {
    useEffect(() => {
        document.body.style.background = 'black';
    }, []);

    const [count,setCount] = useState(1)

    function process_click (deistvie) {
        if (deistvie === "+") {
            if (count < 7) {
                const new_val = count+2
                setCount((new_val))
            }
        }else {
            if (count > 1) {
                const new_val = count-2
                setCount((new_val))
            }
        }
    }

    return (
        <div className="main_mines">
            <div>
                <h2>CASINO AI HACK</h2>
            </div>

            <div className={styles.pole_iz_kvadratov}>

                <div className={styles.row}>
                    <div className={styles.kvadrat}><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat}><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat}><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat}><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat}><img src="/photos/kvadrat.png" alt=""/></div>
                </div>
                <div className={styles.row}>
                    <div className={styles.kvadrat}><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat}><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat}><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat}><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat}><img src="/photos/kvadrat.png" alt=""/></div>
                </div>
                <div className={styles.row}>
                    <div className={styles.kvadrat}><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat}><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat}><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat}><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat}><img src="/photos/kvadrat.png" alt=""/></div>
                </div>
                <div className={styles.row}>
                    <div className={styles.kvadrat}><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat}><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat}><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat}><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat}><img src="/photos/kvadrat.png" alt=""/></div>
                </div>
                <div className={styles.row}>
                    <div className={styles.kvadrat}><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat}><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat}><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat}><img src="/photos/kvadrat.png" alt=""/></div>
                    <div className={styles.kvadrat}><img src="/photos/kvadrat.png" alt=""/></div>
                </div>

                <div className={styles.just_a_big_kvadrat}></div>

                <div className={styles.counter}>
                    <button className ={styles.plus} onClick={() => process_click("-")}>-</button>
                    <h3>{count}</h3>
                    <button className={styles.minus} onClick={() => process_click("+")}>+</button>
                </div>

                <div className={styles.button_mines}>
                    <h1>GET SIGNAL</h1>
                </div>

            </div>

        </div>
    );
}
