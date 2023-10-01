<!-- <template>
  <div id="sidemenu">
    <button class="sidemenu__btn" v-on:click="navOpen=!navOpen" v-bind:class="{active:navOpen}">
				<span class="top"></span>
				<span class="mid"></span>
				<span class="bottom"></span>
			</button>
    <transition name="translateX">
      <nav v-show="navOpen">
        <div class="sidemenu__wrapper">
          <ul class="sidemenu__list">
            <li class="sidemenu__item"><a href="">About</a></li>
            <li class="sidemenu__item"><a href="">LinkedIn</a></li>
            <li class="sidemenu__item"><a href="">GitHub</a></li>
          </ul>
        </div>
      </nav>
    </transition>
  </div>
</template>

<style>
#sidemenu {
	nav {
		width: 200px;
		background: grey;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
	}

	.sidemenu {
		&__btn {
			display: block;
			width: 50px;
			height: 50px;
			background: grey;
			border: none;
			position: relative;
			z-index: 100;
			appearance: none;
			cursor: pointer;
			outline: none;

			span {
				display: block;
				width: 20px;
				height: 2px;
				margin: auto;
				background: white;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				transition: all .4s ease;

				&.top {
					transform: translateY(-8px);
				}

				&.bottom {
					transform: translateY(8px);
				}
			}
			&.active{
				.top {
					transform: rotate(-45deg);
				}
				.mid{
					transform: translateX(-20px) rotate(360deg);
					opacity: 0;
				}
				.bottom {
					transform: rotate(45deg);
				}
			}

		}

		&__wrapper {
      padding-top: 50px;
    }

		&__list {
			padding-top: 50px;
      list-style:none;
      padding: 0;
      margin: 0;
		}

		&__item {
			a {
        text-decoration: none;
				line-height: 1.6em;
				font-size: 1.6em;
				padding: .5em;
				display: block;
				color: white;
				transition: .4s ease;

				&:hover {
					background: lightgrey;
					color: dimgrey;
				}
			}
		}
	}
}

.translateX-enter{
	transform:translateX(-200px);
	opacity: 0;
}

.translateX-enter-active,.translateX-leave-active{
	transform-origin: top left 0;
	transition:.2s ease;
}

.translateX-leave-to{
	transform: translateX(-200px);
	opacity: 0;
}
</style>

<script>
export default {
  name: "SidebarMenu",
  data() {
    return {
      navOpen: false, // Corrected placement of navOpen
    };
  },
};
</script> -->

<template>
    <div id="sidemenu">
      <button class="sidemenu__btn" @click="toggleNav" :class="{ active: navOpen }">
        <span class="top"></span>
        <span class="mid"></span>
        <span class="bottom"></span>
      </button>
      <transition name="slide">
        <nav class="sidemenu__nav" v-show="navOpen">
          <div class="sidemenu__wrapper">
            <ul class="sidemenu__list">
              <li class="sidemenu__item" @click="toggleNav">
                <router-link to="/about" class="nav-text">
                  About
                </router-link>
              </li>
              <li class="sidemenu__item" @click="toggleNav">
                <a href="https://www.linkedin.com/in/michaelwidjaya/" class="nav-text" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li class="sidemenu__item" @click="toggleNav">
                <a href="https://github.com/idkkk11" class="nav-text" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </transition>
    </div>
  </template>
  
  
  <style>
  #sidemenu {
    position: relative;
  }
  
  .sidemenu__btn {
    /* Your existing button styles */
  }
  
  .sidemenu__nav {
    /* width: 100vw; */
    /* background: grey; */
    position: absolute;
    top: 8vh; /* Adjust the top position to leave space for the button */
    right: 0; /* Initially hidden to the left */
    z-index: 99;
    transition: top 0.4s ease;
    background: #1D1D1DAA;
    backdrop-filter: blur(17.5px);
    border-radius: 20px;
  }
  
  .sidemenu__nav.open {
    top: 10vh; /* Slide in from the left when open */
  }
  
  /* .sidemenu__wrapper {
    padding-top: 50px;
  } */
  
  .sidemenu__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;

  }
  
  .sidemenu__item a {
    text-decoration: none;
    line-height: 3em;
    font-size: 1em;
    padding: 0.5em;
    /* display: block; */
    color: white;
    transition: 0.4s ease;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    /* font-size: 1vw; */
    color: #FFFFFF;
    display: inline-flex;
    padding: 1vw 4vw;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    gap: 10px;
    align-self: stretch;
    width: 30vw;
    text-align: right;
    
  }

  .nav-text {
    text-decoration: none;
    line-height: 3em;
    font-size: 1em;
    padding: 0.5em;
    /* display: block; */
    color: white;
    transition: 0.4s ease;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    /* font-size: 1vw; */
    color: #FFFFFF;
    display: inline-flex;
    padding: 1vw 4vw;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    gap: 10px;
    align-self: stretch;
    width: 30vw;
    text-align: right;
    
  }

  
  
  .sidemenu__item a:hover {
    background: lightgrey;
    color: dimgrey;
  }
  
  /* CSS transition for the menu slide animation */
  .slide-enter-active,
  .slide-leave-active {
    transition: top 0.4s ease;
  }
  
  .slide-enter, .slide-leave-to /* .slide-leave-active in <2.1.8 */ {
    top: 10vh; /* Slide out to the left when closing */
  }
  </style>
  
  <script>
  export default {
    name: "SidebarMenu",
    data() {
      return {
        navOpen: false,
      };
    },
    methods: {
      toggleNav() {
        this.navOpen = !this.navOpen;
      },
    },
  };
  </script>
  