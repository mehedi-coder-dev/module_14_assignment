

const TeamSlider = (prop) => {
    return (
        <div className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 pr-5">
              <h3>{prop.teamValue.title}</h3>
              <div>
                <span>{prop.teamValue.catagory} &gt; <span className='text-success'>{prop.teamValue.title}</span> </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
}

export default TeamSlider;
