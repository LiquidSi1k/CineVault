const Cards = ({ movie }) => {
  console.log(movie);
  return (
    <div className="border cursor-pointer rounded p-2 m-2 w-80 text-center">
      <a>
        <img
          className="object-cover"
          src={movie["#IMG_POSTER"]}
          alt="poster"
          width={300}
        />
      </a>
      <h3>{movie["#AKA"]}</h3>
    </div>
  );
};

export default Cards;
