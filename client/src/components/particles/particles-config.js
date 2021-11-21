const config= {
  particles: {
    number: {
      value: 62,
      density: {
        enable: true,
        value_area: 961.4383117143238
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "edge",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 4
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.26439553572143903,
      random: false,
      anim: {
        enable: true,
        speed: 0.24345709068776647,
        opacity_min: 0.04057618178129441,
        sync: false
      }
    },
    size: {
      value: 4.005992965476349,
      random: true,
      anim: {
        enable: true,
        speed: 63.29884357881927,
        size_min: 0,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 208.3116342047702,
      color: "#ffffff",
      opacity: 0.5608390151666889,
      width: 0.6409588744762158
    },
    move: {
      enable: true,
      speed: 1,
      //direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 4807.191558571619,
        rotateY: 4486.712121333511
      }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: false,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 24.345709068776642,
        line_linked: {
          opacity: 0.024663548098029394
        }
      },
      bubble: {
        distance: 219.1113816189898,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 110,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
}

export default config;