import React from "react";
import { Link } from "react-router-dom";

const Landing = () => (
    <div className="jumbotron">
        <h2 className="">
            iCodeTill<span className="full-stop">.</span>xyz
        </h2>
        <main className='text-justify'>
            This is a blogging platform for all your tech needs!
            <br />
            I have got you covered in some primary subjects in coding, tech, artificial intelligence, philosophy of science and more,
            <br /> You want me to write on a particular subject?
            <br /> You want to ask questions or make some enquiries?
            <br /> Rest assured, because i got you covered once again!
        </main>
        <hr className="my-4 gold-hr" />
        <p>So, click below, dive right in and start reading!</p>
        <Link
            className="btn btn-sm btn-outline-primary btn-lg"
            to="/posts"
            role="button"
        >
            Blog Posts
        </Link>
    </div>
);

export default Landing;

