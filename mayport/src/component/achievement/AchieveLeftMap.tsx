



import { AchieveLeftContent, top1rightmap } from "../constant/global"
import AchieveCard from "./AchieveCard"


const AchieveLeftMap = () => {
    return (
        <div className="flex bg-customBlue py-24 px-36 sm:p-0 md:p-0 justify-between items-center gap-x-10 lg:flex lg:flex-wrap lg:flex-col lg:gap-y-5
     sm:flex  md:flex sm:flex-wrap md:flex-wrap sm:gap-y-5 md:gap-y-5 sm:flex-col md:flex-col">
            {
                AchieveLeftContent.map((achieveleftcontentitem: top1rightmap) => (
                    <AchieveCard
                        key={achieveleftcontentitem.id}
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