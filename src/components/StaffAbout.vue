<script>
export default {
    name: 'StaffAbout'
}
</script>

<template>
    <div class="staff-container">
        <h4>WHO WE ARE</h4>
        <h2>OUR STAFF</h2>

        <div class="cards">

            <!-- 1 -->
            <div>
                <div class="card_for"><img src="/img_about/about_team_01.jpg" alt=""></div>
                <h5>LEO MASSI</h5>
                <span>Musician</span>
            </div>
            
            

            <!-- 2 -->
            <div>

                <div class="card_for"><img src="/img_about/about_team_02.jpg" alt=""></div>
                <h5>ANNA PERRY</h5>
                <span>Drums</span>
            </div>

            <!-- 3 -->
            <div>
                <div class="card_for"><img src="/img_about/about_team_03.jpg" alt=""></div>
                <h5>KAL PELU</h5>
                <span>Cello</span>
            </div>

            <!-- 4 -->
            <div>
                <div class="card_for"><img src="/img_about/about_team_04.jpg" alt=""></div>

                <h5>SADA DESU</h5>
                <span>Guitar</span>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
@use '../assets/styles/general.scss';
@use '../assets/styles/partials/variables' as *;

.staff-container{
    background-color: $bgcolor;
    text-align: center;
    padding: 40px;
}

.cards{
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 35px;
    gap: 20px 
}

.card_for{
    margin-bottom: 20px;
    
}

.cards div{
    width: 100%;
    text-align: center;
    overflow: hidden;
}

img{ 
    width: 100%;
    transition: 1s;
    overflow: hidden;
}

    img:hover{
        transform: scale(1.1);
        
    }

// Colors
h4{
    color: $primary;
    font-size: 18px;
    margin: 20px;
}

h2{
    color: $secondary;
    font-size: 55px;
}
</style>
