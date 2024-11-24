import Hero from "./components/hero.tsx";
import About from "./components/about.tsx";


const App = () => {
    return (
        <main className="w-screen min-h-screen overflow-x-hidden ">
            <Hero />
            <About />
        </main>
    )
}
export default App;