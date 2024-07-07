import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Signup  from './pages/Signup'
import  Signin  from './pages/Signin'
import Blogs from './pages/Blogs'
import BlogFull from './pages/BlogFull'
import NewBlog from './pages/NewBlog'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<BlogFull />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/create" element={<NewBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App