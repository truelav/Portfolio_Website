import gsap from "gsap";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

import Scene_1 from "../components/sections/scene_1/scene_1";
import Scene_2 from "../components/sections/scene_2/scene_2";
import Scene_3 from "../components/sections/scene_3/scene_3";
import Scene_4 from "../components/sections/scene_4/scene_4";
import Scene_5 from "../components/sections/scene_5/scene_5";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const App = () => {
    const sectionRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            const sectionIndex = Math.floor(scrollPosition / windowHeight);
            scrollToSection(sectionIndex);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (index) => {
        sectionRefs.current[index].scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <>
            <div className="wrapper_container">
                <section ref={(el) => (sectionRefs.current[0] = el)}>
                    <div className="scene_wrapper">
                        <Scene_1 />
                    </div>
                </section>
                <section ref={(el) => (sectionRefs.current[1] = el)}>
                    <div className="scene_wrapper">
                        <Scene_2 />
                    </div>
                </section>
                <section ref={(el) => (sectionRefs.current[2] = el)}>
                    <div className="scene_wrapper">
                        <Scene_3 />
                    </div>
                </section>
                <section ref={(el) => (sectionRefs.current[3] = el)}>
                    <div className="scene_wrapper">
                        <Scene_4 />
                    </div>
                </section>
                <section ref={(el) => (sectionRefs.current[4] = el)}>
                    <div className="scene_wrapper">
                        <Scene_5 />
                    </div>
                </section>
            </div>
        </>
    );
};

export default App;
