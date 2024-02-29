import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Layout = ({children, title="HP by Next.", description="example page."}) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{ title }</title>
        <meta name="description" content={ description } />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">Home</a>
              </Link>
              <Link href="/blog-page">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">Blog</a>
              </Link>
              <Link href="/contact-page">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">Contact</a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 flex-col justify-center items-center w-screen">
        { children }
      </main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
        <a
          className="flex items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Layout