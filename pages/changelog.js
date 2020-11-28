import React from 'react'
import Layout from '../components/Layout'
import ReactMarkdown from 'react-markdown'

function Changelog({ changelogMarkdown }) {
  return <Layout textJustified title='Changelog'>
    <ReactMarkdown source={changelogMarkdown}/>
  </Layout>
}

export async function getStaticProps(ctx) {
  const changelogMarkdown = await fetch('https://raw.githubusercontent.com/Simply-Synonyms/simply-synonyms/main/changelog.md').then(res => res.text())

  return {
    props: {
      changelogMarkdown
    },
    revalidate: 60*60 // re-fetch once per hour
  }
}

export default Changelog
