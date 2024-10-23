import nodemailer from 'nodemailer';

const newContact = async (contactForm) => {
    const newContactData = {
        name: contactForm.name,
        phone_number: contactForm.phoneNumber,
    };

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, 
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: `${process.env.EMAIL_USER_RECIEVER}, ${process.env.EMAIL_USER_RECIEVER2}`,
        subject: `[B2BX 상담신청] ${newContactData.name} (${newContactData.phone_number})`,
        text: `
        상담신청이 접수되었습니다.

        - 성 명: ${newContactData.name}
        - 연락처: ${newContactData.phone_number}
        `,
    };

    try {
        await transporter.sendMail(mailOptions);

        return newContactData;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

export { newContact }