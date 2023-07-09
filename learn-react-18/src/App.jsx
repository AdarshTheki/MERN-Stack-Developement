import './App.css'
import MultipleReturn from './01-MultipleReturn'
import Operators from "./02-Operators";
import UseState from './03-UseState'
import UseEffect from './04-UseEffect'
import Forms from  './05-Forms'
import FormsAPI from './06-FormsAPI';
import CustomHook from './07-CustomHook'
import ContextAPI from './08-ContextAPI';
import { useGlobalContext } from './09-AppContext';
import Reducer from './10-UseReducer'
import Performance from './11-Performance'
import ProgressiveImage from './13-ProgressiveImage/ProgressiveImage';

export default function App() {
  // const {name} = useGlobalContext();
  // console.log(name)
  return (
    <div>
      {/* <UseState/> */}
      {/* <UseEffect/> */}
      {/* <MultipleReturn/> */}
      {/* <Operators/> */}
      {/* <Forms/> */}
      {/* <FormsAPI/> */}
      {/* <CustomHook/>  */}
      {/* <ContextAPI/> */}
      {/* <Reducer/> */}
      {/* <Performance/> */}
      <ProgressiveImage/>
    </div>
  );
}
