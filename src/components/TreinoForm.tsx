"use client";
import { Interval } from "@/models/interval";
import TextInput from "./TextInput";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import SelectInput from "./SelectInput";
import { ImBin } from "react-icons/im";
import { Treino } from "@/models/treino";

interface Props {
  onSubmit: (treino: Treino) => void,
  treino?: Treino
}

export default function TreinoForm({onSubmit, treino}: Props) {
  const [intervals, setIntervals] = useState<Interval[]>([]);
  const [label, setLabel] = useState("");
  const [treinoId, setTreinoId] = useState<string | null>(null);
  const formElement = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (treino) {
      setIntervals(treino.intervals);
      setLabel(treino.label);
      setTreinoId(treino.id);
    } else {
      setIntervals([]);
      setLabel("");
      setTreinoId(null);
    }
  }, [treino]); 

  const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formElement.current?.checkValidity() && intervals.length > 0) {
      const treino = {
        id: treinoId ?? '',
        label,
        intervals
      }
  
      onSubmit(treino);
    } else {
      throw new Error("Formulário inválido!");
    }
  };

  const novoIntervaloHandler = () => {
    setIntervals((intervals) => {
      const newIntervals = [...intervals];
      newIntervals.push({
        label: "Descanso",
        seconds: 60,
        intensity: 0,
      });
      return newIntervals;
    });
  };

  const labelChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(event.target.value);
  };

  const intervalChangeHandler = (index: number, interval: Interval) => {
    setIntervals((intervals) => {
      const newIntervals = [...intervals];
      newIntervals[index] = interval;
      return newIntervals;
    });
  };

  const intervalRemoveHandler = (index: number) => {
    setIntervals((intervals) => {
      const newIntervals = [...intervals];
      newIntervals.splice(index, 1);
      return newIntervals;
    });
  };

  return (
    <form onSubmit={submitHandler} ref={formElement}>
      <TextInput
        name="label"
        label="Nome"
        placeholder="Nome do treino"
        style={{ width: "300px" }}
        value={label}
        onChange={labelChangeHandler}
        required
      />
      <h3 className="text-xl leading-loose">Intervalos</h3>

      {intervals.map((interval, index) => (
        <div
          key={index}
          className="border rounded border-teal-300 m-2 p-2 flex gap-2 max-w-[330px]"
        >
          <TextInput
            name={`interval_label_${index}`}
            label="Intervalo"
            placeholder="Intervalo"
            style={{ width: "120px" }}
            value={interval.label}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
              intervalChangeHandler(index, { ...interval, label: evt.target.value })
            }
            required
          />
          <TextInput
            name={`interval_seconds_${index}`}
            label="Duração"
            placeholder="Seg."
            style={{ width: "55px" }}
            type="number"
            min={1}
            max={600}
            value={interval.seconds}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
              intervalChangeHandler(index, { ...interval, seconds: +evt.target.value })
            }
            required
          />
          <SelectInput
            name={`interval_intensity_${index}`}
            label="Intensidade"
            value={interval.intensity}
            onChange={(evt: React.ChangeEvent<HTMLSelectElement>) =>
              intervalChangeHandler(index, { ...interval, intensity: +evt.target.value })
            }
            required
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </SelectInput>
          <button onClick={() => intervalRemoveHandler(index)} className="text-red-500">
            <ImBin />
          </button>
        </div>
      ))}

      <button
        className="m-2 border border-teal-300 rounded px-3 py-1 text-teal-300"
        onClick={novoIntervaloHandler}
        type="button"
      >
        Novo intervalo
      </button>
      <div className="flex justify-center">
        <Button className="mt-6" type="submit">
          Enviar
        </Button>
      </div>
    </form>
  );
}
