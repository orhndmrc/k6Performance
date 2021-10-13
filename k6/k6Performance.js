import { group, check, sleep } from 'k6';
import http from 'k6/http';

// Version: 1.2
// Creator: Firefox
// Browser: Firefox

export let options = {
    maxRedirects: 0,
};

export default function() {

	group("page_1 - Running k6", function() {
		let res, redirectUrl, json;
		// Request #0
		res = http.get("https://k6.io/docs/page-data/getting-started/running-k6/page-data.json",
			{
				"headers": {
					"Host": "k6.io",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://k6.io/docs/getting-started/running-k6/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"TE": "trailers"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #1
		res = http.get("https://k6.io/docs/page-data/sq/d/2330559035.json",
			{
				"headers": {
					"Host": "k6.io",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://k6.io/docs/getting-started/running-k6/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"TE": "trailers"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #2
		res = http.get("https://k6.io/docs/page-data/sq/d/986473457.json",
			{
				"headers": {
					"Host": "k6.io",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://k6.io/docs/getting-started/running-k6/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"TE": "trailers"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #3
		res = http.get("https://k6.io/docs/page-data/app-data.json",
			{
				"headers": {
					"Host": "k6.io",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://k6.io/docs/getting-started/running-k6/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"TE": "trailers"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #4
		res = http.post("https://ndrfbfzecr-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.9.1)%3B%20Browser%20(lite)%3B%20react%20(17.0.2)%3B%20react-instantsearch%20(6.11.0)%3B%20JS%20Helper%20(3.4.4)&x-algolia-api-key=d31db030bd93c2aade72a72ab1045411&x-algolia-application-id=NDRFBFZECR",
		"{\"requests\":[{\"indexName\":\"prod_k6_docs\",\"params\":\"highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&filters=en&query=&facets=%5B%5D&tagFilters=\"}]}",
			{
				"headers": {
					"Host": "ndrfbfzecr-dsn.algolia.net",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"content-type": "application/x-www-form-urlencoded",
					"Origin": "https://k6.io",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://k6.io/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "cross-site",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #5
		res = http.get("https://k6.io/docs/page-data/app-data.json",
			{
				"headers": {
					"Host": "k6.io",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://k6.io/docs/getting-started/running-k6/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"TE": "trailers"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #6
		res = http.get("https://k6.io/docs/page-data/index/page-data.json",
			{
				"headers": {
					"Host": "k6.io",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://k6.io/docs/getting-started/running-k6/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"TE": "trailers"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #7
		res = http.get("https://k6.io/docs/page-data/sq/d/3730588965.json",
			{
				"headers": {
					"Host": "k6.io",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://k6.io/docs/getting-started/running-k6/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"TE": "trailers"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #8
		res = http.get("https://k6.io/docs/page-data/sq/d/957930629.json",
			{
				"headers": {
					"Host": "k6.io",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://k6.io/docs/getting-started/running-k6/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"TE": "trailers"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #9
		res = http.get("https://k6.io/docs/page-data/using-k6/http-requests/page-data.json",
			{
				"headers": {
					"Host": "k6.io",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://k6.io/docs/getting-started/running-k6/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"TE": "trailers"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #10
		res = http.get("https://k6.io/docs/page-data/javascript-api/page-data.json",
			{
				"headers": {
					"Host": "k6.io",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://k6.io/docs/getting-started/running-k6/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"TE": "trailers"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #11
		res = http.get("https://k6.io/docs/page-data/getting-started/page-data.json",
			{
				"headers": {
					"Host": "k6.io",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://k6.io/docs/getting-started/running-k6/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"TE": "trailers"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #12
		res = http.get("https://k6.io/docs/page-data/integrations/page-data.json",
			{
				"headers": {
					"Host": "k6.io",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://k6.io/docs/getting-started/running-k6/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"TE": "trailers"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #13
		res = http.get("https://k6.io/docs/page-data/getting-started/installation/page-data.json",
			{
				"headers": {
					"Host": "k6.io",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://k6.io/docs/getting-started/running-k6/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"TE": "trailers"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #14
		res = http.get("https://k6.io/docs/page-data/getting-started/results-output/page-data.json",
			{
				"headers": {
					"Host": "k6.io",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://k6.io/docs/getting-started/running-k6/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"TE": "trailers"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #15
		res = http.get("https://k6.io/docs/page-data/examples/page-data.json",
			{
				"headers": {
					"Host": "k6.io",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://k6.io/docs/getting-started/running-k6/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"TE": "trailers"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #16
		res = http.get("https://k6.io/docs/page-data/cloud/page-data.json",
			{
				"headers": {
					"Host": "k6.io",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://k6.io/docs/getting-started/running-k6/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"TE": "trailers"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #17
		res = http.get("https://k6.io/docs/page-data/extensions/page-data.json",
			{
				"headers": {
					"Host": "k6.io",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://k6.io/docs/getting-started/running-k6/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"TE": "trailers"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #18
		res = http.post("https://ndrfbfzecr-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.9.1)%3B%20Browser%20(lite)%3B%20react%20(17.0.2)%3B%20react-instantsearch%20(6.11.0)%3B%20JS%20Helper%20(3.4.4)&x-algolia-api-key=d31db030bd93c2aade72a72ab1045411&x-algolia-application-id=NDRFBFZECR",
		"{\"requests\":[{\"indexName\":\"prod_k6_docs\",\"params\":\"highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&filters=en&query=&facets=%5B%5D&tagFilters=\"}]}",
			{
				"headers": {
					"Host": "ndrfbfzecr-dsn.algolia.net",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"content-type": "application/x-www-form-urlencoded",
					"Origin": "https://k6.io",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://k6.io/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "cross-site",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #19
		res = http.get("https://k6.io/docs/page-data/app-data.json",
			{
				"headers": {
					"Host": "k6.io",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://k6.io/docs/getting-started/running-k6/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"TE": "trailers"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #20
		res = http.get("https://k6.io/docs/page-data/app-data.json",
			{
				"headers": {
					"Host": "k6.io",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://k6.io/docs/getting-started/running-k6/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"TE": "trailers"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #21
		res = http.get("https://k6.io/docs/page-data/app-data.json",
			{
				"headers": {
					"Host": "k6.io",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://k6.io/docs/getting-started/running-k6/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"TE": "trailers"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
	});

}
