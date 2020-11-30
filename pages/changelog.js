import React from 'react'
import Layout from '../components/Layout'
import ReactMarkdown from 'react-markdown'

function Changelog({ changelogMarkdown }) {
  return <Layout textJustified title='Changelog'>
    <ReactMarkdown source={changelogMarkdown || 'Loading...'}/>
  </Layout>
}

export async function getStaticProps(ctx) {
  const changelogMarkdown = await fetch('https://raw.githubusercontent.com/Simply-Synonyms/simply-synonyms/main/changelog.md').then(res => res.text())

  return {
    props: {
      changelogMarkdown
    },
    revalidate: 60 // Once per minute max
  }
}

export async function GetStaticPaths() {
  // Have to do this for revalidate to work
  return {
    paths: [],
    fallback: true,
  }
}

export default Changelog
