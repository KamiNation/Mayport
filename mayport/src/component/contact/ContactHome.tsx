
import oilrig from "../../assets/crane.jpeg"



const ContactHome = () => {
    return (
        <div
        // xl:w-[704px] lg:w-[587px] sm:w-[256px] md:w-[415px] sm:h-[200px] h-[548px]
            className="flex justify-center items-center flex-col gap-y-8  sm:gap-0 p-8 sm:p-2  flex-1 bg-cover bg-no-repeat w-full"
            style={{ backgroundImage: `url(${oilrig})` }}
        >

            <p className="text-4xl text-custom2White sm:text-[1rem] md:text-[1.5rem] xl:text-[2rem]">WHY CHOOSE US?</p>
            <p className="text-base text-custom2White sm:text-[0.625rem] md:text-[0.875rem] lg:text-[1.25rem] xl:text-base">Choose Mayport Oil and Gas for innovative solutions, unmatched expertise, sustainable practices, and exceptional client service, ensuring operational excellence and maximized profitability.
            </p>
            <p className="text-48 text-custom2White xl:text-[1.75rem] sm:text-[1rem] md:text-[1.5rem] lg:text-[1.8rem]">
            support@mayportoilandgas.com
            </p>
        </div>
    )
}

export default ContactHome


