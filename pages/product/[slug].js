import Head from 'next/head'
import contentful from 'lib/contentful'

export default function ProductPage(props) {
  if (props.error) {
    return (
      <div>
        <h1>An Error occurred: </h1>
        <h2>{props.error}</h2>
      </div>
    )
  }

  const { productName, productDescription, image, tags, categories, price, brand, quantity, sku, website } = props
  return (
    <>
      <Head>
        <title>{productName}</title>
        <meta name="description" content={productDescription} />
      </Head>
      <div>
        <h1>{productName}</h1>
        {categories.map(category => <span key={category.sys.id}>{category.fields.title}</span>)}
      </div>
      <div>
        <div>
          <picture>
            <source srcSet={`https:${image[0].fields.file.url}`} type={image[0].fields.file.contentType} />
            <img src={`https:${image[0].fields.file.url}`} alt={productName} />
          </picture>
        </div>
        <div>
          <p>{productDescription}</p>
        </div>
      </div>
      
      <div>
        {tags.map(tag => <span key={tag}>{tag}; </span>)}
      </div>
    </>
  )
}

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
    fallback: false,
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