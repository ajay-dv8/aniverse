import Hero from "./components/hero.tsx";
import About from "./components/about.tsx";
import {Navbar} from "./components/nav.tsx";
import Features from "./components/features.tsx";
import Story from "./components/story.tsx";
import Contact from "./components/contact.tsx";


const App = () => {
    return (
        <main className="w-screen min-h-screen overflow-x-hidden ">
            <Navbar/>
            <Hero />
            <About />
            <Features/>
            <Story/>
            <Contact/>
        </main>
    )
}
export default App;