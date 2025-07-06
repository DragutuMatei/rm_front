import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { BarChart } from "@mui/x-charts/BarChart";

function Doctorand() {
  const [teze, setTeze] = useState(false);
  const showTeze = () => {
    setTeze(!teze);
  };

  const [doctoranzi, setDoctoranzi] = useState(false);
  const showDoctoranzi = () => {
    setDoctoranzi(!doctoranzi);
  };
  return (
    <section className="doctorat">
      <div className="infos">
        <div className="left">
          <img
            src={require("../assets/images/Horia-Gheorghiujpg.jpg")}
            alt=""
          />
        </div>
        <div className="right">
          <h1>Prof. dr. ing. Horia GHEORGHIU</h1>
          <p>Decedat</p>
          <ul className="details">
            <li>Conducător de doctorat din anul: 2000 – 2022</li>
            <li>
              <a href="https://brainmap.ro/horia-gheorghiu">
                https://brainmap.ro/horia-gheorghiu
              </a>
            </li>
            <li>
              Domenii de competenţă:
              <ul className="d">
                <li>
                  Analiza stării de tensiuni si deformații în structuri de
                  rezistență solicitate static sau dinamic
                </li>
                <li>Vibrațiile sistemelor elastice</li>
                <li>Biomecanica structurilor osoase</li>
                <li>
                  Analiza comportamentului la solicitări statice și dinamice a
                  structurilor din materiale compozite
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="teze">
        <div className="but" onClick={showTeze}>
          <h2>
            Teze sustinute
            {teze ? <FaAngleUp /> : <FaAngleDown />}
          </h2>
        </div>
        <div
          className="table_wrapper"
          style={{ height: teze ? "auto" : "0px" }}
        >
          <table>
            <thead>
              <tr>
                <td>Nr. crt.</td>
                <td>NUME si PRENUME</td>
                <td>An susinere</td>
                <td>Titlul tezei</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>BEJAN Mihai</td>
                <td>2002</td>
                <td>Optimizarea locală a structurilor</td>
              </tr>
              <tr>
                <td>2</td>
                <td>NICODIM Mariana</td>
                <td>2011</td>
                <td>
                  Contribuții privind vibrodiagnoza mașinilor unelte în vederea
                  creșterii productivității acestora
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>CRISAN Nicoleta</td>
                <td>2011</td>
                <td>
                  Analiza comportamentului în condiții biologice a structurilor
                  cu aliaje noi de titan în aplicații medicale
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>VLASCEANU Daniel</td>
                <td>2011</td>
                <td>
                  Contribuții privind comportamentul mecanic al structurilor
                  axial simetrice din materiale hiper-elastice
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>BACIU Florin</td>
                <td>2011</td>
                <td>
                  Modelarea cu elemente finite a procesului de sudare în vederea
                  determinării tensiunilor și deformațiilor remanente
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>TUDOSE Virgil</td>
                <td>2011</td>
                <td>
                  Contribuții la studiul și realizarea structurilor mecanice a
                  aparatelor optice de ochire pentru armamentul individual{" "}
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>NUŢU Emil</td>
                <td>2012</td>
                <td>
                  Algoritmi pentru studiul remodelării osoase cu aplicabilitate
                  la proiectarea, analiza mecanică şi optimizarea implanturilor
                  protetice
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>BABIA Alexander</td>
                <td>2013</td>
                <td>
                  Contribuții privind studiul comportamentul biomecanic al
                  țesutului osos supus la solicitări dinamice prin șoc
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>STOCHIOIU Constantin</td>
                <td>2020</td>
                <td>
                  Contribution à l'étude du comportement visco-elastoplastique
                  d'n composite structural lin/épo
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h1 className="title_graf">Numar de teze sustinute</h1>
      <div style={{ width: "90%", margin: "20px 0" }}>
        <BarChart
          xAxis={[
            {
              id: "barCategories",
              data: ["2002", "2011", "2012", "2013", "2020"],
            },
          ]}
          series={[
            {
              data: [1, 5, 1, 1, 1],
            },
          ]}
          height={300}
        />
      </div>
      <div className="teze">
        <div className="but" onClick={showDoctoranzi}>
          <h2>
            Doctoranzi
            {doctoranzi ? <FaAngleUp /> : <FaAngleDown />}
          </h2>
        </div>
        <div
          className="table_wrapper"
          style={{ height: doctoranzi ? "auto" : "0px" }}
        >
          <table>
            <thead>
              <tr>
                <td>Nr. crt.</td>
                <td>NUME si PRENUME</td>
                <td>An susinere</td>
                <td>Titlul temei de cercetare</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>RIZEA Adriana</td>
                <td>2019</td>
                <td>
                  Contribuții privind optimizarea dispozitivelor de recuperare a
                  deficiențelor locomotorii
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>NICOLESCU Alexandru-Ionut</td>
                <td>2019</td>
                <td>
                  Analiza comportamentului mecanic al mecanismelor flexibile
                  obținute prin fabricație aditivă
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>PARLOG Radu-Ion</td>
                <td>2019</td>
                <td>
                  Contribuții privind utilizarea materialelor biocompozite
                  pentru fabricarea elementelor de siguranță rutieră.
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>ZANCU Andrei-Marius</td>
                <td>2020</td>
                <td>
                  Contribuții la îmbunătățirea siguranței pasive a
                  automobilelor.
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>PAPPAS Konstantinos</td>
                <td>2020</td>
                <td>
                  Contribuții la analiza și modelarea comportamentului unui
                  material compozit biodegradabil
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>TURCAN Petru</td>
                <td>2021</td>
                <td>Metoda alternativă de montaj a inelelor rulmenților.</td>
              </tr>
              <tr>
                <td>7</td>
                <td>PAUNESCU Ioan-Cristi</td>
                <td>2021</td>
                <td>
                  Analiza comportamentului la temperaturi înalte al unor
                  materiale compozite în vederea utilizării lor în construcția
                  retelelor de transport agent termic.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h1 className="title_graf">Numar de doctoranzi</h1>
      <div style={{ width: "90%", height: "400px", margin: "20px 0" }}>
        <BarChart
          xAxis={[
            {
              id: "barCategories",
              data: ["2019", "2020", "2021"],
            },
          ]}
          series={[
            {
              data: [3, 2, 2],
            },
          ]}
          height={300}
        />
      </div>
    </section>
  );
}

export default Doctorand;
