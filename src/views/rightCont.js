import GanaciasyPremios from "./ganaciasyPremios";
import Racha from "./racha";
import Ranking from "./ranking";
import TopMenu from "./topMenu";

export default function rightCont() {
  return (
    <div className="rightcont">
      <TopMenu />
      <div className="profile">
        <div className="profile_cont">
          <div className="profile_cont_img"></div>
          <div className="profile_contright">
            <h3 className="welcome">Bienvenido, Granda</h3>
            <div className="levels_cont">
              <div className="levels">
                <div className="levels_txt">Level 10</div>
                <div className="levels_txt">Level 11</div>
              </div>
              <div className="levels_graph">
                <div className="levels_current"></div>
                <div className="levels_max"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile_cont_reto">
          <div className="profile_contreto_left">
            <p className="profile_contreto_p">
              Finaliza: Julio 30 de 2021, 15:00 hrs
            </p>
            <h3 className="profile_contreto_tit">
              Completar 20 ventas al final del dia
            </h3>
          </div>
          <div className="profile_contreto_center">
            <div className="credito_cont">
              <img
                src="../images/credito.jpg"
                loading="lazy"
                alt=""
                className="creditos_cont_img"
              />
              <div className="credito_cont_num">
                200
                <br />
                creditos
              </div>
            </div>
          </div>
          <div className="profile_contreto_right">
            <a href="#" className="btn w-button">
              COMIENZA
            </a>
            <a href="#" className="btn_two w-button">
              RETA
            </a>
          </div>
        </div>
      </div>
      <GanaciasyPremios />
      <Racha />
      <Ranking />
    </div>
  );
}
