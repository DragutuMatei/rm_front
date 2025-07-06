import React from "react";
import Banner from "../Components/Banner";

function SCSS() {
  return (
    <>
      <Banner title={"Sesiunea de comunicari stiintifice studentesti"} />
      <section className="scss">
        <div className="blog-card">
          <div className="meta">
            <img
              src={require("../assets/images/premiu.png")}
              alt=""
              className="photo"
            />
          </div>
          <div className="description">
            <h1>
              Caracterizarea mecanică a compozitului armat cu fibre de in
              orientate la ±45º
            </h1>
            <h2>Student: Anca DECA, anul I, Master SIS, FIIR</h2>
            <p>
              Conducători ştiinţifici: As. Constantin STOCHIOIU, Prof. Horia
              GHEORGHIU, Departamentul RM
            </p>
          </div>
        </div>
        <div className="blog-card alt">
          <div className="meta">
            <img
              src={require("../assets/images/premiu2.png")}
              alt=""
              className="photo"
            />
          </div>
          <div className="description">
            <h1>
              Studiul mecanic și proiectarea unui sistem de orientare pentru
              picioarele unui hexapod de cățărare – Premiul III
            </h1>
            <h2>Student: Nicoleta TÎRSÎNA, anul II, Master SIS, FIIR</h2>
            <p>
              Conducător ştiinţific: Prof. dr. ing. Ștefan SOROHAN,
              Departamentul RM
            </p>
          </div>
        </div>{" "}
        <div className="blog-card">
          <div className="meta">
            <img
              src={require("../assets/images/premiu3.png")}
              alt=""
              className="photo"
            />
          </div>
          <div className="description">
            <h1>
              Studiul mecanic și proiectarea unui sistem de orientare pentru
              picioarele unui hexapod de cățărare – Premiul III
            </h1>
            <h2>Student: Nicoleta TÎRSÎNA, anul II, Master SIS, FIIR</h2>
            <p>
              Conducător ştiinţific: Prof. dr. ing. Ștefan SOROHAN,
              Departamentul RM
            </p>
          </div>
        </div> <div className="blog-card alt">
          <div className="meta">
            <img
              src={require("../assets/images/mentiune.png")}
              alt=""
              className="photo"
            />
          </div>
          <div className="description">
            <h1>
              Studiul mecanic și proiectarea unui sistem de orientare pentru
              picioarele unui hexapod de cățărare – Premiul III
            </h1>
            <h2>Student: Nicoleta TÎRSÎNA, anul II, Master SIS, FIIR</h2>
            <p>
              Conducător ştiinţific: Prof. dr. ing. Ștefan SOROHAN,
              Departamentul RM
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SCSS;
