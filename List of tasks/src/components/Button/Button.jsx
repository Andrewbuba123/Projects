import "./Button.css";

export const Button = ({ text, type }) => {
  return (
    <button className="button" type={type}>
      {text}
    </button>
  );
};
