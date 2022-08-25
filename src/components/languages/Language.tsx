import Image, { StaticImageData } from "next/image"
import { useInView } from "react-intersection-observer";

const Language = ({logo, heading, body}: {logo: StaticImageData, heading: string, body: string}) => {

    //const { ref: logoRef, inView: logoInView } = useInView();

    return (

        <div className={` h-[60rem] 2xl:w-[40%] w-[70%] mb-[5rem] bg-[#F4F1DE] rounded-xl 2xl:float-left mx-auto 2xl:ml-[5%] 2xl:mr-[5%] p-10 border-8 border-[#3D405B] `} >
            <div className={` h-[15rem] w-[15rem] mx-auto mb-6 `}>
                <Image src={logo} alt="No logo found" />
            </div>
            <div className=" text-center text-7xl mb-8 text-[#E07A5F] ">
                <h2>{heading}</h2>
            </div>
            <div className=" text-center text-2xl">
                <p>{body}</p>
            </div>
        </div>

    )
}

export default Language