import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import "./HomePage.css";

import Slider from "./Slider";


export default function HomePage() {
  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <div className="">
       <Slider/>
      </div>
    </>
  );
}
