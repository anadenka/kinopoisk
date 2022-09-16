import React from 'react';
import { Link } from 'react-router-dom';
import './onlineCinema.scss';

function OnlineCinema() {
  return (

    <section className="blockSubscription">
      <div className='wrapSubscr'>

        <div className='innerSubscr'>
          <p className='yandexPlus'>Яндекс
            <span className='tryPluse yandexPl'>плюс</span>
          </p>
          <h1>Фильмы и сериалы <br/> по подписке Плюс Мульти</h1>
          <br/><span>30 дней бесплатно</span>
          <br/><p>Отменяйте в любой момент, напишем <br/> за 3 дня до первого списания</p>
        </div>

        <div className='generalLine'>
          <div className='rangeLine'>
            <span>30 дней бесплатно</span>
          </div>
          <div className='rangeLineTwo'></div>
          <p>Напишем на почту за 3 дня</p>
        </div>
        <Link className='tryPluse monthFree text-decoration-none' to='/h'>
          <span>Попробовать 30 дней бесплатно</span>
        </Link>
      </div>
    </section>
  )
}

export default OnlineCinema