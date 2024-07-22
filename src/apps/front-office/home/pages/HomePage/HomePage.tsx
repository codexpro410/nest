import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import DisplayCounter from "./DisplayCounter";
import "./HomePage.css";
import UpdateCounterButton from "./UpdateCounterButton";
import Caro from "./Caro";


export default function HomePage() {
  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <div className="">
       {/* my carousel */}
       <Caro/>
       {/* end */}
        {/* <UpdateCounterButton /> */}
        {/* <DisplayCounter /> */}
      </div>
    </>
  );
}
