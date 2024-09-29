import Header from './Header';
import Footer from './Footer';
import CallToAction from './CallToAction';
import Menu from './Menu';
import Reviews from './Reviews';
import Chicago from './Chicago';

export default function Homepage() {
    return (
        <>
            <Header />

            <main>

                <CallToAction />
                <Menu />
                <Reviews />
                <Chicago />

            </main>

            <Footer />
        </>
    )
}