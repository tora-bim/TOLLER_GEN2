import Marquee from "react-fast-marquee";
import './App.css';
import gradiate from './assets/image/fv_gradiate.png';
import { useTranslation,Trans } from 'react-i18next';




function App() {
  const { t } = useTranslation();
  return (
    <>
      <div className='title container'>
        <h1 className='roboto-black'>BE YOUR<br/><span className='title_creative'>CREATIVE</span> PARTNER</h1>
        <Trans i18nKey="description">
          how to use i18next
        </Trans>
      </div>
      <div className="news">
        <Marquee>
          <p>ここにニュースが入ります。ここにニュースが入ります。ここにニュースが入ります。</p>
        </Marquee>
      </div>
      <div>
        <img src={gradiate} alt="gradiate" />
      </div>
    </>
  )
}

export default App
