import styles from './Reviews.css';

export default function Reviews() {
    return (
        <div className={styles['section']}>
            <h1>Testimonials</h1>
                <div className={styles['reviews']}>
                    <div className={styles['review']}>
                        <div className={styles['stars']}>
                            ★★★★★
                        </div>
                        <div className={styles['person']}>
                            <img src="./images/lemon dessert.jpg"></img>
                            <span>David F.</span>
                        </div>
                        <p>Great food, definently worth a visit!</p>
                    </div>

                    <div className={styles['review']}>
                        <div className={styles['stars']}>
                            ★★★★☆
                        </div>
                        <div className={styles['person']}>
                            <img src="./images/lemon dessert.jpg"></img>
                            <span>Brandon N.</span>
                        </div>
                        <p>Had a good time, great customer service.</p>
                    </div>

                    <div className={styles['review']}>
                        <div className={styles['stars']}>
                            ★★★★☆
                        </div>
                        <div className={styles['person']}>
                            <img src="./images/lemon dessert.jpg"></img>
                            <span>Kevin H.</span>
                        </div>
                        <p>I loved the desserts!</p>
                    </div>

                    <div className={styles['review']}>
                        <div className={styles['stars']}>
                            ★★★☆☆
                        </div>
                        <div className={styles['person']}>
                            <img src="./images/lemon dessert.jpg"></img>
                            <span>Stacy M.</span>
                        </div>
                        <p>Pretty good, I want more cake.</p>
                    </div>
                </div>
        </div>
    );
}