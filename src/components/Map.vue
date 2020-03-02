<template>
    <div class="map">
        <div class="map__line" v-for="line in mapData">
            <button class="map__marker" v-for="marker in line">{{marker}}</button>
        </div>
        <div class="entry">רחבת כניסה</div>
    </div>
</template>

<script>
    export default {
        name: 'Map',
        data() {
            return {
                mapData: [
                    [16,17,18],
                    [14,15],
                    [11,12,13],
                    [9,10],
                    [6,7,8],
                    [4,5],
                    [1,2,3],
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .map {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .map__line {
            display: flex;
            justify-content: space-around;
        }
        .map__marker {
            height: 10vh;
            width: 30vw;
            border: 1px solid #ccc;
            margin: 0.3vh 1vw;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            &:active {
                background-color: #888;

            }
            &:focus {
                outline: none;
            }
        }
        .entry {
            font-size: 8vh;
        }
    }
</style>
