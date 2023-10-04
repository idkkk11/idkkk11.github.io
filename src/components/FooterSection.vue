<template>
    <div class="footer">
        <div class="footer-title">Michael Adhipramana Widjaya</div>
        <div class="vertical-line">|</div>
        <a href="https://www.linkedin.com/in/michaelwidjaya/ " target="_blank">LinkedIn</a>
        <div class="vertical-line">|</div>
        <a href="https://github.com/idkkk11" target="_blank"> GitHub </a>
        <div class="vertical-line">|</div>
        <div id="to-top" @click="toTop">Return to Top</div>
        <div class="vertical-line">|</div>
        Developed on Vue.js
        
    </div>
</template>

<script>
export default {
    name: "FooterSection",
    methods: { 
        scrollToTop() {
            window.scrollTo(0,0);
        },
        toTop: function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
    }
}
</script>

<style>
.footer {
    display: flex;
    padding: 100px 0 5vh 0;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #FFF;
    font-size: min(max(1.25vw, 12px),20px);
}

.footer-title {
    font-weight: 800;
}

#to-top {
    cursor: pointer;
}

@media (orientation: portrait) {
    .footer {
    display: flex;
    flex-direction: column;
    padding: 100px 0 5vh 0;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #FFF;
    font-size: min(max(1.25vw, 12px),20px);
}
.vertical-line {
    display: none
}
}
</style>