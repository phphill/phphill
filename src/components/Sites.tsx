import {CustomerOmniChannel} from './animations/CustomerOmniChannel';
import {Feedback} from './animations/Feedback';
import {MobileAnimation} from './animations/MobileAnimation';
import {AnimationWebMobileBlue} from './animations/WebAndMobileBlue';
import {SCSites} from './SCSites';

export function Sites() {
  return (
    <>
      <SCSites>
        <div className="container">
          <h3>
            Web ou Mobile, seu Site totalmente responsivo e para todos os
            dispositivos
            <AnimationWebMobileBlue />
          </h3>
        </div>
        <div className="container">
          <div className="sites-assets-and-text">
            <MobileAnimation />
          </div>
          <div className="sites-assets-and-text">
            <CustomerOmniChannel />
          </div>
          <div className="sites-assets-and-text">
            <Feedback />
          </div>
        </div>
      </SCSites>
    </>
  );
}
