import { FC, useEffect, useRef, useState } from "react";
import cartoonUrl from '../../assets/cartoon.jpg';
import foodUrl from '../../assets/food.jpg';
import movieUrl from '../../assets/movie.png';
import lifeUrl from '../../assets/life.jpg';

import styles from './style.module.scss';
import classNames from "classnames";

const tabs = [
  {
    key: "cartoon",
    title: "动画",
    url: cartoonUrl
  },
  {
    key: "food",
    title: "美食",
    url: foodUrl
  },
  {
    key: "movie",
    title: "电影",
    url: movieUrl
  },
  {
    key: "life",
    title: "生活",
    url: lifeUrl
  }
]

const SecondSection: FC = () => {
  const [activeTap, setActiveTab] = useState<string>("cartoon");
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const secondSectionRef = useRef<HTMLDivElement>(null);
  const activate = (key: string) => {
    const tabContentEl = document.querySelector(`[data-id=${key}]`);
    if(tabContentEl) {
      tabContentEl.scrollIntoView({
        behavior: "smooth"
      })
    }
    setActiveTab(key)
  }
  const onScroll = () => {
    if(secondSectionRef.current) {
      const { top } = secondSectionRef.current.getBoundingClientRect();
      setIsFixed(top <= 0);
      const sectionNodes = secondSectionRef.current.querySelectorAll('section');
      Array.from(sectionNodes).forEach((sectionEl: HTMLElement) => {
        const {top} = sectionEl.getBoundingClientRect();
        const key = sectionEl.getAttribute('data-id') || "";
        if(top <= 56) {
          setActiveTab(key)
        }
      })
    }
  }
 useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  },[]) 
  return (
    <div className={styles.secondSection} ref={secondSectionRef}>
      <ul className={classNames({[styles.isFixed]: isFixed})}>
        {
          tabs.map(tab => (
            <li key={tab.key} onClick={() => activate(tab.key)}>
              <span>{tab.title}</span>
              <span className={classNames(styles.line, {[styles.visible]: tab.key === activeTap})}></span>
            </li>
          ))
        }
      </ul>
      
      <div>
        {
          tabs.map(tab => (
            <section data-id={tab.key} key={tab.key}>
              <h2>{tab.key}</h2>
              <img src={tab.url} alt={tab.key} />
            </section>
          ))
        }

      </div>
    </div>
  )
}

export default SecondSection;