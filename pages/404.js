import Link from "next/link"
import Head from "next/head"

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <div className="flex items-center justify-center w-screen">
        <div className="px-4 lg:py-12">
          <div className="lg:gap-4 lg:flex">
            <div
              className="flex flex-col items-center justify-center md:py-24 lg:py-32"
            >
              <h1 className="font-bold text-gray-900 text-9xl">404</h1>
              <p
                className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
              >
                <span className="text-red-500">Oops!</span> Page not found
              </p>
              <p className="mb-8 text-center text-gray-500 md:text-lg">
                The page you’re looking for doesn’t exist.
              </p>
              <Link href="/">
                <a className="px-6 py-2 text-sm font-semibold text-white bg-gray-900">Go home</a>
              </Link>
            </div>
            <div className="mt-4">
              <picture className="block overflow-hidden">
                <source src={`https://http.cat/404`}/>
                <img src="https://http.cat/404" alt="img" className="object-cover w-full h-full"  />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}