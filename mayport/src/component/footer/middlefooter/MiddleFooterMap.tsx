

import { MiddleFooterContent, footer } from "../../constant/global"
import MiddleFooterHome from "./MiddleFooterHome"


const MiddleFooterMap = () => {
    return (
        <div className="flex justify-around  items-center border-b border-b-customBrown sm:flex-col">
            {
                MiddleFooterContent.map((middlefootercontent: footer) => (
                    <MiddleFooterHome 
                    parent={middlefootercontent.parent}
                    child={middlefootercontent.child}
                    child1={middlefootercontent.child1}
                    child2={middlefootercontent.child2}
                    child3={middlefootercontent.child3}
                    />
                ))
            }
        </div>
    )
}

export default MiddleFooterMap