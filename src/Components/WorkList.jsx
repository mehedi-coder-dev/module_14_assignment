import icone1 from "/public/workLIst/Activity.png";
import icone2 from "/public/workLIst/Heart.png";
import icone3 from "/public/workLIst/Work.png";
import WorkListItem from "./WorkListItem";

const WorkList = () => {
  return (
    <div className="bg-light py-5 pb-lg-5">
      <div className="container">
        <div className="row py-5 ">
          <p className="text-info">Work List</p>
          <h3 className="mb-5">We provide the Perfect Solution to your business growth</h3>
          <WorkListItem img={icone1} />
          <WorkListItem img={icone2} />
          <WorkListItem img={icone3} />
        </div>
      </div>
    </div>
  );
};

export default WorkList;
