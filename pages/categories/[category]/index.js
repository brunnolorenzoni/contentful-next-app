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
    fallback: true,
    paths,
  }
}


export async function getStaticProps(context) {
  const { category } = context.params

  const categoryEntry = await contentful.getEntries({
    content_type: 'category',
    'fields.slug': category
  })
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

export default function CaegoriesPage({ category, products }) {
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