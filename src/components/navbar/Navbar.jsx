 import styles from "./navbar.module.css";
const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <span> Logo</span>
            <span> Home</span>
            <span> About Us</span>
            <span> Contact Us</span>

        </div>
    );
};

export default Navbar;