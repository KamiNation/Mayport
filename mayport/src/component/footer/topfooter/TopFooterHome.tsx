import TopFooterForm from "./TopFooterForm"
import TopFooterMap from "./TopFooterMap"






const TopFooterHome = () => {
  return (
    <div className="flex justify-between  items-center border-b border-b-customBrown  pb-[47px] sm:p-2 sm:flex-col sm:mb-4 sm:mt-4">
        <TopFooterMap />
        <TopFooterForm />
    </div>
  )
}

export default TopFooterHome