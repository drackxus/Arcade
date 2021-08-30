export default function topMenu() {
  return (
    <div className="topmenu">
      <ul className="topmenu_list">
        <li className="topmenu_list_item">
          <img
            src="../images/right_arrow.svg"
            loading="lazy"
            alt=""
            className="topmenu_list_item_img"
          />
          <div className="topmenu_list_item_txt">Inicio</div>
        </li>
        <li className="topmenu_list_item">
          <img
            src="../images/right_arrow.svg"
            loading="lazy"
            alt=""
            className="topmenu_list_item_img"
          />
          <div className="topmenu_list_item_txt">Descubrir</div>
        </li>
      </ul>
      <ul className="rightmenu_list">
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
  );
}
