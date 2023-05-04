import Head from 'next/head'
import React from 'react'

const usePageTitle = ({title}) => {
  return (
      <Head>
          <title>Tatou | {title}</title>
    </Head>
  )
}

export default usePageTitle