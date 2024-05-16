const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className=" flex justify-between w-full pr-2">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="card-title">Name: {name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div>
            <button className="grid w-24 h-12 my-2 rounded bg-primary text-primary-content place-content-center">
              View
            </button>

            <button className="grid w-24 h-12 my-2 rounded bg-accent text-accent-content place-content-center">
              Edit
            </button>

            <button className="grid w-24 h-12 my-2 rounded bg-secondary text-secondary-content place-content-center">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
