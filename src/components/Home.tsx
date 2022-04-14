/* eslint-disable jsx-a11y/iframe-has-title */
import {IdeaBulb} from './animations/IdeaBulb';
import {SCHeader, SCHomeContent} from './SCHome';
export function Home() {
  return (
    <>
      <SCHeader>
        <div className="container-full">
          <header>
            <h1>Muito mais do que Sites e Sistemas</h1>
          </header>
          <h2>A sua ideia no mundo digital</h2>
        </div>
        <div className="container">
          {/* <img
            src="images/ideia-fora-da-caixa.png"
            alt=""
            className="header-images"
          /> */}
          <div className="header-animations">
            <IdeaBulb />
          </div>
        </div>
      </SCHeader>
      <SCHomeContent>
        <div className="container">
          <div className="home-content-card">
            <img src="images/sucesso.png" alt="" />
            <p>O sucesso do seu negócio na era digital</p>
          </div>
          <div className="home-content-card">
            <img src="images/brainstorm.jpg" alt="" />
            <p>Traga as suas ideias e vamos transformar o mundo</p>
          </div>
        </div>
      </SCHomeContent>
    </>
  );
}
