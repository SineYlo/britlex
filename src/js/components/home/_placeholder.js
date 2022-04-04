import superplaceholder from 'superplaceholder';

superplaceholder({
  el: document.querySelector('.form-contact__email'),
  sentences: ['Example: contact@mail.com', 'Start typing'],
  options: {
    letterDelay: 40,
    sentenceDelay: 700,
  },
});
