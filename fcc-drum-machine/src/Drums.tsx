import song1 from "./assets/Heater-1.mp3";
import song2 from "./assets/Heater-2.mp3";
import song3 from "./assets/Heater-3.mp3";
import song4 from "./assets/Heater-4_1.mp3";
import song5 from "./assets/Heater-6.mp3";
import song6 from "./assets/Dsc_Oh.mp3";
import song7 from "./assets/Kick_n_Hat.mp3";
import song8 from "./assets/RP4_KICK_1.mp3";
import song9 from "./assets/Cev_H2.mp3";

import { useEffect, useState } from "react";
import styles from "./Drums.module.css";

const Drums = () => {

    const [active, setActive] = useState<string>("");
    const [volume, setVolume] = useState<number>(0.5);

    const songsAndKeys: {[index: string]: HTMLAudioElement} = {
        "q": new Audio(song1),
        "w": new Audio(song2),
        "e": new Audio(song3),
        "a": new Audio(song4),
        "s": new Audio(song5),
        "d": new Audio(song6),
        "z": new Audio(song7),
        "x": new Audio(song8),
        "c": new Audio(song9)
    }

    useEffect(()=>{
        Object.values(songsAndKeys).forEach(song => song.volume = volume)
    }, [volume])

    useEffect(() => {
        window.addEventListener("keydown", event => {
            const pushedKey = event.key;
            console.log(pushedKey);
            const corrSong: HTMLAudioElement = songsAndKeys[pushedKey];

            setActive(pushedKey);
            corrSong.currentTime = 0;
            corrSong.play();
        })

        window.addEventListener("keyup", () => {
            setActive("");
        })

        return () => {
            window.removeEventListener("keydown", event => {
                const pushedKey = event.key;
                console.log(pushedKey);
                const corrSong: HTMLAudioElement = songsAndKeys[pushedKey];

                setActive(pushedKey);
                corrSong.volume = volume;
                corrSong.currentTime = 0;
                corrSong.play();
            })

            window.removeEventListener("keyup", () => {
                setActive("");
            })
        }
    }, [])

    return (
        <>
            <main id={styles['drumsMain']}>
                <div id={styles['drum-machine']}>
                    <div id={styles['display']}>
                        <div id={styles[`drumKey1${active === "q" ? "Active" : ""}`]} className={styles['drum-pad']}>
                            Q
                        </div>
                        <div id={styles[`drumKey2${active === "w" ? "Active" : ""}`]} className={styles['drum-pad']}>
                            W
                        </div>
                        <div id={styles[`drumKey3${active === "e" ? "Active" : ""}`]} className={styles['drum-pad']}>
                            E
                        </div>
                        <div id={styles[`drumKey4${active === "a" ? "Active" : ""}`]} className={styles['drum-pad']}>
                            A
                        </div>
                        <div id={styles[`drumKey5${active === "s" ? "Active" : ""}`]} className={styles['drum-pad']}>
                            S
                        </div>
                        <div id={styles[`drumKey6${active === "d" ? "Active" : ""}`]} className={styles['drum-pad']}>
                            D
                        </div>
                        <div id={styles[`drumKey7${active === "z" ? "Active" : ""}`]} className={styles['drum-pad']}>
                            Z
                        </div>
                        <div id={styles[`drumKey8${active === "x" ? "Active" : ""}`]} className={styles['drum-pad']}>
                            X
                        </div>
                        <div id={styles[`drumKey9${active === "c" ? "Active" : ""}`]} className={styles['drum-pad']}>
                            C
                        </div>
                    </div>
                    <input type="range" min="0" max="1" step="0.01" onChange={(event) => setVolume(Number(event.target.value))} id={styles['volume']} />
                </div>
            </main>
        </>
    )
}

export default Drums;