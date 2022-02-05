import React, { useState, useEffect} from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';


const  PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if(slug){
      getSimilarPosts(categories, slug)
       .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
    }
  }, [slug])
  console.log(relatedPosts)
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>

      {relatedPosts.map((post) => (
        
        

      <div key={post.title} className='flex items-center w-full mb-4'>
        
        
      <div className='w-16 flex-none'>
      <img
              
              alt={post.title}
              height="60px"
              width="60px"
              unoptimized
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />

        </div>
        <div className='flex-grow ml-4'>
        <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
        <Link href={`/post/${post.slug}`} className="text-md">{post.title}</Link>


          </div>
          
          
        </div>
        
        
      
      ))}
      <div class="px-6 py-4 bg-blue-50 rounded-lg text-blue-500">
  Comment Section <span class="font-bold">will not work </span>, under Developement.
</div>

      
      
    <div class="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div class="flex justify-center -mt-16 md:justify-end">
            <img class="object-cover w-20 h-20 border-2 border-blue-900 rounded-full dark:border-blue-800"  src="https://media-exp1.licdn.com/dms/image/D4E03AQG0hJa2oTMgbg/profile-displayphoto-shrink_200_200/0/1636695668603?e=1649289600&v=beta&t=aQd1Sa1vgvggzyhJ3mBFXaUBs5J6dCl5XRghejmJbe4"></img>
        </div>

        <h2 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-2xl">Dipanshu Bhangale</h2>

        <p class="mt-2 text-gray-900 dark:text-gray-200">I do complex things simple and clean. This WebApp is built using ReactJs, Tailwind Css & Graph cms Api </p>
        
        <div class="flex justify-end mt-4">
            <a href="#" class="text-xl font-medium text-blue-500 dark:text-blue-300">@dipanshuLpu</a>
        </div>
        
    </div>
    
    
    </div>
    
    
  )
  
}


export default PostWidget
