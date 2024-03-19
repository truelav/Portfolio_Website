import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import {
    creation_painting,
    enter_button,
    O_1_DaVinciPro,
    F_3_DaVinciPro,
    I_2_DaVinciPro,
} from "../../../assets/index";

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
        gsap.from("#portfolio", { opacity: 0, delay: 0.3, duration: 0.3 });
        gsap.from("#portfolio_0_image", {
            opacity: 0,
            delay: 0.8,
            duration: 0.3,
        });
        gsap.from("#portfolio_f_image", {
            y: -1000,
            delay: 1,
            duration: 0.5,
        });
        gsap.from("#portfolio_i_image", {
            y: -1000,
            delay: 1.5,
            duration: 0.7,
        });
        gsap.from("#serghei_madan", { x: -1000, delay: 2.2 });
        gsap.to("#portfolio_0_image", {
            duration: 2,
            delay: 1.2,
            rotate: 360,
            repeat: -1,
            yoyo: true,
        });
        gsap.to("#portfolio_f_image", {
            duration: 1.1,
            delay: 1.5,
            y: 20,
            repeat: -1,
            yoyo: true,
        });
        gsap.to("#portfolio_i_image", {
            duration: 1.5,
            delay: 2.2,
            y: -35,
            repeat: -1,
            yoyo: true,
        });
        gsap.to("#creation_painting", {
            x: 75,
            y: 20,
            delay: 1.6,
            duration: 1.3,
            ease: "power4.out",
            repeat: -1,
            yoyo: true,
        });
    }, []);

    return (
        <div className="scene scene_1">
            <div className="scene_1_text_container">
                <h2 className="body_font text-5xl flex" id="serghei_madan">
                    Serghei Madan
                </h2>
                <h1 className="header_font text-8xl" id="portfolio">
                    P{" "}
                    <span className="image-letter-div">
                        <img
                            src={O_1_DaVinciPro}
                            alt=""
                            className="image-letter"
                            id="portfolio_0_image"
                        />
                    </span>
                    rt
                    <span className="image-letter-div">
                        <img
                            src={F_3_DaVinciPro}
                            alt=""
                            className="image-letter"
                            id="portfolio_f_image"
                        />
                    </span>
                    ol
                    <span className="image-letter-div">
                        <img
                            src={I_2_DaVinciPro}
                            alt=""
                            className="image-letter"
                            id="portfolio_i_image"
                        />
                    </span>
                    o
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
