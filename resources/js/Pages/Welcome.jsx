import Checkbox from "@/Components/Checkbox";
import SideNav from "@/Layouts/SideNav";
import { Link, Head } from "@inertiajs/react";
import programmer from "../../../public/programmer.png";
import SecondaryButton from "@/Components/SecondaryButton";
import Skills from "./Skills";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="MyPorfolio" />
            <SideNav />

            <div className="flex justify-center items-center p-32 lg:p-24">
                <img src={programmer} className="z-20" />
                <p className="text-6xl lg:text-8xl font-extrabold absolute z-10 uppercase">
                    Full Stack web developer
                </p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <p className="lg:text-5xl text-2xl font-bold uppercase">
                    A Full Stack Web Developer
                </p>
                <p className="lg:text-2xl px-10 font-bold text-gray-500 py-5">
                    Hey, I am
                    <strong className="text-black uppercase">
                        Jhunriz Baroma Lalata
                    </strong>{" "}
                    {}a Full Stack Developer I have Experience in Coding for 4
                    years
                </p>
                <div className="flex flex-grow justify-center items-center gap-5">
                    <a href="https://www.linkedin.com/in/jhunriz-b-lalata-036a6b272/">
                        <SecondaryButton>
                            <div className="flex flex-grow justify-center items-center gap-1">
                                <ion-icon name="logo-linkedin"></ion-icon>
                                LinkedIn
                            </div>
                        </SecondaryButton>
                    </a>
                    <button className="`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-dark-300 uppercase tracking-widest shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150">
                        <div className="flex justify-center items-center gap-1">
                            <ion-icon name="logo-github"></ion-icon>Github
                        </div>
                    </button>
                </div>
            </div>
            <div className="py-24 flex justify-center">
                <Skills />
            </div>
        </>
    );
}
