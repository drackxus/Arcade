import "../styles.css";
import "../styles2.css";
import LeftMenu from "./leftMenu";
import RightCont from "./rightCont";

export default function leftMenu() {
  return (
    <div className="main">
      <LeftMenu />
      <div className="container">
        <RightCont />
      </div>
    </div>
  );
}
