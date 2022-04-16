import {CustomerExperience} from '../components/animations/CustomerExperience';
import {CustomerOmniChannel} from '../components/animations/CustomerOmniChannel';
import {Feedback} from '../components/animations/Feedback';
import {AnimationWebMobileBlue} from '../components/animations/WebAndMobileBlue';
import {SCSites} from './SCSites';

export function Sites() {
  return (
    <>
      <SCSites>
        <div className="container">
          <h3>Celular, Tablet ou Computador?</h3>
          <h4>
            Isso não importa, seu Site vai funcionar e se adaptar a todos os
            tamanhos de tela.
          </h4>
          <AnimationWebMobileBlue />
          <p>A minha forma de desenvolver sites segue uma lógica simples:</p>
          <ul>
            <li>Planejamento</li>
            <li>Estudo do seguimento</li>
            <li>Concepção</li>
            <li>Desenvolvimento</li>
            <li>Deploy!</li>
          </ul>
          <p>
            Claro, em alguns casos, também existe a integração com o time do
            Cliente, como por exemplo, quando o Cliente já possui uma equipe de
            Marketing.
          </p>
        </div>
        <div className="contai">
          <p>Agora vamos falar sobre a Tekpix?</p>
          <p>Mas é claro que não!</p>
          <p>Vamos falar de algo que realmente funciona.</p>
        </div>
        <div className="container">
          <div className="sites-assets-and-text">
            <h4>
              Através do site, seus Clientes poderão chegar até as suas redes
              sociais, whatsapp e outros serviços.
            </h4>
            <CustomerOmniChannel />
            <p>
              É de conhecimento geral que um site traz mais confiança ao
              Cliente.
            </p>
            <p>
              Além de ser um centralizador de contatos oficiais, um site vai
              ajudar a impulsionar suas vendas ou alcançar um público maior,
              além de ter maior liberdade sobre o seu próprio conteúdo e
              personalização.
            </p>
          </div>
          <div className="sites-assets-and-text">
            <Feedback />
            <p>Receba o feedback e saiba como melhorar</p>
          </div>
          <div className="sites-assets-and-text">
            <CustomerExperience />
            <p>
              Aumente suas avaliações e recomendações no Google, Facebook e
              outros serviços
            </p>
          </div>
        </div>
      </SCSites>
    </>
  );
}
