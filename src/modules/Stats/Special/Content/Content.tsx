import React from 'react';
import styles from './Content.module.scss';
import { observer } from 'mobx-react-lite';
import { ICurrentImgTextId } from '../../../../library/common/Typing/interfaces';

interface IContentProps {
  currentImgTextId: ICurrentImgTextId;
}

export const Content: React.FC<IContentProps> = observer(({ currentImgTextId }) => {

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.backgroundImg}>
        <img className={styles.ImgPony} src={currentImgTextId.img} alt="none" />
      </div>
      <div className={styles.contentText}>
        {currentImgTextId.textId === 0 ?
          <p>Strength is a measure of your raw physical power or magical power<br />
        (If youre a Horny).It affects how much you can carry and the damage<br />if all melee attacks.</p> : null}

        {currentImgTextId.textId === 1 ? <p>Perception empowers you with precision and control.<br />
        You will be able to shoot at opponents very accurately!</p> : null}

        {currentImgTextId.textId === 2 ? <p>Endurance allows you to lift heavy objects with saddle or magic.</p> : null}

        {currentImgTextId.textId === 3 ? <p>Charisma allows you to successfully negotiate and<br />persuade interlocutors</p> : null}

        {currentImgTextId.textId === 4 ? <p>Intelligence allows you to understand complex mechanisms,<br />technology and microcircuits</p> : null}

        {currentImgTextId.textId === 5 ? <p>Agility increases the speed of combat maneuvers,<br />picking locks and reloading speed</p> : null}

        {currentImgTextId.textId === 6 ? <p>Luck allows you to survive even in the most risky moments.</p> : null}
      </div>
    </div>
  )
})