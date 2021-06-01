import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { MenuItems } from './Menuitems';
import styles from './Navbar.module.css';

export const Navbar = () => {
    const [clicked, setClicked] = useState(false)
    const handleclick = () => {
        setClicked(!clicked)
    }
    return (
        <nav className={styles.NavbarItems}>
            <h1 className={styles.navbarLogo}>Fake Store</h1>
            <div className={styles.menuIcon} onClick={handleclick}>
                {clicked
                        ?
                        <FontAwesomeIcon className={styles.fatimes} icon={faTimes} />
                        :
                        <FontAwesomeIcon className={styles.fabars} icon={faBars} />
                }
            </div>
            <ul className={clicked ? styles.navMenuActive : styles.navMenu}>
                {
                    MenuItems.map((item, index) => {
                        return (
                            <li key={index}><a className={styles.navLinks} href={item.url}>{item.title}</a></li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navbar;