import React from 'react';

function KiteConnect() {
    return (
        <div
            className="container-fluid py-4"
            style={{
                backgroundColor: "#f6fbff", marginBottom: "70px"
            }}
        >
            <div className="container">
                <div className="row align-items-center">

                    {/* Kite Logo + Title */}
                    <div className="col-3">
                        <div className="d-flex align-items-center">
                            <img
                                src="/media/images/kite_logo.png"
                                alt="Kite"
                                style={{
                                    width: "55px",
                                    height: "55px",
                                    objectFit: "contain"
                                }}
                            />

                            <h1
                                className="mb-0 ms-2"
                                style={{
                                    fontSize: "32px",
                                    fontWeight: "600",
                                    color: "#222"
                                }}
                            >
                                Kite Connect
                            </h1>
                        </div>
                    </div>


                    {/* Description */}
                    <div className="col-7">
                        <p
                            className="mb-0"
                            style={{
                                fontSize: "20px",
                                lineHeight: "1.7",
                                color: "#555"
                            }}
                        >
                            Need more? Build your own trading and investing
                            experience with Kite Connect, simple HTTP APIs
                            to place orders, stream market data, manage your
                            account, and more.

                            <a href="" className="ms-1" style={{textDecoration: "none", color: "#387ed1"}}>
                                Explore →
                            </a>
                        </p>
                    </div>


                    {/* Right Side Decorative Pattern */}
                    <div className="col-2">
                        <div
                            style={{
                                width: "180px",
                                opacity: "0.7"
                            }}
                        >

                            {/* Row 1 */}
                            <div className="d-flex align-items-center mb-2">
                                <span
                                    style={{
                                        width: "30px",
                                        height: "5px",
                                        backgroundColor: "#c9e2ff",
                                        marginRight: "4px"
                                    }}
                                ></span>

                                <span
                                    style={{
                                        width: "45px",
                                        height: "5px",
                                        backgroundColor: "#c9e2ff",
                                        marginRight: "4px"
                                    }}
                                ></span>

                                <span
                                    style={{
                                        width: "20px",
                                        height: "5px",
                                        backgroundColor: "#c9e2ff",
                                        marginRight: "4px"
                                    }}
                                ></span>

                                <span
                                    style={{
                                        width: "55px",
                                        height: "5px",
                                        backgroundColor: "#c9e2ff"
                                    }}
                                ></span>
                            </div>


                            {/* Row 2 */}
                            <div className="d-flex align-items-center mb-2">
                                <span
                                    style={{
                                        width: "25px",
                                        height: "5px",
                                        backgroundColor: "#c9e2ff",
                                        marginRight: "4px"
                                    }}
                                ></span>

                                <span
                                    style={{
                                        width: "60px",
                                        height: "5px",
                                        backgroundColor: "#c9e2ff",
                                        marginRight: "4px"
                                    }}
                                ></span>

                                <span
                                    style={{
                                        width: "35px",
                                        height: "5px",
                                        backgroundColor: "#c9e2ff"
                                    }}
                                ></span>
                            </div>


                            {/* Row 3 */}
                            <div className="d-flex align-items-center">
                                <span
                                    style={{
                                        width: "50px",
                                        height: "5px",
                                        backgroundColor: "#c9e2ff",
                                        marginRight: "4px"
                                    }}
                                ></span>

                                <span
                                    style={{
                                        width: "35px",
                                        height: "5px",
                                        backgroundColor: "#c9e2ff",
                                        marginRight: "4px"
                                    }}
                                ></span>

                                <span
                                    style={{
                                        width: "50px",
                                        height: "5px",
                                        backgroundColor: "#c9e2ff"
                                    }}
                                ></span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default KiteConnect;