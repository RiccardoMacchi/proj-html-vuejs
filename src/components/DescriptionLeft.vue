<script>
export default{
    name: 'DescriptionLeft'
}
</script>

<template>
    <div class="container-fluid bg-black p-5">

        <!-- Description  -->
        <div class="padding row d-flex justify-content-around">
            <div class="col margin margin-primary">

                <!-- Span -->
                <h6>WHO WE ARE</h6>
                <h2>SENSE THE JAZZ</h2>

                <!-- Paragraph -->
                <p>The Story Of Jazz And Blues Society Is The Story Of Determination, Passion, Idealism, Music. Founded In 1985 And Incorporated In 1986, As A Community Based, Not-For Organization Located In Vancouver, British Columbia, The Society, From The Very Begi To Establish Vancouver As A Centre For The Creation And Exchange Of Sounds</p>

                <button class="my_btn_read">READ MORE</button>
            </div>



            <div class="col margin margin-primary text-danger d-flex justify-content-around" >
                <div id="sense_effect">
                    <img src="/img_about/about_img.jpg" alt="debug">
                </div>  
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/general.scss';
@use '../assets/styles/partials/variables' as *;

// Css for colors
h6{
    color: $primary;
    margin-top: 50px;
}

h2{
    font-size: 55px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: $secondary
}

// Indentation
p{
    max-width: 90%;
    font-size: 18px;
    margin: 25px 0;
    color: $secondary
}

img{
    max-width: 650px;
}


button.my_btn_read{
    padding: 10px 45px
}
#sense_effect{
    position: relative;
}

#sense_effect::before{
    content: "";
    background-color: rgba(255, 255, 255, 0.1);
    position: absolute;
    bottom: 0;
    right: 0;
    transform: rotate(180deg);
    transition: all 0.6s ease-in-out;
    z-index: 10;
}

#sense_effect::after{
    content: "";
    background-color: rgba(255, 255, 255, 0.1);
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(180deg);
    transition: all 0.6s ease-in-out;
    z-index: 10;
}
#sense_effect:hover::before,
#sense_effect:hover::after{
    
    animation: hover_effect 1s;
    animation-fill-mode: forwards,
}

#sense_effect:not(hover)::before,
#sense_effect:not(hover)::after{
    
    animation: not_hover_effect 1s;
    animation-fill-mode: forwards,
}

@keyframes hover_effect {
    0%{
        width: 0;
        height: 0;
    }
    100%{
        transform: rotate(0);
        width: 100%;
        height: 100%;
    }
}

@keyframes not_hover_effect {
    0%{
        transform: rotate(0);
        width: 100%;
        height: 100%;
    }
    100%{
        width: 0;
        height: 0;
    }
}
</style>
