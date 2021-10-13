import { group, check, sleep } from 'k6';
import http from 'k6/http';

export default function(){
	res = http.get("https://k6.io/",
			{
				"headers": {
					"Host": "k6.io",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
					"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Upgrade-Insecure-Requests": "1",
					"Sec-Fetch-Dest": "document",
					"Sec-Fetch-Mode": "navigate",
					"Sec-Fetch-Site": "none",
					"Sec-Fetch-User": "?1",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
        for (let i = 0; i < array.length; i++) {
            
            
        }
}