import Link from 'next/link'
import Head from 'next/head'
import contentful from 'lib/contentful'
import TagLabel from 'components/TagLabel'
import { BsCartCheckFill } from 'react-icons/bs'

export default function ProductPage({ productName, productDescription, image, tags, brand, categories, price, quantity, sizetypecolor, sku, website, error }) {
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
      <main className='p-2 flex flex-wrap justify-center w-full lg:max-w-screen-lg lg:m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div id="image-wrapper" className='container p-4'>
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
            
            <div className='my-3'>
              <span className='inline-block bg-green-600 rounded px-3 py-1 text-white font-bold'>{price} €</span>
            </div>

            <div className='mt-10'>
              <Link href={website}>
                <a target='_blank' className='flex justify-center items-center w-full px-4 py-3 font-semibold text-sm text-center bg-gray-900 text-white text-lg rounded shadow-sm'>
                  <BsCartCheckFill />  
                  <span className='mx-1'> BUY NOW </span>
                </a>
              </Link>
            </div>

          </div>
        </div>

        <div className='my-3 w-full'>
          <table className="border-collapse w-full  text-sm shadow-sm">
            <thead>
              <tr>
                <td className='text-center font-bold p-3' colSpan={2}>Extra info</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='odd:bg-gray-100 w-1/2 text-left border border-slate-300 dark:border-slate-700 p-4 text-slate-500'>Quantity</td>
                <td className='even:bg-gray-100 w-1/2 text-left border border-slate-300 dark:border-slate-700 p-4 text-slate-500'>{quantity}</td>
              </tr>
              <tr>
                <td className='odd:bg-gray-200 w-1/2 text-left border border-slate-300 dark:border-slate-700 p-4 text-slate-500'>SKU</td>
                <td className='even:bg-gray-200 w-1/2 text-left border border-slate-300 dark:border-slate-700 p-4 text-slate-500'>{sku}</td>
              </tr>
              <tr>
                <td className='odd:bg-gray-100 w-1/2 text-left border border-slate-300 dark:border-slate-700 p-4 text-slate-500'>Size</td>
                <td className='even:bg-gray-100 w-1/2 text-left border border-slate-300 dark:border-slate-700 p-4 text-slate-500'>{sizetypecolor}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='my-3 w-full flex flex-wrap justify-center items-start'>
          {tags.map(tag => <TagLabel key={tag}>#{tag}</TagLabel>)}
        </div>
      </main>
    </>
  )
}


export async function getServerSideProps({ params }) {
  const product = await contentful.getEntries({
    content_type: 'product',
    limit: 1,
    "fields.slug": params.slug,
  })
  
  return {
    props: {
      error: !product.items.length && true,
      ...product?.items?.[0]?.fields
    },
  }
}