<template>
  <div class="segments">
    <LandingArea/>
    <AllProjects :projectsList="projectsList" />
  </div>
</template>

<script>
import LandingArea from '@/components/LandingArea.vue'
import projectsList from '@/components/ProjectsList.json'
import AllProjects from '../components/AllProjects.vue'

export default {
  name: 'HomeView',
  components: {
    LandingArea,
    AllProjects
  },
  data () {
    return {
      projectsList: []
    }
  },

  mounted() {
    console.log("HEllo");
    this.projectsList = projectsList;
    console.log(this.projectsList);
  }
}
</script>

<style>
.segments {
    display: flex;
    flex-direction: column;
    gap: 0;
}
</style>
