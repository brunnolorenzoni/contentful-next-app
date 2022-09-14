import Head from 'next/head'
import contentful from 'lib/contentful'
import TagLabel from 'components/TagLabel'

export default function ProductPage({ productName, productDescription, image, tags, brand, categories, price, quantity, sku, website, error }) {
  if (error) {
    return (
      <div>
        <h1>An Error occurred: </h1>
        <h2>{error}</h2>
      </div>
    )
  }

  const { fields: { companyName } } = brand
  
  return (
    <>
      <Head>
        <title>{productName}</title>
        <meta name="description" content={productDescription} />
      </Head>
      <main className='p-2 flex flex-wrap justify-center m-auto w-4/5 max-w-screen-lg'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div id="image-wrapper" className='container  p-4'>
            <picture>
              <source srcSet={`https:${image[0].fields.file.url}`} type={image[0].fields.file.contentType} />
              <img src={`https:${image[0].fields.file.url}`} alt={productName} />
            </picture>
          </div>

          <div id="description-wrapper" className='container p-4'>
            <div>
              {categories.map(category => <span key={category.sys.id} className="text-xs">{category.fields.title}</span>)}
              <h1 className='font-bold text-2xl'>{productName}</h1>
              <span className='text-xs'>{companyName}</span>
            </div>
            <div>
              <p>{productDescription}</p>
            </div>
            <div>
              <span>{price} €</span>
            </div>

          </div>

          

        </div>

        <div className='flex'>
          {tags.map(tag => <TagLabel key={tag}>#{tag}</TagLabel>)}
        </div>

      </main>
    </>
  )
}

/*
<div>
        {categories.map(category => <span key={category.sys.id}>{category.fields.title}</span>)}
      </div>
      
      <div>
        {tags.map(tag => <span key={tag}>{tag}; </span>)}
      </div>

*/

export async function getStaticPaths() {
  const products = await contentful.getEntries({
    content_type: 'product',
  })

  const paths = products.items.map(product => ({
    params: {
      slug: product.fields.slug
    }
  }))

  return {
    fallback: true,
    paths,
  }
}

export async function getStaticProps(context) {
  const product = await contentful.getEntries({
    content_type: 'product',
    limit: 1,
    "fields.slug": context.params.slug,
  })
  
  return {
    props: {
      error: !product.items.length && true,
      ...product?.items?.[0]?.fields
    },
  }
}