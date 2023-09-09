import style from "./container.module.css";
const Container = ({percentageValue}) => {
  return (
    <>
     <div className={style.container} >
      <span >{percentageValue}%</span>
      <div  className={style.percent} style={{width:`${percentageValue}%`}}/>
     </div>
    </>
  )
}

export default Container


