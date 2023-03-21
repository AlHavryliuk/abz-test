import styled from 'styled-components';

export const CustomSignUpBlock = styled.div`
  margin-top: 140px;
`;

export const CustomSignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CustomTextInput = styled.input`
  width: 100%;
  max-width: 380px;
  max-height: 54px;
  margin-top: 50px;
  padding: 14px 16px;
  font-size: 16px;
`;

export const CustomPhoneInput = styled.div`
  width: 100%;
  max-width: 380px;

  & input {
    width: 100%;
    max-width: 380px;
    max-height: 54px;
    margin-top: 50px;
    padding: 14px 16px;
    font-size: 16px;
  }

  & label {
    font-size: 12px;
    margin-top: 4px;
    margin-left: 15px;
    color: rgba(126, 126, 126, 1);
  }
`;

export const RadioWrapper = styled.div`
  width: 100%;
  max-width: 380px;
  gap: 7px;
  display: flex;
  flex-direction: column;

  & label {
    font-size: 16px;

    & > input {
      width: 20px;
      height: 20px;
      margin-right: 12px;
      vertical-align: middle;
    }
  }
`;

export const FormRadioSubTitle = styled.span`
  margin-top: 25px;
  margin-bottom: 11px;
  text-align: left;
`;
export const InputPhotoWrapper = styled.div`
  width: 100%;
  max-width: 380px;
  margin-top: 50px;
  display: flex;

  & button {
    padding: 14px 15px;
    font-size: 16px;
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.87);
  }

  & p {
    max-width: 380px;
    width: 100%;
    height: 54px;
    padding: 14px 16px;
    border: 1px solid rgba(208, 207, 207, 1);
    overflow: hidden;
  }
`;

export const SubmitButton = styled.input`
  margin-top: 54px;
  margin-bottom: 100px;
  border-radius: 80px;
  border: none;
  padding: 4px 22px;
  background-color: rgba(180, 180, 180, 1);
  color: rgba(255, 255, 255, 0.87);
  font-size: 16px;
  transition: all 0.3s;

  &:hover {
    background-color: darkred;
    color: white;
  }
`;
