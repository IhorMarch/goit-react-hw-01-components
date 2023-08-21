import styled from 'styled-components';



export const Item = styled.li`
  display: flex;
   
    padding-top: 15px;
    padding-bottom: 15px;
    gap: 20px;
    width: 440px;
    align-items: center;
    border-radius: 10px;
    box-shadow: 3px 5px 2px 5px rgba(140, 140, 143, 0.2);
`;

const getStatusColor = props => {
  switch (props.status) {
    case false:
      return props.theme.colors.red;
    case true:
      return props.theme.colors.green;
    
    default:
      return null;
  }
};



export const Status = styled.span`
    margin-left: 15px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    /* background: ${props => props.status ? "green" : "red"}; */
    background:${getStatusColor}

`;


export const Avatar = styled.img`
  background: #f0e9e9e1;
  border-radius:16%;
`;

export const Name = styled.p`
  font-size: 28px;
    font-weight: 700;
`;

   