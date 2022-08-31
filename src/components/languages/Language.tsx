import Image, { StaticImageData } from "next/image"
import { LanguageObject } from "./LanguageTypes";

const Language = ({data}: {data: LanguageObject}) => {

    const image: StaticImageData = require(`../../../public/images/${data.logo}`)

    return (
        <div className={` 2xl:h-[60rem] 2xl:flex-grow-0 flex-grow  2xl:w-[40%] w-[70%] mb-[5rem] bg-[#F4F1DE] rounded-xl 2xl:float-left mx-auto 2xl:ml-[5%] 2xl:mr-[5%] md:p-8 p-4 md:border-8 border-4 border-[#3D405B] `} >
            <div className={` md:h-[15rem] h-[10rem] md:w-[15rem] w-[10rem] mx-auto mb-6 `}>
                <Image src={image} alt="No logo found" />
            </div>
            <div className=" text-center mb-8 ">
                <h1 className="text-[#E07A5F]">{data.heading}</h1>
            </div>
            <div className=" text-center md:text-2xl text-xl">
                <p>{data.text}</p>
            </div>
        </div>
    )
}

export default Language