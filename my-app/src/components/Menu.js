import styles from './Menu.css';

export default function Menu() {
    return (

        <div className={styles['section']}>
            <div className={styles['top-row']}>
                <h1>Specials!</h1>
                <button>Order Online</button>
            </div>
            <div className={styles['menu']}>
                <div className={styles['item']}>
                    <img src="./images/greek salad.jpg"></img>
                    <h2>Greek Salad</h2>
                    <span>$12.99</span>
                    <p>The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                </div>
                <div className={styles['item']}>
                    <img src="./images/bruchetta.svg"></img>
                    <h2>Bruchetta</h2>
                    <span>$5.99</span>
                    <p>Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                </div>
                <div className={styles['item']}>
                    <img src="./images/lemon dessert.jpg"></img>
                    <h2>Lemon Dessert</h2>
                    <span>$5.00</span>
                    <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                </div>
            </div>
        </div>

    )
}