import { IcarAnnouncement } from "@/Components/Card";
import { AnnouncementsMain } from "@/Components/PagesComponents/Announcements";
import { api } from "@/services/api";

interface IPageProps {
  params: { id: string };
}

const getCarAnnouncement = async (id: string) => {
  try {
    const res = await api.get<IcarAnnouncement>(`/cars/${id}`);
    return res.data;
  } catch (error) {
    throw new Error("API sendo iniciada");
  }
};

const Announcement = async ({ params }: IPageProps) => {
  const carsAnnouncement = await getCarAnnouncement(params.id);
  return (
    <div>
      <AnnouncementsMain carsAnnouncement={carsAnnouncement} />
    </div>
  );
};

export default Announcement;
