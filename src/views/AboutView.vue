<template>
  <div class="about">
    <div class="about-everything">
      <div class="about-image">
        <img :src="require('@/assets/images/me.png')" class="me"/>
      </div>
      <div class="about-text">
        <div class="about-text-top">
          <p>Hi! I’m Michael. I am a recent MEng Design Engineering graduate from Imperial College London. I am passionate about creating solutions that cater to people. This means using design thinking and human-centred design practices to help others, simplify lives, and enable technology usage for all.</p>

          <p>My interests lie in the application and user perception towards AI and have done a user-research study on “The Drivers of Trust in Generative AI-powered Voice Assistant Systems.”</p>

          <p>Beyond that, I love photography and cooking!</p>

          <p>Thanks for visiting my site.</p>
        </div>
        <div class="about-text-bottom">
          <div class="skill-row">
            <div class="skill-col-1">
              Languages
            </div>
            <div class="skill-col-2">
              English (Native), Bahasa Indonesia (Native).
            </div>
          </div>
          <div class="skill-row">
            <div class="skill-col-1">
              Design
            </div>
            <div class="skill-col-2">
              Figma, InDesign, Photoshop, Illustrator, Premiere Pro.
            </div>
          </div>
          <div class="skill-row">
            <div class="skill-col-1">
              Technical
            </div>
            <div class="skill-col-2">
              Vue.js, Python, SPSS, JavaScript, HTML, CSS, PostmanAPI, Git, Jira.
            </div>
          </div>
          <div class="skill-row">
            <div class="skill-col-1">
              3D
            </div>
            <div class="skill-col-2">
              Lumion, SketchUp, AutoCAD, Blender, Solidworks.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  body{
    background-color: #000;
  }

  .about {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    /* padding: 5vh 0; */
  }

  .about-everything{
    display: flex;
    align-items: flex-start;
    width: 70vw;
    margin: auto;
    justify-content: center;
    gap: 2vw;
  }

  .about-image{
    display: flex;
    width: 40%;
    flex-direction: column;
    align-items: flex-start;
  }

  .me {
    width: 100%;
  }

  .about-text{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    width: 60%;
  }

  .about-text-top{
    color: #FFF;
    font-family: Inter;
    font-size: min(max(1.25vw, 12px),20px);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    align-self: stretch;
  }

  .about-text-bottom {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .skill-row {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  .skill-col-1 {
    color: #FFF;
    font-family: Inter;
    font-size: min(max(1vw, 6px),16px);
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    text-transform: uppercase;
  }

  .skill-col-2 {
    color: #FFF;
    font-family: Inter;
    font-size: min(max(1.15vw, 8px),18px);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media (orientation: portrait) {
    .about-everything {
        display: flex;
        padding: 15vh 0;
        width: 75vw;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5vh;
    }

    .about-image{
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: flex-start;
  }

  .me {
    width: 100%;
  }

  .about-text{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    width: 100%;
    gap: 2vh;
  }

  .about-text-top{
    color: #FFF;
    font-family: Inter;
    font-size: min(max(1.25vw, 12px),20px);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    align-self: stretch;
  }

  .about-text-bottom {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1vh;
  }

  .skill-row {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 0px;
  }

  .skill-col-1 {
    color: #FFF;
    font-family: Inter;
    font-size: min(max(1vw, 6px),16px);
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    text-transform: uppercase;
  }

  .skill-col-2 {
    color: #FFF;
    font-family: Inter;
    font-size: min(max(1.15vw, 8px),18px);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  }


</style>
