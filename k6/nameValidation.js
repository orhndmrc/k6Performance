import http from 'k6/http';
import { sleep,check } from 'k6';


export let options = {
    stages: [
      { duration: '5s', target: 20 },
      { duration: '5s', target: 10 },
      { duration: '5s', target: 0 },
    ],
  };

export default function () {
  let res = http.get('https://gorest.co.in/public/v1/users')
  sleep(1);
  //console.log(res.body)
  check(res, {
    'is status 200': (r) => r.status === 200,
    'body is not empty':(r)=>r.body!=null
  });
  let pena = JSON.parse(res.body)
  check(pena, {
    '3rd persons name validation': (p) => p.data[2].name==='bruno'
    
  });
}