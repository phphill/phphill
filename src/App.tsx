import GlobalStyles from './global-styles';
import {Navbar} from './components/Navbar';
import {Home} from './components/Home';
import {Sites} from './components/Sites';
import {Sistemas} from './components/Sistemas';
export function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Sites />
      <Sistemas />
      <GlobalStyles />
    </>
  );

  // return <Navbar />;
}
