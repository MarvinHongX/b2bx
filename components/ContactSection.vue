<script setup>
import { ref, watch } from 'vue';
import { newContact } from '@/commons/commonService';

const { grayLogoUrl, lightPhoneUrl } = useImg();
const contactElement = ref(null);
const isAgreementChecked = ref(null);
const showModal = ref(false);
const showAlertModal = ref(false);
const alertModalMessage = ref('');

const contactForm = ref({
    editing: false,
    name: '',
    phoneNumber: '010',
});

const errors = ref({
    contact: ''
});

const formattedPhone = computed({
    get() {
        return contactForm.value.phoneNumber.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');
    },
    set(value) {
        contactForm.value.phoneNumber = value.replace(/-/g, '');
    }
});

const initContactForm = () => {
    contactForm.value.editing = false;
    contactForm.value.name = '';
    contactForm.value.phoneNumber = '';
    errors.value.contact = '';
}
const updatePhone = (event) => {
    formattedPhone.value = event.target.value;
};

const alertModal = (message) => {
    alertModalMessage.value = message
    showAlertModal.value = true;
}
const handleContact = async () => {
    if (isAgreementChecked.value !== true) {
        // alert('개인정보 수집동의 및 이용안내에 동의하셔야 합니다.');
        alertModal('개인정보 수집동의 및 이용안내에 동의하셔야 합니다.');
        return
    }
    if (!contactForm.value.editing) contactForm.value.editing = true;
    try {
        const data = await newContact(contactForm);
        if (data) {
            initContactForm();
            // alert('상담 신청이 성공적으로 완료되었습니다!');
            alertModal('상담 신청이 성공적으로 완료되었습니다!');
            return;
        } else {
        errors.value.contact = '상담 신청에 실패했습니다. 다시 시도해주세요.';
        }
    } catch (error) {
        errors.value.contact = '상담 신청에 실패했습니다. 다시 시도해주세요.';
        return;
    }
}

watch(showModal, (newValue) => {
    if (newValue) {
        document.body.style.overflow = 'hidden';  // 스크롤 비활성화
    } else {
        document.body.style.overflow = '';        // 스크롤 활성화
    }
});

watch(showAlertModal, (newValue) => {
    if (newValue) {
        document.body.style.overflow = 'hidden';  // 스크롤 비활성화
    } else {
        document.body.style.overflow = '';        // 스크롤 활성화
    }
});


</script>

<template>
    <div class="bg-[#2B2B2B] bg-opacity-90 py-10 sm:py-10 md:py-10 lg:py-20 xl:py-20" ref="contactElement" >
        <div class="max-w-7xl mx-3 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-40">
            <div class="mt-8 flex flex-col md:flex-row overflow-x-auto sm:overflow-x-auto lg:overflow-x-hidden"> 
                <div class="flex flex-col justify-start text-white md:w-1/2 min-w-[230px]
                    font-regular text-[18px] sm:text-[18px] md:text-[20px] lg:text-[24px]"
                >
                    <NuxtLink to="" disabled
                        class="flex-shrink-0 
                            mb-7 sm:mb-10 md:mb-12 lg:mb-13 xl:mb-14"
                    >
                        <img :src="grayLogoUrl" alt="LogoAlt" class="h-[25px]" />
                    </NuxtLink>
                    <p class="mb-1">상담신청을 남겨주시면 담당자가 친절하게</p>
                    <p class="mb-7 sm:mb-10 md:mb-12 lg:mb-13 xl:mb-14">상담을 해드리겠습니다.</p>
                    <p class="flex mb-10">
                        <img :src="lightPhoneUrl" alt="lightPhoneAlt" 
                            class="w-4 sm:w-4 md:w-4 lg:w-5"
                        />
                        &nbsp;02-6215-3890
                    </p>
                </div>
                
                <form @submit.prevent="handleContact" class="md:w-1/2 min-w-[230px] font-regular text-[14px] sm:text-[14px] md:text-[14px] lg:text-[15px]">
                    <div class="flex border-b border-t border-[#828282]
                        h-12 sm:h-14 md:h-14 lg:h-16"
                    >
                        <div class="w-full flex items-center justify-between
                            px-5 sm:px-8 md:px-12 lg:px-14">
                            <label for="name" class="text-white w-[80px]">성&nbsp&nbsp&nbsp명</label>
                            <input 
                                v-model="contactForm.name"
                                type="text"
                                id="name" 
                                required
                                placeholder="성함을 입력하세요." 
                                class="w-full bg-transparent text-white placeholder-[#828282] focus:outline-none focus:border-[#FF8265] p-2 mx-2"
                            />
                        </div>
                    </div>
                    
                    <div class="mb-10 flex border-b border-[#828282]
                        h-12 sm:h-14 md:h-14 lg:h-16"
                    >
                        <div class="w-full flex items-center justify-between
                            px-5 sm:px-8 md:px-12 lg:px-14"
                        >
                            <label for="phoneNumber" class="text-white w-[80px]">연락처</label>
                            <input 
                                v-model="formattedPhone"
                                required
                                type="text"
                                id="phoneNumber"
                                @input="updatePhone"
                                maxlength="13"
                                placeholder="숫자만 입력해주세요." 
                                class="w-full bg-transparent text-white placeholder-[#828282] focus:outline-none focus:border-[#FF8265] p-2 mx-2"
                            />
                        </div>
                    </div>
    
                    <div class="mb-8 text-white flex justify-center items-center
                        gap-5 sm:gap-8 md:gap-12 lg:gap-14"
                    >
                        <span>개인정보 수집동의 및 이용안내</span>
                        <a href="#" class="underline" @click.prevent="showModal = true">자세히 보기</a>
                    </div>
                    
    
                    <div class="mb-12 flex justify-center items-center">
                        <div class="flex mr-4 sm:mr-6 md:mr-8 lg:mr-10">
                            <input 
                                v-model="isAgreementChecked"  
                                required
                                type="radio"
                                :value="true"
                                id="agree"
                                class="custom-checkbox"
                            />
                            <label for="agree" class="text-white">
                                동의
                            </label>
                        </div>
                        <div class="flex">
                            <input 
                                v-model="isAgreementChecked"  
                                type="radio"
                                :value="false"
                                id="disagree"
                                class="custom-checkbox"
                            />
                            <label for="disagree" class="text-white">
                                동의하지 않음
                            </label>
                        </div>
                    </div>
    
                    <button 
                        type="submit"
                        class="bg-[#FF8265]
                        h-11 sm:h-11 md:h-11 lg:h-12
                        text-white py-2 px-4 rounded-md w-full">상담 신청하기
                    </button>
                    <div>
                        <small id="contact-error" class="p-error mb-5" v-if="errors.contact !== ''">{{ errors.contact }}</small>
                    </div>
                </form>
                <AlertModal :show="showAlertModal" :message="alertModalMessage" @close="showAlertModal = false" />
                <PrivacyConsentModal :show="showModal" @close="showModal = false" />
            </div> 

        </div>
    </div>
</template>

<style scoped>
.p-error {
    color: orange;
}
.custom-checkbox {
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: white;
    border: 2px solid white;
    border-radius: 50%;
    position: relative;
    margin-right: 8px;
    cursor: pointer;
}

.custom-checkbox:checked {
    background-color: #FF8265;
    border: 2px solid white;
}

.custom-checkbox:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color:#FF8265;
    transform: translate(-50%, -50%);
}
</style>