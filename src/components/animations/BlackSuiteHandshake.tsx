import Lottie from 'react-lottie';
import animationData from './json/black-suit-handshake.json';

export function BlackSuiteHandshake() {
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
