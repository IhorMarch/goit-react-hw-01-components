import styled from 'styled-components';


export const ProfileWrap = styled.div`
    width: 480px;
    margin: 20px auto;
    border: 5px solid;
    border-color: #e1dddd;
    border-radius: 4px;
    padding: 20px 20px;
    background: #f0e9e9e1;
`;

export const Description = styled.div`
  text-align: center;
  background: #ffff;
  padding: 20px 20px;
  

`;

export const Avatar = styled.img`
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 36px;
    background-color: lightgray;
    border-radius: 50%;
    margin-bottom: 48px;
`;

export const Name = styled.p`
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 16px;
    text-align: center;
`;

export const Tag = styled.p`
    font-size: 24px;
    font-weight: 500;
    color: darkgray;
    margin-bottom: 16px;
`;

export const Location = styled.p`
    font-size: 24px;
    font-weight: 500;
    color: darkgray;
    margin-bottom: 40px;
`;

export const Stats = styled.ul`
    display: flex;
    width: 430px;
    justify-content: center;
    align-items: center;
    background-color:rgb(245, 245, 245);
    border-top: 2px solid;
    border-top-color: #e1dddd;
`;

export const ListItem = styled.li`
    width: calc(100% / 3);
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
    border-right: 2px solid;
    border-right-color: #e1dddd;
}
`;

export const Label = styled.span`
    font-size: 24px;
    font-weight: 500;
    color: darkgray;
    margin-bottom: 8px;
`;

export const Quantity = styled.span`
    font-size: 24px;
    font-weight: 700;
`;