import movies from "../assets/movies_rnexgr.json";
const Section = () => {
  const section = movies.map((element) => {
    return (
      <section>
        <h1>{element.category}</h1>
        <div>
          {element.images.map((pic) => {
            return <img src={pic} alt="img" />;
          })}
        </div>
      </section>
    );
  });
  return (
    <main>
      <div>{section}</div>
    </main>
  );
};

export default Section;
