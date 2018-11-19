if ('Worker' in window) {
  const worker1 = new Worker('src/js/worker1.js');
  const button = document.querySelector('#worker-trigger');
  const pre = document.querySelector('#api-call-result pre');

  button.addEventListener('click', (event) => {
    event.preventDefault();

    worker1.postMessage({ message: 'API call trigger' });
  });

  worker1.onmessage = (event) => {
    const { data } = event.data;
    
    pre.innerHTML = JSON.stringify(data, null, 5);
    console.log('%c Message received: ', 'background-color: rebeccapurple; color:#fff; padding: .4em', event);
  };
}