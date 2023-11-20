
import { counterInfo } from "../api/AllInfo";
import CounterItem from "./CounterItem";

const Counter = () => {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="row">
          {counterInfo.map((ele) => (
            <CounterItem key={Math.random()} img={ele.img} count={ele.count} happy={ele.happy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;
