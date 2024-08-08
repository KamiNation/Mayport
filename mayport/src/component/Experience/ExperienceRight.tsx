import ImgComponent from "../customcomponent/ImgComponent"
import { top1rightmap } from "../constant/global"


const ExperienceRight: React.FC<top1rightmap> = ({ p1, p2, image }) => {
  return (

    <div className="flex  mr-8">
      <div className="  mr-4">
          <div className="bg-customRed w-24 h-24 rounded-207 ">
        <ImgComponent
          image={image}
          
        />
      </div>
      </div>
    
      <div className="flex flex-col mt-0">
        <p className="text-20 flex mb-2">{p1} </p>
        <p className="flex-row text-14 text-customGray">{p2}</p>
      </div>
    </div>

  )
}

export default ExperienceRight