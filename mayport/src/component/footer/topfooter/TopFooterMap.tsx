

import { TopFooterContent, top1rightmap } from "../../constant/global"
import TopFooterIndex from "./TopFooterIndex"

const TopFooterMap = () => {
    return (
        <div className="flex flex-col ">
            {
            TopFooterContent.map((topfootercontent: top1rightmap) => (
                <TopFooterIndex 
                image={topfootercontent.image}
                p1={topfootercontent.p1}
                p2={topfootercontent.p2}
                />
            ))
            }
        </div>
    )
}

export default TopFooterMap



