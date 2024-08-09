

import { footer } from "../../constant/global"




const MiddleFooterHome: React.FC<footer> = ({ parent, child, child1, child2, child3 }) => {
    return (
        <div className="flex flex-col gap-y-8 pt-[2.5rem] pb-[4.6rem] flex-1">
            <div>
                <div className="text-20 text-custom2White lg:text-[1.1rempx]">{parent}</div>
            </div>
            <div className="flex flex-col gap-y-4 ">
                <div className="text-14 lg:text-[1.1rem]  text-custom2Brown">{child}</div>
                <div className="text-14 lg:text-[1.1rem]  text-custom2Brown">{child1}</div>
                <div className="text-14 lg:text-[1.1rem]  text-custom2Brown">{child2}</div>
                <div className="text-14 lg:text-[1.1rem]  text-custom2Brown">{child3}</div>
            </div>
        </div>
    )
}

export default MiddleFooterHome