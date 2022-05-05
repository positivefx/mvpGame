import styled from 'styled-components';

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h1`
  text-align: center;
  color: #61aa00;
  font-size: 100px;
`;

export const BoardWrapper = styled.div`
  width: 450px;
  height: 550px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  height: 20%;
  margin: 20px;
`;

export const Box = styled.div`
  flex: 33%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid grey;
  margin: 5px;
  display: grid;
  place-items: center;
  font-size: 30px;
  font-weight: bolder;
  color: white;
  background: ${({ right, almost }) => (right ? "green" : almost ? "orange" : "black")};
`;

export const Keys = styled.div`
  width: 700px;
  height: 300px;
  margin-top: 150px;
`;

export const KeyRows = styled.div`
  flex: 33%;
  display: flex;
  flex-direction: row;
  display: flex;
  justify-content: center;
  margin: 5px;
`;

export const EachKey = styled.div`
  width: 50px;
  height: 70px;
  margin: 5px;
  border-radius: 4px;
  display: grid;
  place-items: center;
  font-size: 20px;
  background-color: grey;
  color: white;
  cursor: pointer;
  background-color: ${({ keyOut }) => (!keyOut ? "grey" : "transparent")};
`;

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #28361877;
  backdrop-filter: blur(10px);
  z-index: 254;
`;

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1em;
  background-color: #9AC791;
  box-shadow: 0 8px 32px 0 #28361850;
  z-index: 255;
  font-size: 100px;
`;