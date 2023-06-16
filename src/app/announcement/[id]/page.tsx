import { IcarAnnouncement } from "@/Components/Card";
import { ModalCustom } from "@/Components/Modal";
import { AnnouncementsMain } from "@/Components/PagesComponents/Announcements";
import { ModalProvider } from "@/contexts/ModalContext.tsx";
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
    <ModalProvider>
      <>
        <div>
          <AnnouncementsMain carsAnnouncement={carsAnnouncement} />
        </div>
        <ModalCustom />
      </>
    </ModalProvider>
  );
};

export default Announcement;
