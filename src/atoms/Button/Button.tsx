import "./styles.scss";

type Palette =
  | "pink"
  | "rose-purple"
  | "purple"
  | "blue"
  | "pastelle_blue"
  | "pastelle_purple"
  | "pastelle_lightblue"
  | "pastelle_yellow"
  | "dark-blue"
  | "red";

type Size = "medium" | "big" | "semicircle";

interface Props {
  palette: Palette;
  size: Size;
  rest?: any;
  children: any;
}

export const Button = (props: any) => {
  // console.log("BUTTON", props);
  return (
    <button
      className={`atom-button ${props.palette} ${props.size} ${props.rest}`}
      {...props}
    />
  );
};
