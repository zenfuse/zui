import React from "react";

const Unlock = ({className}) => {
    return (
        <svg
            className={`stroke-current ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 13">
            <defs/>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M7 3.336c0-.505-.21-.99-.586-1.347A2.052 2.052 0 005 1.431c-.53 0-1.04.2-1.414.558A1.86 1.86 0 003 3.336v2.286M7.8 5.622H2.2c-.663 0-1.2.511-1.2 1.142v4.19c0 .632.537 1.144 1.2 1.144h5.6c.663 0 1.2-.512 1.2-1.143v-4.19c0-.632-.537-1.143-1.2-1.143z"/>
        </svg>
    );
};

export default Unlock;
