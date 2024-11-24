import {useEffect, useRef, useState} from "react";
import {Button} from "./button.tsx";
import {TiLocationArrow} from "react-icons/ti";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/all"
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4;
    const nextVideoRef = useRef(null);
    
    const handleMiniVideoClick = () => {
        setHasClicked(true);

        setCurrentIndex(upcomingVideoIndex);
    }

    // set loading to false if all videos have loaded
    useEffect(() => {
        if(loadedVideos === totalVideos - 1) {
            setIsLoading(false);
        }
    }, [loadedVideos]);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    }

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    useGSAP(
        () => {
            if (hasClicked) {
                gsap.set("#next-video", { visibility: "visible" });

                gsap.to("#next-video", {
                    transformOrigin: "center center",
                    scale: 1,
                    width: "100%",
                    height: "100%",
                    duration: 1,
                    ease: "power1.inOut",
                    // @ts-ignore
                    onStart: () => nextVideoRef.current.play(),
                });

                gsap.from("#current-video", {
                    transformOrigin: "center center",
                    scale: 0,
                    duration: 1.5,
                    ease: "power1.inOut",
                });
            }
        },
        {
            dependencies: [currentIndex],
            revertOnUpdate: true,
        }
    );

    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
            borderRadius: "0 0 40% 10%"
        })

        gsap.from("#video-frame", {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: "0 0 0 0",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#video-frame",
                start: "center center",
                end: "bottom center",
                scrub: true,
            },
        })
    })

    const getVideoSrc = (index: any) => `videos/hero-${index}.mp4`

    return (
        <div className={"relative h-dvh w-screen overflow-x-hidden"}>

            {isLoading && (
                <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
                    {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
                    <div className="three-body">
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                    </div>
                </div>
            )}

            <div id="video-frame" className={"relative z-10 h-dvh w-screen rounded-lg bg-blue-75 "}>
                <div>
                    <div className={"mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg"}>
                        <div onClick={handleMiniVideoClick}
                             className={"origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"}>
                            <video
                                loop
                                muted
                                id={"current-video"}
                                ref={nextVideoRef}
                                onLoadedData={handleVideoLoad}
                                src={getVideoSrc(currentIndex + 1)}
                                className={"size-64 origin-center scale-150 object-cover object-center"}
                            />
                        </div>
                    </div>

                    <video
                        loop
                        muted
                        id={"next-video"}
                        ref={nextVideoRef}
                        src={getVideoSrc(currentIndex)}
                        onLoadedData={handleVideoLoad}
                        className={"absolute absolute-center invisible z-20 size-64 object-cover object-center "}
                    />

                    <video
                        loop
                        muted
                        autoPlay
                        src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                        onLoadedData={handleVideoLoad}
                        className={"absolute left-0 top-0 size-full object-cover object-center"}
                    />
                </div>

                <h1 className={"special-font hero-heading absolute bottom-5 right-5 text-blue-75 z-40"}>
                    A<b>n</b>ime
                </h1>

                <div className={"absolute top-0 left-0 z-40 size-full"}>
                    <div className={"mt-24 px-5 sm:px-10"}>
                        <h1 className={"special-font hero-heading text-blue-100 "}>
                            redefi<b>n</b>e
                        </h1>

                        <p className={"mb-5 max-w-64 font-robert-regular text-blue-100"}>
                            Enter the aniverse layer <br/>
                            Unleash the New World
                        </p>

                        <Button
                            id={"watch-trailer"}
                            title={"Watch Trailer"}
                            leftIcon={<TiLocationArrow/>}
                            containerClass={"!bg-yellow-300 flex-center gap-1"}
                        />
                    </div>
                </div>
            </div>

            <h1 className={"special-font hero-heading absolute bottom-5 right-5 text-black"}>
                A<b>n</b>ime
            </h1>
        </div>
    )
}
export default Hero