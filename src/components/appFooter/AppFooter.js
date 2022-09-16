import React from 'react'
import { Link } from 'react-router-dom'
import './appFooter.scss'

function AppFooter() {
  return (
    <div className='wrapFooter'>
      <div className='innerFooter'>

        <div className='socialNetworks'>
          <Link to='' className='iconMasks'>
            <img 
              className='socialMediaIcons' 
              alt='vk' 
              src='https://avatars.mds.yandex.net/get-bunker/118781/0ae3d1ca27d3794204beec7d3810025f8c2b7e87/svg'/>
          </Link>
          <Link to='' className='iconMasks'>
            <img 
              className='socialMediaIcons' 
              alt='twitter' 
              src='https://avatars.mds.yandex.net/get-bunker/61205/97123f0bc0c689932a2fb6b62d3ab8ce04d7e936/svg'/>
          </Link>
          <Link to='' className='iconMasks'>
            <img 
              className='socialMediaIcons' 
              alt='telegram' 
              src='https://avatars.mds.yandex.net/get-bunker/56833/9f570502e378d5e28a5a173a273fa811c4490a73/svg'/>
          </Link>
          <Link to='' className='iconMasks'>
            <img 
              className='socialMediaIcons' 
              alt='youtube' 
              src='https://avatars.mds.yandex.net/get-bunker/128809/65fe1abdd405eb82aec7490588a1ec6745d9ab87/svg'/>
          </Link>
        </div>


        <ul className='footerContentLinks'>
          <li className='footerItemList'>
            <Link className='/*text-decoration-none link-light*/ footerContentItem' to=''>Вакансии</Link>
          </li> 
          <li className='footerItemList'>
            <Link className='footerContentItem' to=''>Реклама</Link>
          </li> 
          <li className='footerItemList'>
            <Link className=' footerContentItem' to=''>Соглашение</Link>
          </li> 
          <li className='footerItemList'>
            <Link className='footerContentItem' to=''>Справка</Link>
          </li> 
          <li className='footerItemList'>
            <Link className='footerContentItem' to=''>Блог</Link>
          </li> 
          <li className='footerItemList'>
            <Link className='footerContentItem' to=''>Предложения</Link>
          </li> 
          <li className='footerItemList'>
            <Link className='footerContentItem' to=''>Служба поддержки</Link>
          </li> 
        </ul>

        <div className='downloadApp'>
          <Link to='' className='opacityLink'>
            <img
              alt='AppStore' 
              src='https://avatars.mds.yandex.net/get-bunker/50064/9de0796ad18834328b4d4858b524bf8ce6f31f98/svg'/>
          </Link>
          <Link to='' className='opacityLink'>
            <img 
              alt='GooglePlay' 
              src='https://avatars.mds.yandex.net/get-bunker/994123/d4d889eb60c34ed8ca7d3c0fe965b8327e229fcf/svg'/>
          </Link>
          <Link to='' className='opacityLink'>
            <img 
              alt='AppGallery' 
              src='https://avatars.mds.yandex.net/get-bunker/128809/1b6561563c22de1014279a528719f4f7d9360296/svg'/>
          </Link>
        </div>

        <div className='footerBottom'>
          <p>© 2003 — 2022, 
            <Link className='text-decoration-none linkKinop' to=''> 
              <p>Кинопоиск</p> 
            </Link> 
            <span>18+</span>
          </p>

          <div className='linksBottom'>
            <Link to='' className='text-decoration-none linkBott'><p>Телепрограмма</p></Link>
            <Link to='' className='text-decoration-none linkBott'><p>Музыка</p></Link>
            <Link to='' className='text-decoration-none linkBott'><p>Афиша</p></Link>
          </div>

          <p>
            Проект компании
            <Link to='' className='text-decoration-none linkYand'>
              <span>Яндекс</span>
            </Link>
          </p>

        </div>
      </div>
    </div>
  )
}

export default AppFooter