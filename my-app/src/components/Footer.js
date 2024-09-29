export default function Footer() {
    return (
        <footer className={styles['footer']}>
            <div className={styles['section']}>
                <div>
                    <h2>Navigation</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Booking</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div>
                    <h2>Contact</h2>
                    <ul>
                        <li>Address</li>
                        <li>Email</li>
                        <li>Phone Number</li>

                    </ul>
                </div>
                <div>
                    <h2>Social Medias</h2>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Threads</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}