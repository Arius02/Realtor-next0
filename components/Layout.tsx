import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
        <div>
        <header className='sticky top-0 z-50'>
          <nav >
          <Navbar />
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer>
        <Footer/>
        </footer>
      </div>
    </>
  );
}
