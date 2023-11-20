import img1 from "/public/Allproject/Rectangle 2097 (5).png";
import img2 from "/public/Allproject/Rectangle 2097.png";
import img3 from "/public/Allproject/Rectangle 2097 (1).png";
import img4 from "/public/Allproject/Rectangle 2097 (2).png";
import img5 from "/public/Allproject/Rectangle 2097 (3).png";
import img6 from "/public/Allproject/Rectangle 2097 (4).png";
import ProjectCard from "./ProjectCard";

const AllProject = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row d-flex flex-column">
          <div className="col-md-6">
            <h6>All Project</h6>
          </div>
          <div className="col-md-6">
            <h4>Better Agency/SEO Solution At Your Fingertips</h4>
          </div>
        </div>
        <div className="row my-4">
            <ProjectCard img={img1}/>
            <ProjectCard img={img2}/>
            <ProjectCard img={img3}/>
            <ProjectCard img={img4}/>
            <ProjectCard img={img5}/>
            <ProjectCard img={img6}/>

        </div>
      </div>
    </div>
  );
};

export default AllProject;
