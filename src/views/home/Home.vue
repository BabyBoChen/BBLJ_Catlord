<template>
    <div class="page">
        <TitleBar title="請教貓神😼" />
        <div class="content-wrapper">
            <div class="layer menu">
                <MenuItem title="哭笑不得(擲筊)" page="cryLaugh" />
                <MenuItem title="左右為難(2選1)" page="leftRight" />
                <MenuItem title="神選之人(抽籤)" page="chosenOne" />
                <!--<MenuItem title="脫序行為(亂序)" page="reorder" />-->
            </div>
        </div>

    </div>
</template>


<style>
    .row {
        padding: 0;
        margin: 0;
    }

    .row > * {
        padding: 0;
        margin: 0;
    }
</style>

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

    .menu {
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
</style>

<script>
    // @ is an alias to /src
    import TitleBar from '@/components/TitleBar.vue';
    import MenuItem from '@/views/home/MenuItem.vue';

    export default {
        name: 'Home',
        components: {
            TitleBar,
            MenuItem,
        }
    }
</script>
