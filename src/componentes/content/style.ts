import styled from "styled-components"

export const Container = styled.div`
    height:60px;
    box-shadow: 10px -10px 30px black;

    display: flex;
    justify-content: space-between;

    *{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
    }
    ul{
        background-color: var(--pink);
        border-bottom-left-radius:30px;
        list-style-type: none;
        display: flex;

        justify-content: flex-end;
        align-items: center;
    }
    a{
        text-decoration: none;
        color: white;
    }
    li{
        margin: 10px;
    }
    li a:hover{
        text-decoration-line:none;
        border-bottom: solid;
        padding-bottom: 21px;
    }
    
    input{
        padding: 3px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        border-radius: 2px;
        font-size: 16px;
    }
    .logo{
        
        display: flex;
        justify-content: space-around;
        margin-left: 10px;
    }
    .logo img{
        width: 150px;
    }
    `;