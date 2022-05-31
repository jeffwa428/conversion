import { useState } from "react";
import Input from "./components/Input";
import Select from "./components/Select";
import { WEIGHT_UNITS, HEIGHT_UNITS, UNITS } from "./constants";
import {
  feetsToMeters,
  kilogramsToPounds,
  metersToFeets,
  poundsToKilograms,
} from "./utils/conversion";
import "./App.scss";

const App: React.FC = () => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [unit, setUnit] = useState<string>(UNITS[0]);

  const handleUnitChange = (option: string) => {
    setUnit(option);

    if (option === UNITS[0]) {
      // imperial
      setWeight(kilogramsToPounds(weight));
      setHeight(metersToFeets(height));
    } else {
      // metric
      setWeight(poundsToKilograms(weight));
      setHeight(feetsToMeters(height));
    }
  };

  const handleWeightChange = (value: number) => {
    setWeight(value);
  };

  const handleHeightChange = (value: number) => {
    setHeight(value);
  };

  return (
    <div className="conversion-app">
      <form className="conversion-form">
        <p className="conversion-form--title">Conversion</p>
        <Input
          label="Weight"
          value={weight}
          unitLabel={WEIGHT_UNITS[unit]}
          onChange={handleWeightChange}
        />
        <Input
          label="Height"
          value={height}
          unitLabel={HEIGHT_UNITS[unit]}
          onChange={handleHeightChange}
        />
        <Select
          label="Unit"
          value={unit}
          options={UNITS}
          onChange={handleUnitChange}
        />
      </form>
    </div>
  );
};

export default App;
