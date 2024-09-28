export default function Main() {
    return (
        <main style={{
            display: grid
        }}>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/booking" element={<Bookingpage />}></Route>
                <Route path="/specials" element={<Specials />}></Route>
                <Route path="/reviews" element={<Reviews />}></Route>
            </Routes>

        </main>
    );
}