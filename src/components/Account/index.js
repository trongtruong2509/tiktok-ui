import classNames from 'classnames/bind';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './Account.module.scss';

const cx = classNames.bind(styles);

function Account() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/17937206d75158670a293f5caa5b6dda~c5_300x300.webp?x-expires=1656248400&x-signature=7ZledLK%2Bya7DDd%2FzOP4Kw5b%2FMv8%3D"
                alt="Avatar"
            />
            <div className={cx('info')}>
                <h4>
                    <span>hoaa.hanassii</span>
                    <svg
                        class="icon"
                        width="14"
                        height="14"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="24" cy="24" r="24" fill="#20D5EC"></circle>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M37.1213 15.8787C38.2929 17.0503 38.2929 18.9497 37.1213 20.1213L23.6213 33.6213C22.4497 34.7929 20.5503 34.7929 19.3787 33.6213L10.8787 25.1213C9.70711 23.9497 9.70711 22.0503 10.8787 20.8787C12.0503 19.7071 13.9497 19.7071 15.1213 20.8787L21.5 27.2574L32.8787 15.8787C34.0503 14.7071 35.9497 14.7071 37.1213 15.8787Z"
                            fill="white"
                        ></path>
                    </svg>
                </h4>
                <p>Đào Lê Phương Hoa</p>
            </div>
        </div>
    );
}

export default Account;