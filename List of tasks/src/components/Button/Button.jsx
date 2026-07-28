import "./Button.css";

export const Button = ({ text }) => {
  return (
    <button className="button" type="submit">
      {text}
    </button>
  );
};
