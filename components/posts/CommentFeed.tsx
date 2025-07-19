import CommentItem from './CommentItem';

interface User {
  id: string;
  name: string;
  username: string;
}

interface Comment {
  id: string;
  body: string;
  createdAt: string;
  user: User;
}

interface CommentFeedProps {
  comments?: Array<Record<string, unknown>>;
}

const CommentFeed: React.FC<CommentFeedProps> = ({ comments = [] }) => {
  return (
    <>
      {comments.map((comment: Record<string, unknown>, idx) => (
        <CommentItem key={typeof comment.id === 'string' || typeof comment.id === 'number' ? comment.id : idx} data={comment as unknown as Comment} />
      ))}
    </>
  );
};

export default CommentFeed;
