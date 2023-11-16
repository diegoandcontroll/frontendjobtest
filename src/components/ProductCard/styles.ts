import styled, {css, keyframes} from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;

    @media (max-width: 1080px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 1.5rem;
    }
`;

export const Card = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 1.125rem 0.5rem 3rem;
    background: #FFF;
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    span{
        font-size: 15px;
        line-height: 19px;
    }
    span:last-child{
        padding: 0.25rem 0.5rem;
        background-color: #373737;
        color: white;
        font-weight: 700;
        border-radius: 5px;
        
    }
    img{
        object-fit: contain;
    }

    p{
        margin-top: 0.5rem;
        font-size: 10px;
        font-weight: 300;
        line-height: 12px;
        color: #2C2C2C;
        
    }
`;

export const CarDesc = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const CardButton = styled.button`
    padding: 0.5rem 0;
    position: absolute;
    bottom: 0;
    
    display: flex;
    justify-content: center;

    font-size: 14px;
    width: 100%;
    border: none;
    outline: none;
    background: #0F52BA;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    border-radius: 0px 0px 8px 8px;

    svg{
        margin-right: 8px;

    }

`;  

const shimmer = css`
    background: #f6f7f8
    linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #ecebeb 100%
    )
    no-repeat;
  background-size: 800px 800px;
  display: inline-block;
  position: relative;
  border-radius: 5px;

  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100%{
      background-position: -135% 0%;
    }
  }
`;

export const Skeleton = styled.div`
    display: flex;
    //border: 1px solid red;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: var(--white);
    gap: 10px;
    padding: 1.125rem 0.5rem 1.25rem;
    border-radius: 5px;
    position: relative;
`;

export const Box = styled.div`
  ${shimmer};
  display: flex;
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const Text = styled.div`
  ${shimmer};
  width: 100%;
  height: 15px;
  border-radius: 0 0 5px 5px;
  :last-child{
    position: absolute;
    bottom: 0;
  }
  
`;