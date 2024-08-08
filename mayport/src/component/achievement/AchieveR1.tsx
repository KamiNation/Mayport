

import { top1rightmap } from "../constant/global"

const AchieveR1: React.FC<top1rightmap> = ({ image, p2, p1, p3 }) => {
    return (
        <div
        style={{
            backgroundImage: `url(${image})`, 
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}
        className="flex flex-col h-300 justify-center items-center opacity-70 sm:p-4 sm:w-[256px] sm:mb-4 sm:flex sm:flex-col"
        >
            <div className="px-32 gap-y-4  justify-center items-center flex flex-col sm:px-0 sm:justify-center sm:flex ">
            <div className="flex flex-col sm:flex sm:justify-center sm:items-end ">
                <p className="flex text-custom2White text-4xl sm:text-2xl"> {p1}</p>
                <p className="flex text-custom2White text-base sm:text-sm">{p2}</p>
            </div>
            <div className="flex-row bg-customRed p-3 rounded-sm gap-3 text-custom2White text-base ">
                <p className="flex-row">{p3}</p>
            </div>
            </div>
        </div>
    )
}

export default AchieveR1