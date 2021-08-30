import "../styles.css";
import "../styles2.css";
import LeftMenu from "./leftMenu";
import RightCont from "./rightCont";

export default function leftMenu() {
  return (
    <div className="main">
      <div className="container">
        <LeftMenu />
        <RightCont />
      </div>
    </div>
  );
}
