import "./styles.scss";

export const Button = (props: any) => (
  <button
    className={`atom-button ${props.palette} ${props.size} ${props.rest}`}
    {...props}
  />
);
