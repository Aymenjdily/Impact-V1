import { Features, Footer, Goals, Header, Motivation, Services } from '../components'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='snap-y min-h-[100vh] snap-mandatory scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
      <Head>
      <title>Impact</title>
      </Head>
      <div className='snap-start'>
        <Header/>
      </div>

      <div className='snap-center'>
        <Services/>
      </div>

      <div className='snap-center'>
        <Features/>
      </div>

      <div className='snap-center'>
        <Motivation/>
      </div>

      <div className='snap-center'>
        <Goals/>
      </div>

      <div className='snap-center'>
        <Footer/>
      </div>
    </div>
  )
}
