import TopFooterForm from "./TopFooterForm"
import TopFooterMap from "./TopFooterMap"






const TopFooterHome = () => {
  return (
    <div className="flex justify-between  items-center border-b border-b-customBrown  pb-[2.9rem] gap-x-6
      
    lg:flex-col lg:mb-4 sm:p-2 md:p-2 sm:flex-col md:flex-col sm:mb-4 md:mb-4 sm:mt-4 md:mt-4">
        <TopFooterMap />
        
        <TopFooterForm />
    </div>
  )
}

export default TopFooterHome