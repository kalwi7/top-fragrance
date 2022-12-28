if (process.env.NODE_ENV !== 'production'){
  require('longjohn');
}
import Fragrance from '../components/Fragrance'

import { baseUrl, fetchApi } from '../utils/fetchApi';


export default function Home({topFragranceMen, topFragranceWomen}) {
  return (
    <div>
      {topFragranceMen.map(fragrance => <Fragrance fragrance={fragrance} key={fragrance.productId} />)}
    </div>
  )
}

export async function getStaticProps(){
  const topFragranceMen =await fetchApi(`${baseUrl}/products/list?categoryId=cat1230040&pageSize=10&currentPage=1&sortBy=P_BEST_SELLING:1`)
  const topFragranceWomen =await fetchApi(`${baseUrl}/products/list?categoryId=cat1230039&pageSize=10&currentPage=1&sortBy=P_BEST_SELLING:1`)

  return {
    props: {
      topFragranceMen: topFragranceMen?.products,
      topFragranceWomen: topFragranceWomen?.products,
    }
  }
}
