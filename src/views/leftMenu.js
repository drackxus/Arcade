export default function leftMenu() {
  return (
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
  );
}
