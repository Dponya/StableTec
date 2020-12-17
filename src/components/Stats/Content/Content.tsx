import React from 'react';
import styles from './Content.module.css'
import { useQuery, gql } from '@apollo/client';

const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

export const Content = () => {
  const { loading, error, data } = useQuery(LIST_COUNTRIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className={styles.contentWrapper}>
      {/* {data.countries.map((country: { code: string | number | readonly string[] | null | undefined; name: React.ReactNode; }) => (
                <option className={styles.contentText}>
                    {country.name}
                </option>
            ))} */}
      <p className={styles.contentText}>
        the end
            </p>
    </div>
  )
}