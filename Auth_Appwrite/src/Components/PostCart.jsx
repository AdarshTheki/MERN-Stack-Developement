import React from 'react';
import { Services } from '../AppWrite/Config';
import { Link } from 'react-router-dom';
import blur from '../assets/blur.jpg';

// 23
export default function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className='card bg-base-100 shadow-xl hover:opacity-80'>
      <figure>
        <img
          src={featuredImage ? Services?.getFilePreview(featuredImage) : blur}
          className='sm:h-[20vw] h-[200px] object-cover w-full'
          alt={title}
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
      </div>
    </Link>
  );
}
