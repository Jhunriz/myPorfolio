import { Link } from "@inertiajs/react";
import { React, useState } from "react";

export default function SideNav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="sticky lg:flex- lg:flex-grow gap-5 justify-center items-center p-10 lg:p-8 shadow-2xl w-full top-0 bg-white z-50">
            <div
                className="lg:hidden justify-end cursor-pointer"
                onClick={toggleMenu}
            >
                <ion-icon name="menu-outline"></ion-icon>
            </div>
            <div
                className={`lg:flex lg:justify-center flex flex-col lg:flex-row items-center gap-5 ${
                    menuOpen ? "flex" : "hidden"
                } mt-5`}
            >
                <p className="hover:font-bold cursor-pointer ">Home</p>
                <p className="hover:font-bold cursor-pointer">Services</p>
                <p className="hover:font-bold cursor-pointer">About</p>
                <Link href="skills">
                    <p className="hover:font-bold cursor-pointer">Skills</p>
                </Link>
                <p className="hover:font-bold cursor-pointer">Portfolio</p>
                <p className="hover:font-bold cursor-pointer">Blog</p>
                <p className="hover:font-bold cursor-pointer">Contacts</p>
            </div>
        </div>
    );
}
