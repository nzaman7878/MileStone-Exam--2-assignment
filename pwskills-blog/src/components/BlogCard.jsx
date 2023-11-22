import React from 'react'
import "/styles/blogCard.css"

function BlogCard() {
  return (
    <div className='BlogCard'>
       <img src="" alt="" />
       <h1>Blog Title: Here will be your blog Title</h1>
       <p>
        Blog Description : Here you'll be writing your Description
       </p>
         <button>Read Blog</button>
         <button>Edit Blog</button>
         <button>Delete Blog</button>
       </div>
  )
}

export default BlogCard