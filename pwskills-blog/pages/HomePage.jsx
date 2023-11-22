import React from 'react'
import Header from '../src/components/header'
import BlogCard from '../src/components/BlogCard'

function HomePage() {
  return (
    <div id='HomePage'>
        <Header />
        <div id='blogParent'>
            <BlogCard />

        </div>
       </div>

       
  )
}

export default HomePage