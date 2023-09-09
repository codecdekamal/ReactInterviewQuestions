import styles from "./app.module.css"
import Container from "./component/Container"
import { useEffect } from "react"
import { useState } from "react"
const App = () => {
  const [percentageValue,setPercentageValue] = useState(0);
  useEffect(()=>{
    const interval = setInterval(() => {
        setPercentageValue((prev)=>{
          if(prev<100){
            return  prev+1;
          }
          else{
            clearInterval(interval)
            return prev;
          }
        })
      }, 100);
  },[])
  return (
    <>
    <div className={styles.app}>
      <h1>This is a progress Navbar</h1>
      <Container percentageValue = {percentageValue}></Container>
    </div>
    </>
  )
}

export default App
 