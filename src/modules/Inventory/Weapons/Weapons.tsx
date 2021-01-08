import React from 'react';
import styles from './Weapons.module.scss';
import { Inventory } from '../../../library/utils/utils'
import { useStore } from '../../../main/stores/storeHooks';

export const Weapons: React.FC = () => {
    const weapon = useStore('weaponsStore');

    return (
        <div>
            <div className={styles.weaponsWrapper}>
                <div key={Inventory.PlazmaPistol} className={`${styles.card} ${styles.inventoryText}`} onClick={() => weapon.showItem(Inventory.PlazmaPistol)}>
                    <p>
                        Plazma-Pistol
                </p>
                    <h2>

                        Powerful weapon capable of piercing unarmored opponents
                </h2>
                </div>
                <div className={`${styles.content} ${styles.inventoryText}`}>
                    <img src={weapon.currentItem.img} alt={'no img'} className={styles.img} />
                </div>
                <div className={`${styles.card} ${styles.inventoryText}`}>
                    <p>
                        Axe
                </p>
                    <h2>
                        ax is a melee weapon. They can also cut down a tree!
                </h2>
                </div>
            </div>
            <div className={styles.weaponsWrapper}>
                <div className={`${styles.card} ${styles.inventoryText}`}>
                    <p>
                        TNT
                </p>
                    <h2>
                        An explosive bunch of TNT! She can strongly boom!
                </h2>
                </div>
                <div className={`${styles.card} ${styles.inventoryText}`}>
                    <p>
                        Horn!
                </p>
                    <h2>
                        Wait, WHAT? Your horn is... Weapon? Oh, of course: The horn can do magic and ... can PIERCE the enemy!
                </h2>
                </div>
            </div>
        </div>
    )
}