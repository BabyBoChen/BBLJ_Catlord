<template>
    <div class="page">
        <TitleBar title="左右為難(2選1)" :showGoBackButton="true" />
        <div class="content-wrapper">
            <div class="layer">
                <div class="v-center">
                    <div class="row item-wrapper">
                        <div class="col-6">
                            <input ref="item1" class="form-control item-name" type="text" placeholder="選項名稱" />
                        </div>
                        <div class="col-6">
                            <input ref="item2" class="form-control item-name" type="text" placeholder="選項名稱" />
                        </div>
                    </div>
                    <div class="row animation-wrapper">
                        <div class="col-6 cat-png-wrapper">
                            <img ref="cat1" class="cat-png cat-left" src="/assets/pawFront.png" />
                        </div>
                        <div class="col-6 cat-png-wrapper">
                            <img ref="cat2" class="cat-png cat-right" src="/assets/pawBack.png" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div id="btnStart" ref="btnStart" @click="start()">
                                <h1 id="lblStart">開始</h1>
                            </div>
                            <div ref="resultDiv" id="resultDiv" class="removed">
                                <h1>{{resultMsg}}</h1>
                                <button ref="btnRefresh" id="btnRefresh" class="hide" @click="refreshPage()" disabled><i class="fa-solid fa-arrows-rotate"></i>再問一次</button>
                            </div>
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

    .v-center {
        position: relative;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 100%;
        max-height: 100%;
        padding: 10px;
        margin: 0;
        overflow: auto;
    }

    .item-name {
        display: inline;
        width: 80%;
        margin: 10px 0px;
    }

    /* .animation-wrapper{} */

    .cat-png-wrapper {
        position: relative;
        height: 8em;
        margin: 0;
    }

    .cat-png {
        position: absolute;
        top: 0px;
        left: 50%;
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        max-width: 100%;
        max-height: 100%;
        margin: 0;
    }

    @keyframes flicker {
        50% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    .flicking1 {
        animation: 0.5s linear 0s infinite normal none running flicker;
    }

    .flicking2 {
        animation: 0.5s linear 0.25s infinite normal none running flicker;
    }

    #btnStart {
        position: relative;
        top: 0px;
        width: 6em;
        max-width: 6em;
        height: 6em;
        max-height: 6em;
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
        top: 100vh;
        transition: all 0.5s ease-out;
    }

    #lblStart {
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 100%;
        text-align: center;
        font-size: 1.5em;
        font-weight: bolder;
        margin: 0;
    }

    #resultDiv {
        position: relative;
        top: 0px;
        width: 100%;
        height: 6em;
        max-height: 6em;
        overflow: hidden;
    }

    #resultDiv h1 {
        font-weight: bolder;
        font-size: 1.5em;
        white-space: nowrap;
        margin-top: 5px;
        margin-bottom: 0px;
        overflow: hidden;
    }

    .removed {
        display: none;
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

    .hide {
        z-index: -1;
        opacity: 0;
        transition: all 0.5s ease-out;
    }
</style>

<script>
    // @ is an alias to /src
    import TitleBar from '@/components/TitleBar.vue';

    export default {
        name: 'LeftRight',

        components: {
            TitleBar,
        },

        data() {
            let model = {
                resultMsg: "🙏請貓神選擇...",
            };
            return model;
        },

        mounted() {
            this.refreshPage();
        },

        methods: {

            refreshPage() {
                this.$refs.item1.classList.remove("flicking1");
                this.$refs.item2.classList.remove("flicking2");
                this.$refs.item1.classList.remove("hide");
                this.$refs.item2.classList.remove("hide");
                this.$refs.item1.hidden = false;
                this.$refs.item2.hidden = false;
                this.$refs.cat1.classList.remove("flicking1");
                this.$refs.cat2.classList.remove("flicking2");
                this.$refs.cat1.classList.remove("hide");
                this.$refs.cat2.classList.remove("hide");
                this.$refs.cat1.hidden = false;
                this.$refs.cat2.hidden = false;
                this.$refs.btnStart.classList.remove("removed");
                this.$refs.resultDiv.classList.add("removed");
                this.$refs.btnRefresh.disabled = true;
                this.$refs.btnRefresh.classList.add("hide");
                this.$data.resultMsg = "🙏請貓神選擇...";
            },

            start() {
                this.$refs.item1.classList.add("flicking1");
                this.$refs.item2.classList.add("flicking2");
                this.$refs.cat1.classList.add("flicking1");
                this.$refs.cat2.classList.add("flicking2");
                this.$refs.btnStart.classList.add("removed");
                this.$refs.resultDiv.classList.remove("removed");
                let answer = getRandomInt(2);
                let waitingSecond = (getRandomInt(3) + 3) / 2;
                let page = this;
                setTimeout(function () {
                    page.$refs.item1.classList.remove("flicking1");
                    page.$refs.item2.classList.remove("flicking2");
                    page.$refs.cat1.classList.remove("flicking1");
                    page.$refs.cat2.classList.remove("flicking2");
                    page.$data.resultMsg = "貓神選擇了";
                    if (answer == 0) {
                        page.$refs.item2.hidden = true;
                        page.$refs.cat2.hidden = true;
                        page.$refs.item2.classList.add("hide");
                        page.$refs.cat2.classList.add("hide");
                        let itemName = page.$refs.item1.value;
                        if (!itemName) {
                            itemName = "選項1(左)";
                        }
                        page.$data.resultMsg += ` ${itemName}`;
                    } else {
                        page.$refs.item1.hidden = true;
                        page.$refs.cat1.hidden = true;
                        page.$refs.item1.classList.add("hide");
                        page.$refs.cat1.classList.add("hide");
                        let itemName = page.$refs.item2.value;
                        if (!itemName) {
                            itemName = "選項2(右)";
                        }
                        page.$data.resultMsg += ` ${itemName}`;
                    }
                    page.$refs.btnRefresh.classList.remove("hide");
                    page.$refs.btnRefresh.disabled = false;
                }, waitingSecond * 1000);
            },

        },
    }
</script>
