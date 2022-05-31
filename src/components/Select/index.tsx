import { capitalizeFirstLetter } from "../../utils/string";
import styles from "./styles.module.scss";

interface SelectProps {
  label: string;
  value: string;
  options: string[];
  onChange: Function;
}

const Select: React.FC<SelectProps> = ({ label, value, options, onChange }) => {
  return (
    <div className={styles.selectWrapper}>
      <label className={styles.selectLabel}>{label}:</label>
      <select
        className={styles.selectField}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {capitalizeFirstLetter(option)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
