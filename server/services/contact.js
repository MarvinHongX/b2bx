import { newContact } from "@/server/models/contact";

const submitContact = async (body) => {
    if (!body.contactForm) return null;
    const contact = await newContact(body.contactForm);
    if (!contact) {
        throw new Error("new contact failed");
    }
    
    return contact;
};


export { submitContact }