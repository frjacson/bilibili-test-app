import { FC, useState } from "react";
import cartoonUrl from '../../assets/cartoon.jpg';
import foodUrl from '../../assets/food.jpg';
import movieUrl from '../../assets/movie.png';
import lifeUrl from '../../assets/life.jpg';

import styles from './style.module.scss';
import classNames from "classnames";


const tabs = [
  {
    key: "cartoon",
    title: "动画"
  },
  {
    key: "food",
    title: "美食"
  },
  {
    key: "movie",
    title: "电影"
  },
  {
    key: "life",
    title: "生活"
  }
]

const SecondSection: FC = () => {
  const [activeTap, setActiveTab] = useState<string>("cartoon");
  return (
    <div className={styles.secondSection}>
      <ul>
        {
          tabs.map(tab => (
            <li key={tab.key} onClick={() => setActiveTab(tab.key)}>
              <span>{tab.title}</span>
              <span className={classNames(styles.line, {[styles.visible]: tab.key === activeTap})}></span>
            </li>
          ))
        }
      </ul>
      
      <div>
        <section>
          <h2>动画</h2>
          <img src={cartoonUrl} alt="Cartoon" />
        </section>
        <section>
          <h2>美食</h2>
          <img src={foodUrl} alt="food" />
        </section>
        <section>
          <h2>电影</h2>
          <img src={movieUrl} alt="movie" />
        </section>
        <section>
          <h2>生活</h2>
          <img src={lifeUrl} alt="Life" />
        </section>

      </div>
    </div>
  )
}

export default SecondSection;