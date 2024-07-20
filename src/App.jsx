import Marquee from "react-fast-marquee";
import './App.css';
import { useTranslation,Trans } from 'react-i18next';
import './assets/js/scroll_bg';
import FontChanger from './FontChanger.jsx';
import fv_arrow from './assets/image/fv_arrow.svg';




function App() {
  const { t } = useTranslation();
  return (
    <div className="root">
      <div className='title container'>
        <h1 className='roboto-regular title_all'>BE YOUR<FontChanger className='title_creative'text="CREATIVE" interval={250}></FontChanger> PARTNER</h1>
        <div className="descriptions">
        <div className="subtitle">
          <Trans i18nKey="subtitle">
            共にクリエイティブを創出する。
          </Trans>
        </div>
        <div className="right_description">
        <p>We will be your creative partner for<br/>your business's advancement.</p>
        <img src={fv_arrow} alt="" />
        </div>
        </div>
      </div>
      <div className="news">
        <Marquee>
          <p>2024.01.01 - ニュースがここに入ります。</p>
        </Marquee>
      </div>
      <section className="about"></section>
    </div>
  )
}

export default App
