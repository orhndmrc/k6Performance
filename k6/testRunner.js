import { group, check, sleep } from 'k6';
import http from 'k6/http';
import { login } from './login.js';
import { logout } from './logout.js';


export default function () {

    let pena = login()
    logout(pena[0], pena[1], pena[2], pena[3])
}