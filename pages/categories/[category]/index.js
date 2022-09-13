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
    <div>
      <h1>Category {category.fields.title}</h1>
      <div>
        <ul>
          {products.map(p => <li key={p.sys.id}>{p.fields.productName}</li>)}
        </ul>
      </div>
    </div>
  )
}