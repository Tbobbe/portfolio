import Experience from "./Experience"
import { ExperiencesObject } from "./ExperienceTypes"

const Experiences = ({data}: {data: ExperiencesObject}) => {

    return (
        <div className="flex w-screen">
            <div id="experience" className={` w-screen pt-[20rem] mb-[20rem] `} >
                {data.entries.map((entry) => {
                    return <Experience data={entry} key={entry.heading} />
                })}
            </div>
        </div>
    )
}

export default Experiences