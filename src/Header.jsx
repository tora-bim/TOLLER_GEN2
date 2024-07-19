import './index.css';
import './assets/css/Header.css';
import { useTranslation,Trans } from 'react-i18next';

function Header() {

    const lngs = {
        en: { nativeName: 'English' },
        ja: { nativeName: 'Japanese' },
    };
    const { t, i18n } = useTranslation();
    
    return (
      <>
      <div className="header container">
        <a href='/' className='logo roboto-normal'>TOLLER Inc.</a>
        <div className="menu">
            <div className='language'>{Object.keys(lngs).map((lng) => (
                <button
                type="submit"
                className='roboto-normal'
                key={lng}
                onClick={() => i18n.changeLanguage(lng)}
                disabled={i18n.resolvedLanguage === lng}
                >
                {lngs[lng].nativeName === "Japanese" ? "JA":"EN"}
                </button>))}
            <div/>
            </div>
            <div className="menu_lists">
                <a href="" className='menu_list roboto-normal'>HOME</a>
                <a href="" className='menu_list roboto-normal'>SERVICE</a>
                <a href="" className="menu_list roboto-normal">WORKS</a>
                <a href="" className="menu_list roboto-normal">CONTACT</a>
            </div>
        </div>
      </div>
      </>
    )
  }
  
export default Header
  