import { AnnouncementsMain } from "@/Components/PagesComponents/Announcements";

const Announcement = ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  return <AnnouncementsMain />;
};

export default Announcement;
