"use client";
import { bebas } from "@/app/fonts";
import { Treino } from "@/models/treino";
import { useEffect, useState } from "react";
import styles from './TreinoTimer.module.css';
import Button from "./Button";

interface Props {
  treino: Treino;
}

interface TimerState {
  isPlaying: boolean;
  timer: number;
  currentInterval: number;
}

export default function TreinoTimer({ treino }: Props) {
  const [timerState, setTimerState] = useState<TimerState>({
    isPlaying: false,
    timer: treino.intervals[0].seconds,
    currentInterval: 0,
  });

  useEffect(() => {
    if (timerState.isPlaying) {
      const intervalId = setInterval(() => setTimerState(curr => {
        const newState = {...curr};

        if (curr.timer > 1) {
          newState.timer--;
        } else {
          if (curr.currentInterval < treino.intervals.length - 1) {
            newState.currentInterval++;
            newState.timer = treino.intervals[newState.currentInterval].seconds;
          } else {
            newState.isPlaying = false;
            newState.currentInterval = 0;
            newState.timer = treino.intervals[0].seconds;
          }
        }

        return newState;
      }), 50);

      return () => clearInterval(intervalId);
    }

    return () => {};
  }, [timerState.isPlaying, treino]);

  const playClickHandler = () => {
    setTimerState(curr => {
      return {
        ...curr,
        isPlaying: true
      };
    });
  }

  const stopClickHandler = () => {
    setTimerState(curr => {
      return {
        currentInterval: 0,
        timer: treino.intervals[0].seconds,
        isPlaying: false
      };
    });
  }

  const currInterval = treino.intervals[timerState.currentInterval];

  let bgColorClass = 'bg-gray-400';
  if (timerState.isPlaying) {
    if (currInterval.intensity == 0) {
      bgColorClass = 'bg-teal-300';
    } else if (currInterval.intensity == 1) {
      bgColorClass = 'bg-orange-300';
    } else if (currInterval.intensity >= 2) {
      bgColorClass = 'bg-orange-600';
    }
  }

  const totalTime = treino.intervals.map(i => i.seconds).reduce((v1, v2) => v1 + v2, 0);
  const remainingTime = treino.intervals.filter((interval, index) => index > timerState.currentInterval)
    .map(i => i.seconds).reduce((v1, v2) => v1 + v2, 0) + timerState.timer;
  const progress = Math.round(remainingTime * 100 / totalTime);

  return (
    <div className={`${styles['panel']} border rounded py-2 border-gray-50 ${bebas.className}`}>
      <div className={`${styles['timer']} flex items-center justify-center p-4 text-8xl`}>
        {timerState.isPlaying ? timerState.timer : '--'}
      </div>

      <div className={`${styles['bar']} ${bgColorClass} flex items-center justify-center h-full text-3xl`}>
        {timerState.isPlaying ? currInterval.label : 'Clique para iniciar o treino'}
      </div>

      <div className={`${styles['progress']} bg-gray-700 h-full`}>
        <div className='bg-teal-600 h-full' style={{width: `${progress}%`}}></div>
      </div>

      <div className={`${styles['start']} flex justify-center col-span-2`}>
        <Button onClick={playClickHandler}>Iniciar</Button>
      </div>

      <div className={`${styles['stop']} flex justify-center col-span-2`}>
        <Button onClick={stopClickHandler} cancel={true}>Parar</Button>
      </div>
    </div>
  );
}
