import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css"
import { getImageUrl } from "../../utils";

//https://github.com/CodeCompleteYT/react-portfolio/tree/main/assets/skills
 const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        // Function to check if screen size is small
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 830);
        };

        // Initial check
        checkScreenSize();

        // Event listener for window resize
        window.addEventListener("resize", checkScreenSize);

        // Cleanup
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            {isSmallScreen && (
                <div className={styles.menu}>
                    <img
                        className={styles.menuBtn}
                        src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                        alt="menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                </div>
            )}
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;