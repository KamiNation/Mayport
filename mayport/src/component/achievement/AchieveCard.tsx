import ImgComponent from "../customcomponent/ImgComponent"


import { top1rightmap } from "../constant/global"

const AchieveCard: React.FC<top1rightmap> = ({ image, p1, p2 }) => {
    return (
        <div className="flex flex-col items-center gap-y-6 sm:flex sm:mt-2">
            <ImgComponent
            imgClass="w-12 h-12 "
                image={image}
            />
            <div className="flex sm:flex sm:justify-center items-center">
                <p className="text-56 text-custom2White mr-4 sm:text-[28px]">  {p1}</p>
                <p className="text-20 text-custom3White sm:text-[10px]">{p2}</p>
            </div>
        </div>
    )
}

export default AchieveCard