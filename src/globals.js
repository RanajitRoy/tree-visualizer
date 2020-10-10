var _globals_ = {
    animationSpeed: 3,
    canvasWidth: 1000,
    canvasHeight: 500,
    nodeRadius: 20,
    nodeSpaceY: 60,
    nodeSpaceX: 25,
    ctx: null,
    canvasPadding: null,
    tree: null,

    updateUIHook: null,
    updateUI() {
        if (this.updateUIHook !== null) {
            this.updateUIHook();
        }
    },
};

export default _globals_;
