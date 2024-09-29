import styles from './CallToAction.css';

export default function CallToAction() {
    return (
        <section>
            <div className={styles['description']}>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurang, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>
            </div>
            <div className={styles['imgs']}>
                <img src="images/restauranFood.jpg"></img>
            </div>
        </section>
    )
}