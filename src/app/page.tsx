import CategoryFilters from "@/Components/CategoryFilters";
import Card from "@/Components/Card";

const Home = () => {
  return (
    <main className="mx-auto max-w-[1600px]">
      <section className="flex max-h-[537px] min-h-[537px] w-full items-center justify-center bg-[url('/car.png')] bg-no-repeat">
        <div className="flex max-h-[537px] min-h-[537px] w-full items-center justify-center bg-gradient-to-b from-[rgba(0,0,0,0.19940476190476186)] to-grey0">
          <div className="px-8 text-center">
            <h1 className="prose-heading-3-500 mb-6 text-grey10 md:prose-heading-1-700">
              Motors Shop
            </h1>
            <h2 className="prose-heading-5-500 text-grey10 md:prose-heading-2-600">
              A melhor plataforma de anúncios de carros do país
            </h2>
          </div>
        </div>
      </section>
      <div className="container">
        <CategoryFilters>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <Card key={item} isAdvertiserOwner={false} />
          ))}
        </CategoryFilters>
      </div>
    </main>
  );
};

export default Home;
