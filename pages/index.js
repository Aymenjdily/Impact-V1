import { Features, Footer, Goals, Header, Motivation, Services } from '../components'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
      <title>Impact</title>
      </Head>
      <div className=''>
        <Header/>
      </div>

      <div className='s'>
        <Services/>
      </div>

      <div className='s'>
        <Features/>
      </div>

      <div className='s'>
        <Motivation/>
      </div>

      <div className='s'>
        <Goals/>
      </div>

      <div className='s'>
        <Footer/>
      </div>
    </>
  )
}
