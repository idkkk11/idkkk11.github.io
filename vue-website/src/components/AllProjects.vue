<template>
    <div class="all-projects">
        <div v-for="project in projectsList" :key="project" class="project-placeholder">
            <ProjectArea :project="project" />
        </div>
    </div>
</template>

<script>
import json from '@/components/ProjectsList.json'
import ProjectArea from '@/components/ProjectArea.vue'

export default {
    name: 'HomeView',
    components: {
        ProjectArea
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