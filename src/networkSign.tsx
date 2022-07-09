import { useEffect, useState } from 'react'
import styled from 'styled-components'

const NetworkSign = () => {
  const [isOnline,setIsOnline] = useState(true);
  const showSign = (bool:boolean)=> {
    const container = document.getElementById(Container.styledComponentId);
    setIsOnline(bool);
    if(container !== null){
      container.style.display = "flex";
      setTimeout(() => {
        container.style.bottom = "0px";
        setTimeout(() => {
          container.style.bottom = "-29px";
          setTimeout(() => {
            container.style.display = "none";
          }, 200);
        }, 2000);
      }, 200);
    }
  }
  useEffect(()=>{
    window.addEventListener('online',()=>{showSign(true)});
    window.addEventListener('offline',()=>{showSign(false)});
  },[])
  return (
    <Container style={{backgroundColor:(isOnline ? "#2fb67e" : "#e01e5a")}} id={Container.styledComponentId} isOnline={String(isOnline)}>
      <h1>{isOnline ? "온라인 상태입니다." : "오프라인 상태입니다."}</h1>
    </Container>
  )
}

const Container = styled.div<{isOnline:string}>`
  width:100%;
  position: fixed;
  display:none;
  bottom: -29px;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  h1{
    color:white;
    font-size: 14px;
    padding:4px;
    font-weight: 400;
  }
` 

export default NetworkSign
