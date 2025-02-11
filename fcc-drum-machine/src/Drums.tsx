import song1 from "./assets/Heater-1.mp3";
import song2 from "./assets/Heater-2.mp3";
import song3 from "./assets/Heater-3.mp3";
import song4 from "./assets/Heater-4_1.mp3";
import song5 from "./assets/Heater-6.mp3";
import song6 from "./assets/Dsc_Oh.mp3";
import song7 from "./assets/Kick_n_Hat.mp3";
import song8 from "./assets/RP4_KICK_1.mp3";
import song9 from "./assets/Cev_H2.mp3";

import { useEffect, useState, useRef } from "react";
import styles from "./Drums.module.css";

const Drums = () => {

    const songsAndKeys = useRef([
        {
            trigger: "q",
            sound: song1,
            desc: "Heater 1",
            id: "q"
        },
        {
            trigger: "w",
            sound: song2,
            desc: "Heater 2",
            id: "w"
        },
        {
            trigger: "e",
            sound: song3,
            desc: "Heater 3",
            id: "e"
        },
        {
            trigger: "a",
            sound: song4,
            desc: "Heater 4",
            id: "a"
        },
        {
            trigger: "s",
            sound: song5,
            desc: "Clap",
            id: "s"
        },
        {
            trigger: "d",
            sound: song6,
            desc: "Open-HH",
            id: "d"
        },
        {
            trigger: "z",
            sound: song7,
            desc: "Kick-n'-Hat",
            id: "z"
        },
        {
            trigger: "x",
            sound: song8,
            desc: "Kick",
            id: "x"
        },
        {
            trigger: "c",
            sound: song9,
            desc: "Closed-HH",
            id: "c"
        }
    ])

    const [active, setActive] = useState<string>("");
    const [volume, setVolume] = useState<number>(0.5);
    const audioRef = useRef<(HTMLAudioElement)[]>([]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const downKey = event.key;
            console.log(downKey);

            for(let i = 0; i < songsAndKeys.current.length; i++){
                const soundIndex = audioRef.current.findIndex(song => song.id === songsAndKeys.current[i].id)
                if(audioRef.current[soundIndex].id === downKey){
                    audioRef.current[soundIndex].volume = volume;
                    audioRef.current[soundIndex].play();
                    setActive(songsAndKeys.current[i].id)
                }
            }
        }

        const handleKeyUp = () => {
            setActive("");
        }

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
    })

    return (
        <>
            <main id={styles['drumsMain']}>
                <div id={styles['drum-machine']}>
                    <div id={styles['display']}>
                        {songsAndKeys.current.map((drum, index)  => {
                            return <div onClick={() => {
                                audioRef.current[index].volume = volume;
                                audioRef.current[index].play();
                            }} className={styles['drum-pad']} id={styles[`drumKey${drum.id.toUpperCase()}${active === drum.id ? "Active" : ""}`]}>
                                {drum.trigger.toUpperCase()}
                                <audio id={drum.id} ref={(el: HTMLAudioElement) => { audioRef.current[index] = el} } src={drum.sound}></audio>
                                </div>
                        })}
                    </div>
                    <input onChange={(e) => setVolume(Number(e.target.value))} value={volume} type="range" min="0" max="1" step="0.01" id={styles['volume']} />
                </div>
            </main>
        </>
    )
}

export default Drums;