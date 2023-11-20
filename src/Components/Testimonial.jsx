import user1 from '/public/Testimonial/Rectangle 2097.png'
import user2 from '/public/Testimonial/Rectangle 2097 (5).png'
import user3 from '/public/Testimonial/Rectangle 2097 (1).png'
import user4 from '/public/Testimonial/Rectangle 2097 (2).png'
import user5 from '/public/Testimonial/Rectangle 2097 (3).png'
import user6 from '/public/Testimonial/Rectangle 2097 (4).png'
import User from './User';

const Testimonial = () => {
  return (
    <div className="py-5">
      <div className="container">
        {/* <div className="row">
          <div className="col-md-12">
            {" "}
            <h6 className="text-uppercase">Our Team Member</h6>
            <h4>Check our awesome team members</h4>
          </div>
        </div> */}
        <div className="row">
        <h6 className="text-uppercase">Our Team Member</h6>
            <h4>Check our awesome team members</h4>
          <User img={user1}/>
          <User img={user2}/>
          <User img={user3}/>
          <User img={user4}/>
          <User img={user5}/>
          <User img={user6}/>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
