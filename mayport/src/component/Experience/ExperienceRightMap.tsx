



import { ExperinceRightMap, top1rightmap } from "../constant/global"
import ExperienceRight from "./ExperienceRight"


const ExperienceRightMap = () => {
  return (
    <div className="flex sm:flex sm:flex-col flex-1 ">
      {
        ExperinceRightMap.map((experiencerightmap: top1rightmap) => (
          <ExperienceRight
          key={experiencerightmap.id}
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