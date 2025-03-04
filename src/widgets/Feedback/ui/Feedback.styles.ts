import styled from "styled-components";
import { CheckboxStateType } from "../types/types";

export const FormBody = styled.form`
    display: flex;
    overflow: visible;
    flex-direction: column;
    row-gap: 2.25rem;
    padding-top: 1.5rem;
    padding-bottom: 6.25rem;

    @media(max-width: 414px){
        padding-top: 0;
    }
`;

export const FormInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
    @media(max-width: 414px){
        flex-wrap: wrap;
        flex-direction: column;
        row-gap: 1.75rem;
    }
`;

export const FormInfoInput = styled.input`
    width: 100%;
    overflow: visible;
    box-sizing: border-box;
    padding: 1rem;
    background: transparent;
    border-radius: 8px;
    border: rgba(239, 243, 255, 0.64) solid 2px;
    transition: 0.2s all;
    
    &::placeholder {
        color: rgba(239, 243, 255, 0.24);
        text-transform: none;

        @media (max-width: 414px) {
            font-size: 0.875rem;
            color: #EEF3FF;
        }
    }

    &:hover {
        border-color: rgba(239, 243, 255, 0.84);
    }

    &:focus {
        border-color: rgba(239, 243, 255);
    }

    @media(max-width: 414px){
        border: #EEF3FF solid 1px;
        width: 100%;
    }
`;

export const FormInputName = styled.p`
    color: rgba(239, 243, 255, 0.64);
    font-size: 1.125rem;
    padding: 0 0.5rem 0 0.5rem;
    position: absolute;
    top: -10px;
    left: 34px;
    background-color: #2a2a37;
    
    @media(max-width: 414px){
        display: none;
    }
`;

export const InputContainer = styled.div`
    position: relative;
    width: 30%;

    @media(max-width: 414px){
        width: 100%;
    }
`;

export const H2 = styled.h2`
    font-size: 3rem;
    font-weight: 600;
    padding-bottom: 4rem;
    line-height: 3.75rem;

    @media(max-width: 414px){
        padding-bottom: 0;
        line-height: 1.75rem;
        font-size: 1.25rem;
    }
`;

export const FormTextInput = styled.textarea`
    width: 100%;
    height: 150px;
    overflow: hidden;
    box-sizing: border-box;
    padding: 1rem;
    background: transparent;
    border-radius: 8px;
    border: rgba(239, 243, 255, 0.64) solid 2px;
    transition: 0.2s all;

    &:hover {
        border-color: rgba(239, 243, 255, 0.84);
    }

    &:focus {
        border-color: rgba(239, 243, 255);
    }

    @media (max-width: 414px) {
        border: #EEF3FF solid 1px;
    }
    
    &::placeholder {
        color: rgba(239, 243, 255, 0.24);
        text-transform: none;

        @media (max-width: 414px) {
            color: #EEF3FF;
            font-size: 0.875rem;
        }
    }
`;

export const TextInputContainer = styled.div`
    width: 100%;
    position: relative;
`;

export const StyledCheckbox = styled.div<CheckboxStateType>`
    width: 25px;
    height: 25px;
    border: rgba(239, 243, 255, 0.64) solid 2px;
    background-color: ${(props) => props.$checkboxState ? "#2D76F9" : "transparent"};
    border-radius: 2px;
    cursor: pointer;
    
    &:hover {
        border-color: rgba(239, 243, 255, 0.84);
    }
`;

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.75rem;
    
    @media (max-width: 414px) {
        display: none;
    }
`;

export const StyledP = styled.p`
    font-size: 1.125rem;
    color: #EFF3FF;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 4.125rem;
    width: 100%;

    @media (max-width: 414px) {
        padding-top: 0.375rem;
    }
`;

export const StyledButton = styled.button`
    display: inline-block;
    padding: 1.5rem 4.125rem 1.5rem 4.125rem;
    font-size: 1.125rem;
    border-radius: 85px;
    background-color: #2D76F9;
    transition: 0.2s all;

    &:hover {
        background-color: #2D76F985;
    }

    &:disabled {
        background-color: #39394a;
        color: #8a8a8a;
    }

    @media (max-width: 414px) {
        width: 100%;
    }
`;

export const MobileNotice = styled.p`
    display: none;

    @media (max-width: 414px) {
        display: inline;
        font-size: 0.75rem;
        color: #EEF3FF;
        text-align: center;
    }
`;

export const MobileContainer = styled.div`
    display: flex;
    position: relative;
    align-items: center;

    @media(max-width: 414px){
        padding-bottom: 2rem;
    }
`;

export const MobileLogo = styled.img`
    display: none;
    
    @media(max-width: 414px){
        top: -10px;
        width: 104px;
        height: 70px;
        padding-right: 1.75rem;
    }
`;
