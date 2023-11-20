import Counter from "../Components/Counter";

import WorkList from "../Components/WorkList";
import Slider from "../Components/Slider";
import Featured from "../Components/Featured";
import Subscribe from "../Components/Subscribe";

const Home = () => {
  return (
    <>
    <Slider/>
      <WorkList />
      <Counter />
      <Featured/>
      <Subscribe/>
    </>
  );
};

export default Home;
