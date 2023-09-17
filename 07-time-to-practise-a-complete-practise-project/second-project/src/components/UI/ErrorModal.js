import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={onConfirm}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p className={classes.message}>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
