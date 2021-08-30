export default function ganaciasyPremios() {
  return (
    <div className="ganancias_cont">
      <div className="ganancias_cont_tit">
        <img
          src="../images/ganancias.svg"
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
            src="../images/moneda.png"
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
            src="../images/diamante.png"
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
            src="../images/rayo.png"
            loading="lazy"
            alt=""
            className="listcard_card_img"
          />
        </div>
      </div>
    </div>
  );
}
