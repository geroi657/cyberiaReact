import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";

import Container from "../../../shared/Container/ui/Container";
import { RootState } from "../../../shared/redux/store";

import {
    ButtonContainer,
    CheckboxContainer,
    FormBody,
    FormInfoContainer,
    FormInfoInput, FormInputName, FormTextInput,
    H2,
    InputContainer,
    MobileContainer,
    MobileLogo, MobileNotice, StyledButton, StyledCheckbox, StyledP, TextInputContainer
} from "./Feedback.styles";

export default function Feedback() {

    const [Checkbox, setCheckbox] = useState(false)

    const mobile = useSelector((state: RootState) => state.mobile.mobile)

    const [info, setInfo] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = {
            phone: info.phone,
            email: info.email,
            message: info.message,
        };

        try {
            const response = await fetch("https://api.test.cyberia.studio/api/v1/feedbacks", {
                method: "POST",
                headers: {},
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Сервер ответил с ошибкой ${response.status}: ${errorText}`);
            }

            const result = await response.json();

            if (!result || typeof result !== "object" || !("success" in result)) {
                throw new Error("Неизвестный формат ответа сервера");
            }

            console.log("Успех:", result);
            setCheckbox(false);
            setInfo({ name: "", phone: "", email: "", message: "" });

        } catch (error) {
            console.error("Произошла ошибка:", error);
        }
    };


    const handleCheckbox = () => setCheckbox(!Checkbox);

    return <Container>
            <MobileContainer>
                <MobileLogo src={"./src/assets/Mobile.svg"}></MobileLogo>
                <H2>Расскажите<br/>о вашем проекте:</H2>
            </MobileContainer>
            <FormBody onSubmit={handleSubmit}>
                <FormInfoContainer>
                    <InputContainer>
                        <FormInfoInput placeholder={mobile ? "Ваше имя*" : ""} value={info.name}
                                       name={"Name"} type={"text"}
                                       onChange={(e) => setInfo(prev => ({ ...prev, name: e.target.value}))} />
                        <FormInputName>Ваше имя*</FormInputName>
                    </InputContainer>
                    <InputContainer>
                        <FormInfoInput placeholder={mobile ? "Email*" : ""} value={info.email}
                                       name={"Email"} type={"Email"}
                                       onChange={(e) => setInfo(prev => ({ ...prev, email: e.target.value}))} />
                        <FormInputName>Email*</FormInputName>
                    </InputContainer>
                    <InputContainer>
                        <FormInfoInput placeholder={mobile ? "Телефон*" : "+7 999 999-99-99"} value={info.phone}
                                       name={"Phone"}
                                       onChange={(e) => setInfo(prev => ({ ...prev, phone: e.target.value}))}/>
                        <FormInputName>Телефон*</FormInputName>
                    </InputContainer>
                </FormInfoContainer>
                <TextInputContainer>
                    <FormTextInput name={"Message"} placeholder={mobile ? "Сообщение*" : ""} value={info.message}
                                   onChange={(e) => setInfo(prev => ({ ...prev, message: e.target.value}))} />
                    <FormInputName>Сообщение*</FormInputName>
                </TextInputContainer>
                <CheckboxContainer>
                    <StyledCheckbox onClick={() => handleCheckbox()} $checkboxState={Checkbox}/>
                    <StyledP>Согласие на обработку персональных данных</StyledP>
                </CheckboxContainer>
                <ButtonContainer>
                    <StyledButton type={"submit"} disabled={!Checkbox
                        || info.name.length === 0
                        || info.email.length === 0
                        || info.phone.length === 0
                        || info.message.length === 0}>{mobile ? "ОТПРАВИТЬ" : "Обсудить проект"}</StyledButton>
                </ButtonContainer>
                <MobileNotice>Нажимая “Отправить”, Вы даете согласие<br />на обработку персональных данных</MobileNotice>
            </FormBody>
        </Container>
    }