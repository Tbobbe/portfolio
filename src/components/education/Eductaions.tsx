import { EducationsObject } from "./EducationTypes"
import Education from "./Education"

const Educations = ({data}: {data: EducationsObject}) => {

    return (
        <div className="flex">
            <div id="education" className=" w-screen pt-[30rem] ">
                {data.entries.map((entry => {
                    return(
                        <Education data={entry} key={entry.heading} />
                    )
                }))}
            </div>
        </div>
    )
}

export default Educations