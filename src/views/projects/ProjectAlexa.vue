<template>
    <div class="about">
      <div class="content">
        <img :src="require('@/assets/images/va/1.png')" class="title-image"/>
        <div class="lightText">
            Voiceflow, JavaScript, Alexa Developer Console, SPSS, Python.
        </div>
        <div class="bodyText">
            HELLOThis is a user research project I did for my Master’s Thesis. I looked into identifying the trust drivers of Generative AI based voice assistant systems. Powering a VA system with a Large Language Model (LLM) is expected following the high potentials in improving user experience.
        </div>
        <img :src="require('@/assets/images/va/2.png')" class="project-images"/>
        <div class="bodyText">
            I designed and developed a custom Amazon Alexa Skill using Voiceflow and Alexa Developer Console to allow users to interact directly with the GPT-powered Alexa. There were four version of the custom Alexa, creating a 2x2 design matrix: containing references or not, and accurate or not.
        </div>
        <img :src="require('@/assets/images/va/3.png')" class="project-images"/>
        <div class="bodyText">
            Interview and survey results were then analysed using the Thematic Analysis approach and data science techniques (SPSS & Python), respectively.
        </div>
        <img :src="require('@/assets/images/va/4.png')" class="project-images"/>
        <div class="bodyText">
            From the analysis, I found that references do not matter as much as existing literature review. This is backed up by the feedback coming from both the interviews and surveys. Instead, users priorities instincts and background knowledge more, mentioning that time is wasted when the references are cited.
        </div>
        <div class="bodyText">
            Find my presentation below and 
            <a href="https://drive.google.com/file/d/12qghryvz4wOFmAhxXSxv9mlj6n2UuRSo/view?usp=drive_link" target=_blank >click here</a> 
            for the paper.
        </div>
        <iframe width="1280" height="720" src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FgYD0IW252RhehDKR1KUQXR%2FMaster's-Project-Plan%3Fpage-id%3D520%253A3597%26type%3Ddesign%26node-id%3D520-3600%26viewport%3D805%252C932%252C0.03%26scaling%3Dscale-down%26starting-point-node-id%3D520%253A3600%26mode%3Ddesign" allowfullscreen class="figmaIframe"></iframe>
        
      </div>
    </div>
</template>

<style>
    @import  '/src/assets/style.css';
    .figmaIframe {
        width: 80%;
    }
</style>