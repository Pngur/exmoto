import React, {useState ,useEffect, useRef,useCallback } from 'react';
import './Slider.scss';

import {Box, Truck, B2b} from './../../assets/image';
import SliderImage from './../../components/Main/SliderImage/SliderImage';
import Dots from './../../components/UI/Dots/Dots';

const Slider = () => {
   const [position, setPosition] = useState({pSlide: 0});
   const [curSlide, setSlides] = useState({curSlide: 0, trans: true});
   const [contWidth, setcontWidth] = useState({
      width: '',
      fillPercent: '50'
   });
   const [dots, setDots] = useState({dotsCount: [1,2,3], dotStatus: {0: true}});
   const [slids] = useState([
      {
         id: 'slide1',
         heading: 'Курьерская доставка',
         text: ' в любой населённый пункт СНГ и дальнего зарубежья',
         img: Box
      },
      {
         id: 'slide2',
         heading: 'от двери до двери',
         text: 'полный комплекс услуг по доставке почтовых и грузовых отправлений',
         img: B2b
      },
      {
         id: 'slide3',
         heading: 'Скорость и качество',
         text: 'соответствуют самым высоким требованиям',
         img: Truck
      }, 

   ]);
   const sliderWidth = useRef(null);

   // Меняем слайды по клику на Доты
   const changeSlideHandler = useCallback(arg => {
      let posy = 0;
      let currrentSlide = arg;
      let dotStatus = {};

      switch(true) {
         case(curSlide.curSlide === 2 &&  currrentSlide === 0):
            dotStatus[arg] = true;
            currrentSlide = 3;
            posy = -contWidth.width * 3;
            break;
         case(dots.dotsCount[arg] !== undefined ):
            dotStatus[arg] = true;
            posy = -contWidth.width * arg;
            break;
         default:
            dotStatus[arg] = true;
            posy = 0;
      }
      setSlides({curSlide: currrentSlide, trans: true });
      setDots(prevState => {return {dotsCount: prevState.dotsCount, dotStatus: dotStatus}})
      setPosition({pSlide: posy});
   }, [curSlide, contWidth.width, dots.dotsCount]);

   // Обнуляем transition после того как покажется последний слайд
   const updateTransiotionHandler = () => {
      if (curSlide.curSlide === sliderWidth.current.children.length-1 ) {
         setSlides({curSlide: 0, trans: false});
         setPosition({pSlide: 0});
      }
   } 
   // Узнаем ширину бокса в котором показываются слайды
   useEffect(() => { 
      if (sliderWidth.current.offsetWidth < 700) {
         setcontWidth({width: sliderWidth.current.offsetWidth, fillPercent: '100'});
      } else {
         setcontWidth({width: sliderWidth.current.offsetWidth});
      }
   }, []);
   // Рендерим слайды
   const allslids = slids.map(slide => <SliderImage key={slide.id} bgimage={slide.img} heading={slide.heading} text={slide.text} percent={contWidth.fillPercent}/>);  
   
   return (
      <div className="Container">
         <div className="Slider" >
            <div className="Slider-Box" onTransitionEnd={updateTransiotionHandler} ref={sliderWidth} style={{WebkitTransform: `translateX(${position.pSlide}px)`, transition: curSlide.trans ? "all 1s" : "none" }}>
               {allslids}
               <SliderImage 
                  key='clone-slide'
                  bgimage={slids[0].img}
                  heading={slids[0].heading} 
                  text={slids[0].text}
                  percent={contWidth.fillPercent}
               />
            </div>
               <Dots 
                  active={dots.dotStatus} 
                  dots={dots.dotsCount.length} 
                  changeSlide={(arg) => changeSlideHandler(arg)}
               />
         </div>
      </div>
   );
};

export default Slider;