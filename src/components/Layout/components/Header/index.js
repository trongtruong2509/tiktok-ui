import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import Images from './../../../../assets/images';

function Header() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.container}>
                <img className={styles.logo} src={Images.logo} alt="Tiktok" />
                <div className={styles.searchBox}>
                    <input type="text" placeholder="Search accounts and videos"></input>
                    <div className={styles.boxBorder}></div>
                    <button className={styles.loading}>
                        <FontAwesomeIcon icon={faXmarkCircle} />
                    </button>
                    <span></span>
                    <button className={styles.submitBtn}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className="actions"></div>
            </div>
        </header>
    );
}

export default Header;
