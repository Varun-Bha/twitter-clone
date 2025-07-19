import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { formatDistanceToNowStrict } from 'date-fns';

import Avatar from '../Avatar';

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

interface CommentItemProps {
  data: Comment;
}

const CommentItem: React.FC<CommentItemProps> = ({ data }) => {
  const router = useRouter();

  const goToUser = useCallback((ev: React.MouseEvent<HTMLParagraphElement | HTMLSpanElement>) => {
    ev.stopPropagation();
    router.push(`/users/${data.user.id}`)
  }, [router, data.user.id]);

  return (
    <div className="bg-white p-5 rounded-lg mb-8">
      <div className="flex items-center gap-3">
        <Avatar userId={data.user.id} />
        <div>
          <div className="flex items-center gap-2">
            <p
              onClick={goToUser}
              className="text-sm font-semibold text-gray-700 cursor-pointer hover:underline"
            >
              {data.user.name}
            </p>
            <span className="text-sm text-gray-500">
              {formatDistanceToNowStrict(new Date(data.createdAt))}
            </span>
          </div>
          <div className="text-sm text-gray-800 mt-1">{data.body}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;