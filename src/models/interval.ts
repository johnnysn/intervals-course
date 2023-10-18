export interface Interval {
    label: string,
    seconds: number,
    intensity: Intensity
}

export enum Intensity {
    REST,
    LOW,
    HIGH
}