



import { ExperinceRightMap, top1rightmap } from "../constant/global"
import ExperienceRight from "./ExperienceRight"


const ExperienceRightMap = () => {
  return (
    <div className="flex sm:flex sm:flex-col ">
      {
        ExperinceRightMap.map((experiencerightmap: top1rightmap) => (
          <ExperienceRight
            image={experiencerightmap.image}
            p1={experiencerightmap.p1}
            p2={experiencerightmap.p2}
          />
        ))
      }
    </div>
  )
}

export default ExperienceRightMap