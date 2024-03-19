import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import {
    blob,
    can,
    floppy,
    keyboard,
    monitor,
    myself,
    painter,
    red_dot,
} from "../../../assets/index";

import "./scene_2_styles.css";

export default function Scene_2() {
    const scene_2_ref = useRef(null);
    const scene_2_tl = gsap.timeline();
    const tl_options = {
        root: null, // viewport
        rootMargin: "0px", // no margin
        threshold: 0.5, // trigger when 50% of section is visible
    };

    useGSAP(() => {
        gsap.from("#scene_2_blob", {
            opacity: 0,
            duration: 0.5,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".scene_2_images_container",
                start: "mid mid",
            },
        });
        gsap.from("#scene_2_painter", {
            y: 1000,
            delay: 0.3,
            duration: 0.6,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".scene_2_images_container",
                start: "mid mid",
            },
        });
        gsap.from("#scene_2_red_dot", {
            x: -1000,
            delay: 0.4,
            duration: 0.7,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".scene_2_images_container",
                start: "mid mid",
            },
        });
        gsap.from("#scene_2_floppy", {
            x: 500,
            y: -700,
            delay: 0.6,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".scene_2_images_container",
                start: "mid mid",
            },
        });
        gsap.from("#scene_2_monitor", {
            x: 1000,
            delay: 0.6,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".scene_2_images_container",
                start: "mid mid",
            },
        });
        gsap.from("#scene_2_keyboard", {
            x: 1000,
            delay: 0.9,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".scene_2_images_container",
                start: "mid mid",
            },
        });
        gsap.from("#scene_2_can", {
            y: 1000,
            delay: 1.4,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".scene_2_images_container",
                start: "mid mid",
            },
        });
        gsap.from("#scene_2_myself", {
            opacity: 0,
            delay: 2,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".scene_2_images_container",
                start: "mid mid",
            },
        });
    }, []);
    return (
        <div className="scene scene_2 grid grid-cols-2">
            <div className="scene_2_text_container" ref={scene_2_ref}>
                <h2 className="header_font text-6xl">Hello World</h2>
                <h3 className="body_font text-xl">
                    I am an Artist turned Software Engineer, merging creativity
                    with technical expertise to craft innovative solutions.
                </h3>
                <div className="my-8">
                    <h3 className="body_font text-l my-4">
                        - With a background steeped in the fluidity of artistic
                        expression, I now channel that same passion into the
                        structured realm of code and development.
                    </h3>
                    <h3 className="body_font text-l my-4">
                        - Highlighly responsible and professional engineer with
                        a proven track record of projects.
                    </h3>
                    <h3 className="body_font text-l my-4">
                        - Exceptional hard skilled in web development and
                        engineering. expertise in Javascript, HTML, CSS, React,
                        Angular, NodeJs, MongoDb, PostgreSQL, Jest, Storybook,
                        Redux, Swagger, Git, Shopify, etc.
                    </h3>
                    <h3 className="body_font text-l my-4">
                        - Highly skilled and collaborative in a inclusive work
                        environments, effective at communicating with diverse
                        stakeholders, ability to follow directions as well as
                        show initiative.
                    </h3>
                </div>
            </div>
            <div className="scene_2_images_container">
                <div className="scene_2_image_container">
                    <img
                        src={blob}
                        alt="creation of adam painting"
                        id="scene_2_blob"
                    />
                </div>
                <div className="scene_2_image_container">
                    <img
                        src={red_dot}
                        alt="creation of adam painting"
                        id="scene_2_red_dot"
                    />
                </div>
                <div className="scene_2_image_container">
                    <img
                        src={floppy}
                        alt="creation of adam painting"
                        id="scene_2_floppy"
                    />
                </div>

                <div className="scene_2_image_container">
                    <img
                        src={monitor}
                        alt="creation of adam painting"
                        id="scene_2_monitor"
                    />
                </div>
                <div className="scene_2_image_container">
                    <img
                        src={keyboard}
                        alt="creation of adam painting"
                        id="scene_2_keyboard"
                    />
                </div>
                <div className="scene_2_image_container">
                    <img
                        src={painter}
                        alt="creation of adam painting"
                        id="scene_2_painter"
                    />
                </div>
                <div className="scene_2_image_container">
                    <img
                        src={can}
                        alt="creation of adam painting"
                        id="scene_2_can"
                    />
                </div>
                <div className="scene_2_image_container">
                    <img
                        src={myself}
                        alt="creation of adam painting"
                        id="scene_2_myself"
                    />
                </div>
            </div>
        </div>
    );
}
