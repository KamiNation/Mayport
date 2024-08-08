

import WhatMap from "./WhatMap"

const HomeWhat = () => {
    return (
        <div className="mt-8">
            <div className="flex flex-col gap-y-8 mb-4 ">
                <p className="flex text-28 sm:text-[24px] md:text-[26px] sm:items-center lg:items-center md:items-center sm:justify-center md:justify-center lg:justify-center">
                    What We Do
                </p>
                <p className="flex text-20v1 text-customGray sm:text-[15px] md:text-[18px] lg:text-[22px]">
                    MAYPORT OIL AND GAS is an integrated energy services company focused on energy business, construction, and marine services.
                    Our company has a global competitive edge with a professional team that reﬂects our expertise, experience, and proﬁciency within the industry's value chain. We are committed to excellence through systemic and disciplined management of our operations as we hold our staﬀ to the highest ethical standards of service delivery in ways that earn the trust of our clients globally.
                    At Mayport, we aim to exceed our client's expectations in our unrelenting quest to satisfy them based on quality delivery of our services within the agreed time frame within the agreed budget, making us the preferred service provider among our competitors.
                </p>
            </div>
            <WhatMap />
        </div>
    )
}

export default HomeWhat