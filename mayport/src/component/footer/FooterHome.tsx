import IndexBottomFooter from "./bottomfooter/IndexBottomFooter"
import IndexMiddleFooter from "./middlefooter/IndexMiddleFooter"
import TopFooterHome from "./topfooter/TopFooterHome"





const FooterHome = () => {
    return (
        <div className="bg-customBlack flex flex-1 
        flex-col px-[3rem] py-[3rem]  sm:p-4 lg:px-[5rem] lg:py-[2.5rem] lg:mt-4 sm:mt-4 md:p-4 md:mt-4">
            <TopFooterHome />
            <IndexMiddleFooter />
            <IndexBottomFooter />
        </div>
    )
}

export default FooterHome