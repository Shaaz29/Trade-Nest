import React from "react";

function CreateTicket() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 mb-5">

                <h1 className="fs-2 mb-4">
                    To create a ticket, select a relevant topic
                </h1>

                {/* Account Opening */}
                <div className="col-4 p-4 mt-2 mb-2">
                    <h4 className="mb-4">
                        <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
                        Account Opening
                    </h4>

                    <a href="" className="ticket-link">Online Account Opening</a>
                    <br />
                    <a href="" className="ticket-link">Offline Account Opening</a>
                    <br />
                    <a href="" className="ticket-link">
                        Company, Partnership and HUF Account Opening
                    </a>
                    <br />
                    <a href="" className="ticket-link">NRI Account Opening</a>
                    <br />
                    <a href="" className="ticket-link">Charges at Zerodha</a>
                    <br />
                    <a href="" className="ticket-link">
                        Zerodha IDFC FIRST Bank 3-in-1 Account
                    </a>
                    <br />
                    <a href="" className="ticket-link">Getting Started</a>
                </div>


                {/* Your Zerodha Account */}
                <div className="col-4 p-4 mt-2 mb-2">
                    <h4 className="mb-4">
                        <i className="fa fa-user me-2" aria-hidden="true"></i>
                        Your Zerodha Account
                    </h4>

                    <a href="" className="ticket-link">Login Credentials</a>
                    <br />
                    <a href="" className="ticket-link">
                        Account Modification and Segment Addition
                    </a>
                    <br />
                    <a href="" className="ticket-link">
                        DP ID and bank details
                    </a>
                    <br />
                    <a href="" className="ticket-link">Your Profile</a>
                    <br />
                    <a href="" className="ticket-link">
                        Transfer and conversion of shares
                    </a>
                </div>


                {/* Trading */}
                <div className="col-4 p-4 mt-2 mb-2">
                    <h4 className="mb-4">
                        <i className="fa fa-bar-chart me-2" aria-hidden="true"></i>
                        Your Zerodha Account
                    </h4>

                    <a href="" className="ticket-link">
                        Margin/leverage, Product and Order types
                    </a>
                    <br />
                    <a href="" className="ticket-link">
                        Kite Web and Mobile
                    </a>
                    <br />
                    <a href="" className="ticket-link">Trading FAQs</a>
                    <br />
                    <a href="" className="ticket-link">Corporate Actions</a>
                    <br />
                    <a href="" className="ticket-link">Sentinel</a>
                    <br />
                    <a href="" className="ticket-link">Kite API</a>
                    <br />
                    <a href="" className="ticket-link">
                        Pi and other platform
                    </a>
                    <br />
                    <a href="" className="ticket-link">Stockreports+</a>
                    <br />
                    <a href="" className="ticket-link">GTT</a>
                </div>


                {/* Funds */}
                <div className="col-4 p-4 mt-2 mb-2">
                    <h4 className="mb-4">
                        <i className="fa fa-credit-card me-2" aria-hidden="true"></i>
                        Funds
                    </h4>

                    <a href="" className="ticket-link">Adding Funds</a>
                    <br />
                    <a href="" className="ticket-link">Fund Withdrawal</a>
                    <br />
                    <a href="" className="ticket-link">eMandates</a>
                    <br />
                    <a href="" className="ticket-link">Adding Bank Accounts</a>
                </div>


                {/* Console */}
                <div className="col-4 p-4 mt-2 mb-2">
                    <h4 className="mb-4">
                        <i className="fa fa-circle-o me-2" aria-hidden="true"></i>
                        Console
                    </h4>

                    <a href="" className="ticket-link">Reports</a>
                    <br />
                    <a href="" className="ticket-link">Ledger</a>
                    <br />
                    <a href="" className="ticket-link">Portfolio</a>
                    <br />
                    <a href="" className="ticket-link">60 Day Challenge</a>
                    <br />
                    <a href="" className="ticket-link">IPO</a>
                    <br />
                    <a href="" className="ticket-link">Referral Program</a>
                </div>


                {/* Coin */}
                <div className="col-4 p-4 mt-2 mb-2">
                    <h4 className="mb-4">
                        <i className="fa fa-circle-o me-2" aria-hidden="true"></i>
                        Coin
                    </h4>

                    <a href="" className="ticket-link">
                        Understanding Mutual Funds
                    </a>
                    <br />
                    <a href="" className="ticket-link">About Coin</a>
                    <br />
                    <a href="" className="ticket-link">
                        Buying and Selling through Coin
                    </a>
                    <br />
                    <a href="" className="ticket-link">Starting an SIP</a>
                    <br />
                    <a href="" className="ticket-link">Managing your Portfolio</a>
                    <br />
                    <a href="" className="ticket-link">Coin App</a>
                    <br />
                    <a href="" className="ticket-link">Moving to Coin</a>
                    <br />
                    <a href="" className="ticket-link">Government Securities</a>
                </div>

            </div>
        </div>
    );
}

export default CreateTicket;