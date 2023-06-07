const Announcement = ({ params }: { params: { id: string } }) => {
  console.log(params.id);

  return <h1>Teste</h1>;
};

export default Announcement;
