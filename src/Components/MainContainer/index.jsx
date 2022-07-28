import { Container,ProfileImage,UserName,Name, InstaLogo } from "./styles";
import profile from '../../Images/perfil.jpeg'
import logo from '../../Images/instagramL.png'
import github from '../../Images/github.png'
import { Button } from "../Button";
import { YoutubeLogo,GlobeSimple,LinkedinLogo} from 'phosphor-react'
import { Footer } from "../Footer";

export  function MainContainer(){
  function handleClickYt(){
    window.location='https://www.youtube.com/channel/UCpemkoezMG_wI5i_-Iv1A6w';
      }

      function handleClickWWW(){
        window.location='https://danieladoliveira.netlify.app/';
          }
      function handleClickLinkedIn(){
        window.location='https://www.linkedin.com/in/daniela-fialho-d-oliveira-479b53163';
      }
      function handleClickGithub(){
        window.location='https://github.com/DanielaDoliveira';
      }
  return(

  <Container>
      <InstaLogo src = {logo}></InstaLogo>
     <ProfileImage src = {profile}></ProfileImage>
      <UserName>dan_doliv</UserName>
      <Name>Daniela</Name>

    <Button 
    
      logo = {<YoutubeLogo size={20} color="#272626" weight="fill" />}
      name = 'Youtube - Código Dev'
      clicked = {handleClickYt}
     />


    <Button 
    
    logo = {<GlobeSimple size={20} color="#272626" />}
    name = 'Website'
    clicked = {handleClickWWW}
    />
 <Button 
    
    logo = {<LinkedinLogo size={20} color="#272626" weight="fill" />}
    name = 'LinkedIn'
    clicked = {handleClickLinkedIn}
    />
 <Button 
    
    logo = {<img className = "w-5"src = {github}/>}
    name = 'GitHub'
    clicked = {handleClickGithub}
    />



    </Container>
        
      );
}
  
