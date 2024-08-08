import IndexBottomFooter from "./bottomfooter/IndexBottomFooter"
import IndexMiddleFooter from "./middlefooter/IndexMiddleFooter"
import TopFooterHome from "./topfooter/TopFooterHome"





const FooterHome = () => {
    return (
        <div className="bg-customBlack flex flex-1 flex-col px-[120px] py-[48px] sm:p-0 lg:px-[80px] lg:py-[40px] lg:mt-4 sm:mt-4 md:p-0 md:mt-4">
            <TopFooterHome />
            <IndexMiddleFooter />
            <IndexBottomFooter />
        </div>
    )
}

export default FooterHome