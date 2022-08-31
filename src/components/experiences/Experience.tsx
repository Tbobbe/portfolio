
import Image, { StaticImageData } from "next/image"
import { useInView } from "react-intersection-observer";
import { ExperienceObject } from "./ExperienceTypes";

const Experience = ({data}: {data: ExperienceObject}) => {

    const { ref: experience, inView: experienceInView } = useInView();

    const logo: StaticImageData = require(`../../../public/images/${data.logo}`)

    return (
        <div ref={experience} className={` 2xl:w-[90%] w-[80%] flex-grow rounded-2xl bg-[#F4F1DE] mx-auto 2xl:flex 2xl:items-center 2xl:justify-between mb:p-16 p-8 mb-[5rem] transition-all duration-1000 ease-linear ${experienceInView ? ' -translate-y-10 opacity-100' : 'opacity-0' }`}>
            <div className=" rounded-2xl md:h-[20rem] h-[15rem] md:w-[20rem] w-[15rem] 2xl:ml-[3%] mx-auto " >
                <Image src={logo} alt={"No image"} />
            </div>
            <div className="h-[80%] md:w-[70%] w-[90%] rounded-xl mx-auto 2xl:text-left text-center 2xl:mt-0 mt-[4rem] ">
                <h1 className=" text-[#E07A5F] ">
                    {data.heading}
                </h1>
                <p className=" md:text-2xl text-xl ">
                    {data.years}
                </p>
                <p className=" md:text-2xl text-xl mt-[2rem] text-[#3D405B]">
                    {data.text}
                </p>
            </div>
        </div>
    )
}

export default Experience