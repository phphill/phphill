import Lottie from 'react-lottie';
import animationData from './json/system-integration.json';

export function SystemIntegration() {
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
