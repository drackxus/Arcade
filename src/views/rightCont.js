import "../styles.css";
import RightCont from "./rightCont";

export default function rightCont() {
  return (
    <div className="rightcont">
      <div className="topmenu">
        <ul role="list" className="topmenu_list">
          <li className="topmenu_list_item">
            <img
              src="https://uploads-ssl.webflow.com/6112a3256062ec3288e080f7/61240f5a6ece80765b79c11e_right_arrow.svg"
              loading="lazy"
              alt=""
              className="topmenu_list_item_img"
            />
            <div className="topmenu_list_item_txt">Inicio</div>
          </li>
          <li className="topmenu_list_item">
            <img
              src="https://uploads-ssl.webflow.com/6112a3256062ec3288e080f7/61240f5a6ece80765b79c11e_right_arrow.svg"
              loading="lazy"
              alt=""
              className="topmenu_list_item_img"
            />
            <div className="topmenu_list_item_txt">Descubrir</div>
          </li>
        </ul>
        <ul role="list" className="rightmenu_list">
          <li className="rightmenu_list_item">
            <img
              src="https://uploads-ssl.webflow.com/6112a3256062ec3288e080f7/6124131cbfd1233411ac4bc4_points.svg"
              loading="lazy"
              alt=""
              className="rightmenu_list_item_img"
            />
            <div className="rightmenu_list_points">0000</div>
          </li>
          <li className="rightmenu_list_item">
            <img
              src="https://uploads-ssl.webflow.com/6112a3256062ec3288e080f7/612411ce605dbe6c552acd3c_bell.svg"
              loading="lazy"
              alt=""
              className="rightmenu_list_item_img"
            />
          </li>
          <li className="rightmenu_list_item">
            <img
              src="https://uploads-ssl.webflow.com/6112a3256062ec3288e080f7/612411460744be18bb61b88a_bandeja.svg"
              loading="lazy"
              alt=""
              className="rightmenu_list_item_img"
            />
          </li>
        </ul>
      </div>
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
                src="https://uploads-ssl.webflow.com/6112a3256062ec3288e080f7/61241fc7381f9c3a0b0e5857_credito.jpg"
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
      <div className="ganancias_cont">
        <div className="ganancias_cont_tit">
          <img
            src="https://uploads-ssl.webflow.com/6112a3256062ec3288e080f7/612425405f725e05d7bc143c_ganancias.svg"
            loading="lazy"
            alt=""
            className="ganancias_cont_tit_img"
          />
          <div className="ganancias_cont_tit_txt">Ganancias y premios</div>
        </div>
        <div className="ganancias_list_cards">
          <div className="list_cards_card">
            <div className="listcard_card_tit">
              <h4 className="listcard_card_h">Headline 3</h4>
              <div className="listcard_card_txt">Monedas</div>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/6112a3256062ec3288e080f7/61242923f0a12e0c7201c57d_moneda.png"
              loading="lazy"
              alt=""
              className="listcard_card_img"
            />
          </div>
          <div className="list_cards_card card_blue">
            <div className="listcard_card_tit">
              <h4 className="listcard_card_h">Headline 3</h4>
              <div className="listcard_card_txt">Monedas</div>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/6112a3256062ec3288e080f7/61242a9219c658c65a8e34a9_diamante.png"
              loading="lazy"
              alt=""
              className="listcard_card_img"
            />
          </div>
          <div className="list_cards_card">
            <div className="listcard_card_tit">
              <h4 className="listcard_card_h">Headline 3</h4>
              <div className="listcard_card_txt">Monedas</div>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/6112a3256062ec3288e080f7/61242a9240d297568b9ca49a_rayo.png"
              loading="lazy"
              alt=""
              className="listcard_card_img"
            />
          </div>
        </div>
      </div>
      <div className="racha_cont">
        <div className="rachacont_tit">
          <img
            src="https://uploads-ssl.webflow.com/6112a3256062ec3288e080f7/612516afc0a05ed8072d12cf_flama.svg"
            loading="lazy"
            alt=""
          />
          <h2 className="rachacont_tit_txt">Tu racha</h2>
        </div>
        <div className="rachacont_item">
          <div className="rachacont_item_date">01/07/2021</div>
          <div className="rachacont_item_group">
            <div className="rachacont_itemgroup_item">1</div>
            <div className="rachacont_itemgroup_item bg_item"></div>
            <div className="rachacont_itemgroup_item">1</div>
          </div>
        </div>
        <div className="rachacont_item">
          <div className="rachacont_item_date">01/07/2021</div>
          <div className="rachacont_item_group">
            <div className="rachacont_itemgroup_item">1</div>
            <div className="rachacont_itemgroup_item bg_item"></div>
            <div className="rachacont_itemgroup_item">1</div>
          </div>
        </div>
        <div className="rachacont_item">
          <div className="rachacont_item_date">01/07/2021</div>
          <div className="rachacont_item_group">
            <div className="rachacont_itemgroup_item">1</div>
            <div className="rachacont_itemgroup_item bg_item"></div>
            <div className="rachacont_itemgroup_item">1</div>
          </div>
        </div>
      </div>
      <div className="ranking_cont">
        <div className="rankingcont_tit">
          <img
            src="https://uploads-ssl.webflow.com/6112a3256062ec3288e080f7/61251da2a5683478fc9cfe4c_vip.svg"
            loading="lazy"
            alt=""
          />
          <h2 className="rankingcont_tit_txt">Ranking</h2>
          <div className="form-block w-form">
            <form id="email-form" name="email-form" data-name="Email Form">
              <select
                id="field"
                name="field"
                className="ranking_cont_select w-select"
              >
                <option value="">General</option>
                <option value="First">First Choice</option>
                <option value="Second">Second Choice</option>
                <option value="Third">Third Choice</option>
              </select>
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
        <div className="rankingcont_searchcont">
          <div className="w-form">
            <form
              id="email-form-2"
              name="email-form-2"
              data-name="Email Form 2"
            >
              <input
                type="text"
                className="rankingcont_searchcont_search w-input"
                maxlength="256"
                name="name"
                data-name="Name"
                placeholder="Buscar usuarios"
                id="name"
              />
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
        <div className="rankingcont_list">
          <div className="rankingcontlist_col1">
            <div className="rankingcont_list_tit">Usuario</div>
          </div>
          <div className="rankingcontlist_col2">
            <div className="rankingcont_list_tit">Stats 1</div>
          </div>
          <div className="rankingcontlist_col3">
            <div className="rankingcont_list_tit">Stats 2</div>
          </div>
          <div className="rankingcontlist_col4">
            <div className="rankingcont_list_tit">Stats 3</div>
          </div>
          <div className="rankingcontlist_col5">
            <div className="rankingcont_list_tit"></div>
          </div>
        </div>
        <div className="rankingcont_list">
          <div className="rankingcontlist_col1">
            <div className="profile_cont profile_cont_list">
              <div className="profile_cont_img profilecontlistimg"></div>
              <div className="ranking_list_profile">
                <h3 className="welcome profilecontlistname">User name</h3>
                <div className="levels_cont">
                  <div className="levels">
                    <div className="levels_txt profilecontlistlevel">
                      Level 10
                    </div>
                  </div>
                  <div className="levels_graph">
                    <div className="levels_current"></div>
                    <div className="levels_max"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rankingcontlist_col2">
            <h4 className="ranking_list_value">00</h4>
          </div>
          <div className="rankingcontlist_col3">
            <h4 className="ranking_list_value">00</h4>
          </div>
          <div className="rankingcontlist_col4">
            <h4 className="ranking_list_value">00</h4>
          </div>
          <div className="rankingcontlist_col5">
            <a href="#" className="btn_three w-button">
              RETAR
            </a>
          </div>
        </div>
        <div className="rankingcont_list">
          <div className="rankingcontlist_col1">
            <div className="profile_cont profile_cont_list">
              <div className="profile_cont_img profilecontlistimg"></div>
              <div className="ranking_list_profile">
                <h3 className="welcome profilecontlistname">User name</h3>
                <div className="levels_cont">
                  <div className="levels">
                    <div className="levels_txt profilecontlistlevel">
                      Level 10
                    </div>
                  </div>
                  <div className="levels_graph">
                    <div className="levels_current"></div>
                    <div className="levels_max"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rankingcontlist_col2">
            <h4 className="ranking_list_value">00</h4>
          </div>
          <div className="rankingcontlist_col3">
            <h4 className="ranking_list_value">00</h4>
          </div>
          <div className="rankingcontlist_col4">
            <h4 className="ranking_list_value">00</h4>
          </div>
          <div className="rankingcontlist_col5">
            <a href="#" className="btn_three w-button">
              RETAR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
