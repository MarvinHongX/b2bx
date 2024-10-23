export const getMenuItems = () => {
    const menuItems = [
        { label: '회사소개', path: '/about' },
        { label: '쉽게 이해하기', path: '/guide' },
        { label: '승인사례', path: '/cases' },
        { label: '진행절차', path: '#process' },
        { label: '특장점', path: '#features' },
        { label: '문의하기', path: '#contact' },
        { label: '오시는길', path: '#directions' },
    ];
    return menuItems;
};

export const getFooterMenuItems = () => {
    const menuItems = [
        { label: '회사소개', path: '/about' },
        { label: '상담신청', path: '#contact' },
        { label: '개인정보처리방침', path: '/policy' },
    ];
    return menuItems;
};

export const newContact = async (contactForm) => {
    if (contactForm.value) {
        try {
            const response = await $fetch(`/api/contact`, {
                method: 'POST',
                body: { 
                    contactForm: contactForm.value,
                }
            });
            return response;  
        } catch (error) {
            console.error('Error new contact:', error);
            return false;  
        }
    }
    return false; 
};
