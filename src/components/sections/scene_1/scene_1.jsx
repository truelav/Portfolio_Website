import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import { creation_painting, enter_button } from "../../../assets/index";

import "./scene_1_styles.css";

export default function Scene_1() {
    useGSAP(() => {
        gsap.from("#creation_painting", {
            x: -700,
            y: -300,
            duration: 1.5,
            ease: "power4.out",
        });
        gsap.from("#enter_button", {
            x: +700,
            y: +300,
            duration: 1.5,
            ease: "power4.out",
        });
        gsap.from("#serghei_madan", { opacity: 0, delay: 2.2 });
        gsap.from("#portfolio", { opacity: 0, delay: 1.9 });
    }, []);

    return (
        <div className="scene scene_1">
            <div className="scene_1_text_container">
                <h2 className="body_font text-5xl" id="serghei_madan">
                    Serghei Madan
                </h2>
                <h1 className="header_font text-8xl" id="portfolio">
                    Portfolio
                </h1>
                {/* <h3 className="header_font text-xl">Experience</h3> */}
            </div>
            <div className="grid grid-cols-2 scene_1_images_container">
                <div>
                    <img
                        src={creation_painting}
                        alt="creation of adam painting"
                        className="w-5/6"
                        id="creation_painting"
                    />
                </div>
                <div>
                    <img
                        src={enter_button}
                        alt="creation of adam painting"
                        className="w-5/6"
                        id="enter_button"
                    />
                </div>
            </div>
        </div>
    );
}
