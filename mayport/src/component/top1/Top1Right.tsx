
import ImgComponent from "../customcomponent/ImgComponent"
import { top1rightmap } from "../constant/global"


const Top1Right: React.FC<top1rightmap> = ({ image, p1, p2 }) => {
    return (
        <>
            <div className="flex mr-8 sm:mr-4 ">
                <ImgComponent
                    image={image}
                />
                <div className="flex flex-col ml-4 sm:ml-0 sm:flex sm:items-center sm:justify-center sm:mt-0 sm:p-0">
                    <p className="text-base text-customBlack sm:text-sm sm:p-0">{p1}</p>
                    <p className="text-xs text-customGray sm:p-0">{p2}</p>
                </div>
            </div>
        </>
    )
}

export default Top1Right

