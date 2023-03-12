<template>
    <div class="page">
        <TitleBar title="神選之人(抽籤)" :showGoBackButton="true" />
        <div class="content-wrapper" ref="contentWrapper">
            <div class="layer1" ref="layer1">
                <div class="fit-content">
                    <div class="line">
                        <div class="input-group">
                            <label>從<input type="number" ref="chooseMin" class="form-control input-number" value="1" min="0" max="65535" /></label>
                        </div>
                        <div class="input-group">
                            <label>到<input type="number" ref="chooseMax" class="form-control input-number" value="10" min="1" max="65535" /></label>
                        </div>
                    </div>
                    <div class="line">
                        <div class="input-group">
                            <label>選<input type="number" ref="chooseCnt" class="form-control input-number" value="1" min="1" max="100" />個號碼</label>
                        </div>
                    </div>
                    <div class="line">
                        <div class="input-group">
                            <label><input ref="canRepeat" class="form-check-input" type="checkbox" />重複中獎</label>
                        </div>
                    </div>
                </div>
                <div class="line">
                    <div id="btnStart" ref="btnStart" @click="start()">
                        <h1 class="v-center" id="lblStart">開始</h1>
                    </div>
                </div>
                <div class="bottom-padding"></div>
            </div>
        
            <div class="layer2" ref="layer2">
                <div class="instruction" ref="instruction">{{instruction}}</div>
                <div class="poop" ref="poop1"><label class="v-center poop-num" ref="num1"></label></div>
                <div class="poop" ref="poop2"><label class="v-center poop-num" ref="num2"></label></div>
                <div class="poop" ref="poop3"><label class="v-center poop-num" ref="num3"></label></div>
                <div class="hide" ref="resultDiv" id="resultDiv">
                    <div id="resultMsg">{{resultMsg}}</div>
                    <button ref="btnRefresh" id="btnRefresh" class="" @click="refreshPage()" disabled><i class="fa-solid fa-arrows-rotate"></i>再選一次</button>
                </div>                
            </div>
        </div>
    </div>
</template>


<style scoped>
    .content-wrapper {
        position: relative;
        height: calc(100% - 3.5em);
        overflow-x: hidden;
        overflow-y: auto;
    }

    .layer1 {
        position: relative;
        z-index: 2;
        left: 0%;
        height: 100%;
        background-color: #fcfce6;
        text-align: center;
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        transition: all 0.5s ease-out;
    }

    .fit-content {
        display: inline-block;
        width:fit-content;
    }

    .line {
        margin-bottom: 10px;
        text-align: left;
    }
    .input-group {
        display: inline;
        font-size: 1.5em;
        white-space: nowrap;
    }
    .input-number {
        display: inline;
        width:5em;
        margin-left : 5px;
        margin-right : 5px;
    }
    .input-group .form-check-input {
        margin-right: 5px;
    }

    #btnStart {
        position: relative;
        top: 0px;
        width: 6em;
        height: 6em;
        border: 4px solid #17dee1;
        border-radius: 100%;
        margin: auto;
        margin-top: 0px;
        margin-bottom: 0px;
        cursor: pointer;
        box-shadow: 0px 5px 10px hsla(181, 81%, 49%, 0.43);
    }

    #btnStart:hover {
        background-color: #17dee1;
    }

    #lblStart {
        font-weight: bolder;
        font-size: 1.5em;
    }

    .v-center {
        position: relative;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 100%;
        max-height: 100%;
        text-align: center;
        padding: 10px;
        margin: 0;
        overflow: auto;
    }

    .bottom-padding {
        padding-bottom: 1em;
    }

    .layer2 {
        position: absolute;
        top: 0px;
        width: 100%;
        height: auto;
        text-align: left;
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
    }

    .instruction {
        font-weight: bolder;
        font-size: 1.5em;
        white-space: nowrap;
    }

    .poop {
        position: absolute;
        top: -9em;
        left: 50%;
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        width: 6em;
        height: 8em;
        background-color: #B8860B;
        padding-bottom: 5px;
        border: 4px solid #B8860B;
        border-radius: 100%;
        transition: all 0.5s ease-out;
    }

    .poop-num {
        font-weight: bolder;
        font-size: 1.5em;
    }

    #resultDiv {
        text-align: center;
        padding-top: 11em;
        padding-bottom: 10px;
    }

    #resultMsg {
        font-weight: bolder;
        font-size: 1.5em;
    }

    #btnRefresh {
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

    .flyout {
        left: calc(100% + 20px);
        transition: all 0.5s ease-out;
    }

    .fall {
        top: 3.6em;
        transition: all 0.5s ease-out;
    }

    .d-1000 {
        transition-delay: 1000ms;
        box-shadow: 0px 5px 10px #B8860B;
    }

    .d-2000 {
        transition-delay: 2000ms;
    }

    .d-2500 {
        transition-delay: 2500ms;
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
        name: 'ChosenOne',

        components: {
            TitleBar,
        },

        data() {
            let model = {
                instruction: "🙏請貓神選擇...", 
                resultMsg: "😸貓神選擇了: ",
            };
            return model;
        },

        mounted() {
            this.refreshPage();
        },

        methods: {
            refreshPage() {
                this.$refs.contentWrapper.scrollTo(0,0);
                this.$refs.layer1.classList.remove("flyout");
                this.$refs.instruction.classList.remove("hide");
                this.$refs.poop1.classList.remove("d-1000");
                this.$refs.poop2.classList.remove("d-2000");
                this.$refs.poop3.classList.remove("d-2500");
                this.$refs.poop1.classList.remove("fall");
                this.$refs.poop2.classList.remove("fall");
                this.$refs.poop3.classList.remove("fall");
                this.$refs.resultDiv.classList.add("hide");
                this.$data.resultMsg = "😸貓神選擇了: ";
                this.$refs.btnRefresh.disabled = true;
            },
            start() {
                let selectedNumbers = [];
                let min = Number(this.$refs.chooseMin.value);
                let max = Number(this.$refs.chooseMax.value);
                let cnt = Number(this.$refs.chooseCnt.value);
                let canRepeat = this.$refs.canRepeat.checked;
                console.log(canRepeat);
                if (min >= max || max - min + 1 < cnt || max <= 0 || cnt <= 0) {
                    alert("數字範圍不正確哦！😾");
                    return;
                }
                for (let i = 0; i < cnt; i++) {
                    let theNumber = (getRandomInt((max + 1) - min)) + min;
                    if (!canRepeat) {
                        while (selectedNumbers.includes(theNumber)) {
                            theNumber = (getRandomInt((max + 1) - min)) + min;
                        }
                    }
                    selectedNumbers.push(theNumber);
                }
                //console.log(selectedNumbers);
                for (let i = 0; i < selectedNumbers.length; i++) {
                    this.$data.resultMsg += selectedNumbers[i];
                    if (i < selectedNumbers.length - 1) {
                        this.$data.resultMsg += ", ";
                    }
                }
                this.$refs.layer1.classList.add("flyout");
                this.$refs.poop1.classList.add("d-1000");
                this.$refs.poop1.classList.add("fall");
                this.$refs.num1.innerHTML = `${selectedNumbers[0]}`;
                let delayMs = 1600;
                if (cnt > 1) {
                    this.$refs.poop2.classList.add("d-2000");
                    this.$refs.poop2.classList.add("fall");
                    this.$refs.num2.innerHTML = `${selectedNumbers[1]}`;
                    if (cnt > 2) {
                        this.$refs.poop3.classList.add("d-2500");
                        this.$refs.poop3.classList.add("fall");
                        this.$refs.num3.innerHTML = `...`;
                    }
                    delayMs = 3100;
                }
                
                let page = this;
                setTimeout(function () {
                    page.$refs.instruction.classList.add("hide");
                    page.$refs.btnRefresh.disabled = false;
                    page.$refs.resultDiv.classList.remove("hide");
                }, delayMs);
            },
        }
    }
</script>

