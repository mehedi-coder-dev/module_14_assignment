
import TeamSlider from '../Components/TeamSlider';
import OurService from '../Components/OurService';
import Subscribe from '../Components/Subscribe';

const Service = () => {
    const teamValue ={
        title:'Our Services',
        catagory:"Home"
    }
    return (
        
        <>
           <TeamSlider teamValue={teamValue}/>
           <OurService/>
           <Subscribe/>
        </>
    );
}

export default Service;
