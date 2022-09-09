import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Products Catalogue</title>
        <meta name="description" content="Products Catalogue home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className='text-3xl font-bold underline'>welcome aboard!</h1>
      </main>
    </div>
  )
}
