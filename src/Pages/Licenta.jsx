import { Link } from "react-router-dom";
import Banner from "../Components/Banner";

function Licenta() {
  return (
    <>
      <Banner title="Admitere licenta" path="Admintere / licenta" />
      <section className="licenta">
        <div className="left">
          <h1>De ce Inginerie mecanica la FIIR?</h1>
          <p>
            Foarte mulţi absolvenţi de liceu sunt parţial nehotărȃţi asupra
            direcţiei pe care ar dori să o îmbraţiseze în viitor. Ei ştiu deja
            că vor alege ingineria mecanică dar încă nu cunosc oferta fiecărei
            specializări. Programul de <b>INGINERIE MECANICĂ</b> denumit{" "}
            <b>CALCULUL STRUCTURILOR MECANICE</b> a fost gȃndit pentru a pregăti
            ingineri care să poată adapta utilizarea computerului la sistemele
            mecanice reale, ingineri cu viziune globală care să schimbe esential
            produsele din jurul nostru, de la roboţi, automobile, avioane la
            sateliţi şi chiar mai departe. Programul este centrat pe aplicarea
            celor mai noi tendinţe în proiectarea CAD/CAM, tehnologii de
            îmbinare a multimaterialelor, ingineria suprafațelor, tehnologii de
            manufacturare aditivă, inspecția și gestionarea integrității pe
            întrega durată de viață.
          </p>
          <p>
            Absolvenţii programului <b>Calculul Structurilor mecanice</b>{" "}
            dobândesc cunoştinţe solide de proiectare asistată de calculator
            (AutoCAD, Solidworks), modelare, simulare si optimizare cu programe
            de calcul performante (ANSYS, ABAQUS), cele mai noi metode
            experimentale pentru calculul si proiectarea structurilor realizate
            din materiale inovative, limbaje de programare, etc.
          </p>
        </div>
        <div className="right">
          <img
            src={require("../assets/images/27-of-045-768x512 1.png")}
            alt=""
            className="img img1"
          />
          <div className="img img2">
            <h1>10+</h1>
            <h2>Laboratoare</h2>
          </div>
          <img
            src={require("../assets/images/45-of-045-768x512 1.png")}
            alt=""
            className="img img3"
          />
        </div>
      </section>
      <section className="intrb">
        <div className="card">
          <h2>
            <b>Cum te înscrii?</b>
          </h2>
          <p>
            Pentru admitere la studiile universitare de licenţă în domeniul
            Inginerie Mecanică, programul <b>Calculul Structurilor</b> mecanice,
            sunt disponibile 30 de locuri finantate de la buget precum şi locuri
            cu taxă, în cadrul Facultăţii de Inginerie Industrială şi Robotică
            (FIIR). Admiterea candidaţilor se efectuează conform metodologiei
            afişate pe site-ul FIIR.
          </p>
        </div>
        <div className="card color">
          <h2>
            <b>Ce faci după absolvire?</b>
          </h2>
          <p>
            După absolvire, poţi opta pentru continuarea studiilor la programele
            de masterat din Facultatea de Inginerie Industrială și Robotică și
            în special în programul de master Siguranța şi Integritatea
            Structurilor, al departamentului de Rezistența Materialelor.
            Absolvirea cursurilor de masterat poate fi urmată de pregătirea prin
            programele de doctorat în domeniul Inginerie mecanică, departamentul
            de Rezistenta Materialelor având în acest moment conducători de
            doctorat cu mare experiența în domeniu.
          </p>
        </div>
      </section>
      <p className="p">
        Programul poate fi urmat și de studenții care intenționează să
        folosească pregătirea lor tehnică pentru formarea profesională
        postuniversitară în domenii cum ar fi ingineria construcțiilor civile și
        ingineria medicală. Absolvenții acestui program vor avea pregătirea
        necesară pentru a ocupa posturi de ingineri în companii
        multidisciplinare, firme multinaționale, institute de
        cercetare-dezvoltare în departamentele de calcul sau proiectare în firme
        românesti sau internationale de prestigiu.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Licenta;
