<template>
    <div class="about">
      <div class="content">
        <img :src="require('@/assets/images/quad/1.png')" class="title-image"/>
        <div class="lightText">
            InDesign, Illustrator, Lumion, SketchUp, AutoCAD.
        </div>
        <div class="bodyText">
            This is a design project I did for a university module, focusing on sustainability. I designed a house containing different technologies to achieve carbon neutrality.
        </div>
        <img :src="require('@/assets/images/quad/2.png')" class="project-images"/>
        <div class="bodyText">
            The first step I took was to design the blueprints on AutoCAD. The house uses a 2B1B plan, with a large glass facade as the main feature.
        </div>
        <img :src="require('@/assets/images/quad/3.png')" class="project-images"/>
        <div class="bodyText">
            The model was then built on SketchUp, using the blueprints above.
        </div>
        <img :src="require('@/assets/images/quad/4.png')" class="project-images"/>
        <div class="bodyText">
            Rendering and interior staging was then done using Lumion to bring the design to life.
        </div>
        <img :src="require('@/assets/images/quad/5.png')" class="project-images"/>
        <div class="bodyText">
            A book was made containing full design decisions and more information on the project. 
        </div>
        <div class="bodyText">
            <a href="https://drive.google.com/file/d/17ppnKx60iAMIpBUKedJSod8BWZTTfLsA/view?usp=drive_link" target=_blank >Click here</a> 
            to find the full PDF of the book.
        </div>
        <FooterSection></FooterSection>
      </div>
    </div>
</template>

<style>
   @import  '/src/assets/style.css';
</style>

<script>
import FooterSection from '@/components/FooterSection.vue';
export default {
    components: {
    FooterSection
}
}
</script>