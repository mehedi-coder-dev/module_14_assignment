const User = (prop) => {
  return (
    <div className="col-md-4 py-4 ">
      <div className="card p-4  d-flex justify-content-center align-items-center text-center shadow-lg border-0">
        <div className="p-4">
          <img src={prop.img} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <p className="card-text opacity-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac
            condimentum ligula ornare.{" "}
          </p>
          <h5 className="card-title">Alice Bradley</h5>
          <p className="card-title">Backend Developer</p>
        </div>
      </div>
    </div>
  );
};

export default User;
