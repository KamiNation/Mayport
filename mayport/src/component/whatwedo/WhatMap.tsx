import { WhatMapContent, top1rightmap } from "../constant/global"
import WhatCard from "./WhatCard"









const WhatMap = () => {
    return (
        <div className="grid grid-cols-3 gap-8 sm:flex sm:flex-wrap md:flex md:flex-wrap lg:flex lg:flex-wrap lg:mb-6">
            {
                WhatMapContent.map((whatmapcontent: top1rightmap) => (
                    <WhatCard
                    key={whatmapcontent.id}
                        image={whatmapcontent.image}
                        p1={whatmapcontent.p1}
                        p2={whatmapcontent.p2}
                        p3={whatmapcontent.p3}
                    />
                ))
            }
        </div>
    )
}

export default WhatMap