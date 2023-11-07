const form = document.querySelector("form");
const messageInput = document.querySelector("#message-input");
const linkInput = document.querySelector("#link-input");
const linkContainer = document.querySelector('#link-container');
const messageContainer = document.querySelector('#message-container');
const {hash} = window.location;
const message = atob(hash.replace('#',''));

if(message){
  const messageShowContainer = document.querySelector('#message-show-container');
  messageShowContainer.classList.remove('hide');
  messageContainer.classList.add('hide');
  document.querySelector('#message-show-container>p').innerHTML = message;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const secretMessage = messageInput.value;

  //64 bit encoding i.e ascii to base64 conversion
  const encryptedMessage = btoa(secretMessage);

  linkContainer.classList.remove('hide');
  messageContainer.classList.add('hide');
  linkInput.value = `${window.location}#${encryptedMessage}`;
  linkInput.select();
});
