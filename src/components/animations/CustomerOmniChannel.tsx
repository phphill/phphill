import Lottie from 'react-lottie';
import animationData from './json/customer-omnichannel.json';

export function CustomerOmniChannel() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie options={defaultOptions} />;
}
