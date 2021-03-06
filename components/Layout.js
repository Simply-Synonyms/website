import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Layout.module.css'

export default function Layout({ title, children, mdx, textJustified, textSmallGray, coloredLinks }) {
  return (
    <div className={styles.page}>
      <Head>
        <title>{title} - Simply Synonyms</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,400;0,700;1,300;1,400;1,600&family=Nunito:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap" rel="stylesheet"/>
        { process.env.NODE_ENV === 'production' && <script async defer src="https://viscount.synonyms.bweb.app/latest.js"></script>}
      </Head>

      <nav className={styles.header}>
        <Link href='/'><h1>Simply Synonyms</h1></Link>
        <div className={styles.links}>
          <Link href='/'><a>home</a></Link>
          <Link href='/#install'><a>install</a></Link>
          <Link href='/contact'><a>support & feature requests</a></Link>
          {/*<Link href='/changelog'><a>changelog</a></Link>*/}
        </div>
      </nav>

      <div className={`${styles.container} ${ mdx && 'content'} ${ textJustified && styles.textJustified} ${ textSmallGray && styles.textSmallGray} ${coloredLinks && styles.coloredLinks }`}>
        { children }
      </div>

      <footer className={styles.footer}>
        <p>
          &copy; { new Date().getFullYear() } <a href='https://benjaminashbaugh.me' target='_blank'>Benjamin Ashbaugh</a>
          <Link href='/privacy'><a>Privacy</a></Link>
          <Link href='/changelog'><a>Changelog</a></Link>
          <a href='https://github.com/Simply-Synonyms' rel='noopener noreferrer'>GitHub</a>
        </p>
      </footer>
    </div>
  )
}
