<template>
  <div class="segments">
    <LandingArea/>
    <!-- <AllProjects :projectsList="projectsList" /> -->
    <MyProjects :projectsList="projectsList" />
  </div>
</template>

<script>
import LandingArea from '@/components/LandingArea.vue'
import projectsList from '@/components/ProjectsList.json'
// import AllProjects from '../components/AllProjects.vue'
import MyProjects from '@/components/MyProjects.vue'

export default {
  name: 'HomeView',
  components: {
    LandingArea,
    // AllProjects,
    MyProjects
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
