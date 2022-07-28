import { Btn ,TextBtn } from "./styles";



export  const Button = (props)=>{
  return(

<Btn onClick={props.clicked}>
  <TextBtn>
  {props.logo}
  </TextBtn>
  <TextBtn>
  {props.name}
  </TextBtn>
</Btn>


  );
}