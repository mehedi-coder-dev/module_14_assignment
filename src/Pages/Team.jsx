
import TeamSlider from '../Components/TeamSlider';
import OurTeam from '../Components/OurTeam';
import Subscribe from '../Components/Subscribe';

const Team = () => {
    const teamValue ={
        title:'Team',
        catagory:"Home"
    }
    return (
        <>
           <TeamSlider teamValue={teamValue}/>
           <OurTeam/>
           <Subscribe/>
        </>
    );
}

export default Team;
