import { IcarAnnouncement } from "@/Components/Card";
import { ModalCustom } from "@/Components/Modal";
import AdvertiserMain from "@/Components/PagesComponents/Advertiser";
import { AnnouncementProvider } from "@/contexts/AnnouncementContext";
import { UserProfile } from "@/contexts/AuthContext/types";
import { ModalProvider } from "@/contexts/ModalContext.tsx";
import { api } from "@/services/api";

const getCars = async (id: string) => {
  try {
    const responseCar = await api.get<IcarAnnouncement[]>(`/cars/user/${id}`);
    return responseCar.data;
  } catch (error) {
    console.error(error);
  }
};

const getUser = async (id: string) => {
  try {
    const responseUser = await api.get<UserProfile>(`/user/profile/${id}`);
    return responseUser.data;
  } catch (error) {
    console.error(error);
  }
};

const AdvertiserPage = async ({ params }: { params: { id: string } }) => {
  const cars = await getCars(params.id);
  const user = await getUser(params.id);

  return (
    <>
      <AnnouncementProvider listCars={cars!}>
        <ModalProvider>
          <AdvertiserMain user={user!} />
          <ModalCustom />
        </ModalProvider>
      </AnnouncementProvider>
    </>
  );
};

export default AdvertiserPage;
