import styles from './Header.css';

export default function Header() {
    return (
        <header className={styles['the-header']}>
            <img className={styles['img-logo']} src="images/Logo.svg"></img>
            <nav style={{
            display: inline-flex
        }}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/#about">About</Link></li>
                    <li><Link to="/#menu">Menu</Link></li>
                    <li><Link to="/booking">Booking</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
}