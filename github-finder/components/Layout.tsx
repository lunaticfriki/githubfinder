import Footer from './Footer'
import Head from 'next/head'
import Header from './Header'
interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-background text-white w-full min-h-screen grid grid-rows-layout">
      <Head>
        <title>Github finder</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
