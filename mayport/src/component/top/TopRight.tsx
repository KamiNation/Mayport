
import { trustedimage } from "../constant/global"
import ImgComponent from "../customcomponent/ImgComponent"

const TopRight: React.FC<trustedimage> = ({ image, alt, link }) => {
    return (

        <>
            <a href={link} className="mr-3"><ImgComponent
                image={image}
                alt={alt}
            /></a>
        </>
    )
}

export default TopRight
