<script>
export default{
    name: "AppCard",
    props: {
            img : String,
            imgTitle : String
        }
}
</script>

<template>
    <div class="wrapper_card">
        <div>
            <img :src="`../../public/assets/${img}`" alt="">
        </div>
        
        <span class="title">{{ imgTitle }}</span>
        <div class="social_stream">
            <span>Stream On: </span>
            <i class="fa-brands fa-spotify"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-solid fa-music"></i>
            <i class="fa-brands fa-soundcloud"></i>
            <i class="fa-solid fa-compass"></i>
            
        </div>
    </div>
</template>

<style lang="scss">
@use '../assets/styles/partials/variables' as*;

.wrapper_card{
    flex-basis: calc(100% / 3);
    margin: 30px auto;
    overflow: hidden;

    // Titols of Cards
    .title{
        display: block;
        font-size: 25px;
        margin: 10px;
    }

    .social_stream{
        i{
            margin: 0 5px;
            max-height: 18px;
            max-width: 18px;
            &:hover{
                color: $primary;
                cursor: pointer;
            }
        }
    }

    // Gestione dell'img Hover
    img{
        
        transition: 1s;
        width: 100%;
        overflow: hidden;
        &:hover {
            
            transform: scale(1.1);
        }
    }

    >div{
        width: 100%;
        overflow: hidden;
    }
}

</style>