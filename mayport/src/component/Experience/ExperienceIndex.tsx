

import ExperienceLeft from "./ExperienceLeft"
import ExperienceRightMap from "./ExperienceRightMap"



const ExperienceIndex = () => {
    return (
        <div className="flex flex-1  mt-4 sm:flex md:flex sm:flex-col md:flex-col lg:flex lg:flex-col xl:flex xl:flex-col">
            <ExperienceLeft />
            <div className="flex flex-1 flex-col justify-center items-center ml-4 text-20v1 sm:text-[15px] md:text-[18px] xl:mt-14 lg:text-[22px]">
                <div className="flex flex-col flex-1  gap-y-6 text-customGray mb-16">
                    <p>
                        Over the years, our efficiency and ﬂexibility to handling operations applying to all our relevant Health, Safety, Environment, Community, and Security [HSECS] Policies concerning Human Resources [HR], Technology, and Financial Capability to assess and accept both small, medium-scale, and large-scale oil and gas projects. </p>
                    <p>
                        Our Local-Content policies align with relevant local and international labour regulations giving regard to the host communities where we operate based on the Petroleum Industry Act, PIA as enacted by the Nigerian government.
                    </p>
                </div>
                <ExperienceRightMap />
            </div>
        </div>
    )
}

export default ExperienceIndex