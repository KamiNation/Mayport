
import ImgComponent from "../customcomponent/ImgComponent"
import { top1rightmap } from "../constant/global"


const Top1Right: React.FC<top1rightmap> = ({ image, p1, p2 }) => {
    return (
        <>
            <div className="flex mr-8 md:mr-4 sm:mr-4 ">
                <ImgComponent
                    image={image}
                />
                <div className="flex flex-col ml-4 md:ml-0 sm:ml-0 md:flex sm:flex md:items-center sm:items-center md:justify-center sm:justify-center md:mt-0 md:p-0 sm:mt-0 sm:p-0">
                    <p className="text-base text-customBlack sm:text-sm sm:p-0">{p1}</p>
                    <p className="text-xs text-customGray sm:p-0">{p2}</p>
                </div>
            </div>
        </>
    )
}

export default Top1Right

