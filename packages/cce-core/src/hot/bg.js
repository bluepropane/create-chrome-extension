import SockJS from 'sockjs-client';

console.log('init reloader bg');

window.sockjs = new SockJS('ws://localhost:8005');
