import usePosts from '@/hooks/usePosts';

import PostItem from './PostItem';

interface User {
  id: string;
  name: string;
  username: string;
}

interface Post {
  id: string;
  body: string;
  createdAt: string;
  user: User;
  comments?: Array<{ id: string }>;
  likedIds: string[];
}

interface PostFeedProps {
  userId?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
  const { data: posts = [] } = usePosts(userId);

  return (
    <>
      {posts.map((post: Record<string, unknown>, idx: number) => (
        <PostItem userId={userId} key={typeof post.id === 'string' || typeof post.id === 'number' ? post.id : idx} data={post as unknown as Post} />
      ))}
    </>
  );
};

export default PostFeed;
