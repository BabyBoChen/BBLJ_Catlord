<template>
    <div class="page">
        <TitleBar title="哭笑不得(擲筊)" :showGoBackButton="true" />
        <div class="content-wrapper">
            <div ref="layer1" class="layer">
                <div id="btnStart" ref="btnStart" @click="start()">
                    <h1 id="lblStart">擲筊</h1>
                </div>
            </div>
            <div ref="layer2" class="layer hide">
                <div class="v-center">
                    <div ref="resultDiv" class="result">
                        <h1>{{resultMsg}}</h1>
                        <button ref="btnRefresh" id="btnRefresh" class="hide" @click="refreshPage()" disabled><i class="fa-solid fa-arrows-rotate"></i>再問一次</button>
                    </div>
                    <div class="row animation-wrapper" ref="animationWrapper">
                        <div class="col-6 paw-wrapper">
                            <img ref="leftWhite" class="paw-png paw-left" src="/assets/pawFront.png" />
                            <img ref="leftBlack" class="paw-png paw-left paw-covered" src="/assets/pawBack.png" />
                        </div>
                        <div class="col-6 paw-wrapper">
                            <img ref="rightBlack" class="paw-png paw-right" src="/assets/pawBack.png" />
                            <img ref="rightWhite" class="paw-png paw-right paw-covered" src="/assets/pawFront.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .content-wrapper {
        position: absolute;
        top: calc(1.75rem + 30px);
        left: 0px;
        right: 0px;
        bottom: 0px;
        text-align: center;
    }

    .layer {
        position: absolute;
        left: 50%;
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        width: 100%;
        max-width: 768px;
        height: 100%;
        overflow: auto;
    }

    #btnStart {
        position: relative;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 10em;
        max-width: 80vw;
        height: 10em;
        max-height: 80vw;
        border: 4px solid #17dee1;
        border-radius: 100%;
        margin: auto;
        margin-top: 0px;
        margin-bottom: 0px;
        cursor: pointer;
        box-shadow: 0px 5px 10px hsla(181, 81%, 49%, 0.43);
        transition: all 0.5s ease-out;
    }

        #btnStart:hover {
            background-color: #17dee1;
        }

        #btnStart.flyout {
            top: -100vh;
            transition: all 0.5s ease-out;
        }

    #lblStart {
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 100%;
        text-align: center;
        font-weight: bolder;
        margin: 0;
    }

    .hide {
        z-index: -1;
        opacity: 0;
        transition: all 0.5s ease-out;
    }

    .result {
        padding: 5px;
        border: 0px;
        margin: 0px;
    }

        .result h1 {
            text-align: left;
            font-weight: bolder;
            padding: 0px;
            border: 0px;
            margin: 0px;
        }

    #btnRefresh {
        display: block;
        background-color: transparent;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        font-weight: bolder;
        font-size: 1.5em;
        color: var(--bs-heading-color,inherit);
        margin: auto;
        border: 4px solid #17dee1;
        border-radius: 10px;
        box-shadow: 0px 5px 10px hsla(181, 81%, 49%, 0.43);
        cursor: pointer;
    }

        #btnRefresh:hover {
            background-color: #17dee1;
        }

    .v-center {
        position: relative;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 100%;
        max-height: 100%;
        padding: 5px;
        margin: 0;
        overflow: auto;
    }

    .animation-wrapper {
        margin: 0;
        opacity: 1;
        transition: all 0.5s ease-out;
    }

    .paw-wrapper {
        position: relative;
        height: 10em;
    }

    .paw-png {
        position: absolute;
        top: 0px;
        max-width: 100%;
        max-height: 100%;
        backface-visibility: hidden;
    }

    .paw-left {
        right: 0;
    }

    .paw-right {
        left: 0;
    }

    .paw-covered {
        transform: rotateY(180deg);
    }

    @keyframes flip-paw {
        to {
            transform: rotateY(360deg);
        }
    }

    .paw-png.front {
        animation: 0.5s linear 0.5s infinite normal none running flip-paw;
    }

    @keyframes flip-paw-reverse {
        to {
            transform: rotateY(540deg);
        }
    }

    .paw-png.back {
        animation: 0.5s linear 0.5s infinite normal none running flip-paw-reverse;
    }
</style>

<script>
    // @ is an alias to /src
    import TitleBar from '@/components/TitleBar.vue';

    export default {
        name: 'CryLaugh',

        components: {
            TitleBar,
        },

        data() {
            let model = {
                resultMsg: "🙏請貓神指示...",
            };
            return model;
        },

        mounted() {
            this.refreshPage();
        },

        methods: {
            refreshPage() {
                this.$refs.btnStart.classList.remove("flyout");
                this.$refs.layer1.classList.remove("hide");
                this.$refs.layer2.classList.add("hide");
                document.querySelectorAll(".paw-png").forEach(function (paw) {
                    paw.style.display = "initial";
                });
                this.$refs.leftBlack.classList.add("paw-covered");
                this.$refs.rightWhite.classList.add("paw-covered");
                this.$data.resultMsg = "🙏請貓神指示...";
                this.$refs.btnRefresh.disabled = true;
                this.$refs.btnRefresh.classList.add("hide");
            },
            start() {
                this.$refs.btnStart.classList.add("flyout");
                this.$refs.layer1.classList.add("hide");
                this.$refs.layer2.classList.remove("hide");
                let pawWrappers = document.querySelectorAll(".paw-wrapper");
                pawWrappers.forEach(function (wrapper) {
                    let pawPngs = wrapper.querySelectorAll(".paw-png");
                    for (let i = 0; i < pawPngs.length; i++) {
                        if (i == 0) {
                            pawPngs[i].classList.add("front");
                        } else if (i == 1) {
                            pawPngs[i].classList.add("back");
                        }
                    }
                });
                let leftInt = getRandomInt(2);
                let rightInt = getRandomInt(2);
                let waitingSecond = (getRandomInt(3) + 3) / 2;
                let page = this;
                setTimeout(function () {
                    document.querySelectorAll(".paw-png").forEach(function (paw) {
                        paw.classList.remove("front");
                        paw.classList.remove("back");
                    });
                    document.querySelectorAll(".paw-png").forEach(function (paw) {
                        paw.style.display = "none";
                        paw.classList.remove("paw-covered");
                    });
                    pawWrappers[0].querySelectorAll(".paw-png")[1 - leftInt].style.display = "initial";
                    pawWrappers[1].querySelectorAll(".paw-png")[rightInt].style.display = "initial";
                    let result = leftInt + rightInt;
                    if (result == 0) {
                        page.$data.resultMsg = "貓神給您一個哭哭😿";
                    } else if (result == 1) {
                        page.$data.resultMsg = "😻恭喜您！貓神覺得很可以！";
                    } else if (result == 2) {
                        page.$data.resultMsg = "貓神😸笑而不語...";
                    }
                    page.$refs.btnRefresh.classList.remove("hide");
                    page.$refs.btnRefresh.disabled = false;
                }, waitingSecond * 1000);
            },
        }
    }
</script>
