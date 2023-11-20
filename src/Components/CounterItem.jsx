

const CounterItem = (prop) => {
    return (
        <div className="col-md-3 text-center mb-5">
        <div className="card border-0 shadow rounded bg-light">
          <div className="w-50 p-4 m-auto mt-4 mb-4 featured_color rounded">
            <img src={prop.img} className="card-img-top" alt="..." />
          </div>
          <div className="card-body pb-5 pt-1">
            <h3 className="card-title">{prop.count}</h3>
            <h6 className="card-text">{prop.happy}</h6>
          </div>
        </div>
      </div>
    );
}

export default CounterItem;
