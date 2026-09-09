import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaWhatsapp,
    FaTelegramPlane
} from 'react-icons/fa';

import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
    return (
        <footer className="footer">

            <div className="container border-top">

                {/* Main Footer Row */}
                <div className="row footer-row">

                    {/* Account / Logo Section */}
                    <div className="col-md-3">
                        <img
                            src="media/images/logo.svg"
                            className="footer-logo"
                            alt="Zerodha"
                        />

                        <p className="footer-copyright">
                            &copy; 2010 - 2026, Zerodha Broking Ltd.
                            <br />
                            All rights reserved.
                        </p>

                        <div className="social-icons">

                            {/* First Row */}
                            <div className="social-row">
                                <a href="" aria-label="X">
                                    <FaXTwitter />
                                </a>

                                <a href="" aria-label="Facebook">
                                    <FaFacebook />
                                </a>

                                <a href="" aria-label="Instagram">
                                    <FaInstagram />
                                </a>

                                <a href="" aria-label="LinkedIn">
                                    <FaLinkedinIn />
                                </a>
                            </div>

                            {/* Second Row */}
                            <div className="social-row">
                                <a href="" aria-label="YouTube">
                                    <FaYoutube />
                                </a>

                                <a href="" aria-label="WhatsApp">
                                    <FaWhatsapp />
                                </a>

                                <a href="" aria-label="Telegram">
                                    <FaTelegramPlane />
                                </a>
                            </div>
                        </div>

                        <div className="app-badges">
                            <img
                                src="media/images/googlePlayBadge.svg"
                                alt="Google Play"
                            />

                            <img
                                src="media/images/appstoreBadge.svg"
                                alt="App Store"
                            />
                        </div>
                    </div>


                    {/* Account */}
                    <div className="col-md-3">
                        <p className="footer-heading">
                            Account
                        </p>

                        <a href="" className="footer-link">
                            Open demat account
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            Minor demat account
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            NRI demat account
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            HUF demat account
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            Commodity
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            Dematerialisation
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            Fund transfer
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            MTF
                        </a>
                        <br />
                    </div>


                    {/* Support */}
                    <div className="col-md-3">
                        <p className="footer-heading">
                            Support
                        </p>

                        <a href="" className="footer-link">
                            Contact us
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            Support portal
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            How to file a complaint?
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            Status of your complaints
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            Bulletin
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            Circular
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            Z-Connect blog
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            Downloads
                        </a>
                        <br />
                    </div>


                    {/* Company */}
                    <div className="col-md-3">
                        <p className="footer-heading">
                            Company
                        </p>

                        <a href="" className="footer-link">
                            About
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            Philosophy
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            Press & media
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            Careers
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            Zerodha Cares (CSR)
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            Zerodha.tech
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            Open source
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            Referral program
                        </a>
                        <br />
                    </div>


                    {/* Quick Links */}
                    <div className="col-md-3">
                        <p className="footer-heading">
                            Quick links
                        </p>

                        <a href="" className="footer-link">
                            Upcoming IPOs
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            Brokerage charges
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            Market holidays
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            Economic calendar
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            Calculators
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            Markets
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            Sectors
                        </a>
                        <br />

                        <a href="" className="footer-link">
                            Gift Nifty
                        </a>
                        <br />
                    </div>

                </div>


                {/* Legal Information */}
                <div className="footer-legal">

                    <p>
                        Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                    </p>

                    <p>
                        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                    </p>

                    <p>
                        Smart Online Dispute Resolution | Grievances Redressal Mechanism
                    </p>

                    <p>
                        Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    </p>

                    <p>
                        Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                    </p>

                    <p>
                        India's largest broker based on networth as per NSE. NSE broker factsheet
                    </p>

                    <p>
                        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
                    </p>

                    <p>
                        *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
                    </p>

                    <p>
                        Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).
                    </p>


                    {/* Bottom Links */}
                    <div className="bottom-links">

                        <a href="" className="text-body-secondary text-decoration-none">
                            NSE
                        </a>

                        <a href="" className="text-body-secondary text-decoration-none">
                            BSE
                        </a>

                        <a href="" className="text-body-secondary text-decoration-none">
                            MCX
                        </a>

                        <a href="" className="text-body-secondary text-decoration-none">
                            MSEI
                        </a>

                        <a href="" className="text-body-secondary text-decoration-none">
                            Terms & conditions
                        </a>

                        <a href="" className="text-body-secondary text-decoration-none">
                            Policies & procedures
                        </a>

                        <a href="" className="text-body-secondary text-decoration-none">
                            Privacy policy
                        </a>

                        <a href="" className="text-body-secondary text-decoration-none">
                            Disclosure
                        </a>

                        <a href="" className="text-body-secondary text-decoration-none">
                            For investor's attention
                        </a>

                        <a href="" className="text-body-secondary text-decoration-none">
                            Investor charter
                        </a>

                        <a href="" className="text-body-secondary text-decoration-none">
                            Sitemap
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;