export default function ranking() {
  return (
    <div className="ranking_cont">
      <div className="rankingcont_tit">
        <img src="../images/vip.svg" loading="lazy" alt="" />
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
        </div>
      </div>
      <div className="rankingcont_searchcont">
        <div className="w-form">
          <form id="email-form-2" name="email-form-2" data-name="Email Form 2">
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
        </div>
      </div>
      <div className="rankingcont_listcont">
        <div className="rankingcont_list line_under">
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
            <div className="rankingcont_list_tit"> </div>
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
