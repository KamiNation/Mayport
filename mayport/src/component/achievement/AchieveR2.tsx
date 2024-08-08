

// import { useState } from "react"
import { top1rightmap } from "../constant/global"

const AchieveR2: React.FC<top1rightmap> = ({ image, p1, p2 }) => {

    // const [show, setShow] = useState(false)

    return (
        <div className="flex ">
            <div
                style={{
                    backgroundImage: `url(${image})`
                }}
                className="flex h-[300px] w-[289px] bg-cover bg-no-repeat justify-center items-center sm:w-[200px] md:w-[418px] "
            >
                <div className="flex flex-col gap-y-7  ">
                    <p className="text-32 text-custom2White sm:text-[24px] md:text-[28px]">  {p1}</p>
                    <p className="bg-customRed p-2 rounded-sm text-custom2White text-16 w-91 h-39">
                        {p2} </p>
                </div>
            </div>

        </div>
    )
}

export default AchieveR2