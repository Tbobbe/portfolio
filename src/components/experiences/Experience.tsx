
import Image, { StaticImageData } from "next/image"
import { useInView } from "react-intersection-observer";

const Experience = ({image, heading, content, period}: {image: StaticImageData, heading: string, content: string, period: string}) => {

    const { ref: experience, inView: experienceInView } = useInView();

    return (
        <div ref={experience} className={` w-[90%] 2xl:h-[35rem] h-[45rem] rounded-2xl bg-[#F4F1DE] mx-auto flex items-center justify-between p-16 mb-[5rem] transition-all duration-1000 ease-linear ${experienceInView ? ' -translate-y-10 opacity-100' : 'opacity-0' }`}>
            <div className=" rounded-2xl h-[80%] w-[20%] " >
                <Image src={image} alt={"No image"} />
            </div>
            <div className="h-[80%] w-[70%] rounded-xl">
                <h1 className=" text-6xl text-[#E07A5F] ">
                    {heading}
                </h1>
                <p className=" text-2xl ">
                    {period}
                </p>
                <p className=" text-2xl mt-[2rem] text-[#3D405B]">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default Experience