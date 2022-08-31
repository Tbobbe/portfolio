import Experience from "./Experience"
import { ExperiencesObject } from "./ExperienceTypes"

const Experiences = ({data}: {data: ExperiencesObject}) => {

    return (
        <div className="flex w-screen">
            <div id={`${data.title}`} className={` w-screen md:pt-[20rem] md:mb-[20rem] pt-[10rem] mb-[10rem] `} >
                {data.entries.map((entry) => {
                    return <Experience data={entry} key={entry.heading} />
                })}
            </div>
        </div>
    )
}

export default Experiences