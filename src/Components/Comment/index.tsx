interface CommentProps {
  user: {
    name: string;
    comment: string;
    createdAt: Date;
  };
}

const Comment = ({ user }: CommentProps) => {
  const calcDaysAgo = () => {
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - user.createdAt.getTime();

    return Math.floor(timeDiff / (1000 * 3600 * 24));
  };

  return (
    <li className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="prose-body-2-600 flex h-8 w-8 items-center justify-center rounded-full bg-Brand2 text-grey10">
          {user.name[0].toUpperCase()}
        </span>
        <span className="prose-body-2-600 text-grey2">{user.name}</span>
        <span className="h-1 w-1 rounded-full bg-grey4" />
        <span className="prose-body-2-400 text-xs text-grey3">há {calcDaysAgo()} dias</span>
      </div>
      <p className="prose-body-2 text-grey2">{user.comment}</p>
    </li>
  );
};

export default Comment;
