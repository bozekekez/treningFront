import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import "./Turniri.css";

const Tablica = () => {
  const [render, setRender] = useState([]);
  const [turniri, setTurniri] = useState([]);
  const [turniriLoaded, setTurniriLoaded] = useState(false);
  const [selected, setSelected] = useState();

  const getTurniri = (e) => {
    e.preventDefault();
    if (!turniriLoaded) {
      fetch("https://trening-88.herokuapp.com/turnir/neaktivni", {
        method: "get",
        headers: { "Content-Type": "application/json" },
      })
        .then((resopnse) => resopnse.json())
        .then((temporary) => {
          setTurniri(temporary);
          setTurniriLoaded(true);
        });
    }
  };

  let renderTurniri = [];

  renderTurniri = turniri.map((member) => {
    return <option value={member._id}>{member.turnir}</option>;
  });

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const handleShow = () => {
    fetch(
      "https://trening-88.herokuapp.com/turnir/jedan/?" +
        new URLSearchParams({ _id: selected }),
      {
        method: "get",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((resopnse) => resopnse.json())
      .then((temporary) => {
        setRender(temporary);
      });
  };

  console.log(renderTurniri, selected);

  return (
    <div className="turniriParent">
      <div>
        <select
          className="turnirSelect"
          name="turniri"
          id="turnir"
          onChange={handleChange}
          onClick={getTurniri}
        >
          {renderTurniri}
        </select>
        <button className="turnirTablica" onClick={handleShow}>
          Prikaži
        </button>
      </div>
      {render.sudionici ? (
        <div className="kockeParent">
          {/* 16 */}
          <div className="runda16">
            <div className="dvokocka">
              {render.sudionici[0] !== render.sudionici8[0] ? (
                <div className="kocka">{render.sudionici[0]}</div>
              ) : (
                <div className="kockaZelena">{render.sudionici[0]}</div>
              )}
              {render.sudionici[1] !== render.sudionici8[0] ? (
                <div className="kocka">{render.sudionici[1]}</div>
              ) : (
                <div className="kockaZelena">{render.sudionici[1]}</div>
              )}
            </div>
            <div className="dvokocka">
              {render.sudionici[2] !== render.sudionici8[1] ? (
                <div className="kocka">{render.sudionici[2]}</div>
              ) : (
                <div className="kockaZelena">{render.sudionici[2]}</div>
              )}
              {render.sudionici[3] !== render.sudionici8[1] ? (
                <div className="kocka">{render.sudionici[3]}</div>
              ) : (
                <div className="kockaZelena">{render.sudionici[3]}</div>
              )}
            </div>
            <div className="dvokocka">
              {render.sudionici[4] !== render.sudionici8[2] ? (
                <div className="kocka">{render.sudionici[4]}</div>
              ) : (
                <div className="kockaZelena">{render.sudionici[4]}</div>
              )}
              {render.sudionici[5] !== render.sudionici8[2] ? (
                <div className="kocka">{render.sudionici[5]}</div>
              ) : (
                <div className="kockaZelena">{render.sudionici[5]}</div>
              )}
            </div>
            <div className="dvokocka">
              {render.sudionici[6] !== render.sudionici8[3] ? (
                <div className="kocka">{render.sudionici[6]}</div>
              ) : (
                <div className="kockaZelena">{render.sudionici[6]}</div>
              )}
              {render.sudionici[7] !== render.sudionici8[3] ? (
                <div className="kocka">{render.sudionici[7]}</div>
              ) : (
                <div className="kockaZelena">{render.sudionici[7]}</div>
              )}
            </div>
            <div className="dvokocka">
              {render.sudionici[8] !== render.sudionici8[4] ? (
                <div className="kocka">{render.sudionici[8]}</div>
              ) : (
                <div className="kockaZelena">{render.sudionici[8]}</div>
              )}
              {render.sudionici[9] !== render.sudionici8[4] ? (
                <div className="kocka">{render.sudionici[9]}</div>
              ) : (
                <div className="kockaZelena">{render.sudionici[9]}</div>
              )}
            </div>
            <div className="dvokocka">
              {render.sudionici[10] !== render.sudionici8[5] ? (
                <div className="kocka">{render.sudionici[10]}</div>
              ) : (
                <div className="kockaZelena">{render.sudionici[10]}</div>
              )}
              {render.sudionici[11] !== render.sudionici8[5] ? (
                <div className="kocka">{render.sudionici[11]}</div>
              ) : (
                <div className="kockaZelena">{render.sudionici[11]}</div>
              )}
            </div>
            <div className="dvokocka">
              {render.sudionici[12] !== render.sudionici8[6] ? (
                <div className="kocka">{render.sudionici[12]}</div>
              ) : (
                <div className="kockaZelena">{render.sudionici[12]}</div>
              )}
              {render.sudionici[13] !== render.sudionici8[6] ? (
                <div className="kocka">{render.sudionici[13]}</div>
              ) : (
                <div className="kockaZelena">{render.sudionici[13]}</div>
              )}
            </div>
            <div className="dvokocka">
              {render.sudionici[14] !== render.sudionici8[7] ? (
                <div className="kocka">{render.sudionici[14]}</div>
              ) : (
                <div className="kockaZelena">{render.sudionici[14]}</div>
              )}
              {render.sudionici[15] !== render.sudionici8[7] ? (
                <div className="kocka">{render.sudionici[15]}</div>
              ) : (
                <div className="kockaZelena">{render.sudionici[15]}</div>
              )}
            </div>
          </div>
          {/* 16 crte */}
          <div className="runda16">
            <div className="dvocrta16">
              <div className="crtaGornja" />
              <div className="crtaDonja" />
            </div>
            <div className="dvocrta16N">
              <div className="crtaGornja" />
              <div className="crtaDonja" />
            </div>
            <div className="dvocrta16N">
              <div className="crtaGornja" />
              <div className="crtaDonja" />
            </div>
            <div className="dvocrta16N">
              <div className="crtaGornja" />
              <div className="crtaDonja" />
            </div>
            <div className="dvocrta16N">
              <div className="crtaGornja" />
              <div className="crtaDonja" />
            </div>
            <div className="dvocrta16N">
              <div className="crtaGornja" />
              <div className="crtaDonja" />
            </div>
            <div className="dvocrta16N">
              <div className="crtaGornja" />
              <div className="crtaDonja" />
            </div>
            <div className="dvocrta16N">
              <div className="crtaGornja" />
              <div className="crtaDonja" />
            </div>
          </div>
          {/* 16 ravne crte */}
          <div className="runda16">
            <div className="crtaRavna1" />
            <div className="crataRavnaParent">
              <div className="crtaRavna2" />
            </div>
            <div>
              <div className="crtaRavna3" />
            </div>
            <div>
              <div className="crtaRavna2" />
            </div>
            <div>
              <div className="crtaRavna3" />
            </div>
            <div>
              <div className="crtaRavna2" />
            </div>
            <div>
              <div className="crtaRavna3" />
            </div>
            <div>
              <div className="crtaRavna2" />
            </div>
          </div>
          {/* runda 8 */}
          <div className="runda8">
            <div className="dvokocka8">
              {render.sudionici8[0] !== render.sudionici4[0] ? (
                <div className="kocka2">{render.sudionici8[0]}</div>
              ) : (
                <div className="kocka2Zelena">{render.sudionici8[0]}</div>
              )}
              {render.sudionici8[1] !== render.sudionici4[0] ? (
                <div className="kocka2">{render.sudionici8[1]}</div>
              ) : (
                <div className="kocka2Zelena">{render.sudionici8[1]}</div>
              )}
            </div>
            <div className="dvokocka8">
              {render.sudionici8[2] !== render.sudionici4[1] ? (
                <div className="kocka2">{render.sudionici8[2]}</div>
              ) : (
                <div className="kocka2Zelena">{render.sudionici8[2]}</div>
              )}
              {render.sudionici8[3] !== render.sudionici4[1] ? (
                <div className="kocka2">{render.sudionici8[3]}</div>
              ) : (
                <div className="kocka2Zelena">{render.sudionici8[3]}</div>
              )}
            </div>
            <div className="dvokocka8">
              {render.sudionici8[4] !== render.sudionici4[2] ? (
                <div className="kocka2">{render.sudionici8[4]}</div>
              ) : (
                <div className="kocka2Zelena">{render.sudionici8[4]}</div>
              )}
              {render.sudionici8[5] !== render.sudionici4[2] ? (
                <div className="kocka2">{render.sudionici8[5]}</div>
              ) : (
                <div className="kocka2Zelena">{render.sudionici8[5]}</div>
              )}
            </div>
            <div className="dvokocka8">
              {render.sudionici8[6] !== render.sudionici4[3] ? (
                <div className="kocka2">{render.sudionici8[6]}</div>
              ) : (
                <div className="kocka2Zelena">{render.sudionici8[6]}</div>
              )}
              {render.sudionici8[7] !== render.sudionici4[3] ? (
                <div className="kocka2">{render.sudionici8[7]}</div>
              ) : (
                <div className="kocka2Zelena">{render.sudionici8[7]}</div>
              )}
            </div>
          </div>
          {/* runda 8 crte */}
          <div className="runda8">
            <div className="dvocrta8">
              <div className="crtaGornja" />
              <div className="crtaDonja" />
            </div>
            <div className="dvocrta8N">
              <div className="crtaGornja" />
              <div className="crtaDonja" />
            </div>
            <div className="dvocrta8N">
              <div className="crtaGornja" />
              <div className="crtaDonja" />
            </div>
            <div className="dvocrta8N">
              <div className="crtaGornja" />
              <div className="crtaDonja" />
            </div>
          </div>
          {/* runda 8 ravne */}
          <div className="runda8">
            <div className="crtaRavna18" />
            <div className="crataRavnaParent">
              <div className="crtaRavna28" />
            </div>
            <div>
              <div className="crtaRavna38" />
            </div>
            <div>
              <div className="crtaRavna28" />
            </div>
            <div></div>
          </div>
          {/* runda 4 */}
          <div className="runda8">
            <div className="dvokocka8">
              {render.sudionici4[0] !== render.sudionici2[0] ? (
                <div className="kocka2">{render.sudionici4[0]}</div>
              ) : (
                <div className="kocka2Zelena">{render.sudionici4[0]}</div>
              )}
              {render.sudionici4[1] !== render.sudionici2[0] ? (
                <div className="kocka2">{render.sudionici4[1]}</div>
              ) : (
                <div className="kocka2Zelena">{render.sudionici4[1]}</div>
              )}
            </div>
            <div className="dvokocka8">
              {render.sudionici4[2] !== render.sudionici2[1] ? (
                <div className="kocka2">{render.sudionici4[2]}</div>
              ) : (
                <div className="kocka2Zelena">{render.sudionici4[2]}</div>
              )}
              {render.sudionici4[3] !== render.sudionici2[1] ? (
                <div className="kocka2">{render.sudionici4[3]}</div>
              ) : (
                <div className="kocka2Zelena">{render.sudionici4[3]}</div>
              )}
            </div>
          </div>
          {/* runda 4 crte */}
          <div className="runda8">
            <div className="dvocrta8">
              <div className="crtaGornja" />
              <div className="crtaDonja" />
            </div>
            <div className="dvocrta8N">
              <div className="crtaGornja" />
              <div className="crtaDonja" />
            </div>
          </div>
          {/* runda 4 ravne */}
          <div className="runda8">
            <div className="crtaFinaleGornja" />
            <div className="crtaFinaleDonja" />
          </div>
          {/* finale */}
          <div className="runda8">
            <div className="dvokocka2">
              {render.sudionici2[0] !== render.sudionici1[0] ? (
                <div className="kocka2">{render.sudionici2[0]}</div>
              ) : (
                <div className="kocka2Zelena">{render.sudionici2[0]}</div>
              )}
              {render.sudionici2[1] !== render.sudionici1[0] ? (
                <div className="kocka2">{render.sudionici2[1]}</div>
              ) : (
                <div className="kocka2Zelena">{render.sudionici2[1]}</div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Tablica;
