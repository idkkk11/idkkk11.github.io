<template>
    <div class='project'>
        <div class="h-line"></div>
        <div class="project-content">
            <div class="project-details">
                <router-link :to="`/${this.project.route}`" @click="$scrollToTop">
                    <div class="project-name">
                        {{ this.project.name }}
                    </div>
                </router-link>
                <div class="project-skills">
                    {{ this.project.skills }}
                </div>
            </div>
            <div class="project-image-container">
                <!-- <img src="../assets/backgrounds/1.png" class="project-image"> -->
                <img :src="getImgUrl(project.index)" v-bind:alt="pic" class="project-image">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            default: () => {}
        },
    },
    mounted () {
        console.log(this.project);
        this.projectLink = '@/assets/backgrounds/' + this.project.index + '.png'
        console.log(this.projectLink)

    },

    methods: {
        getImgUrl(pic) {
            return require('../assets/backgrounds/'+pic+'.png')
        },
        scrollToTop() {
            window.scrollTo(0,0);
        }


    }
}
</script>

<style>
.project {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
}

.h-line { 
    width:100%; 
    height:3px; 
    background: #fff 
}

.project-content {
    /* display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    gap: 1vw; */

    display: flex;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
}

.project-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex: 1 0 0;
    width: 38%;
}

.project-image-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1 0 0;
    width: 58%;
}

.project-image {
    width: 100%;
}

.project-name {
    color: #EFEFEF;
    font-family: "Inter";
    font-size: min(max(1.20vw, 12px),16px);
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    text-transform: uppercase;
    align-self: stretch;
}

.project-skills{
    color: #EFEFEF;
    font-family: "Inter";
    font-size: min(max(1.20vw, 12px),16px);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    align-self: stretch;
}
</style>