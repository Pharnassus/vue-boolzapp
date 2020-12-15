var boolzApp = new Vue({
  el: '#app',
  data: {
    contacts: [
      {
        name: 'Michele',
        avatar: 'img/avatar_2.png',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: 'img/avatar_3.png',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: 'img/avatar_4.png',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Nicole',
        avatar: 'img/avatar_5.png',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          },
        ],
      },
    ],
    //indice nei contatti [questa è la chiave di tutto l'esercizio]
    activeContactIndex: 0,
    // chat: {},
    newMessage: '',
  },
  methods: {
    setActiveContactIndex: function(newIndex) {
      this.activeContactIndex = newIndex;
    },
    // selectContact: function(key) {
      //   this.chat = key;
      //   // console.log(this.chat);
      // },

    addNewMessage: function() {
      var newObj = {
        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
        text: this.newMessage,
        status: 'sent'
      };
      this.contacts[this.activeContactIndex].messages.push(newObj);
      this.newMessage = '';

      //bot-risposta 1s
      setTimeout(function() {
        var newBot = {
          date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
          text: 'VAFFANCULO!',
          status: 'received'
        };
        boolzApp.contacts[boolzApp.activeContactIndex].messages.push(newBot);
      }, 1000);
    },
  },
});
