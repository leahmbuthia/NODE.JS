import './App.scss'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import PostsList from './features/posts/PostsList'
import NotFound from './pages/NotFound'
import Settings from './pages/Settings'
import Layout from './layout/Layout'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/signup" element={<SignUp />} />
        <Route path="/" element={<Layout />} >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="other-blogs" element={<PostsList />} />
          <Route path="blogs" element={<PostsList />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </>
    )
  )
  // <CreatePost /> 

  return (
    <RouterProvider router={router}> </RouterProvider>
  )
}

export default App
