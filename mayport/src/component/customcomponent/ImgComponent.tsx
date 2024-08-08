
import { imgcomponent } from "../constant/global"


const ImgComponent: React.FC<imgcomponent> = ({image, alt, classname, imgClass}) => {
  return (
    <div className={classname}>
        <img src={image} alt={alt} className={imgClass}/>
    </div>
  )
}

export default ImgComponent