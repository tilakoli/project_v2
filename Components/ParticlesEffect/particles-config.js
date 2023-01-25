const ParticlesConfig = {
  autoPlay: true,
  background: {
    color: {
      value: "",
    },
    opacity: 0,
  },
  backgroundMask: {
    /// background color mask
    composite: "destination-out",
    cover: {
      color: {
        value: "#fff",
      },
      opacity: 1,
    },
    enable: false,
  },
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  detectRetina: true,
  duration: 0,
  fpsLimit: 120,
  interactivity: {
    detectsOn: "window",

    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      resize: false,
    },
  },
  particles: {
    collisions: {
      enable: true,
      mode: "bounce",
    },
    color: {
      value: "#fff", // particles color value
    },
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 3000,
          y: 3000,
        },
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0,
      },
      decay: 0,
      distance: {},
      direction: "none",
      drift: 0,
      enable: true,
      gravity: {
        // Enable gravity effect for particles
        acceleration: 0.3,
        enable: true,
        inverse: false,
        maxSpeed: 0.3,
      },
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      random: true,
      size: true,
      speed: 1, // particles moving speed per second
      spin: {
        acceleration: 0,
        enable: false, // spins the particles
      },
      straight: false,
      trail: {
        enable: false,
        length: 50,
      },
      vibrate: false,
      warp: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000,
      },
      limit: 0,
      value: 60,
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.3,
      },
      value: {
        min: 0.3,
        max: 0.8,
      },
      animation: {
        count: 0,
        enable: true,
        speed: 0.5,
        decay: 0,
        sync: false,
        destroy: "none",
        startValue: "random",
        minimumValue: 0.3,
      },
    },
    reduceDuplicates: false,
    links: {
      blink: false,
      color: {
        value: "random",
      },
      consent: false,
      distance: 100,
      enable: true, // enable/disable links
      frequency: 0.6,
      opacity: 1,
      shadow: {
        blur: 5,
        color: {
          value: "#999696",
        },
        enable: false,
      },
      triangles: {
        enable: true,
        frequency: 0.5,
      },
      width: 1,
      warp: false,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  smooth: true,
  style: {},
  themes: [],
  zLayers: 100,
  emitters: [],
};
export default ParticlesConfig;
