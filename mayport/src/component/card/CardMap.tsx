

import { CardContent, top1rightmap } from '../constant/global'
import CardHome from './CardHome'



const CardMap = () => {
    return (
        <div className='flex w-full flex-1 p-20 gap-x-4 xl:flex-col lg:flex-col sm:p-0 sm:flex-col md:flex-col'>
            {
                CardContent.map((cardcontentitem: top1rightmap) => (
                <CardHome 
                key={cardcontentitem.id}
                image={cardcontentitem.image}
                p1={cardcontentitem.p1}
                p2={cardcontentitem.p2}
                />
            ))
            }
        </div>
    )
}

export default CardMap