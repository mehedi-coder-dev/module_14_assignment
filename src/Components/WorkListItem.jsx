const WorkListItem = (prop) => {
  return (
    <div className="col-md-4 rounded my-4">
      <div className="card border-0 bg-light">
        <div className="w-50 p-3">
          <img src={prop.img} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">Grow Your Business</h5>
          <p className="card-text">We help identify the best ways to improve your business</p>
          <span href="#" className="">
            Go somewhere <i className="fa-solid fa-arrow-right"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkListItem;
