import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
  const { _id, name, quantity, supplier, taste, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

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
            <Link to={`updateCoffee/${_id}`}>
              <button className="grid w-24 h-12 my-2 rounded bg-accent text-accent-content place-content-center">
                Edit
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="grid w-24 h-12 my-2 rounded bg-secondary text-secondary-content place-content-center"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
  setCoffees: PropTypes.func,
  coffees: PropTypes.array,
};
