import React from 'react';
import styles from './Content.module.scss';
import { observer } from 'mobx-react-lite';

interface IContentProps {
  currentImgText: any;
}

export const Content: React.FC<IContentProps> = observer(({ currentImgText }) => {

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.backgroundImg}>
        <img className={styles.ImgPony} src={currentImgText[0].img} alt="none" />
      </div>
      <p className={styles.contentText}>
        {currentImgText[0].text}
      </p>
    </div>
  )
})