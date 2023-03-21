import CustomContainer from 'components/Custom/CustomContainer/CustomContainer';
import { MainTitle } from 'components/Custom/MainTitle/MainTitle.styled';
import { nanoid } from 'nanoid';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import { useDispatch, useSelector } from 'react-redux';
import { select } from 'store/selectors/selectors';
import { addUser, getUsers } from 'store/usersReducer/usersOperations';
import { clearUserList } from 'store/usersReducer/usersSlice';
import { CustomPhoneInput, CustomSignUpBlock, CustomSignupForm, CustomTextInput, FormRadioSubTitle, InputPhotoWrapper, RadioWrapper, SubmitButton } from './SignUpForm.styled';

const SignUpForm = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef();
    const positions = useSelector(select.positions)
    const { register, handleSubmit, reset } = useForm();
    const inputTelRef = useRef(null);
    const dispatch = useDispatch()

    const onSubmit = (data) => {

        const formData = new FormData();
        if (!checkValidation(selectedFile)) return
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('phone', inputTelRef.current.value);
        formData.append('position_id', data.position_id);
        formData.append('photo', selectedFile);
        dispatch(addUser(formData)).unwrap().then(() => {
            reset()
            setSelectedFile(false)
            dispatch(clearUserList())
            dispatch(getUsers())
        }
        )
    }

    const checkValidation = (image) => {
        if (selectedFile) {
            const photoSize = selectedFile.size / 1024 / 1024;              // size Mb
            const allowedTypes = ["image/jpeg", "image/jpg"];
            if (photoSize > 5) {
                console.log("The photo size must not be greater than 5 Mb.");
                return false;
            }

            if (!allowedTypes.includes(selectedFile.type)) {
                console.log("The photo format must be jpeg/jpg type.");
                return false;
            }

            return true
        }
    }

    const handleUploadClick = () => {
        fileInputRef.current.click();             // триггер клика по input[type="file"]
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);   // сохраняем выбранный файл в state
    };

    return (
        <CustomContainer>
            <CustomSignUpBlock>
                <MainTitle>Working with POST request</MainTitle>
                <CustomSignupForm onSubmit={handleSubmit(onSubmit)}>
                    <CustomTextInput placeholder='Your name' {...register('name', { required: true })} />
                    <CustomTextInput placeholder='Email' {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, })} />
                    <CustomPhoneInput>
                        <IMaskInput
                            name="number"
                            mask={`+380000000000`}
                            radix="."
                            unmask={true}
                            inputRef={inputTelRef}
                            placeholder="Phone"
                        />
                        <label htmlFor='phone'>+38 (XXX) XXX - XX - XX</label>
                    </CustomPhoneInput>
                    <RadioWrapper>
                        <FormRadioSubTitle>Select your position</FormRadioSubTitle>
                        {positions && positions.map(({ id, name }) => <label key={nanoid()}>
                            <input {...register("position_id", { required: true })} type="radio" value={id} />
                            {name}
                        </label>)}
                    </RadioWrapper>
                    <input
                        type='file'
                        id='avatar'
                        accept='.jpg,.jpeg'
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <InputPhotoWrapper >
                        <button type='button' onClick={handleUploadClick}>Upload</button>
                        {selectedFile ? <p>Selected file: {selectedFile.name}</p> : <p>Upload your photo</p>}
                    </InputPhotoWrapper>
                    <SubmitButton type="submit" value="Submit" />

                </CustomSignupForm>
            </CustomSignUpBlock>
        </CustomContainer >
    )
}





export default SignUpForm