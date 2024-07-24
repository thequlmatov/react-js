import { TimeIndecator } from "./style";

const HooksComponent = () => {
  return (
    <div>
      <h1>Styled Component</h1>
      <TimeIndecator cl="#faad14" bg="#FFFBE6">18:00 </TimeIndecator>
      <TimeIndecator cl="#f5222d" bg="#FFF1F0"> 18:00 </TimeIndecator>
      <TimeIndecator cl="#722ed1" bg="#F9F0FF"> 18:00 </TimeIndecator>
    </div>
  )
}

export default HooksComponent;