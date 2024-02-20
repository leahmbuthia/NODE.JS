import React from 'react'
import '../../App.css'
import { useSelector} from 'react-redux'
import {selectAllPosts} from './postSlice'

const postList = () => {
    const posts = useSelector(selectPosts)
    console.log(posts);
  return (
    <div>postList</div>
  )
}

export default postList