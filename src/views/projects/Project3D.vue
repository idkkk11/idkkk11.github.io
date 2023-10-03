<template>
    <div class="about">
      <div class="content">
        <img :src="require('@/assets/images/3d/1.png')" class="title-image"/>
        <div class="lightText">
            Three.js, Figma, JavaScript, CSS, HTML, Premiere Pro.
        </div>
        <div class="bodyText">
            This is a design project I did for a university module, where I designed a web-app and created a business proposal with my teammates. A platform for the younger generation to express creativity is fading away. On the other hand, there is an excess of unused 3D printers. 3DLabs tackles this issue.
        </div>
        <img :src="require('@/assets/images/3d/2.png')" class="project-images"/>
        <div class="bodyText">
            3DLabs is a sharing economy platform and 3D object creator aims at students interested in exploring their creativity. The issues stems from schools in the UK lowering their support for Design & Technology courses. With the loss of a platform for the students, this creates the issue we are tackling.
        </div>
        <img :src="require('@/assets/images/3d/3.png')" class="project-images"/>
        <div class="bodyText">
            I was in charge of creating a web-app prototype of the builder platform to understand whether the intended user base would use such platforms. We found that users were interested in platforms that use a block system - similar to Minecraft - as it was intuitive, yet provided endless flexibility.
        </div>
        <div class="bodyText">
            We also interviewed creativity experts, school teachers, and the students themselves to understand the problem faced by this age group in the UK.
        </div>
        <div class="bodyText">
            The app was designed to be simple, intuitive, feature-packed to make sure users were interested in using it.
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