import ImgComponent from "../customcomponent/ImgComponent"
import { top1rightmap } from "../constant/global"


const ExperienceRight: React.FC<top1rightmap> = ({ p1, p2, image }) => {
  return (

    <div className="flex flex-1 mr-8 sm:mb-4">
      <div className="mr-4 sm:mr-0 ">
          <div className="bg-customRed w-24 h-24 rounded-207 ">
        <ImgComponent image={image} />
      </div>
      </div>
      <div className="flex flex-1 flex-col mt-0">
        <p className="text-20 flex-1 sm:items-center sm:justify-center flex mb-2"> {p1} </p>
        <p className="flex-row flex-1 text-14 text-customGray">{p2}</p>
      </div>
    </div>

  )
}

export default ExperienceRight