import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../redux/features/counter/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center py-10 gap-4">
      <button
        className="text-xl w-32 h-16 bg-sky-700 hover:scale-95 text-white duration-300 rounded-xl"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="text-xl w-52 h-16 bg-sky-700 hover:scale-95 text-white duration-300 rounded-xl"
        onClick={() => dispatch(incrementByValue(5))}
      >
        Increment by 5
      </button>
      <div className="w-32 h-16 text-center">
        <h1 className="text-5xl">{count}</h1>
      </div>
      <button
        className="text-xl w-32 h-16 bg-sky-700 hover:scale-95 text-white duration-300 rounded-xl"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className="text-xl w-52 h-16 bg-sky-700 hover:scale-95 text-white duration-300 rounded-xl"
        onClick={() => dispatch(incrementByValue(-5))}
      >
        Decrement by 5
      </button>
    </div>
  );
};
export default Counter;
