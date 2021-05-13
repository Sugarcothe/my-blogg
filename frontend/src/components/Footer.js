import React from "react";

const Footer = () => (
    <footer>
        Created by <span className='text-warning'id="rajat">Valentine</span>
        <br />
        <span>
            <i
                className="fab fa-github"
                onClick={() =>
                    window.open("https://github.com/Sugarcothe", "_blank")
                }
            ></i>{" "}
           
            <i
                className="fab fa-linkedin"
                onClick={() =>
                    window.open(
                        "https://www.linkedin.com/in/valentine-eze-751a40b2",
                        "_blank"
                    )
                }
            ></i>{" "}
            <i
                className="fab fa-stack-overflow"
                onClick={() =>
                    window.open(
                        "https://stackoverflow.com/users/14275698/eze-valentine-ifeanyichukwu",
                        "_blank"
                    )
                }
            ></i>{" "}
            <i
                className="fab fa-twitter"
                onClick={() =>
                    window.open("https://twitter.com/sweetestshuga", "_blank")
                }
            ></i>
            <i
                className="fab fa-medium"
                onClick={() =>
                    window.open("https://ifeanyivalentine82.medium.com", "_blank")
                }
            ></i>{" "}
            <i
                className="fab fas fa-user-tie"
                onClick={() =>
                    window.open("https://novoresume.com/editor/resume/ece07cb0-87fe-11eb-a08a-2301b924a048", "_blank")
                }
            ></i>
        </span>
    </footer>
);
// <i class="fas fa-user-tie"></i>

export default Footer;
