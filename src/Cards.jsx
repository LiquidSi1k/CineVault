const Cards = ({ movie }) => {
  console.log(movie);
  return (
    <div className="p-2 m-2 w-80 text-center border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-150 hover:scale-[1.02] active:scale-[1] bg-gray-50 cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <a>
        <img
          className="object-cover"
          src={movie["#IMG_POSTER"]}
          alt="poster"
          width={300}
          draggable={false}
        />
      </a>
      <h3>{movie["#AKA"]}</h3>
    </div>
  );
};

export default Cards;
