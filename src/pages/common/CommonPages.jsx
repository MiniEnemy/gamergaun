import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CommonPages = (props) => {
    console.log(props); // This will log the props to the console for debugging

    return (
        <div className="font-poppins px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-2">
                <div>
                    <h2 className="mb-4 text-3xl font-bold leading-none sm:text-4xl">
                        <span className="mr-2">{props.title}</span>
                        <span className="text-sky-600">{props.subtitle}</span>
                    </h2>
                    <p className="mb-4 text-gray-700">{props.description1}</p>
                    <p className="mb-4 text-gray-700">{props.description2}</p>
                    <Link
                        to={props.visit}
                        className="inline-block py-3 px-4 text-white bg-sky-500 hover:bg-sky-600 rounded-md no-underline"
                    >
                        {props.buttonText}
                    </Link>
                </div>
                <div className="flex justify-center">
                    <img
                        src={props.imageAbout}
                        alt="About us"
                        className="w-full h-full max-w-md object-contain animate-moveUpDown"
                    />
                </div>
            </div>
        </div>
    );
};

export default CommonPages;
