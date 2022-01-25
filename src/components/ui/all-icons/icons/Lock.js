import React from "react";

const Lock = ({className}) => {
    return (
        <svg
            className={`stroke-current ${className}`}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 13">
            <defs/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.094 5.281V2.87a2.031 2.031 0 00-4.063 0v2.412"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.906 5.281H2.22C1.546 5.281 1 5.827 1 6.5v4.469c0 .673.546 1.219 1.219 1.219h5.687c.673 0 1.219-.546 1.219-1.22V6.5c0-.673-.546-1.219-1.219-1.219z"/>
        </svg>
    );
};

export default Lock;
