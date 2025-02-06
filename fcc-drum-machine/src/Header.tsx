import styles from "./Header.module.css";

const Header = () => {
    return (
        <>
            <header id={styles['drumHeader']}>
                <h1 className={styles.headerH1}>Drum Machine</h1>
            </header>
        </>
    )
}

export default Header;