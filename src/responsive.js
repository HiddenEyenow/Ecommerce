import { css } from "styled-components";

export const computer_grande = (props) => {
    return css`
    @media only screen and (max-width: 2560px) {
        ${props}
    }
    `;
}

export const computer = (props) => {
    return css`
    @media only screen and (max-width: 1444px) {
        ${props}
    }
    `;
}

export const laptop = (props) => {
    return css`
    @media only screen and (max-width: 1024px) {
        ${props}
    }
    `;
}

export const tablet = (props) => {
    return css`
    @media only screen and (max-width: 768px) {
        ${props}
    }
    `;
}

export const mobile_grande = (props) => {
    return css`
    @media only screen and (max-width: 600px) {
        ${props}
    }
    `;
}

export const mobile_medio = (props) => {
    return css`
    @media only screen and (max-width: 500px) {
        ${props}
    }
    `;
}

export const mobile = (props) => {
    return css`
    @media only screen and (max-width: 380px) {
        ${props}
    }
    `;
}
export const mobile_piccolo = (props) => {
    return css`
    @media only screen and (max-width: 350px) {
        ${props}
    }
    `;
}




