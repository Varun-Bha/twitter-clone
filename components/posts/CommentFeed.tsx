import CommentItem from './CommentItem';

interface CommentFeedProps {
  comments?: Array<Record<string, unknown>>;
}

const CommentFeed: React.FC<CommentFeedProps> = ({ comments = [] }) => {
  return (
    <>
      {comments.map((comment: Record<string, unknown>, idx) => (
        <CommentItem key={typeof comment.id === 'string' || typeof comment.id === 'number' ? comment.id : idx} data={comment} />
      ))}
    </>
  );
};

export default CommentFeed;
