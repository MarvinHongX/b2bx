import { getFooterMenuItems } from '@/commons/commonService';

export const useFooterMenuItems = () => {  
    return useState('footerMenuItems', () => getFooterMenuItems());
};