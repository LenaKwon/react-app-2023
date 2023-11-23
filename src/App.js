import Button from "./Button";
import styles from "./App.module.css"


function App() {

  
  return (
    <div>
      <h1 className={styles.title}>welcome!</h1>
      <Button text={'Click me'}/>
    </div>
  );
}

export default App;
