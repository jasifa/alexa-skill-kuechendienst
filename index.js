'use strict';
const Alexa = require('alexa-sdk'); 
const zufall = require('./bib/zufall');

exports.handler = function (event, context, callback) { 
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(kuechendiensthandler);
    alexa.execute(); 
};

const kuechendiensthandler = {
    'LaunchRequest': function () {
        this.emit('Frag mich wer ist dran');
    },
    'AMAZON.CancelIntent': function () { 
        this.emit('und tschüss');
    },
    'AMAZON.HelpIntent': function () {
        this.emit('wie hilfe helf dir selbst');
    },  
    'AMAZON.StopIntent': function () {
        this.emit('hoffentlich hilft jemand');
    },
    'AMAZON.YesIntent': function () {
        this.emit('ja');
    }, 
    'AMAZON.NoIntent': function () {
        this.emit('nein');
    },
    'AnfrageIntent': function (loud) {
        this.emit(':ask','wollt ihr wissen wer helfen soll'); 
    }, 
    
    'PersonIntent': function () {
        const person = zufall.getRandomArrayItem(
            [
            this.event.request.intent.slots.FirstPerson.value, 
            this.event.request.intent.slots.SecondPerson.value,
            this.event.request.intent.slots.ThirdPerson.value
            ]
            ); 
        this.emit('der auserwählte ist',(person)); 
    }, 
    'Unhandled': function () { 
        this.emit('AMAZON.StopIntent'); 
    } 
};
