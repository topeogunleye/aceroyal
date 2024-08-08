// src/components/InstagramFeed.tsx
import React, { useEffect, useState } from 'react';
import { fetchInstagramPosts } from '../services/instagramService';
import './InstagramFeed.css';

const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const instagramPosts = await fetchInstagramPosts();
      setPosts(instagramPosts);
    };
    getPosts();
  }, []);

  return (
    <div className="instagram-feed">
      {posts.map((post) => (
        <a
          href={post.permalink}
          key={post.id}
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-post"
        >
          <img
            src={
              post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url
            }
            alt="Instagram Post"
          />
        </a>
      ))}
    </div>
  );
};

export default InstagramFeed;
