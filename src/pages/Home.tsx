import {IdeaBulb} from '../components/animations/IdeaBulb';
import {Emoji} from '../components/static/Emoji';
import {SCHeader, SCHomeContent} from './SCHome';
export function Home() {
  return (
    <>
      <SCHeader>
        <div className="container-full">
          <header>
            <h1>Muito mais do que Sites e Sistemas</h1>
            <div className="header-animations">
              <IdeaBulb />
            </div>
            <h2>A sua ideia no mundo digital</h2>
          </header>
        </div>
      </SCHeader>
      <SCHomeContent>
        <div className="container">
          {/* <SCHomeContent> */}
          <div className="home-content">
            <h3>
              Do site ao sistema próprio, vamos criar tudo do jeito que você
              sempre sonhou.
            </h3>
            <p>É igual a cheiro de carro novo, só que melhor </p>
            <Emoji symbol="❤️" label="Heart" size="10rem" />
          </div>
          <div className="home-content">
            <h3>
              Quando eu digo <em>vamos criar</em>, é porque{' '}
              <strong>vamos desenvolver juntos</strong> o melhor para o seu
              negócio ou para a sua ideia.
            </h3>
            <p>Este pode ser o início de uma grande parceria</p>
            <Emoji symbol="🤝🏻" label="Hand Shake" size="10rem" />
          </div>
          <div className="home-content">
            <p>E Lembre-se...</p>
            <img src="images/sucesso.png" alt="Sucess" />
            <p>
              <strong> Nunca é tarde para ter o melhor</strong>
            </p>
          </div>
          {/* </SCHomeContent> */}
        </div>
      </SCHomeContent>
    </>
  );
}
