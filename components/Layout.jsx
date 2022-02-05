import Head from 'next/head';
import React, { Children } from 'react'
import { Header } from './';

const Layout = ({ children }) => {
  return (
    <>
    
      <Header />
      {children}
    </>
  )
}

export default Layout
