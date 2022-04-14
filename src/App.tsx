import GlobalStyles from './global-styles';
import {Navbar} from './components/Navbar';
import {Home} from './components/Home';
import {Sites} from './components/Sites';
import {Sistemas} from './components/Sistemas';
import {Templates} from './components/Templates';
export function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Sites />
      <Sistemas />
      <Templates />
      <GlobalStyles />
    </>
  );

  // return <Navbar />;
}
