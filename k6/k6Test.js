import http from 'k6/http';
import { sleep, check } from 'k6';
import { Trend } from 'k6/metrics';

// export let options = {
//     stages: [
//       { duration: '10s', target: 10 },
//       { duration: '20s', target: 50 },
//       { duration: '10s', target: 0 }
//     ]

//   };

export default function () {
    let res = http.get('https://k6.io/page-data/privacy-policy/page-data.json')
    sleep(1);
    console.log(`Response time is ${res.timings.duration}`)
    //console.log(res.body)
    check(res, {
        'is status 200': (r) => r.status === 200

    });

}