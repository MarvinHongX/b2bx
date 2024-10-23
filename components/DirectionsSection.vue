<script setup>
const { line1Url, line7Url } = useImg();

const initKakaoMap = () => {
    kakao.maps.load(() => {
        const container = document.getElementById('kakaomap'); 
        const options = { 
            center: new kakao.maps.LatLng(37.47592530669653, 126.88839376619939), 
            level: 5,
        };
        
        const map = new kakao.maps.Map(container, options);
        const marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(37.47592530669653, 126.88839376619939), 
            title: "더리즌밸리 지식산업센터"
        });
        const zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
        const iwContent = `<div class="text-[12px] px-3 py-1 text-center"><a target="_blank" href="https://place.map.kakao.com/1569035657">더리즌밸리 지식산업센터</a></div>`; 

        
        const infowindow = new kakao.maps.InfoWindow({
            position : new kakao.maps.LatLng(37.47592530669653, 126.88839376619939),
            content : iwContent 
        });

        infowindow.open(map, marker); 
    });
};


onMounted(async () => {
    if (window.kakao && window.kakao.maps) {
        initKakaoMap();
    } else {
        console.error("Kakao Maps API load failed");
    }
});

</script>

<template>
    <div class="py-5 sm:py-5 md:py-10 lg:py-20 xl:py-20" ref="directionsElement">
        <div class="max-w-7xl mx-3 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-40">
            <TitleComponent title="오시는 길" :alignLeft="true" class="mb-7"/>
            <div class="mb-7 text-left
                    text-[13px] sm:text-[13px] md:text-[13px] lg:text-[13px] xl:text-[14px]
                ">
                <p class="mb-2">(주)뉴클라베</p>
                <div class="mb-6 flex flex-row items-center justify-start">
                    <p>서울특별시 금천구 가산로9길 66 더리즌밸리 지식산업센터 4층 406호</p>
                    <p class="mx-4">|</p>
                    <p>Tel.02-6215-3890</p>
                </div>
            </div>
            <div id="kakaomap" class="flex w-full h-[400px] mb-12 border border-[#555555] border-[0.5px]"></div>

            <TitleComponent title="지하철 이용 시" :alignLeft="true" class="mb-2"/>
            <hr class="border-[#707070]-600 mb-4" />
            <div class="mt-8 mb-14 overflow-x-auto sm:overflow-x-auto lg:overflow-x-hidden">
                <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 min-w-[200px]">
                    <DirectionsCard
                        title="금천패션아울렛사거리, 현대아울렛 (18-115)"
                        type1="B"
                        description1="504번, 652번" 
                    />
                    <DirectionsCard
                        title="디지털단지오거리 (18-118)"
                        type1="B"
                        description1="504번, 652번" 
                        type2="G"
                        description2="5528번, 5615번, 5619번, 5626번"
                    />
                    <DirectionsCard
                        title="디지털단지오거리 (18-116)"
                        type1="G"
                        description1="5616번, 5630번, 5618번"
                    />
                    <DirectionsCard
                        title="디지털단지오거리 (18-117)"
                        type1="B"
                        description1="652번"
                        type2="G"
                        description2="5630번, 5618번"
                    />
                    <DirectionsCard
                        title="금천패션아울렛사거리, W몰 (18-114)"
                        type1="B"
                        description1="503번, 571번"
                        type2="G"
                        description2="5536번, 5616번, 5712번, 5714번"
                    />
                    <DirectionsCard
                        title="금천패션아울렛사거리, 마리오 (18-113)"
                        type1="B"
                        description1="503번, 504번, 571번, 652번"
                        type2="G"
                        description2="5536번, 5714번, 5616번, 5712번"
                    />
                    <DirectionsCard
                        title="패션단지 (18-781)"
                        type1="A"
                        description1="6004번"
                    />
                    <DirectionsCard
                        title="패션단지 (18-780)"
                        type1="A"
                        description1="6004번"
                    />
                </div>
            </div>
            <TitleComponent title="버스 이용 시" :alignLeft="true" class="mb-2"/>
            <hr class="border-[#707070]-600 mb-4" />
            <div class="flex flex-col items-start mb-7 text-[#444444]
                    text-[13px] sm:text-[13px] md:text-[16px] lg:text-[14px] xl:text-[16px]
                    w-full "
                >
                <div class="flex items-center mb-1
                    h-[13px] sm:h-[14px] md:h-[15px] lg:h-[16px] xl:h-[18px]">
                    <img :src="line7Url" 
                        class="h-full"
                    />
                    &nbsp;
                    <p class="font-bold text-[#6E7748] text-[13px] sm:text-[13px] md:text-[16px] lg:text-[14px] xl:text-[16px]">
                        호선 가산디지털단지역
                    </p>
                </div>
                <div>
                    5번출구 도보 7분
                </div>
            </div>
            <div class="flex flex-col items-start mb-7 text-[#444444]
                    text-[13px] sm:text-[13px] md:text-[16px] lg:text-[14px] xl:text-[16px]
                    w-full "
                >
                <div class="flex items-center mb-1
                    h-[13px] sm:h-[14px] md:h-[15px] lg:h-[16px] xl:h-[18px]">
                    <img :src="line1Url" 
                        class="h-full"
                    />
                    &nbsp;
                    <p class="font-bold text-[#185AA6] text-[13px] sm:text-[13px] md:text-[16px] lg:text-[14px] xl:text-[16px]">
                        호선 가산디지털단지역
                    </p>
                </div>
                <div>
                    2번출구 도보 7분
                </div>
            </div>
            <div class="flex flex-col items-start mb-1 text-[#444444]
                    text-[13px] sm:text-[13px] md:text-[16px] lg:text-[14px] xl:text-[16px]
                    w-full "
                >
                <div>
                    2호선 대림역 → 7호선 가산디지털단지역 (4분 소요)
                </div>
                <div>
                    3호선 고속터미널역 → 7호선 가산디지털단지역 (26분 소요)
                </div>
                <div>
                    4호선 총신대입구역 → 7호선 가산디지털단지역 (21분 소요)
                </div>
                <div>
                    5호선 신길역 → 1호선 가산디지털단지역 (13분 소요)
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
