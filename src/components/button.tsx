interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"; //sometimes you can add more colours when needed so you define them. if in your app.tsx you define it as something invalid you will get a complialtion error. This is a good way to limit the options for a prop.
}

const button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={`btn btn-${color}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default button;
