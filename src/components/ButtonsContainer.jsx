import styles from "./ButtonsContainer.module.css";
// eslint-disable-next-line react/prop-types
const ButtonsContainer = ({ onButtonClick }) => {
  const buttonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonsName.map((buttonsName) => (
        // eslint-disable-next-line react/jsx-key
        <button className={styles.button} onClick={() => onButtonClick(buttonsName)}>
          {buttonsName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
