export const validatePhoneNumber = (number) => {
    // Allow only 10 or 11 digits
    const phoneRegex = /^\d{10,11}$/;
    return phoneRegex.test(number);
}

export const errorsName = (editing, name, errors) => {
    if (editing && (name == '')) {
        errors.value.name = '이름: 필수 정보입니다.';
        return
    } 
    errors.value.name = '';
}

export const errorsPhone = async (editing, phoneNumber, errors) => {
    if (editing && (phoneNumber == '')) {
        errors.value.phone = '휴대전화: 필수 정보입니다.';
        return
    } 
    if (phoneNumber !== '' && !validatePhoneNumber(phoneNumber)) {
        errors.value.phone = '휴대전화: 10~11자리 숫자를 입력하세요.';
        return
    }
    errors.value.phone = '';
}