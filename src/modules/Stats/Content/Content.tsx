import React from 'react';
import styles from './Content.module.scss';
import img from '../../../resources/images/Skills_Strength.jpg'

export const Content = () => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.backgroundImg}>
        <img className={styles.ImgPony} src={img} alt="none" />
      </div>
      <p className={styles.contentText}>
        Strength is a measure of your raw physical power<br /> or magical power(If you're a Horny).<br />
        It affects how much you can carry and the damage<br />
        if all melee attacks
      </p>
    </div>
  )
}