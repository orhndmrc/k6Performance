import { group, check, sleep } from 'k6';
import http from 'k6/http';

// Version: 1.2
// Creator: Firefox
// Browser: Firefox

export let options = {
	maxRedirects: 0,
	// stages: [
	// 	{ duration: '10s', target: 10 },
	// 	{ duration: '20s', target: 50 },
	// 	{ duration: '10s', target: 0 }
	// ]
};

export default function () {
	let arr = []
	let myObj


	let res, redirectUrl, json;
	// Request #0
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
	console.log(`Response time for k6.io is ${res.timings.duration}`)
	//console.log(res.url)
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	arr.forEach(function (el) {
		console.log(el.response_time)
	})

	

	// Request #1
	res = http.get("https://fonts.googleapis.com/css?family=Roboto+Mono:300,400|Kalam:400",
		{
			"headers": {
				"Host": "fonts.googleapis.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "text/css,*/*;q=0.1",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "style",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "cross-site",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	
	
	// Request #2
	res = http.get("https://k6.io/webpack-runtime-a4e3dcb373ba3b29ac88.js",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "script",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #3
	res = http.get("https://k6.io/framework-98b6ad772f01a946bc4b.js",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "script",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #4
	res = http.get("https://k6.io/app-7bf64a181a730e324cae.js",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "script",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #5
	res = http.get("https://k6.io/ea88be26-9bd0823e5abdb1f17775.js",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "script",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #6
	res = http.get("https://k6.io/d6e1aeb5-15ac365ade3f6d4097fd.js",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "script",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #7
	res = http.get("https://k6.io/commons-26e9d2e3ccef87ca91c1.js",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "script",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #8
	res = http.get("https://k6.io/1e11829ef016474bd4a6f64a17774a1e386510d9-35bc7e7ada688e9449ab.js",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "script",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #9
	res = http.get("https://k6.io/82131af08b408803e3a5798aed833686fc133e75-9bade560b950842c4e73.js",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "script",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #10
	res = http.get("https://k6.io/f2435a11f602f3914c6e08e1f66de5a029f3387b-980f171f7c412b7c87a1.js",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "script",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #11
	res = http.get("https://k6.io/17a69a9a1d8fc09245792bcc294de362b1a19150-c833379ba3d5050124c5.js",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "script",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #12
	res = http.get("https://k6.io/f24b7f7bc8c781f130ad48d7e78bb506c7ca4cb0-a36695fcb0cb10f228f3.js",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "script",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #13
	res = http.get("https://k6.io/af23bb4667a427946943d4e2a61b8c127ea8c078-98007a0a8cac59eb2231.js",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "script",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #14
	res = http.get("https://k6.io/component---src-pages-index-js-6a4d21938f05c92858f9.js",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "script",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #15
	res = http.get("https://k6.io/page-data/index/page-data.json",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "empty",
				"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #16
	res = http.get("https://k6.io/page-data/sq/d/2330559035.json",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "empty",
				"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #17
	res = http.get("https://k6.io/page-data/sq/d/2795187840.json",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "empty",
				"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #18
	res = http.get("https://k6.io/page-data/sq/d/2908938654.json",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "empty",
				"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #19
	res = http.get("https://k6.io/page-data/sq/d/3449985443.json",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "empty",
				"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #20
	res = http.get("https://k6.io/page-data/sq/d/835990484.json",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "empty",
				"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #21
	res = http.get("https://k6.io/page-data/app-data.json",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "empty",
				"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #22
	res = http.get("https://k6.io/static/amazon-53baee64fcf5d503521c997cabef36e3.svg",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "image",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #23
	res = http.get("https://k6.io/static/noaa-e340857add536929ce0296de5c3e2514.svg",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "image",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #24
	res = http.get("https://k6.io/static/sephora-897f410526af56d069f9765a8b50d438.svg",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "image",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #25
	res = http.get("https://k6.io/static/citrix-cb150f11bd59bd559ccf9ccf68fcdda7.svg",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "image",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #26
	res = http.get("https://k6.io/static/microsoft-0834e4311c664e7f7a3e916dedbac8c8.svg",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "image",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #27
	res = http.get("https://k6.io/static/gitlab-937de45bf4bda403c3128d3d9b14ebcc.svg",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "image",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #28
	res = http.get("https://k6.io/static/grafana-964f0e96cd461863c1bd73778e3bc1b9.svg",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "image",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #29
	res = http.get("https://k6.io/static/image1-bac7163deac64d2328c87cfa6c82e798.svg",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "image",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #30
	res = http.get("https://k6.io/static/image3-845741caff6b1cfbece2cd531ffafee6.svg",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "image",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #31
	res = http.get("https://pbs.twimg.com/profile_images/1353037199302815744/f9L0ozTE_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #32
	res = http.get("https://pbs.twimg.com/profile_images/1162527421184335877/5XV7dmsd_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #33
	res = http.get("https://pbs.twimg.com/profile_images/209110358/Fuze_010_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #34
	res = http.get("https://pbs.twimg.com/profile_images/1127938976088842240/Bh3mw5RJ_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #35
	res = http.get("https://pbs.twimg.com/profile_images/972609280829468672/WuDeb-Bd_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #36
	res = http.get("https://pbs.twimg.com/profile_images/1168967712112107522/gcdv85rK_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #37
	res = http.get("https://pbs.twimg.com/profile_images/1372391163009892353/MEmAdLq-_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #38
	res = http.get("https://pbs.twimg.com/profile_images/1087805336587767810/sZXUYiHq_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #39
	res = http.get("https://pbs.twimg.com/profile_images/831146761544691712/a_h9frkx_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #40
	res = http.get("https://pbs.twimg.com/profile_images/1282528885343584257/-nrjDmgS_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #41
	res = http.get("https://pbs.twimg.com/profile_images/1215391305523576832/6Pdqc2aY_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #42
	res = http.get("https://pbs.twimg.com/profile_images/1203043215420665856/k3SX85nX_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #43
	res = http.get("https://pbs.twimg.com/profile_images/943418275219804160/JpWd5-u7_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #44
	res = http.get("https://pbs.twimg.com/profile_images/1289509795704254466/sBB_cBzS_400x400.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #45
	res = http.get("https://pbs.twimg.com/profile_images/200575897/3287341252_2aab023d00_b_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #46
	res = http.get("https://js.hs-scripts.com/1681264.js",
		{
			"headers": {
				"Host": "js.hs-scripts.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "script",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "cross-site",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #47
	res = http.get("https://k6.io/static/home-page-main-30c6e72806506138b9bd44a2ab31a419.mp4",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5",
				"Accept-Language": "en-US,en;q=0.5",
				"Range": "bytes=0-",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "video",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 206": (r) => r.status === 206 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #48
	res = http.get("https://k6.io/static/animation-ffffba5a68074bcb0264874fe4b2464a.mp4",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5",
				"Accept-Language": "en-US,en;q=0.5",
				"Range": "bytes=0-",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "video",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 206": (r) => r.status === 206 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #49
	res = http.get("https://k6.io/static/circles-2b92cb0a264cd447b6ea40aa54875950.svg",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "image",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #50
	res = http.get("https://static.hotjar.com/c/hotjar-1699068.js?sv=6",
		{
			"headers": {
				"Host": "static.hotjar.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #51
	res = http.get("https://k6.io/fonts/tt-norms-pro/tt-pro-medium-webfont.woff2",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "application/font-woff2;q=1.0,application/font-woff;q=0.9,*/*;q=0.8",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "identity",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "font",
				"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #52
	res = http.get("https://k6.io/fonts/tt-norms-pro/tt-pro-bold-webfont.woff2",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "application/font-woff2;q=1.0,application/font-woff;q=0.9,*/*;q=0.8",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "identity",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "font",
				"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #53
	res = http.get("https://k6.io/fonts/tt-norms-pro/tt-pro-regular-webfont.woff2",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "application/font-woff2;q=1.0,application/font-woff;q=0.9,*/*;q=0.8",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "identity",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "font",
				"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #54
	res = http.get("https://fonts.gstatic.com/s/robotomono/v13/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_ROW4.woff2",
		{
			"headers": {
				"Host": "fonts.gstatic.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "application/font-woff2;q=1.0,application/font-woff;q=0.9,*/*;q=0.8",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "identity",
				"Origin": "https://k6.io",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://fonts.googleapis.com/",
				"Sec-Fetch-Dest": "font",
				"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "cross-site",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #55
	res = http.get("https://js.hs-banner.com/1681264.js",
		{
			"headers": {
				"Host": "js.hs-banner.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "script",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "cross-site",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #56
	res = http.get("https://js.hs-analytics.net/analytics/1634137800000/1681264.js",
		{
			"headers": {
				"Host": "js.hs-analytics.net",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #57
	res = http.get("https://js.usemessages.com/conversations-embed.js",
		{
			"headers": {
				"Host": "js.usemessages.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "script",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "cross-site",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #58
	res = http.get("https://fonts.gstatic.com/s/robotomono/v13/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_ROW4.woff2",
		{
			"headers": {
				"Host": "fonts.gstatic.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "application/font-woff2;q=1.0,application/font-woff;q=0.9,*/*;q=0.8",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "identity",
				"Origin": "https://k6.io",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://fonts.googleapis.com/",
				"Sec-Fetch-Dest": "font",
				"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "cross-site",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #59
	res = http.get("https://sc.lfeeder.com/lftracker_v1_ywVkO4X2AnO8Z6Bj.js",
		{
			"headers": {
				"Host": "sc.lfeeder.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "script",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "cross-site",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #60
	res = http.options("https://api.hubspot.com/livechat-public/v1/message/public?portalId=1681264&conversations-embed=static-1.9252&mobile=false&messagesUtk=59a12908da554d6da57a721a854c330a&traceId=59a12908da554d6da57a721a854c330a",
		"",
		{
			"headers": {
				"Host": "api.hubspot.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Access-Control-Request-Method": "GET",
				"Access-Control-Request-Headers": "x-hubspot-messages-uri",
				"Referer": "https://k6.io/",
				"Origin": "https://k6.io",
				"DNT": "1",
				"Connection": "keep-alive",
				"Sec-Fetch-Dest": "empty",
				"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "cross-site",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #61
	res = http.get("https://api.hubspot.com/livechat-public/v1/message/public?portalId=1681264&conversations-embed=static-1.9252&mobile=false&messagesUtk=59a12908da554d6da57a721a854c330a&traceId=59a12908da554d6da57a721a854c330a",
		{
			"headers": {
				"Host": "api.hubspot.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"X-HubSpot-Messages-Uri": "https://k6.io/",
				"Origin": "https://k6.io",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "empty",
				"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "cross-site",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #62
	res = http.get("https://pbs.twimg.com/profile_images/1353037199302815744/f9L0ozTE_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #63
	res = http.get("https://pbs.twimg.com/profile_images/1162527421184335877/5XV7dmsd_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #64
	res = http.get("https://pbs.twimg.com/profile_images/209110358/Fuze_010_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #65
	res = http.get("https://pbs.twimg.com/profile_images/1127938976088842240/Bh3mw5RJ_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #66
	res = http.get("https://pbs.twimg.com/profile_images/972609280829468672/WuDeb-Bd_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #67
	res = http.get("https://pbs.twimg.com/profile_images/1168967712112107522/gcdv85rK_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #68
	res = http.get("https://pbs.twimg.com/profile_images/1372391163009892353/MEmAdLq-_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #69
	res = http.get("https://pbs.twimg.com/profile_images/1087805336587767810/sZXUYiHq_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #70
	res = http.get("https://pbs.twimg.com/profile_images/831146761544691712/a_h9frkx_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #71
	res = http.get("https://pbs.twimg.com/profile_images/1282528885343584257/-nrjDmgS_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #72
	res = http.get("https://pbs.twimg.com/profile_images/1215391305523576832/6Pdqc2aY_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #73
	res = http.get("https://pbs.twimg.com/profile_images/1203043215420665856/k3SX85nX_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #74
	res = http.get("https://pbs.twimg.com/profile_images/943418275219804160/JpWd5-u7_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #75
	res = http.get("https://pbs.twimg.com/profile_images/200575897/3287341252_2aab023d00_b_normal.jpg",
		{
			"headers": {
				"Host": "pbs.twimg.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"DNT": "1",
				"Connection": "keep-alive"
			}
		}
	)
	// Request #76
	res = http.get("https://api.github.com/repos/grafana/k6",
		{
			"headers": {
				"Host": "api.github.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"Origin": "https://k6.io",
				"DNT": "1",
				"Connection": "keep-alive",
				"Sec-Fetch-Dest": "empty",
				"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "cross-site",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #77
	res = http.get("https://api.github.com/repos/grafana/k6",
		{
			"headers": {
				"Host": "api.github.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"Referer": "https://k6.io/",
				"Origin": "https://k6.io",
				"DNT": "1",
				"Connection": "keep-alive",
				"Sec-Fetch-Dest": "empty",
				"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "cross-site",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #78
	res = http.get("https://tr.lfeeder.com/?sid=ywVkO4X2AnO8Z6Bj&data=eyJnYVRyYWNraW5nSWRzIjpbXSwiZ2FDbGllbnRJZHMiOltdLCJjb250ZXh0Ijp7ImxpYnJhcnkiOnsibmFtZSI6ImxmdHJhY2tlciIsInZlcnNpb24iOiIyLjI2LjIifSwicGFnZVVybCI6Imh0dHBzOi8vazYuaW8vIiwicGFnZVRpdGxlIjoiTG9hZCB0ZXN0aW5nIGZvciBlbmdpbmVlcmluZyB0ZWFtcyB8IGs2IiwicmVmZXJyZXIiOiIifSwiZXZlbnQiOiJ0cmFja2luZy1ldmVudCIsImNsaWVudEV2ZW50SWQiOiJkZmNhMjUxYzEwM2Q1ZGEzIiwiY2xpZW50VGltZXN0YW1wIjoiMjAyMS0xMC0xM1QxNToxMTo1OC4zMjVaIiwiY2xpZW50VGltZXpvbmUiOjI0MCwic2NyaXB0SWQiOiJ5d1ZrTzRYMkFuTzhaNkJqIiwiY29va2llc0VuYWJsZWQiOnRydWUsImFub255bWl6ZUlwIjpmYWxzZSwibGZDbGllbnRJZCI6IkxGMS4xLmZlMjJjM2M3OWNmNGJhYTYuMTYzNDEzNzkxODMyNCIsImZvcmVpZ25Db29raWVzIjpbXSwicHJvcGVydGllcyI6e319",
		{
			"headers": {
				"Host": "tr.lfeeder.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "image",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "cross-site",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #79
	res = http.get("https://k6.io/static/terminal-1-e8b8eca8fade9b87906e9270e6abb6d7.mp4",
		{
			"cookies": {
				"_lfa": "LF1.1.fe22c3c79cf4baa6.1634137918324"
			},
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5",
				"Accept-Language": "en-US,en;q=0.5",
				"Range": "bytes=0-",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "video",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 206": (r) => r.status === 206 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #80
	res = http.get("https://k6.io/static/terminal-2-3f3f9ec65a34e01fa49c2f5a816f1052.mp4",
		{
			"cookies": {
				"_lfa": "LF1.1.fe22c3c79cf4baa6.1634137918324"
			},
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5",
				"Accept-Language": "en-US,en;q=0.5",
				"Range": "bytes=0-",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "video",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 206": (r) => r.status === 206 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #81
	res = http.get("https://k6.io/page-data/open-source/page-data.json",
		{
			"cookies": {
				"_lfa": "LF1.1.fe22c3c79cf4baa6.1634137918324"
			},
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"X-Moz": "prefetch",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "empty",
				"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #82
	res = http.get("https://k6.io/page-data/cloud/page-data.json",
		{
			"cookies": {
				"_lfa": "LF1.1.fe22c3c79cf4baa6.1634137918324"
			},
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"X-Moz": "prefetch",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "empty",
				"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #83
	res = http.get("https://k6.io/page-data/privacy-policy/page-data.json",
		{
			"cookies": {
				"_lfa": "LF1.1.fe22c3c79cf4baa6.1634137918324"
			},
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"X-Moz": "prefetch",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "empty",
				"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	console.log(`Response time for /privacy-policy call is ${res.timings.duration}`)
	// Request #84
	res = http.get("https://k6.io/icons/icon-512x512.png?v=b39a6f3e0dc925c8ec4f77e0a65490e9",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "image",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	
	arr.push(myObj)
	// Request #85
	res = http.get("https://k6.io/favicon-32x32.png?v=b39a6f3e0dc925c8ec4f77e0a65490e9",
		{
			"headers": {
				"Host": "k6.io",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
				"Accept": "image/avif,image/webp,*/*",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				"DNT": "1",
				"Connection": "keep-alive",
				"Referer": "https://k6.io/",
				"Sec-Fetch-Dest": "image",
				"Sec-Fetch-Mode": "no-cors",
				"Sec-Fetch-Site": "same-origin",
				"Pragma": "no-cache",
				"Cache-Control": "no-cache",
				"TE": "trailers"
			}
		}
	)
	check(res, { "status is 200": (r) => r.status === 200 });
	myObj = {
		"url": res.url,    //your artist variable
		"response_time": res.timings.duration   //your title variable
	};

	arr.push(myObj)
	console.log(`The number of apis is ${arr.length}`)
	let slowest= 1000
	let slowest_url = ''
	let total_load_time = 0

	for (let index = 0; index < arr.length; index++) {
		console.log(`The url ==> ${arr[index].url} and response time ==> ${arr[index].response_time}`)
		total_load_time += arr[index].response_time 

		if(slowest >= arr[index].response_time ){
			slowest = arr[index].response_time
			slowest_url = arr[index].url
		}
		
	}

	console.log(`Slowest ${slowest_url} and response time is ${slowest}`)
	console.log(`Toatal load time is ==> ${total_load_time}`)

	
	


}
