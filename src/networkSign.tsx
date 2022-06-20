import { useEffect, useState } from 'react'
import styled from 'styled-components' 

const NetworkSign = () => {
  const [isOnline,setIsOnline] = useState(true);
  useEffect(()=>{
    const container = document.getElementById(Container.styledComponentId);
    window.addEventListener('online',()=>{
      setIsOnline(true);
      if(container !== null){
        container.style.bottom = "0px";
        setTimeout(() => {
          container.style.bottom = "-29px";
        }, 2500);
      }
    });
    window.addEventListener('offline',()=>{
      setIsOnline(false);
      if(container !== null){
        container.style.bottom = "0px";
        setTimeout(() => {
          container.style.bottom = "-29px";
        }, 2500);
      }
    });
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
  bottom: -29px;
  display:flex;
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
