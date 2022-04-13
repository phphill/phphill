/* eslint-disable jsx-a11y/anchor-is-valid */
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import StoreIcon from '@mui/icons-material/Store';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
export function MenuNavbar() {
  return (
    <ul>
      <a href="#">
        <li>
          <HomeIcon />
          HOME
        </li>
      </a>
      <a href="#">
        <li>
          <LanguageIcon />
          SITES
        </li>
      </a>
      <a href="#">
        <li>
          <SettingsSystemDaydreamIcon />
          SISTEMAS
        </li>
      </a>
      <a href="#">
        <li>
          <StoreIcon />
          CLIENTES
        </li>
      </a>
      <a href="#">
        <li>
          <FolderCopyIcon />
          TEMPLATES
        </li>
      </a>
      <a href="#">
        <li>
          <PermContactCalendarIcon />
          CONTATO
        </li>
      </a>
    </ul>
  );
}
