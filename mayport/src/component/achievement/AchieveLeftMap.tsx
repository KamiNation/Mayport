



import { AchieveLeftContent, top1rightmap } from "../constant/global"
import AchieveCard from "./AchieveCard"


const AchieveLeftMap = () => {
    return (
        <div className="flex bg-customBlue py-24 px-36 sm:p-0 justify-between items-center gap-x-10 sm:flex sm:flex-wrap sm:gap-y-5 sm:flex-col ">
            {
                AchieveLeftContent.map((achieveleftcontentitem: top1rightmap) => (
                    <AchieveCard
                        image={achieveleftcontentitem.image}
                        p1={achieveleftcontentitem.p1}
                        p2={achieveleftcontentitem.p2}
                    />
                ))
            }
        </div>
    )
}

export default AchieveLeftMap