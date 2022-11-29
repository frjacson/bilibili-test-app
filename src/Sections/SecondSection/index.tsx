import { FC } from "react";
import cartoonUrl from '../../assets/cartoon.jpg';
import foodUrl from '../../assets/food.jpg';
import movieUrl from '../../assets/movie.png';
import lifeUrl from '../../assets/life.jpg';

import styles from './style.module.scss';

const SecondSection: FC = () => {
  return (
    <div className={styles.secondSection}>
      <ul>
        <li>动画</li>
        <li>美食</li>
        <li>电影</li>
        <li>生活</li>
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