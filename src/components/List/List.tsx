import React from 'react'
import styles from './List.module.css'

export const List = () => {
    return (
        <div className={styles.listWrapper}>
            <ul className={styles.listText}>
                <li>Strength     4</li>
                <li>Perception   7</li>
                <li>Endurance    5</li>
                <li>Charisma     4</li>
                <li>Intelligence 8</li>
                <li>Agillity     7</li>
                <li>Luck         5</li>
            </ul>
        </div>
    )
}