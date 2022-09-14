import Head from 'next/head'
import ProductCard from 'components/ProductCard'
import contentful from 'lib/contentful'

export async function getStaticPaths() {
  const categories = await contentful.getEntries({
    content_type: 'category',
  })
  
  const paths = categories.items.map(category => ({
    params: {
      category: category.fields.slug,
      id: category.sys.id
    }
  }))

  return {
    fallback: 'blocking',
    paths,
  }
}


export async function getStaticProps({ params }) {
  const { category } = params

  const categoryEntry = await contentful.getEntries({
    content_type: 'category',
    'fields.slug': category
  })

  if(!categoryEntry.items.length) {
    return {
      props: {
        error: true
      },
    }
  }
  
  const categoryId = categoryEntry.items[0].sys.id
    const products = await contentful.getEntries({
      content_type: 'product',
      limit: 10,
      include: 10,
      'fields.categories.sys.id': categoryId
    })
  
    return {
      props: {
        category: categoryEntry.items[0],
        products: products.items
      },
    }

}

export default function CategoryPage({ category, products, error }) {
  
  if(error) {
    return (<><h1>Not Found</h1></>)
  }
  
  return (
    <>
      <Head>
        <title>{category.fields.title}</title>
        <meta name="description" content={category.fields.description} />
      </Head>
      <main className='p-2'>
        <h1 className='font-bold text-5xl text-center mb-4'>{category.fields.title}</h1>
        <section className="p-10 ">
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {products.map(product => <ProductCard key={product.sys.id} product={product} />)}
          </div>
        </section>
      </main>
    </>
  )
}