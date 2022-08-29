
import Image, { StaticImageData } from "next/image"
import { useInView } from "react-intersection-observer";
import { ExperienceObject } from "./ExperienceTypes";

const Experience = ({data}: {data: ExperienceObject}) => {

    const { ref: experience, inView: experienceInView } = useInView();

    const logo: StaticImageData = require(`../../../public/images/${data.logo}`)

    return (
        <div ref={experience} className={` 2xl:w-[90%] w-[80%] 2xl:h-[35rem] h-[65rem] rounded-2xl bg-[#F4F1DE] mx-auto 2xl:flex 2xl:items-center 2xl:justify-between p-16 mb-[5rem] transition-all duration-1000 ease-linear ${experienceInView ? ' -translate-y-10 opacity-100' : 'opacity-0' }`}>
            <div className=" rounded-2xl h-[20rem] w-[20rem] 2xl:ml-[3%] mx-auto " >
                <Image src={logo} alt={"No image"} />
            </div>
            <div className="h-[80%] w-[70%] rounded-xl mx-auto 2xl:text-left text-center 2xl:mt-0 mt-[4rem] ">
                <h1 className=" text-6xl text-[#E07A5F] ">
                    {data.heading}
                </h1>
                <p className=" text-2xl ">
                    {data.years}
                </p>
                <p className=" text-2xl mt-[2rem] text-[#3D405B]">
                    {data.text}
                </p>
            </div>
        </div>
    )
}

export default Experience