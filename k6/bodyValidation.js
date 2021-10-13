import http from 'k6/http';
import { sleep, check } from 'k6';

export default function () {
    let response = http.get('https://gorest.co.in/public/v1/users')
    sleep(1);
    //console.log(res.body)
    if (!check(response, {
        "status equals 200": response => response.status.toString() === "200",
    })) {
        let checker = {}
        checker[`Error Code: ${response.error_code} - URL: ${response.url} - Response: ${response.body} - Request: ${response.request.body}`] = () => { return false }
        check(response, checker)
    };


    let pena = JSON.parse(response.body)
    console.log('Total is ', pena.meta.pagination.total)
    check(pena, {
        'total page is 1808?': (p) => p.meta.pagination.total === 1808
    })


}