<script>
import AppBread from '../components/AppBread.vue';
import DescriptionLeft from '../components/DescriptionLeft.vue';
import DescriptionRight from '../components/DescriptionRight.vue';
import AlbumNow from '../components/AlbumNow.vue';
import CounterIcon from '../components/CounterIcon.vue';
import StaffAbout from '../components/StaffAbout.vue';

export default{
    name: "AppAbout",
    components:{
        AppBread,
        DescriptionLeft,
        DescriptionRight,
        AlbumNow,
        CounterIcon,
        StaffAbout
    },
    data(){
        return {
            
            infoBread: [
                {
                    "namePath": "About Us",
                    "home": "Home"
                }
            ]
        }
    }
}
</script>

<template>

    <!-- BreadCrumbs -->
    <AppBread :info="infoBread"/>

    <!-- Insserire App Paragrafo -->
    <DescriptionLeft />

    <!-- Album out now -->
    <AlbumNow />

    <!-- Insserire App Paragrafo -->
    <DescriptionRight />

    <!-- Counter -->
    <CounterIcon />

    <!-- Staff -->
    <StaffAbout />
</template>

<style lang="scss" scoped>
*{
    color: #fff
}
</style>
