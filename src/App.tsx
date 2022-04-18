import GlobalStyles from './global-styles';
import {Navbar} from './components/Navbar';
import {Home} from './pages/Home';
import {Sites} from './pages/Sites';
// import {Sistemas} from './pages/Sistemas';
import {Templates} from './pages/Templates';
export function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Sites />
      {/* <Sistemas /> */}
      <Templates />
      <GlobalStyles />
    </>
  );
}
