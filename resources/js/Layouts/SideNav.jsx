import React from "react";

export default function SideNav() {
    return (
        <div className="flex flex-grow gap-5 justify-center items-center p-9 shadow-2xl position-fixed">
            <p className="hover:font-bold cursor-pointer">Home</p>
            <p className="hover:font-bold cursor-pointer">Services</p>
            <p className="hover:font-bold cursor-pointer">About</p>
            <p className="hover:font-bold cursor-pointer">Skills</p>
            <p className="hover:font-bold cursor-pointer">Porfolio</p>
            <p className="hover:font-bold cursor-pointer">Blog</p>
            <p className="hover:font-bold cursor-pointer">Contacts</p>
        </div>
    );
}
