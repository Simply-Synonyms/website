import React from 'react'
import Layout from '../components/Layout'
import ReactMarkdown from 'react-markdown'

function Changelog({ changelogMarkdown }) {
  return <Layout textJustified title='Changelog'>
    <ReactMarkdown source={changelogMarkdown || 'Loading...'}/>
  </Layout>
}

// I'll have to use getServerSideProps until I figure out why revalidate isn't working with app engine
export async function getServerSideProps(ctx) {
  const changelogMarkdown = await fetch('https://raw.githubusercontent.com/Simply-Synonyms/simply-synonyms/main/changelog.md').then(res => res.text())

  return {
    props: {
      changelogMarkdown
    },
    // revalidate: 60 // Once per minute max
  }
}

export default Changelog
