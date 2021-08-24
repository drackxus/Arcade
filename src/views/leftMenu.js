import "../styles.css";

export default function leftMenu() {
  return (
    <div className="leftmenu">
      <div className="leftmenu_avatar"></div>
      <div className="leftmenu_menu">
        <div className="leftmenu_menu_item">
          <img
            src="https://uploads-ssl.webflow.com/6112a3256062ec3288e080f7/6112a882c50c617ca1d277bb_Vector.svg"
            loading="lazy"
            alt=""
            className="menu_item_img"
          />
          <div className="menu_item_txt">Perfil</div>
        </div>
        <div className="leftmenu_menu_item">
          <img
            src="https://uploads-ssl.webflow.com/6112a3256062ec3288e080f7/6112afaac50c610f9dd29ea7_ray.svg"
            loading="lazy"
            alt=""
            className="menu_item_img"
          />
          <div className="menu_item_txt">Mis duelos</div>
        </div>
        <div className="leftmenu_menu_item">
          <img
            src="https://uploads-ssl.webflow.com/6112a3256062ec3288e080f7/6112b02645088c5bd3144ee1_chat.svg"
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
