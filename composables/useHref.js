export const useHref = () => {
    const kakaoHref = computed(() => {
        return `http://pf.kakao.com/_IzxjIn`;
    });
    const callHref = computed(() => {
        return `tel:+820262153890`;
    });

    return {
        kakaoHref,
        callHref,
    };
};

