import styles from './Chicago.css';

export default function Chicago() {
    return (

        <section id="about">

            <div className={styles['full-section']}>
                <div className={styles['desciption']}>

                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                </div>

                <div className={styles['imgs']}>
                    <img src="/images/Mario and Adrian A.jpg"></img>
                    <img src="/images/Mario and Adrian B.jpg"></img>
                </div>
            </div>

        </section>

    )
}