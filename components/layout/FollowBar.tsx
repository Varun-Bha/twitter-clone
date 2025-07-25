import useUsers from '@/hooks/useUsers';

import Avatar from '../Avatar';

const FollowBar = () => {
  const { data: users = [] } = useUsers();

  if (users.length === 0) {
    return null;
  }

  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="bg-neutral-800 rounded-xl p-4">
        <h2 className="text-white text-xl font-semibold">Who to follow</h2>
        <div className="flex flex-col gap-6 mt-4">
          {users.map((user: Record<string, unknown>, idx: number) => (
            <div key={typeof user.id === 'string' || typeof user.id === 'number' ? user.id : idx} className="flex flex-row gap-4">
              <Avatar userId={typeof user.id === 'string' ? user.id : ''} />
              <div className="flex flex-col">
                <p className="text-white font-semibold text-sm">{typeof user.name === 'string' ? user.name : 'Unknown'}</p>
                <p className="text-neutral-400 text-sm">@{typeof user.username === 'string' ? user.username : 'unknown'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;
