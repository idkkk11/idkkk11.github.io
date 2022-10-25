<template>
    <div class='project'>
        <div class='background-container'>
            <img src="@/assets/backgrounds/1.png" />
        </div>
        <div class='title-area'>
            <div class='project-title'>
                Emotech
            </div>
            <div class='explore-button'>
                explore → 
            </div>
        </div>
        <div class='skills-area'>
            Vue.js
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
}
</script>

<style>
.project {
    height: 100vh;
    width: 100%;
    flex: none;
    order: 1;
    overflow: hidden;
    padding: 0; 
    margin: 0;
    box-sizing: border-box;
    position: relative;
}

.background-container {
    overflow: hidden;
    z-index: -999;
    background:rgba(0,0,0);
}

.background {
    height: 100%;
    width: 100%;
    position: absolute;
    object-fit: cover;
    opacity: 0.6;
    
}

.title-area {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0px;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.project-title {
    color: #FFFFFF;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    font-size: 128px;
}

.explore-button {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
}

.skills-area {
    position: absolute;
    bottom: 4vw;
    left: 4vw;
    white-space: pre-line;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: min(max(1vw, 12px),16px);
    line-height: 180%;
    display: flex;
    align-items: flex-end;
    color: #FFFFFF;
}
</style>