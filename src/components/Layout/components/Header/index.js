import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless'; // different import path!

import styles from './Header.module.scss';
import Images from './../../../../assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Account from '~/components/Account';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setInterval(() => {
            setSearchResult([1, 2]);
        }, 0);
    });

    return (
        <header className={styles.wrapper}>
            <div className={styles.container}>
                <img className={styles.logo} src={Images.logo} alt="Tiktok" />

                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={styles.searchResult} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <Account />
                                <Account />
                                <Account />
                                <Account />
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                </Tippy>

                <div className="actions">
                    <Button outline size="small">
                        Log in
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
