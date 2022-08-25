import NavButton from "./NavButton"
import logo from "../../../public/T_logo.png"
import Image from "next/image"
import { FcDatabase } from 'react-icons/fc'
import { useState } from "react"


const NavBar = () => {

    const [menyToggle, setMenyToggle] = useState(false);

    return (
        <>
            <div className=" bg-[#F4F1DE] top-0 left-0 w-screen h-[6rem] fixed z-10 shadow-sm shadow-gray-800 2xl:visible invisible ">
                <div className=" h-[6rem] w-[6rem] relative float-left">
                    <Image src={logo} alt="no img" />
                </div>
                <ul>
                    <NavButton title="Languages" scrollToId="languages" />
                    <NavButton title="Experience" scrollToId="experience" />
                    <NavButton title="Education" scrollToId="edu_background" />
                    <NavButton title="About Me" scrollToId="about" />
                    <NavButton title="Intro" scrollToId="intro" />
                </ul>
            </div>

            <div className=" bg-[#F4F1DE] top-0 left-0 w-screen h-[6rem] fixed z-10 shadow-sm shadow-gray-800 2xl:invisible visible ">
                <div className=" h-[6rem] w-[6rem] relative float-left">
                    <Image src={logo} alt="no img" />
                </div>
                <div className=" h-full w-[6rem] float-right cursor-pointer hover:bg-[#E07A5F] transition-colors duration-300 ease-linear " onClick={() => setMenyToggle(!menyToggle)} >
                    <FcDatabase className=' h-full w-full ' />
                </div>
            </div>
            <div className={` fixed flex left-0 top-[6rem]  w-[15rem] z-10 bg-[#F4F1DE] shadow-sm shadow-gray-800 2xl:invisible visible ${menyToggle ? 'visible' : 'invisible'}`}>
                <ul>
                    <NavButton title="Intro" scrollToId="intro" />
                    <NavButton title="About Me" scrollToId="about" />
                    <NavButton title="Education" scrollToId="edu_background" />
                    <NavButton title="Experience" scrollToId="experience" />
                    <NavButton title="Languages" scrollToId="languages" />
                </ul>
            </div>
        </>
    )
}

export default NavBar