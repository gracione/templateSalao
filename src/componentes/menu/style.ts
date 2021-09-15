import styled from "styled-components"

export const Container = styled.div`
    width:20%;
    height:566px;  
    float:left;

    ul{
        margin: 40px;
        height: 500px;
        background-color:rgba(0,0,0,0.03);
        border: solid 0.1px rgba(0,0,0,0.2);
        border-radius: 5px;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    li{
        text-align: center;
        height: 30px;

        display: flex;
		align-items: center;
		justify-content: center;
    }
    li:hover {
        background-color: var(--pink);
        opacity:0.4;
    }
`;