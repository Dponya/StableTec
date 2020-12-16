import React from 'react';
import styles from './Content.module.css'
import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query {
    getPonies {
        name
    }
  }
`;

export const Content = () => {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div className={styles.contentWrapper}>
            <p className={styles.contentText}>
                {data.rates}
            </p>
        </div>
    )
}