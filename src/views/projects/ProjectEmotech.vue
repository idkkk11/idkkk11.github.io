<template>
    <div class="about">
      <div class="content">
        <img :src="require('@/assets/images/emotech/1.png')" class="title-image"/>
        <div class="lightText">
            Figma, Vue.js, JavaScript, CSS, HTML, PostmanAPI, Premiere Pro, Google Analytics.
        </div>
        <div class="bodyText">
            I was an intern at Emotech Ltd. as a Product Design Engineer. Throughout the internship, I was mainly designing the UI and UX of a project, and doing a bit of front-end development for a SaaS platform and various components for the company project. Due to an NDA, I am unable to showcase some of my work here.
        </div>
        <img :src="require('@/assets/images/emotech/2.png')" class="project-images"/>
        <div class="bodyText">
            For this project, I was working started to gather design requirements using Google Analytics and Google Tag Manager. This was to determine the features that were most used by the users. I then designed the Figma prototype, alongside a colleague, for both desktop and mobile resolutions. Finally, I developed the web app on Vue.js.
        </div>
        <img :src="require('@/assets/images/emotech/3.png')" class="project-images"/>
        <div class="bodyText">
            (Image above intentionally blurred.)
        </div>
        <div class="bodyText">
            For the projects, I created user journeys and conducted usability tests for the product.
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