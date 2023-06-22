import { IcarAnnouncement } from "@/Components/Card";
import { ModalCustom } from "@/Components/Modal";
import { AnnouncementsMain } from "@/Components/PagesComponents/Announcements";
import { ModalProvider } from "@/contexts/ModalContext.tsx";
import { api } from "@/services/api";

interface IPageProps {
  params: { id: string };
}

export interface ICommentProps {
  content: string;
  id: string;
  createdAt: Date;
  carId: string;
  userId: string;
  user: { name: string };
}

export interface ICommentCreateProps {
  content: string;
}

const getCarAnnouncement = async (id: string) => {
  try {
    const res = await api.get<IcarAnnouncement>(`/cars/${id}`);
    return res.data;
  } catch (error) {
    throw new Error("API sendo iniciada");
  }
};

const getComments = async (carId: string) => {
  try {
    const res = await api.get<ICommentProps[]>(`/comments/${carId}`);
    return res.data;
  } catch (error) {
    throw new Error("API sendo iniciada");
  }
};

const Announcement = async ({ params }: IPageProps) => {
  const carsAnnouncement = await getCarAnnouncement(params.id);
  const carComments = await getComments(carsAnnouncement.id);
  return (
    <ModalProvider>
      <>
        <div>
          <AnnouncementsMain carsAnnouncement={carsAnnouncement} carComments={carComments} />
        </div>
        <ModalCustom />
      </>
    </ModalProvider>
  );
};

export default Announcement;
