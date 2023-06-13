"user client";

import { useRouter } from "next/navigation";
import { Button } from "../../../Button";

interface AnnouncerCardProps {
  user: {
    name: string;
    description: string;
    id: string;
  };
}

const AnnouncerCard = ({ user }: AnnouncerCardProps) => {
  const router = useRouter();

  return (
    <div className="flex h-full max-h-[426px] w-full flex-col items-center justify-between gap-3 rounded bg-grey10 px-5 py-9">
      <span className="prose-heading-2-600 flex aspect-square min-h-[90px] min-w-[90px] items-center justify-center rounded-full bg-Brand1 text-white">
        {user.name[0].toUpperCase()}
      </span>
      <span className="prose-heading-6-600 text-grey1">{user.name}</span>
      <p className="prose-body-1-400 overflow-y-auto text-center text-grey2">{user.description}</p>
      <Button
        variant={"gradient"}
        color={"black"}
        size={"primary"}
        fullWidth={true}
        onClick={() => router.push(`/advertiser/${user.id}`)}>
        Ver todos anuncios
      </Button>
    </div>
  );
};

export default AnnouncerCard;
