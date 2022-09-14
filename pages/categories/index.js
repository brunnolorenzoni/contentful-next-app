import contentful from 'lib/contentful'
import CategoryCard from 'components/CategoryCard'

export default function CategoriesPage({ categories }) {
  return (
    <>
      <header className='p-4'>
        <h1 className='font-bold text-5xl text-center mb-2'>Categories</h1>
        <p className='text-lg text-center'>Explore our site, discover new products and spend your money</p>
      </header>

      <main className='p-4'>
        <section id="categories-section" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4'>
          {categories.map(category => (
            <div className='w-full' key={category.sys.id}>
              <CategoryCard category={category}></CategoryCard>
            </div>
          ))}
        </section>
      </main>
    </>
  )
}

export async function getServerSideProps() {

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