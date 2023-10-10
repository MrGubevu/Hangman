import styles from './Keyboard.modules.css';


declare module '*.modules.css' {

    const styles: {
      button: string; 
    };
    export default styles;
  }
  