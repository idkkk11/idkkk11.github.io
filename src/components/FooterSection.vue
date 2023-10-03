<template>
    <div class="footer">
        Michael Adhipramana Widjaya
        <a href="https://www.linkedin.com/in/michaelwidjaya/ " target="_blank">LinkedIn</a>
        <a href="https://github.com/idkkk11" target="_blank"> GitHub </a>
        <div id="to-top" @click="toTop">Return to Top</div>
        
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #FFF;
    font-size: min(max(1.25vw, 12px),20px);
}
</style>