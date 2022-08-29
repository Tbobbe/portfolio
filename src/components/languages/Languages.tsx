
import { useInView } from "react-intersection-observer";

import haskell_logo from "../../../public/images/haskell_logo.png"
import scala_logo from "../../../public/images/scala_logo.png"
import Language from "./Language"
import { LanguagesObject } from "./LanguageTypes";


const Languages = ({data}: {data: LanguagesObject}) => {
    
    const { ref: languages, inView: languagesInView } =  useInView();
    
    return (
        <div className="flex">
            <div ref={languages} id="languages" className={` w-screen pt-[10rem] transition-all duration-1000 ease-linear ${languagesInView ? 'translate-y-10 opacity-100' : 'opacity-0'}`}>
                <div className=" w-[90%] 2xl:h-[9rem] xl:h-[13rem] h-[15rem] rounded-xl bg-[#F4F1DE] mb-[10rem] mx-auto border-8 border-[#3D405B] text-center p-8 ">
                    <h1 className=" text-[#E07A5F] ">
                        My Favorite Programming Languages
                    </h1>
                </div>
                {data.entries.map((entry) => {
                    return (
                        <Language data={entry} key={entry.heading} />
                    )
                })}
            </div>
        </div>
        
    )

}

export default Languages