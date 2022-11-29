import { FC } from "react";

import bannerUrl from '../../assets/banner.jpg';
import styles from './style.module.scss';

const FirstSection: FC = () => {
  return (
    <div className={styles.firstSection}>
      <img src={bannerUrl} alt="banner" />
    </div>
  )
}

export default FirstSection;