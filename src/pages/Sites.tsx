import Switch from '@mui/material/Switch';
import React, {useState} from 'react';
import {CustomerExperience} from '../components/animations/CustomerExperience';
import {CustomerOmniChannel} from '../components/animations/CustomerOmniChannel';
import {Feedback} from '../components/animations/Feedback';
import {AnimationWebMobileBlue} from '../components/animations/WebAndMobileBlue';
import {SCSites} from './SCSites';

export function Sites() {
  const [switchExample, setSwitchExample] = useState(true);
  const enableExample = () => {
    const testt = document.querySelector('#responsive-example');
    setSwitchExample(!switchExample);
    if (switchExample) {
      testt?.classList.add('sites-header-animated');
    } else {
      testt?.classList.remove('sites-header-animated');
    }
  };
  return (
    <>
      <SCSites id="sites">
        <div className="container">
          <div className="sites-content sites-header" id="responsive-example">
            <h3>Celular, Tablet ou Computador?</h3>
            <h4>
              Isso não importa, seu Site vai funcionar e se adaptar a todos os
              tamanhos de tela.
            </h4>
            <AnimationWebMobileBlue />
          </div>
          <p>Ative o botão para ver uma pequena demonstração</p>
          <Switch onChange={enableExample} color="default" />
          <div className="sites-content">
            <p>A minha forma de desenvolver sites segue uma lógica simples:</p>
            <div className="sites-list">
              <ul>
                <li>Planejamento</li>
                <li>Estudo do seguimento</li>
                <li>Concepção</li>
                <li>Desenvolvimento</li>
                <li>Testes</li>
                <li>Deploy!</li>
              </ul>
            </div>
          </div>
          <div className="sites-content">
            <p>
              Claro, em alguns casos, também existe a integração com o seu time,
              como por exemplo, quando Você já possui uma equipe de Marketing.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="sites-joker">
            <p>Agora vamos falar sobre a Tekpix?</p>
            <p>Mas é claro que não!</p>
          </div>
          <p>
            <strong>Vamos falar de algo que realmente funciona.</strong>
          </p>
        </div>
        <div className="container">
          <div className="sites-assets-and-text">
            <h4>
              <em>Por que eu devo ter um site?</em>
            </h4>
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
            <p>
              <strong>Receba feedbacks e saiba como melhorar</strong>
              <Feedback />
            </p>
          </div>
          <div className="sites-assets-and-text">
            <p>
              <strong>
                Aumente suas avaliações e recomendações no Google, Facebook e
                outros serviços
              </strong>
            </p>
            <CustomerExperience />
          </div>
        </div>
      </SCSites>
    </>
  );
}
