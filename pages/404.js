import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout title='404'>
      <p>We couldn't find this page. <Link href='/'><a>Go home?</a></Link> </p>
    </Layout>
  )
}
