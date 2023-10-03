<template>
    <div class="about">
      <div class="content">
        <img :src="require('@/assets/images/philips/1.png')" class="title-image"/>
        <div class="lightText">
            Illustrator, SolidWorks.
        </div>
        <div class="bodyText">
            The Philips EasyGrip is an electronic reaching aid designed for the elderly to easily lift objects without having to strain their back, arms, and wrist.
        </div>
        <img :src="require('@/assets/images/philips/2.png')" class="project-images"/>
        <div class="bodyText">
            When we chose to explore this category, different takes on the reaching aid was looked into, from advanced systems to different versions of the basic reaching aid. This was useful to help visualise the wide range of possibilities when asking for user opinions.
        </div>
        <img :src="require('@/assets/images/philips/3.png')" class="project-images"/>
        <div class="bodyText">
            CAD models of highly potential models were made. From the users, we found that simplicity and familiarity was key to a good reaching aid. Mostly used by the elderly, we found that current grabbers are flimsy, and require too much strength to clench. So we used quality material and added a motorised system.
        </div>
        <img :src="require('@/assets/images/philips/4.png')" class="project-images"/>
        <div class="bodyText">
            We designed everything to complete the package. Pictured on the left is the user manual.
        </div>
        <img :src="require('@/assets/images/philips/5.png')" class="project-images"/>
        <div class="bodyText">
            The rendering of the box shows the adaptation of Philips' visual design language.
        </div>
        <div class="bodyText">
            Find the full PDF of this project 
            <a href="https://drive.google.com/file/d/1pYf3v97CQOwLtmpp20PuRNBPffLSZmsY/view?usp=drive_link" target=_blank >here.</a> 
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