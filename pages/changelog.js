import React from 'react'
import Layout from '../components/Layout'
import ReactMarkdown from 'react-markdown'

function Changelog({ changelogMarkdown }) {
  return <Layout textJustified title='Changelog'>
    <ReactMarkdown source={changelogMarkdown}/>
  </Layout>
}

export async function getStaticProps(ctx) {
  const changelogMarkdown = await fetch('https://raw.githubusercontent.com/Simply-Synonyms/simply-synonyms/master/changelog.md').then(res => res.text())

  return {
    props: {
      changelogMarkdown
    },
    revalidate: 1 // re-fetch once per hour
  }
}

export default Changelog
