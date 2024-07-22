import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import DisplayCounter from "./DisplayCounter";
import "./HomePage.css";
import UpdateCounterButton from "./UpdateCounterButton";
import Carousel from "./Carousel";


export default function HomePage() {
  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <div className="">
       {/* my carousel */}
       <Carousel/>
       {/* end */}
        {/* <UpdateCounterButton /> */}
        {/* <DisplayCounter /> */}
      </div>
    </>
  );
}
