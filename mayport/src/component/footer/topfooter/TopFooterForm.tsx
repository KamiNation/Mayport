




const TopFooterForm = () => {
    return (
        <div className="flex flex-col gap-y-5 flex-1 ">
            <p className="text-base text-custom2White
            lg:text-2xl
            sm:text-xs md:text-base">SIGN UP TO STAY UPDATED</p>
            <form className="flex flex-col">
                <label htmlFor="Email" className="flex text-base text-custom2White sm:text-xs md:text-base ">Email Address:</label>
                <input type="email" name="email" id="Email" placeholder="Type Email Address" />
                <button className="bg-customRed w-[5.8rem] h-[2.4rem] text-16 mt-4 text-custom2White sm:text-xs md:text-xs">Subscribe</button>
            </form>
        </div>
    )
}

export default TopFooterForm