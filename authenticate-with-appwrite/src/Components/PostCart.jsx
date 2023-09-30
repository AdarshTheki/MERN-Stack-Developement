import React from 'react';
import { Services } from '../AppWrite/Config';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

export default function PostCard({ $id, title, images }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
          <img src={Services.getFilePreview(images)} alt={title} className='rounded-xl' />
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  );
}

PostCard.propTypes = {
  title: propTypes.string.isRequired,
  $id: propTypes.any.isRequired,
  images: propTypes.any.isRequired,
};
