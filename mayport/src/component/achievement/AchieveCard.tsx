import ImgComponent from "../customcomponent/ImgComponent"


import { top1rightmap } from "../constant/global"

const AchieveCard: React.FC<top1rightmap> = ({ image, p1, p2 }) => {
    return (
        <div className="flex sm:p-4  flex-col flex-1 items-center gap-y-6 sm:flex sm:mt-2 md:flex md:mt-2 lg:flex lg:mt-2 ">
            <ImgComponent
            imgClass="w-12 h-12 sm:w-8 sm:h-8"
                image={image}
            />
            <div className="flex flex-1 sm:flex md:flex  sm:justify-center lg:ju md:justify-center items-center">
                <p className="text-56 flex-1 text-custom2White mr-4 sm:text-[1.75rem] md:text-[1.875rem]">  {p1} </p>
                <p className="text-20 flex-1 text-custom3White sm:text-[0.8rem] md:text-[0.75rem]"> {p2}</p>
            </div>
        </div>
    )
}

export default AchieveCard