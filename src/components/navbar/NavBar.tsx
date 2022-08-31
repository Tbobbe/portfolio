import NavButton from "./NavButton"
import Image, { StaticImageData } from "next/image"
import { FcDatabase } from 'react-icons/fc'
import { useState } from "react"
import ContentObject from "../../contentType"

const getTitles = (content: ContentObject): string[] => {
    const entries = Object.values(content).reduce(
        (accVal, curVal) => {
            if(curVal.title) accVal.push(curVal.title);
            return accVal;
        },
        []
    );
    return entries;
}

const NavBar = ({content}: {content: ContentObject}) => {

    const [menyToggle, setMenyToggle] = useState(false);

    const entries = getTitles(content)

    const logo: StaticImageData = require(`../../../public/images/${content.logo}`)

    return (
        <>
            <div className=" bg-[#F4F1DE] top-0 left-0 w-screen h-[6rem] fixed z-10 shadow-sm shadow-gray-800 2xl:visible invisible ">
                <div className=" md:w-[6rem] w-[3rem] relative float-left">
                    <Image src={logo} alt="no img" />
                </div>
                <ul>
                    {entries.reverse().map((entry) => {
                        return(
                            <NavButton title={entry.toUpperCase()} scrollToId={entry} key={entry} />
                        )
                    })}
                </ul>
            </div>

            <div className=" bg-[#F4F1DE] top-0 left-0 w-screen md:h-[6rem] h-[3rem] fixed z-10 shadow-sm shadow-gray-800 2xl:invisible visible ">
                <div className="md:w-[6rem] w-[3rem] relative float-left">
                    <Image src={logo} alt="no img" />
                </div>
                <div className="md:w-[6rem] w-[3rem] float-right cursor-pointer hover:bg-[#E07A5F] transition-colors duration-300 ease-linear " onClick={() => setMenyToggle(!menyToggle)} >
                    <FcDatabase className=' h-full w-full ' />
                </div>
            </div>
            <div className={` fixed flex left-0 md:top-[6rem] top-[3rem]  md:w-[15rem] w-[10rem] z-10 bg-[#F4F1DE] shadow-sm shadow-gray-800 2xl:invisible visible ${menyToggle ? 'visible' : 'invisible'}`}>
                <ul>
                    {entries.map((entry) => {
                        return(
                            <NavButton title={entry} scrollToId={entry} key={entry} />
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default NavBar