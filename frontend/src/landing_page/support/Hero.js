import React from "react";

function Hero() {
    return (
        <section id="supportHero">

            <div className="container" id="supportWrapper">

                {/* Top row */}
                <div className="supportTop">
                    <h4>Support Portal</h4>
                    <a href="">Track Tickets</a>
                </div>

                {/* Main content */}
                <div className="row supportContent">

                    {/* Left side */}
                    <div className="col-6">
                        <h1>
                            Search for an answer or browse help topics
                            <br />
                            to create a ticket
                        </h1>

                        <input
                            type="text"
                            placeholder="Eg: how do I activate F&O, why is my order getting rejected.."
                        />

                        <div className="supportLinks">
                            <a href="">Track account opening</a>
                            <a href="">Track segment activation</a>
                            <a href="">Intraday margins</a>
                            <a href="">Kite user manual</a>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="col-6 featured">
                        <h1>Featured</h1>

                        <ol>
                            <li>
                                <a href="">
                                    Current Takeovers and Delistings - January 2024
                                </a>
                            </li>

                            <li>
                                <a href="">
                                    Latest Intraday leverages - MIS & CO
                                </a>
                            </li>
                        </ol>
                    </div>

                </div>
            </div>

        </section>
    );
}

export default Hero;