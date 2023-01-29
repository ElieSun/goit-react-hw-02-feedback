import styled from 'styled-components'

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-between; 
    align-items: flex-start; 
    flex-direction: column; 
    flex-wrap: nowrap; 
    align-content: flex-start;
    margin: 0;
    padding: 0;
    color: #ffffff;
    margin-bottom: 250px;
`

export const ListItem = styled.li`
    display: flex;
    justify-content: space-between; 
    align-items: center; 
    flex-direction: row; 
    flex-wrap: nowrap; 
    align-content: center;
    width: 300px;
    margin: 10px 0px;
    min-height: 30px;
`