<script>
export default {
    name: 'DescriptionRight',
    data() {
        return{
            
        }
    },
    methods: {
        
    }
}
</script>

<template>
    <div class="boxs">

        <!-- img -->
        <div class="box">
            <div id="sense_effect">
                <img src="/img_about/about_Img-02.jpg" alt="">
            </div>
        </div>
        <div class="box">
            
            <!--  -->

            <!-- Accordion -->
            <div class="accordion bg-black" id="accordionExample">
            <div class="accordion-item">

                <h2 class="accordion-header">
                <button class="accordion-button orange" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                    CAN I SPECIFY A DELIVERY DATE WHEN ORDERING?
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body bg-black">
                    Sed Ut Perspiciatis Unde Omnis I Natus Error Voluptatem Accusantium
                    Doloremque Laudantium, Tota Aperiam, Eaque Ipsa
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    HOW INVESTING IN DEPENDEND INCER
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body bg-black">
                    Sed Ut Perspiciatis Unde Omnis I Natus Error Voluptatem Accusantium
                    Doloremque Laudantium, Tota Aperiam, Eaque Ipsa
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    ASING TO BUSINESS SECURITY
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body bg-black">
                    Sed Ut Perspiciatis Unde Omnis I Natus Error Voluptatem Accusantium
                    Doloremque Laudantium, Tota Aperiam, Eaque Ipsa 
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                    ELEMENT OR PAGE BUILDER USED
                </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body bg-black">
                    Sed Ut Perspiciatis Unde Omnis I Natus Error Voluptatem Accusantium
                    Doloremque Laudantium, Tota Aperiam, Eaque Ipsa 
                </div>
                </div>
            </div>
            </div>
            </div>
    </div>
</template>

<style lang='scss' scoped>

@use '../assets/styles/general.scss';
@use '../assets/styles/partials/variables' as *;

.boxs{
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
    background-color: $bgcolor;
}

.box{
    width: 550px;
    height: 450px;

}

#accordionExample{
    margin-top: 30px;
}

.accordion-button{
    background-color: black;
    color: $secondary;
}

.accordion-button:hover{
    color: $primary;
}

.accordion-item{
    border: none;
    border-bottom: 1px solid rgba(1, 1, 1, 0.1);
}

.accordion-body{
    color: lightgrey;
}

.accordion-button:not(.collapsed){
    color:orange;
    background-color: black;
}

button{
    font-size: 20px;
}

#sense_effect{
    position: relative;
}
.accordion-button::after{
    content: "";
    background-image: url(../../public/assets/angles-down-solid.svg);
}

.accordion-button:not(.collapsed)::after{
    background-image: url(../../public/assets/angles-down-solid.svg);
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