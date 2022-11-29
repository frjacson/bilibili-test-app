import { FC } from "react";

import title1Url from '../../assets/title1.jpg';
import title2Url from '../../assets/title2.jpg';
import commentUrl from '../../assets/comment.jpg';

import styles from './style.module.scss';

const ThirdSection: FC = () => {
  return (
    <div className={styles.thirdSection}>
      <img src={title1Url} alt="Title 1" />
      <img className={styles.comment} src={commentUrl} alt="Comment" />
      <img src={title2Url} alt="Title 2" />
      <img className={styles.comment} src={commentUrl} alt="Comment" />
    </div>
  )
}

export default ThirdSection;