import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import AnimatedTitle from "./animatedTitle.tsx";

gsap.registerPlugin(ScrollTrigger )

const About = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })
        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: "100vh",
            borderRadius: 0
        })
    })
    return (
        <div id="about" className={"w-screen min-h-screen "}>
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <h2 className="font-general text-sm uppercase md:text-[10px] ">
                    Welcome to aniverse
                </h2>

                <AnimatedTitle
                    title={"Disc<b>o</b>ver the world's l<b>a</b>rgest <br/> shared entertainment"}
                    containerClass={"mt-5 text-center !text-black"}
                />

                <div className="about-subtext ">
                    <p>Into The New Verse, Get Immersed In The Vision</p>
                    <p>Every action and drama from countless universe</p>
                </div>
            </div>

            <div id="clip" className="h-dvh w-screen">
                <div className="mask-clip-path about-image">
                    <img
                        src="img/about.webp"
                        alt="bg"
                        className="absolute left-0 top-0 size-full obect-cover"
                    />
                </div>
            </div>
        </div>
    )
}
export default About
