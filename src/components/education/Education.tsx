import Image, { StaticImageData } from "next/image"
import { useInView } from "react-intersection-observer";
import { EducationObject } from "./EducationTypes"



const Education = ({data}: {data:EducationObject}) => {

    const { ref: background, inView: backgroundInView } = useInView();
    const { ref: logo, inView: logoInView } = useInView();
    const { ref: textbox, inView: textboxImgInView } = useInView();

    const mainImage: StaticImageData = require(`../../../public/images/${data.mainImage}`)
    const image1: StaticImageData = require(`../../../public/images/${data.image1}`)
    const image2: StaticImageData = require(`../../../public/images/${data.image2}`)
    const image3: StaticImageData = require(`../../../public/images/${data.image3}`)

    return (
            <div ref={background} className={`  w-[90%] rounded-xl bg-[#F4F1DE] h-[40rem] mx-auto md:mb-[40rem] mb-[20rem]`}>
                <div ref={logo} className={` rounded-full top-[-15rem] 2xl:left-[5rem] -left-10 2xl:mx-0 mx-auto md:h-[25rem] h-[20rem] md:w-[25rem] w-[20rem] md:border-8 border-4 border-[#3D405B] relative transition-all duration-1000 ease-linear ${logoInView ? 'translate-x-10 opacity-100' : 'opacity-0'} `}>
                    <Image src={mainImage} alt={"Chalmers"} className="rounded-full " />
                </div>
                <div ref={textbox} className={` 2xl:float-right 2xl:mr-[5%] mx-auto 2xl:left-0 left-10 flex-grow 2xl:w-[50%] w-[80%] 2xl:top-[-40rem] md:top-[-5rem] top-[-10rem] md:border-8 border-4 border-[#3D405B] bg-[#F4F1DE] rounded-xl relative md:p-8 p-2 transition-all duration-1000 ease-linear ${textboxImgInView ? '-translate-x-10 opacity-100' : 'opacity-0'} `}>
                    <h1 className="  text-[#E07A5F] ">
                        {data.heading}
                    </h1>
                     <p className=" md:text-2xl text-xl ">
                        {data.years}
                    </p>
                    <p className=" md:text-2xl text-xl text-[#3D405B] mt-[2rem] " >
                        {data.text}     
                    </p>
                </div> 
                <div className=" flex absolute mx-auto w-[90%] h-[24rem] items-center justify-between invisible 2xl:visible ">
                    <div className=" rounded-xl w-[28.5rem] h-[80%] border-8 border-[#3D405B]">
                        <Image src={image1} alt={"Bar"} />
                    </div>
                    <div className=" rounded-xl w-[28.5rem] h-[80%] border-8 border-[#3D405B]">
                        <Image src={image2} alt={"Party"} />
                    </div>
                    <div className=" rounded-xl w-[28.5rem] h-[80%] border-8  border-[#3D405B]">
                        <Image src={image3} alt={"Another bar"} />
                    </div>
                </div> 
            </div>
    )

}

export default Education