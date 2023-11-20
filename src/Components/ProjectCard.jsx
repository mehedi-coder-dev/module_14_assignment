import React from 'react';

const ProjectCard = (prop) => {
    return (
        <>
          <div className="col-md-5 shadow-lg rounded me-4 mb-4">
            <div className="p-4">
              <div className="card border-0">
                <img className="card-img-top" src={prop.img} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Lorem ipsum dolor sit consectutar</h5>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}

export default ProjectCard;
