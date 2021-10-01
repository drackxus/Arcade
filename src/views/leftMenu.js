export default function leftMenu() {
  return (
    <div className="leftmenucont">
      <div className="leftmenu">
        <div className="leftmenu_avatar"></div>
        <div className="leftmenu_menu">
          <div className="leftmenu_menu_item">
            <img
              src="/images/user.svg"
              loading="lazy"
              alt=""
              className="menu_item_img"
            />
            <div className="menu_item_txt">Perfil</div>
          </div>
          <div className="leftmenu_menu_item">
            <img
              src="/images/ray.svg"
              loading="lazy"
              alt=""
              className="menu_item_img"
            />
            <div className="menu_item_txt">Mis duelos</div>
          </div>
          <div className="leftmenu_menu_item">
            <img
              src="/images/chat.svg"
              loading="lazy"
              alt=""
              className="menu_item_img"
            />
            <div className="menu_item_txt">Team chat</div>
          </div>
        </div>
      </div>
      <div className="leftmenuopen">
               <div className="leftmenuclose"></div>
               <h3 className="leftmenutit">Perfil</h3>
               <div className="leftmenucont_pro">
                  <div className="profile_cont_img2"></div>
                  <a href="#" className="close_session">cerrar sesión</a>
               </div>
               <ul role="list" className="leftmenulist">
                  <li className="leftmenuitem">
                     <img src="/images/person.svg" loading="lazy" alt="" className="leftmenuitem_img"/>
                     <p className="leftmenuitem_p">1016010292</p>
                  </li>
                  <li className="leftmenuitem">
                     <img src="/images/name.svg" loading="lazy" alt="" className="leftmenuitem_img"/>
                     <p className="leftmenuitem_p">Juan Carlos Pinzon Ortega</p>
                  </li>
                  <li className="leftmenuitem">
                     <img src="/images/mail.svg" loading="lazy" alt="" className="leftmenuitem_img"/>
                     <p className="leftmenuitem_p">Juanpinzon@brm.com</p>
                  </li>
                  <li className="leftmenuitem">
                     <img src="/images/folder.svg" loading="lazy" alt="" className="leftmenuitem_img"/>
                     <p className="leftmenuitem_p">TMK</p>
                  </li>
                  <li className="leftmenuitem">
                     <img src="/images/down.svg" loading="lazy" alt="" className="leftmenuitem_img"/>
                     <p className="leftmenuitem_p">2021-06-10 11:43:34</p>
                  </li>
               </ul>
               <h3 className="leftmenutit">Campaña</h3>
               <ul role="list" className="leftmenulist">
                  <li className="leftmenuitem">
                     <p className="leftmenuitem_p">Davivienda</p>
                  </li>
                  <li className="leftmenuitem">
                     <p className="leftmenuitem_p">Davivienda Venta tarjeta - BOG</p>
                  </li>
                  <li className="leftmenuitem">
                     <p className="leftmenuitem_p">Equipo</p>
                  </li>
               </ul>
               <h3 className="leftmenutit">Mis duelos</h3>
               <p className="leftmenup">Realiza seguimiento a tus duelos</p>
               <div className="dueloscont_listcont">
                  <div className="rankingcont_list line_under">
                     <div className="dueloscontlist_col1">
                        <div className="rankingcont_list_tit">Resumen</div>
                     </div>
                     <div className="dueloscontlist_col2">
                        <div className="dueloscont_list_tit">Stats 1</div>
                     </div>
                     <div className="dueloscontlist_col3">
                        <div className="dueloscont_list_tit">Stats 2</div>
                     </div>
                     <div className="dueloscontlist_col4">
                        <div className="dueloscont_list_tit">Stats 3</div>
                     </div>
                  </div>
                  <div className="rankingcont_list">
                     <div className="dueloscontlist_col1">
                        <div className="duelocont_item">
                           <div className="rachacont_item_date">01/07/2021</div>
                           <div className="rachacont_item_group">
                              <div className="dueloscont_itemgroup_item">1</div>
                              <div className="rachacont_itemgroup_item bg_item"></div>
                              <div className="rachacont_itemgroup_item">1</div>
                           </div>
                        </div>
                     </div>
                     <div className="dueloscontlist_col2">
                        <h4 className="ranking_list_value">00</h4>
                     </div>
                     <div className="dueloscontlist_col3">
                        <h4 className="ranking_list_value">00</h4>
                     </div>
                     <div className="dueloscontlist_col4">
                        <h4 className="ranking_list_value">00</h4>
                     </div>
                  </div>
                  <div className="rankingcont_list">
                     <div className="dueloscontlist_col1">
                        <div className="duelocont_item">
                           <div className="rachacont_item_date">01/07/2021</div>
                           <div className="rachacont_item_group">
                              <div className="dueloscont_itemgroup_item">1</div>
                              <div className="rachacont_itemgroup_item bg_item"></div>
                              <div className="rachacont_itemgroup_item">1</div>
                           </div>
                        </div>
                     </div>
                     <div className="dueloscontlist_col2">
                        <h4 className="ranking_list_value">00</h4>
                     </div>
                     <div className="dueloscontlist_col3">
                        <h4 className="ranking_list_value">00</h4>
                     </div>
                     <div className="dueloscontlist_col4">
                        <h4 className="ranking_list_value">00</h4>
                     </div>
                  </div>
               </div>
            </div>
            <div className="leftmenuoverlay"></div>
    </div>
  );
}
