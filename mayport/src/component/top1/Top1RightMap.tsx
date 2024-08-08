

import { TopRightMap } from "../constant/global"
import Top1Right from "./Top1Right"



const Top1RightMap = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex">
                {
                    TopRightMap.map((toprightitem) => (
                        <Top1Right
                        key={toprightitem.id}
                            image={toprightitem.image}
                            p1={toprightitem.p1}
                            p2={toprightitem.p2}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Top1RightMap



