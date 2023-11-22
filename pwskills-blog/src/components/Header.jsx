import React from 'react'
import "/styles/header.css"

function Header() {
  return (
    <div id="Header">
      <h1>PWBlog</h1>
      <div>
        <button>Home</button>
        <button>Blog</button>
        <button>Add Blog</button>
      </div>
    </div>
  )
}

export default Header