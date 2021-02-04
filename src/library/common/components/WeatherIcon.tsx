import React from 'react';
import { FaCloudRain, FaCloud, FaSun, FaSnowflake } from "react-icons/fa";
import { RiDrizzleFill } from 'react-icons/ri';
import { GrStatusUnknown } from 'react-icons/gr'

interface IWeatherIconProps {
    weatherOne: string;
    styles: string;
}

export const WeatherIcon: React.FC<IWeatherIconProps> = ({ weatherOne, styles }) => {

    enum WeatherState {
        Clouds = 'Clouds',
        Rain = 'Rain',
        Clear = 'Clear',
        Snow = 'Snow',
        Drizzle = 'Drizzle',
        NoData = 'NoData'
    }

    const WeatherIconKey: Record<string, JSX.Element | string> = {
        [WeatherState.Clouds]: <FaCloud className={styles} />,
        [WeatherState.Rain]: <FaCloudRain className={styles} />,
        [WeatherState.Clear]: <FaSun className={styles} />,
        [WeatherState.Snow]: <FaSnowflake className={styles} />,
        [WeatherState.Drizzle]: <RiDrizzleFill className={styles} />,
        [WeatherState.NoData]: <GrStatusUnknown className={styles} />
    }

    return (
        <div>
            {WeatherIconKey[weatherOne]}
            {weatherOne === WeatherIconKey[weatherOne] ? WeatherIconKey[weatherOne] : WeatherIconKey.NoData}
        </div>
    )
}