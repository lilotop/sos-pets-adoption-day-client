<template>
    <div class="map">
        <div class="map__line" v-for="line in mapData">
            <div v-for="spot in getSpots(line)" class="map__marker" @click="selectSpot(spot)">
                <div class="spot-id">{{spot.spotId}}</div>
                <div :class="getGenderClass(spot.dog)" class="dog-name ellipsis">{{spot.dog.name}}</div>
                <div class="dog-age">{{spot.dog.age}}</div>
            </div>
        </div>
        <div class="entry">רחבת כניסה</div>
        <q-dialog v-model="dialogOpen" v-if="dialogOpen">
            <q-card>
                <img :src="`./images/${selectedSpot.dog.id}.jpg`" v-if="selectedSpot.dog.id"/>
                <q-card-section>
                    <div :class="getGenderClass(selectedSpot.dog)" class="dog-name ellipsis">{{selectedSpot.dog.name}}</div>
                    <div>{{selectedSpot.dog.desc}}</div>
                    <div class="dog-age">{{selectedSpot.dog.age}}</div>
                </q-card-section>
                <q-card-actions>
                    <q-btn v-close-popup>סגור</q-btn>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
    export default {
        name: 'Map',
        methods: {
            selectSpot(spot) {
                this.selectedSpot = spot;
                this.dialogOpen = true;
            },
            getSpots(line) {
                let spots = [];
                for (let spotId of line) {
                    let dog = this.dogs[spotId] || this.emptySpot;
                    spots.push({ spotId, dog });
                }
                return spots;
            },
            getGenderClass(dog) {
                if (!dog) {
                    return '';
                }
                switch (dog.gender) {
                    case "f":
                        return 'female text-h6';
                    case "m":
                        return 'male text-h6';
                    default:
                        return 'empty';
                }
            }
        },
        data() {
            return {
                mapData: [
                    [16, 17, 18],
                    [14, 15],
                    [11, 12, 13],
                    [9, 10],
                    [6, 7, 8],
                    [4, 5],
                    [1, 2, 3],
                ],
                emptySpot: {
                    name: 'עמדה ריקה',
                    desc: 'מצאת כלב בעמדה הזאת? בבקשה ספר לאחד המתנדבים עם החולצות הכתומות'
                },
                selectedSpot: {},
                dialogOpen: false,

                dogs: {
                    1: {
                        id: 1111,
                        name: 'רקסי',
                        gender: 'm',
                        age: 'שנה+',
                        desc: 'מקסים ושקט, מחונך לצרכים'
                    },
                    2: {
                        id: 2222,
                        name: 'שושה',
                        gender: 'f',
                        age: '7ח',
                        desc: 'שובבה ואנרגטית'
                    },
                    3: {
                        id: 3333,
                        name: 'מיילי',
                        gender: 'f',
                        age: '3ש',
                        desc: 'אוהבת טיולים וילדים'
                    },
                    4: {
                        id: 4444,
                        name: 'בוני',
                        gender: 'm',
                        age: '5ש',
                        desc: 'שקט ומחונך, אבל אוהב משחקים ושיגועים. מעולה לבית עם ילדים קטנים'
                    },
                    5: {
                        id: 5555,
                        name: 'רוקי',
                        gender: 'm',
                        age: '1-2 ש',
                        desc: 'הגיע מהסגר בערד'
                    },
                    6: {
                        id: 3333,
                        name: 'ביאטריס',
                        gender: 'f',
                        age: '2ש',
                        desc: 'אוהבת טיולים וילדים'
                    },
                    7: {
                        id: 4444,
                        name: 'סאני',
                        gender: 'm',
                        age: '4ש',
                        desc: 'שקט ומחונך. מעולה לבית עם ילדים.'
                    },
                    9: {
                        id: 3333,
                        name: 'טובי',
                        gender: 'f',
                        age: 'שנה+',
                        desc: 'אוהבת טיולים וילדים'
                    },
                    10: {
                        id: 4444,
                        name: 'מייקי',
                        gender: 'm',
                        age: '5-6ש',
                        desc: 'שקט ומחונך. מעולה לבית עם ילדים.'
                    },

                }
            }
        },
        mounted() {
            setTimeout(() => {
                this.$el.querySelector('.entry').scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
            }, 1000);
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
            height: 30vw;
            width: 30vw;
            border: 1px solid #ccc;
            margin-top: 2vw;
            display: flex;
            border-radius: 5px;
            flex-direction: column;
            justify-content: center;
            align-items: stretch;
            text-align: center;
            background-color: white;
            box-shadow: -2px 1px 5px 0 #d8d8d8;

            &:active {
                background-color: #888;

            }

            &:focus {
                outline: none;
            }
        }

        .dog-name {
            height: 32px;
            line-height: 32px;
            margin: 0 1px;
        }

        .dog-age {
            height: 22px;
            padding-top: 5px;
        }

        .female {
            background-color: hotpink;
        }

        .male {
            background-color: cornflowerblue;

        }

        .empty {
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            color: #999;

        }

        .entry {
            font-size: 8vh;
            text-align: center;
        }
    }
</style>
