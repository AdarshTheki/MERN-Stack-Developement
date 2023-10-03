import React, { useEffect, useState } from "react";
import { Services } from "../AppWrite/Config";
import { Container, PostCart } from "../Components/index";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Services.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className='w-full py-8 mt-4 text-center'>
        <Container>
          <div className='flex flex-wrap'>
            <div className='p-2 w-full'>
              <h1 className='text-2xl font-bold text-white capitalize'>
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3'>
          {posts &&
            posts.map((post) => (
              <div key={post.$id} className='p-2 w-full'>
                <PostCart {...post} />
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
