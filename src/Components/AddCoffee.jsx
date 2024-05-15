const AddCoffee = () => {
  return (
    <div>
      <h2>Add COffee</h2>
      <form>
        <div className="flex">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input">
              <span>Name</span>
              <input
                type="text"
                placeholder="Coffee Name"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input">
              <span>Name</span>
              <input
                type="text"
                placeholder="Available Coffee"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
