const app = new Vue({
        el: "#root",
        data: {
            messaggio: 'Boolean',
            image: 'img/boolean_logo.png',
            classe: "text-italic"
        },
        // creo una funzione che al click cambi font della parola
        methods: {
            changeFont: function () {

                if (this.classe == 'text-normal') {
                    this.classe = 'text-italic';
                } else {
                    this.classe = 'text-normal';
                }
            }
        }
    }

);