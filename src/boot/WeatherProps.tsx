// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export default interface Weather {
    city: City;
    time: number;
    data: Datum[];
}

export interface City {
    id:      number;
    name:    string;
    country: string;
    coord:   Coord;
}

export interface Coord {
    lon: number;
    lat: number;
}

export interface Datum {
    dt:      number;
    main:    MainClass;
    weather: WeatherElement[];
    clouds:  Clouds;
    wind:    Wind;
    rain:    Rain;
    sys:     Sys;
    dt_txt:  string;
}

export interface Clouds {
    all: number;
}

export interface MainClass {
    temp:       number;
    temp_min:   number;
    temp_max:   number;
    pressure:   number;
    sea_level:  number;
    grnd_level: number;
    humidity:   number;
    temp_kf?:   number;
}

export interface Rain {
    "3h": number;
}

export interface Sys {
    pod: Pod;
}

export enum Pod {
    D = "d",
    N = "n",
}

export interface WeatherElement {
    id:          number;
    main:        MainEnum;
    description: Description;
    icon:        string;
}

export enum Description {
    BrokenClouds = "broken clouds",
    FewClouds = "few clouds",
    LightRain = "light rain",
    ScatteredClouds = "scattered clouds",
    SkyIsClear = "sky is clear",
}

export enum MainEnum {
    Clear = "Clear",
    Clouds = "Clouds",
    Rain = "Rain",
}

export interface Wind {
    speed: number;
    deg:   number;
}
