<template>
    <div class='landing'>
        <div class='video-player'>
            <video  class='landing-video' autoPlay muted loop>
                <source src="@/assets/videos/websiteLanding.mp4" type="video/mp4" />
            </video>
        </div>
        <!-- <div class='bottom-button' @click="scrollDown"> -->
        <a href="#all-projects" v-smooth-scroll="{ duration: 1000, updateHistory: false }" class='bottom-button'>
            <div class='bottom-text'>
                projects
            </div>
            <ChevronDown></ChevronDown>
        </a>
        <!-- </div> -->
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ChevronDown from '@/components/ChevronDown.vue';




export default {
  name: 'LandingArea',
  components: {
    // HelloWorld
    ChevronDown
},
    methods: {
        scrollDown() {
            var my_element = document.getElementById("all-projects");

            my_element.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            })
        }
    },
}
</script>

<style>
.landing {
    height: 100vh;
    width: 100%;
    flex: none;
    order: 0;
    overflow: hidden;
    padding: 0; 
    margin: 0;
    box-sizing: border-box;
    position: relative;

    text-decoration: none;
}

.landing-video {
    height: 100%;
    width: 100%;
    position: absolute;
    object-fit: cover;
    left: 0;
    right: 0;
    top: 0;
    
}

.video-player {
    overflow: hidden;
    z-index: -999;
}

.bottom-button {
    position: absolute;
    bottom: 50px;
    z-index: 1;
    color: #FFFFFF;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.bottom-text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    font-size: min(max(1.2vw, 12px),16px);
    text-align: center;
    display: flex;
}



</style>