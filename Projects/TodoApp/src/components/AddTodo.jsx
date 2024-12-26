function AddTodo() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter task"
            />
          </div>

          <div className="col-4">
            <input type="date" />
          </div>

          <div className="col-2">
            <button className="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddTodo;
