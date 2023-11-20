
import AllProject from '../Components/AllProject';
import TeamSlider from '../Components/TeamSlider';
import Subscribe from '../Components/Subscribe';

const Project = () => {
    const teamValue ={
        title:'All Project',
        catagory:"Home"
    }
    return (
        <>
           <TeamSlider teamValue={teamValue}/>
           <AllProject/>
           <Subscribe/>
        </>
    );
}

export default Project;
