




const TopFooterForm = () => {
    return (
        <div className="flex flex-col gap-y-5">
            <p className="text-base text-custom2White sm:text-xs">SIGN UP TO STAY UPDATED</p>
            <form className="flex flex-col">
                <label htmlFor="Email" className="flex text-base text-custom2White sm:text-xs ">Email Address:</label>
                <input type="email" name="email" id="Email" placeholder="Type Email Address" />
                <button className="bg-customRed w-[93px] h-[39px] text-16 mt-4 text-custom2White sm:text-xs ">Subscribe</button>
            </form>
        </div>
    )
}

export default TopFooterForm