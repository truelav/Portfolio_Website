import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

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
import { image_animations } from "./scene_2_animations";
import "./scene_2_styles.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Scene_2() {
    const scene_2_ref = useRef(null);
    const scene_2_tl = gsap.timeline({
        scrollTrigger: ".scene_2_images_container",
    });

    useGSAP(() => {
        const scene_2_images = gsap.utils.toArray(".scene_2_image");
        scene_2_images.forEach((scene_image, idx) => {
            const image_animation = image_animations[idx];
            gsap.from(`#${scene_image.id}`, image_animation);
            console.log(scene_image.id);
        });
        console.log(scene_2_images);
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
                        className="scene_2_image"
                    />
                </div>
                <div className="scene_2_image_container">
                    <img
                        src={red_dot}
                        alt="creation of adam painting"
                        id="scene_2_red_dot"
                        className="scene_2_image"
                    />
                </div>
                <div className="scene_2_image_container">
                    <img
                        src={floppy}
                        alt="creation of adam painting"
                        id="scene_2_floppy"
                        className="scene_2_image"
                    />
                </div>

                <div className="scene_2_image_container">
                    <img
                        src={monitor}
                        alt="creation of adam painting"
                        id="scene_2_monitor"
                        className="scene_2_image"
                    />
                </div>
                <div className="scene_2_image_container">
                    <img
                        src={keyboard}
                        alt="creation of adam painting"
                        id="scene_2_keyboard"
                        className="scene_2_image"
                    />
                </div>
                <div className="scene_2_image_container">
                    <img
                        src={painter}
                        alt="creation of adam painting"
                        id="scene_2_painter"
                        className="scene_2_image"
                    />
                </div>
                <div className="scene_2_image_container">
                    <img
                        src={can}
                        alt="creation of adam painting"
                        id="scene_2_can"
                        className="scene_2_image"
                    />
                </div>
                <div className="scene_2_image_container">
                    <img
                        src={myself}
                        alt="creation of adam painting"
                        id="scene_2_myself"
                        className="scene_2_image"
                    />
                </div>
            </div>
        </div>
    );
}
