import Hero from "./components/hero.tsx";
import About from "./components/about.tsx";
import {Navbar} from "./components/nav.tsx";
import Features from "./components/features.tsx";


const App = () => {
    return (
        <main className="w-screen min-h-screen overflow-x-hidden ">
            <Navbar/>
            <Hero />
            <About />
            <Features/>
        </main>
    )
}
export default App;