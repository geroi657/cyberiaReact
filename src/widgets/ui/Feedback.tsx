import styled from "styled-components";
import {useContext, useState} from "react";
import Container from "../../shared/ui/Container";
import { Theme } from "../../shared/ui/ThemeProvider";

const FormBody = styled.form`
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

const FormInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
    @media(max-width: 414px){
        flex-wrap: wrap;
        flex-direction: column;
        row-gap: 1.75rem;
    }
`;

const FormInfoInput = styled.input`
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

const FormInputName = styled.p`
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

const InputContainer = styled.div`
    position: relative;
    width: 30%;

    @media(max-width: 414px){
        width: 100%;
    }
`;

const H2 = styled.h2`
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

const FormTextInput = styled.textarea`
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

const TextInputContainer = styled.div`
    width: 100%;
    position: relative;
`;

const StyledCheckbox = styled.div`
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

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.75rem;
    
    @media (max-width: 414px) {
        display: none;
    }
`;

const StyledP = styled.p`
    font-size: 1.125rem;
    color: #EFF3FF;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 4.125rem;
    width: 100%;

    @media (max-width: 414px) {
        padding-top: 0.375rem;
    }
`;

const StyledButton = styled.button`
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

const MobileNotice = styled.p`
    display: none;

    @media (max-width: 414px) {
        display: inline;
        font-size: 0.75rem;
        color: #EEF3FF;
        text-align: center;
    }
`;

const MobileContainer = styled.div`
    display: flex;
    position: relative;
    align-items: center;

    @media(max-width: 414px){
        padding-bottom: 2rem;
    }
`;

const MobileLogo = styled.img`
    display: none;
    
    @media(max-width: 414px){
        top: -10px;
        width: 104px;
        height: 70px;
        padding-right: 1.75rem;
    }
`;

export default function Feedback() {

    const [Checkbox, setCheckbox] = useState(false)

    const { mobile } = useContext( Theme )

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");



    const handleSubmit = async (e) => {

        e.preventDefault();

        const formData = {
            "phone": phone,
            "email": email,
            "message": message
        };

        try {
            const response = await fetch(`https://api.test.cyberia.studio/api/v1/feedbacks?phone=${phone}&email=${email}&message=${message}`, {
                method: "POST",
                headers: [],
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Success: ", result);
                setCheckbox(false);
                setMessage("");
                setPhone("");
                setEmail("");
                setName("");
            } else
                console.log("Error: ", response.status, JSON.stringify(formData));
        } catch (error) {
            console.log("Error encountered: ", error);
        }
    }

    const handleCheckbox = () => setCheckbox(!Checkbox);

    return <Container>
            <MobileContainer>
                <MobileLogo src={"./src/assets/Mobile.svg"}></MobileLogo>
                <H2>Расскажите<br/>о вашем проекте:</H2>
            </MobileContainer>
            <FormBody onSubmit={handleSubmit}>
                <FormInfoContainer>
                    <InputContainer>
                        <FormInfoInput placeholder={mobile ? "Ваше имя*" : ""} value={name} name={"Name"} type={"text"} onChange={(e) => setName(e.target.value)} />
                        <FormInputName>Ваше имя*</FormInputName>
                    </InputContainer>
                    <InputContainer>
                        <FormInfoInput placeholder={mobile ? "Email*" : ""} value={email} name={"Email"} type={"Email"} onChange={(e) => setEmail(e.target.value)} />
                        <FormInputName>Email*</FormInputName>
                    </InputContainer>
                    <InputContainer>
                        <FormInfoInput placeholder={mobile ? "Телефон*" : "+7 999 999-99-99"} value={phone} name={"Phone"} onChange={(e) => setPhone(e.target.value)}/>
                        <FormInputName>Телефон*</FormInputName>
                    </InputContainer>
                </FormInfoContainer>
                <TextInputContainer>
                    <FormTextInput name={"Message"} placeholder={mobile ? "Сообщение*" : ""} value={message} onChange={(e) => setMessage(e.target.value)} />
                    <FormInputName>Сообщение*</FormInputName>
                </TextInputContainer>
                <CheckboxContainer>
                    <StyledCheckbox onClick={() => handleCheckbox()} $checkboxState={Checkbox} checked={Checkbox}/>
                    <StyledP>Согласие на обработку персональных данных</StyledP>
                </CheckboxContainer>
                <ButtonContainer>
                    <StyledButton type={"submit"} disabled={!Checkbox
                        || name.length === 0
                        || email.length === 0
                        || phone.length === 0
                        || message.length === 0}>{mobile ? "ОТПРАВИТЬ" : "Обсудить проект"}</StyledButton>
                </ButtonContainer>
                <MobileNotice>Нажимая “Отправить”, Вы даете согласие<br />на обработку персональных данных</MobileNotice>
            </FormBody>
        </Container>
    }