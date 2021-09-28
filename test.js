import http from 'k6/http';
import { sleep,check } from 'k6';

export default function () {
  let res = http.get('https://gorest.co.in/public/v1/users')
  sleep(1);
  console.log(res.body)
  check(res, {
    'is status 200': (r) => r.status === 200,
    'body is not empty':(r)=>r.body!=null
  });
 
}