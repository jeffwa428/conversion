import styles from "./styles.module.scss";

interface InputProps {
  label: string;
  value: string | number;
  unitLabel: string;
  onChange: Function;
}

const Input: React.FC<InputProps> = ({ label, value, unitLabel, onChange }) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.inputLabel}>{label}:</label>
      <input
        type="number"
        className={styles.inputField}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
      />
      <span className={styles.unitSpan}>{unitLabel}</span>
    </div>
  );
};

export default Input;
