import contentful from 'lib/contentful'
import CategoryCard from 'components/CategoryCard'

export default function CaegoriesPage({ categories }) {
  console.log(categories)

  return (
    <>
      <header>
        <h1>Categories</h1>
      </header>

      <main>
        <section id="categories-section" className='grid'>
          {categories.map(category => (
            <CategoryCard key={category.sys.id} category={category}></CategoryCard>
          ))}
        </section>
      </main>
    </>
  )
}

export async function getServerSideProps(context) {

  const categories = await contentful.getEntries({
    content_type: 'category',
  })

  if(!categories || !categories.items.length) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  return {
    props: {
      categories: categories.items
    },
  }
}