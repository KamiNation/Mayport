

import { AchieveR1Content, AchieveR2Content, top1rightmap } from "../constant/global"
import AchieveR1 from "./AchieveR1"
import AchieveR2 from "./AchieveR2"

const AchieveRightMap = () => {
    return (

        <>  
        <div className="flex flex-1 mt-4 sm:flex-col sm:mb-4 md:flex-col md:mb-4 lg:flex-col lg:mb-6 xl:flex-col xl:mb-4">
            {
                AchieveR1Content.map((achiever1item: top1rightmap) => (
                    <AchieveR1
                        key={achiever1item.id}
                        image={achiever1item.image}
                        p1={achiever1item.p1}
                        p2={achiever1item.p2}
                        p3={achiever1item.p3}

                    />
                ))
            }
        </div>
            <div className="flex flex-1 sm:flex-col md:flex-col lg:flex-col xl:flex-col xl:gap-y-4">
                {
                    AchieveR2Content.map((achiever2item: top1rightmap) => (
                        <AchieveR2
                            key={achiever2item.id}
                            image={achiever2item.image}
                            p1={achiever2item.p1}
                            p2={achiever2item.p2}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default AchieveRightMap