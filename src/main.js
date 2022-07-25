import { parseStringStyle } from '@vue/shared';
import { createApp } from 'vue/dist/vue.esm-bundler';

const app = createApp(
    {
        data() {
            return {
                logo: "./Assets/Images/logo.png",
                score: 0,
                highscore: localStorage.getItem("highscore") || 0,
                cards: [
                        {
                        name: "Naruto Uzumaki",
                        src: "./Assets/Images/cards/naruto.jpg",
                        clicked: false
                        },
                        {
                        name: "Sasuke Uchiha",
                        src: "./Assets/Images/cards/sasuke.jpg",
                        clicked: false
                        },
                        {
                        name: "Itachi Uchiha",
                        src: "./Assets/Images/cards/itachi.jpg",
                        clicked: false
                        },
                        {
                        name: "Sakura Haruno",
                        src: "./Assets/Images/cards/sakura.png",
                        clicked: false
                        },
                        {
                        name: "Obito Uchiha",
                        src: "./Assets/Images/cards/obito.jpg",
                        clicked: false
                        },
                        {
                        name: "Jiraiya Ogata",
                        src: "./Assets/Images/cards/jiraiya.jpg",
                        clicked: false
                        },
                        {
                        name: "Madara Uchiha",
                        src: "./Assets/Images/cards/madara.jpg",
                        clicked: false
                        },
                        {
                        name: "Akamaru",
                        src: "./Assets/Images/cards/akamaru.jpg",
                        clicked: false
                        },
                        {
                        name: "Kurama",
                        src: "./Assets/Images/cards/kurama.jpg",
                        clicked: false
                        },
                        {
                        name: "Orochimaru",
                        src: "./Assets/Images/cards/orochimaru.jpg",
                        clicked: false
                        },
                        {
                        name: "Shikamaru Nara",
                        src: "./Assets/Images/cards/shikamaru.png",
                        clicked: false
                        },
                        {
                        name: "Kakashi Hatake",
                        src: "./Assets/Images/cards/kakashi.jpg",
                        clicked: false
                        }
                    ]
                }
            },
            methods: {
                shuffleCards() {
                    const gameCards = [];

                    for (let i = 0; i < this.cards.length; i++) {
                        let insertAt = Math.floor(Math.random() * 12);
                        gameCards.splice(insertAt, 0, this.cards[i]);
                    }
                    return gameCards;
                },
                resetGame() {
                    for (let i = 0; i < this.cards.length; i++) {
                        this.cards[i].clicked = false;
                    }
                },
                chooseCard(index) {
                    if (this.cards[index].clicked !== true) {
                        this.cards[index].clicked = true;
                        this.cards = this.shuffleCards();
                        this.score += 1;
                    } else {
                        this.cards = this.shuffleCards();
                        if (this.highscore < this.score) this.highscore = this.score;
                        localStorage.setItem("highscore", this.highscore);
                        this.resetGame();
                        this.score = 0;
                    }
                }
            }
        }
).mount("#app");

