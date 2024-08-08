
import oilrig from "../../assets/crane.jpeg"



const ContactHome = () => {
    return (
        <div
            className="flex justify-center items-center flex-col gap-y-8 sm:gap-0 p-8 sm:p-2 sm:w-[256px] md:w-[415px] sm:h-[200px] w-[1164px] h-[548px] bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${oilrig})` }}
        >

            <p className="text-4xl text-custom2White sm:text-[16px] md:text-[24px]">WHY CHOOSE US?</p>
            <p className="text-base text-custom2White sm:text-[10px] md:text-[14px]">Choose Mayport Oil and Gas for innovative solutions, unmatched expertise, sustainable practices, and exceptional client service, ensuring operational excellence and maximized profitability.
            </p>
            <p className="text-48 text-custom2White sm:text-[18px] md:text-[24px]">
                +(234)9168634073
            </p>
        </div>
    )
}

export default ContactHome


