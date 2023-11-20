import Subscribe from "../Components/Subscribe";
import TeamSlider from "../Components/TeamSlider";
import Testimonials from "../Components/Testimonial";


const Testimonial = () => {
    const teamValue ={
        title:'TestimonialList',
        catagory:"Home"
    }
    return (
        <>
           <TeamSlider teamValue={teamValue}/>
           <Testimonials/>
           <Subscribe/>
        </>
    );
}

export default Testimonial;
