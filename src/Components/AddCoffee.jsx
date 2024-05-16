const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* FORM OF NAME AND QUANTITY ROW */}
        <div className="md:flex gap-4 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input">
              <input
                type="text"
                placeholder="Coffee Name"
                className="input w-full"
                name="name"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input">
              <input
                type="text"
                placeholder="Available Coffee"
                className="input md:w-full"
                name="quantity"
              />
            </label>
          </div>
        </div>
        {/* FORM OF SUPPLIER AND TEST ROW */}
        <div className="md:flex gap-4 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input">
              <input
                type="text"
                placeholder="Supplier Name"
                className="input w-full"
                name="supplier"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input">
              <input
                type="text"
                placeholder="Taste"
                className="input md:w-full"
                name="taste"
              />
            </label>
          </div>
        </div>
        {/* FORM OF CATEGORY AND DETAILS ROW */}
        <div className="md:flex gap-4 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input">
              <input
                type="text"
                placeholder="Category"
                className="input w-full"
                name="category"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input">
              <input
                type="text"
                placeholder="Details"
                className="input md:w-full"
                name="details"
              />
            </label>
          </div>
        </div>
        {/* FORM OF IMAGE LINK ROW */}
        <div className="mb-8">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <label className="input">
              <input
                type="text"
                placeholder="Photo Url"
                className="input w-full"
                name="photo"
              />
            </label>
          </div>
        </div>
        <input type="submit" className="btn btn-block" value="Add COffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
