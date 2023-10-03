import React, { useState, useEffect } from 'react';
import { Container, PostCart } from '../Components/index';
import { Services } from '../AppWrite/Config';

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Services.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3'>
          {posts.map((post) => {
            return (
              <div key={post?.$id} className='p-2'>
                <PostCart {...post} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
