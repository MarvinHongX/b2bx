import { submitContact } from "@/server/services/contact";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const response = await submitContact(body);
    
    return response;
});