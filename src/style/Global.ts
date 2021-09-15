import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    :root{
        --pink: #b86eb2;
    }
    * {
        margin:0;
        padding:0;
	}
	.react-modal-overlay {
        position: fixed;
        top:125px;
		bottom:0;
		right:0;
		left:350px;
		
		width: 600px;
		height: 450px;
		
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.react-modal-content {
		}
`;