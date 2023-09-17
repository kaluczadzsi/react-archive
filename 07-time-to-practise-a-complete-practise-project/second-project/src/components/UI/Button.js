import classes from './Button.module.css';

const Button = ({ type, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={classes.button}
      type={type || 'button'}
    >
      {children}
    </button>
  );
};

export default Button;
