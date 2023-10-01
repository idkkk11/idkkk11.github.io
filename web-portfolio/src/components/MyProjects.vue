<template>
    <div id="all-projects">
        <div id="projects-heading">
            <div id="heading-line-1">
                Projects over the years:
            </div>
            <div id="heading-line-2">
                user research, design, and development.
            </div>
        </div>
        <div v-for="project in projectsList" :key="project" class="project-placeholder">
            <EachProject :project="project" />
            <router-link :to="`/${projectsList.route}`">
            </router-link>
        </div>
        <FooterSection></FooterSection>
    </div>
</template>

<script>
import json from '@/components/ProjectsList.json'
// import ProjectArea from '@/components/ProjectArea.vue'
import EachProject from './EachProject.vue';
import FooterSection from './FooterSection.vue';

export default {
    name: 'HomeView',
    components: {
    // ProjectArea,
    EachProject,
    FooterSection
},
    props: {

        },
  data () {
    return {
      projectsList: json,
    }
  }
}
</script>

<style>
#all-projects {
    background-color: #000000;
    display: flex;
    padding: 10vh 8vw;
    flex-direction: column;
    align-items: center;
    gap: 64px;
}

.project-placeholder {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    width: 100%;
}

#projects-heading{
    display: flex;
    flex-direction: column;
    align-items: center;
}

#heading-line-1 {
    color: #FFF;
    font-family: "Inter";
    /* font-size: 20px; */
    font-size: min(max(1.25vw, 16px),20px);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

#heading-line-2 {
    color: #FFF;
    font-family: "Inter";
    font-size: min(max(1.25vw, 16px),20px);
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}
</style>