import Head from 'next/head'
import contentful from 'lib/contentful'
import Carousel, { CarouselItem } from 'components/Carousel'
import ProductCard from 'components/ProductCard'

import { AiOutlineRight } from 'react-icons/ai' 

export async function getServerSideProps({ req, res }) {

  const homePageEntries = await contentful.getEntries({
    content_type: 'homePage',
    include: 2
  })

  const carouselEntries = await contentful.getEntries({
    content_type: 'carousel',
  })

  const { topBanner } = carouselEntries.items[0].fields
  const { title, products, categoryOrder } = homePageEntries.items[0].fields;

  const data = categoryOrder.reduce((total, category) => {
    const filter = products.filter(p => {
      return p.fields.categories.find(productCategory => productCategory.sys.id === category.sys.id)
    })
    if(filter.length) {
      total[category.fields.slug] = { category: category, products: filter };
    }
    return total
  }, {})

  return {
    props: {
      title: title,
      carousel: topBanner,
      data: data
    },
  }
}

export default function Home({ data, carousel, title }) {

  return (
    <div>
      <Head>
        <title>Products Catalogue</title>
        <meta name="description" content="Products Catalogue home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <Carousel>
            {
              carousel.map((banner) => 
                <CarouselItem key={banner.sys.id}>
                  <picture>
                    <source src={`https:${banner.fields.file.url}`} type={banner.fields.file.contentType} />
                    <img src={`https:${banner.fields.file.url}`} alt={banner.fields.description} />
                  </picture>
                </CarouselItem>
              )
            }
          </Carousel>
        </section>

        <div className='m-8'>
          <h1 className='text-3xl text-center font-bold'>{title}</h1>
        </div>

        {
          Object.keys(data).map(key => (
            <section key={data[key].category.sys.id} className="p-10 ">
              <a className='block transition ease-in-out duration-300 hover:text-gray-500 mb-2'  href={`/categories/${key}`}>
                <h2 className='inline-block align-middle font-bold text-sm'>{data[key].category.fields.title}</h2>
                <span className='inline-block align-middle text-sm'><AiOutlineRight /></span>
              </a>
              <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {data[key].products.map(product => <ProductCard key={product.sys.id} product={product} />)}
              </div>
            </section>
          ))
        }
        
        

      </main>
    </div>
  )
}
