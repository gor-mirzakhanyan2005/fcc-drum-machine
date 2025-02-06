import styles from "./Drums.module.css";

const Drums = () => {
    return (
        <>
            <main id={styles['drumsMain']}>
                <div id={styles['drum-machine']}>
                    <div className={styles.keyContainer}>
                        <div id={styles['drumKey1']} className={styles.drumKey}>

                        </div>
                        <div id={styles['drumKey2']} className={styles.drumKey}>

                        </div>
                        <div id={styles['drumKey3']} className={styles.drumKey}>

                        </div>
                        <div id={styles['drumKey4']} className={styles.drumKey}>

                        </div>
                        <div id={styles['drumKey5']} className={styles.drumKey}>

                        </div>
                        <div id={styles['drumKey6']} className={styles.drumKey}>

                        </div>
                        <div id={styles['drumKey7']} className={styles.drumKey}>

                        </div>
                        <div id={styles['drumKey8']} className={styles.drumKey}>

                        </div>
                        <div id={styles['drumKey9']} className={styles.drumKey}>

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Drums;