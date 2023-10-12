import React, { useContext, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import MyContext from "../useContext/Context";
import SmokeTitle from "./SmokeTitle";
import "../assets/Css/MyGallery.css";

export default function MyGallery() {
    const { data, setData } = useContext(MyContext);
    useEffect(() => {
        // Initialize ScrollReveal
        ScrollReveal().reveal(".element-to-animate", {
            duration: 1000, // Animation duration in milliseconds
            origin: "top", // Animation starting point (top, bottom, left, right, etc.)
            distance: "20px", // Distance the element moves during the animation
            delay: 200, // Delay before the animation starts (in milliseconds)
        });
    }, []);

    const inlineStyle1 = {
        "--i": 1,
    };
    const inlineStyle2 = {
        "--i": 2,
    };
    const inlineStyle3 = {
        "--i": 3,
    };
    const inlineStyle4 = {
        "--i": 4,
    };
    const inlineStyle5 = {
        "--i": 5,
    };
    const inlineStyle6 = {
        "--i": 6,
    };
    const inlineStyle7 = {
        "--i": 7,
    };
    const inlineStyle8 = {
        "--i": 8,
    };
    return (
        <div className="element-to-animate">
            <div style={{ backgroundColor: data }}>
                <main className="wrapper">
                    {/* <!-- -------------- ABOUT BOX ---------------- --> */}
                    <section className="section" id="about">
                        <div className="top-header">
                            {/* ---------------------------------- */}
                            <SmokeTitle title="gallery" />
                        </div>
                        <div className="main-container">
                            <div className="image-container">
                                <span style={inlineStyle1}>
                                    <img
                                        src="/src/assets/img/1.jpg"
                                        alt="not found"
                                    />
                                </span>
                                <span style={inlineStyle2}>
                                    <img
                                        src="/src/assets/img/2.jpg"
                                        alt="not found"
                                    />
                                </span>
                                <span style={inlineStyle3}>
                                    <img
                                        src="/src/assets/img/3.jpg"
                                        alt="not found"
                                    />
                                </span>
                                <span style={inlineStyle4}>
                                    <img
                                        src="/src/assets/img/4.jpg"
                                        alt="not found"
                                    />
                                </span>
                                <span style={inlineStyle5}>
                                    <img
                                        src="/src/assets/img/5.jpeg"
                                        alt="not found"
                                    />
                                </span>
                                <span style={inlineStyle6}>
                                    <img
                                        src="/src/assets/img/6.jpg"
                                        alt="not found"
                                    />
                                </span>
                                <span style={inlineStyle7}>
                                    <img
                                        src="/src/assets/img/7.jpg"
                                        alt="not found"
                                    />
                                </span>
                                <span style={inlineStyle8}>
                                    <img
                                        src="/src/assets/img/1.jpg"
                                        alt="not found"
                                    />
                                </span>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}