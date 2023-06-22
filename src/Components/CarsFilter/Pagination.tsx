import { HomeContext } from "@/contexts/HomeContext";
import { IListAnnoucementsFilter } from "@/contexts/HomeContext/types";
import { api } from "@/services/api";
import { useContext } from "react";

const Pagination = () => {
  const { listAnnoucements, setListAnnoucements } = useContext(HomeContext);

  const { pages, prevPage, nextPage } = listAnnoucements;
  console.log(listAnnoucements);

  let pageNumber = 1;

  if (prevPage !== null) {
    const match = prevPage.match(/pageNumber=(\d+)/);
    if (match) {
      pageNumber = parseInt(match[1]) + 1;
    }
  }

  const getLisAnnouncementsPrevPage = async () => {
    if (prevPage === null) return;

    const params = new URLSearchParams(prevPage.split("?")[1]);

    try {
      const { data } = await api.get<IListAnnoucementsFilter>(`/filters?${params.toString()}`);
      console.log(data);
      setListAnnoucements(data);
    } catch (error) {
      throw new Error("Deu erro!");
    }
  };

  const getLisAnnouncementsNextPage = async () => {
    if (nextPage === null) return;
    const params = new URLSearchParams(nextPage.split("?")[1]);
    try {
      const { data } = await api.get<IListAnnoucementsFilter>(`/filters?${params.toString()}`);
      console.log(data);
      setListAnnoucements(data);
    } catch (error) {
      throw new Error("Deu erro!");
    }
  };

  const handlePrevPage = () => {
    getLisAnnouncementsPrevPage();
  };

  const handleNextPage = () => {
    getLisAnnouncementsNextPage();
  };
  return (
    <nav className=" mt-11 flex items-center justify-center">
      <ul className="flex gap-2">
        <li>
          <button
            className="prose-heading-7-600 mr-2 text-Brand2"
            disabled={prevPage === null}
            onClick={handlePrevPage}>
            {"< Anterior"}
          </button>
        </li>
        <li>{pageNumber}</li>
        <li>
          <p>de</p>
        </li>
        <li>{pages}</li>
        <li>
          <button
            className="prose-heading-7-600 ml-2 text-Brand2"
            disabled={nextPage === null}
            onClick={handleNextPage}>
            {"Seguinte >"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
