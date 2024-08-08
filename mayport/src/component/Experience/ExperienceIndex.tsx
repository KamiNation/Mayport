

import ExperienceLeft from "./ExperienceLeft"
import ExperienceRightMap from "./ExperienceRightMap"



const ExperienceIndex = () => {
    return (
        <div className="flex mt-4 sm:flex sm:flex-col">
            <ExperienceLeft />
            <div className="flex flex-col justify-center items-center ml-4 text-20v1 sm:text-[15px]">
                <div className="flex flex-col gap-y-6 text-customGray mb-16">
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