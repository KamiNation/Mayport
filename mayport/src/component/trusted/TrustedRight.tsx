

import { trustedimage } from "../constant/global"
import ImgComponent from "../customcomponent/ImgComponent"


const TrustedRight: React.FC<trustedimage> = ({ image }) => {
    return (

        <ImgComponent
            classname="w-190 h-112 justify-around"
            alt="trusetd-companies-logo"
            image={image}
        />
    )
}

export default TrustedRight