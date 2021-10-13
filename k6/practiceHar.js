import { group, sleep } from 'k6';
import http from 'k6/http';

// Version: 1.2
// Creator: Firefox
// Browser: Firefox

export let options = {
    maxRedirects: 0,
};

export default function() {

	group("page_1 - Aspen Enterprise Insights | Login", function() {
		let req, res;
		req = [{
			"method": "post",
			"url": "https://portal.sabisu.co/Sabisu/api/Login/VerifyEmail",
			"body": "{\"EmailAddress\":\"qae.perftest+1@aspentech.info\"}",
			"params": {
				"cookies": {
					"ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
					"S_SESSION_TOKEN": "",
					"AWGUID": "",
					"AWTOK": "",
					"AWPUBLICIDENTIFIER": "",
					"I": "",
					"V": ""
				},
				"headers": {
					"Host": "portal.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/json; charset=utf-8",
					"Identifier": "null",
					"Token": "null",
					"X-Requested-With": "XMLHttpRequest",
					"Origin": "https://portal.sabisu.co",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/Sabisu/Login",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		}];
		res = http.batch(req);
		sleep(11.32);
		req = [{
			"method": "post",
			"url": "https://portal.sabisu.co/Sabisu/api/Login/Login",
			"body": "{\"EmailAddress\":\"qae.perftest+1@aspentech.info\",\"Password\":\"QXNwZW4xMDA=¬~¬sab¬~¬\"}",
			"params": {
				"cookies": {
					"ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
					"S_SESSION_TOKEN": "",
					"AWGUID": "",
					"AWTOK": "",
					"AWPUBLICIDENTIFIER": "",
					"I": "",
					"V": ""
				},
				"headers": {
					"Host": "portal.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/json; charset=utf-8",
					"Identifier": "null",
					"Token": "null",
					"X-Requested-With": "XMLHttpRequest",
					"Origin": "https://portal.sabisu.co",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/Sabisu/Login",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		}];
		res = http.batch(req);
		sleep(1.78);
		req = [{
			"method": "post",
			"url": "https://portal.sabisu.co/sabisupremise/Flow.asmx?op=FlowGetDefaultPremiseServer",
			"body": "<?xml version='1.0' encoding='utf-8'?><soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'><soap:Body> <FlowGetDefaultPremiseServer xmlns='http://www.flowtools.co.uk/'><GUID><![CDATA[01F0E7C9-9227-4A20-835D-238AF0662E87]]></GUID><Token><![CDATA[19A9C8C5-8AA0-440D-BAE8-69E8020ECC61]]></Token></FlowGetDefaultPremiseServer></soap:Body></soap:Envelope>",
			"params": {
				"cookies": {
					"ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"AWGUID": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"AWTOK": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"AWPUBLICIDENTIFIER": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"I": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"V": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61"
				},
				"headers": {
					"Host": "portal.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"SOAPAction": "http://www.flowtools.co.uk/FlowGetDefaultPremiseServer",
					"Content-Type": "text/xml",
					"Origin": "https://portal.sabisu.co",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/Sabisu/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		}];
		res = http.batch(req);
		sleep(3.50);
		req = [{
			"method": "get",
			"url": "https://portal.sabisu.co/SabisuPremise/api/SabisuPlatform/Initialise",
			"params": {
				"cookies": {
					"ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"AWGUID": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"AWTOK": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"AWPUBLICIDENTIFIER": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"I": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"V": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61"
				},
				"headers": {
					"Host": "portal.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/json; charset=utf-8",
					"Identifier": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"Token": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"awguid": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"X-Requested-With": "XMLHttpRequest",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/SabisuPremise/Default.aspx",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		},{
			"method": "get",
			"url": "https://portal.sabisu.co/SabisuPremise/api/Profile/GetAuthType",
			"params": {
				"cookies": {
					"ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"AWGUID": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"AWTOK": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"AWPUBLICIDENTIFIER": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"I": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"V": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61"
				},
				"headers": {
					"Host": "portal.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/json; charset=utf-8",
					"Identifier": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"Token": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"awguid": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"X-Requested-With": "XMLHttpRequest",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/SabisuPremise/Default.aspx",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		},{
			"method": "get",
			"url": "https://portal.sabisu.co/SabisuPremise/api/Walkthrough/GetTodo",
			"params": {
				"cookies": {
					"ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"AWGUID": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"AWTOK": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"AWPUBLICIDENTIFIER": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"I": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"V": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61"
				},
				"headers": {
					"Host": "portal.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/json; charset=utf-8",
					"Identifier": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"Token": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"awguid": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"X-Requested-With": "XMLHttpRequest",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/SabisuPremise/Default.aspx",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		},{
			"method": "post",
			"url": "https://portal.sabisu.co/SabisuPremise/api/ServerAnalytics/Get",
			"body": "{\"ForEdit\":false,\"AddInternal\":true}",
			"params": {
				"cookies": {
					"ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"AWGUID": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"AWTOK": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"AWPUBLICIDENTIFIER": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"I": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"V": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61"
				},
				"headers": {
					"Host": "portal.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/json; charset=utf-8",
					"Identifier": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"Token": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"awguid": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"X-Requested-With": "XMLHttpRequest",
					"Origin": "https://portal.sabisu.co",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/SabisuPremise/Default.aspx",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		},{
			"method": "get",
			"url": "https://portal.sabisu.co/SabisuPremise/api/WidgetPage/GetAllTabs?WorkstreamID=58836",
			"params": {
				"cookies": {
					"ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"AWGUID": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"AWTOK": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"AWPUBLICIDENTIFIER": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"I": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"V": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61"
				},
				"headers": {
					"Host": "portal.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/json; charset=utf-8",
					"Identifier": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"Token": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"awguid": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"X-Requested-With": "XMLHttpRequest",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/SabisuPremise/Default.aspx",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		},{
			"method": "get",
			"url": "https://portal.sabisu.co/SabisuPremise/api/Chat/GetUserChatDetails",
			"params": {
				"cookies": {
					"ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"AWGUID": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"AWTOK": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"AWPUBLICIDENTIFIER": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"I": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"V": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61"
				},
				"headers": {
					"Host": "portal.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/json; charset=utf-8",
					"Identifier": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"Token": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"awguid": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"X-Requested-With": "XMLHttpRequest",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/SabisuPremise/Default.aspx",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		},{
			"method": "post",
			"url": "https://portal.sabisu.co/sabisupremise/flowpremise.asmx/IsPremiseAdmin",
			"body": "{\"PublicGuid\":\"05702D46-6C8B-42DD-868F-5F9B317A1C67\"}",
			"params": {
				"cookies": {
					"ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"AWGUID": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"AWTOK": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"AWPUBLICIDENTIFIER": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"I": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"V": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61"
				},
				"headers": {
					"Host": "portal.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/json; charset=utf-8",
					"X-Requested-With": "XMLHttpRequest",
					"Origin": "https://portal.sabisu.co",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/SabisuPremise/Default.aspx",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		},{
			"method": "post",
			"url": "https://portal.sabisu.co/sabisupremise/Search.asmx/HasAvailableQueries",
			"body": "{}",
			"params": {
				"cookies": {
					"ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"AWGUID": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"AWTOK": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"AWPUBLICIDENTIFIER": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"I": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"V": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61"
				},
				"headers": {
					"Host": "portal.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/json; charset=utf-8",
					"X-Requested-With": "XMLHttpRequest",
					"Origin": "https://portal.sabisu.co",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/SabisuPremise/Default.aspx",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		},{
			"method": "options",
			"url": "https://api.sabisu.co/api/Notification/GetCount",
			"params": {
				"headers": {
					"Host": "api.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Access-Control-Request-Method": "GET",
					"Access-Control-Request-Headers": "awguid,content-type,identifier,s_session_token,token",
					"Referer": "https://portal.sabisu.co/",
					"Origin": "https://portal.sabisu.co",
					"DNT": "1",
					"Connection": "keep-alive",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-site",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		},{
			"method": "options",
			"url": "https://api.sabisu.co/api/Unit/GetMyUnit",
			"params": {
				"headers": {
					"Host": "api.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Access-Control-Request-Method": "GET",
					"Access-Control-Request-Headers": "awguid,content-type,identifier,s_session_token,token",
					"Referer": "https://portal.sabisu.co/",
					"Origin": "https://portal.sabisu.co",
					"DNT": "1",
					"Connection": "keep-alive",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-site",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		},{
			"method": "post",
			"url": "https://portal.sabisu.co/sabisupremise/Flow.asmx/SetUserSetting",
			"body": "{\"SettingName\":\"WidgetCurrentPageID\",\"SettingValue\":\"1763114\",\"GUID\":\"01F0E7C9-9227-4A20-835D-238AF0662E87\",\"Token\":\"19A9C8C5-8AA0-440D-BAE8-69E8020ECC61\"}",
			"params": {
				"cookies": {
					"ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"AWGUID": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"AWTOK": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"AWPUBLICIDENTIFIER": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"I": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"V": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61"
				},
				"headers": {
					"Host": "portal.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/json; charset=utf-8",
					"X-Requested-With": "XMLHttpRequest",
					"Origin": "https://portal.sabisu.co",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/SabisuPremise/Default.aspx",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		},{
			"method": "get",
			"url": "https://portal.sabisu.co/SabisuPremise/api/WidgetPage/GetPageWidgets?PageID=1763114&ClientData%5Bglobal%5D%5B0%5D%5BKey%5D=global&ClientData%5Bpages%5D%5B0%5D%5BKey%5D=1763114",
			"params": {
				"cookies": {
					"ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"AWGUID": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"AWTOK": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"AWPUBLICIDENTIFIER": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"I": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"V": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61"
				},
				"headers": {
					"Host": "portal.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/json; charset=utf-8",
					"Identifier": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"Token": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"awguid": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"X-Requested-With": "XMLHttpRequest",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/SabisuPremise/Default.aspx",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		},{
			"method": "post",
			"url": "https://portal.sabisu.co/sabisupremise/Search.asmx/GetAvailableQueries",
			"body": "{\"PublicGuid\":\"05702D46-6C8B-42DD-868F-5F9B317A1C67\",\"Token\":\"19A9C8C5-8AA0-440D-BAE8-69E8020ECC61\"}",
			"params": {
				"cookies": {
					"ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"AWGUID": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"AWTOK": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"AWPUBLICIDENTIFIER": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"I": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"V": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61"
				},
				"headers": {
					"Host": "portal.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/json; charset=utf-8",
					"X-Requested-With": "XMLHttpRequest",
					"Origin": "https://portal.sabisu.co",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/SabisuPremise/Default.aspx",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		},{
			"method": "post",
			"url": "https://portal.sabisu.co/SabisuPremise/api/Widget/WidgetGetWidgetContent",
			"body": "{\"GUID\":\"01F0E7C9-9227-4A20-835D-238AF0662E87\",\"Token\":\"19A9C8C5-8AA0-440D-BAE8-69E8020ECC61\",\"WidgetPageInstanceIDList\":\"14393382;14393383;\",\"ClientData\":{\"global\":[{\"Key\":\"global\",\"Values\":[]}],\"pages\":[{\"Key\":\"1763114\",\"Values\":[]}],\"widgets\":[{\"Key\":\"14393382\",\"Values\":[]},{\"Key\":\"14393383\",\"Values\":[]}]},\"PageID\":\"1763114\",\"IgnoreUserSpecific\":false}",
			"params": {
				"cookies": {
					"ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"AWGUID": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"AWTOK": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"AWPUBLICIDENTIFIER": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"I": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"V": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61"
				},
				"headers": {
					"Host": "portal.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/json; charset=utf-8",
					"Identifier": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"Token": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"awguid": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"X-Requested-With": "XMLHttpRequest",
					"Origin": "https://portal.sabisu.co",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/SabisuPremise/Default.aspx",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		},{
			"method": "get",
			"url": "https://api.sabisu.co/api/Notification/GetCount",
			"params": {
				"headers": {
					"Host": "api.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/json; charset=utf-8",
					"Identifier": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"Token": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"awguid": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"Origin": "https://portal.sabisu.co",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-site",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		},{
			"method": "get",
			"url": "https://api.sabisu.co/api/Unit/GetMyUnit",
			"params": {
				"headers": {
					"Host": "api.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/json; charset=utf-8",
					"Identifier": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"Token": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"awguid": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"Origin": "https://portal.sabisu.co",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-site",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		},{
			"method": "get",
			"url": "https://push2.sabisu.co/SignalR/hubs/negotiate?clientProtocol=1.5&I=05702D46-6C8B-42DD-868F-5F9B317A1C67&V=19A9C8C5-8AA0-440D-BAE8-69E8020ECC61&AppIdentifications=&connectionData=%5B%7B%22name%22%3A%22pushhub%22%7D%5D&_=1633112464197",
			"params": {
				"headers": {
					"Host": "push2.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "text/plain, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
					"Origin": "https://portal.sabisu.co",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-site",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"TE": "trailers"
				}
			}
		}];
		res = http.batch(req);
		sleep(0.54);
		req = [{
			"method": "get",
			"url": "https://push2.sabisu.co/SignalR/hubs/start?transport=webSockets&clientProtocol=1.5&I=05702D46-6C8B-42DD-868F-5F9B317A1C67&V=19A9C8C5-8AA0-440D-BAE8-69E8020ECC61&AppIdentifications=&connectionToken=%2BLGnHgJQ1JWhdWylG1BxQCqU6hk0%2FthzJp5P0nBq%2B7UuNhX7K%2B9vtyqRLOncVMmK2vBfMZAks1fO1g2uhwvPJUAv9SXvFQR9q7Wjc5cph1jXx6AJ0QSvPuPmTZ8cAfLT&connectionData=%5B%7B%22name%22%3A%22pushhub%22%7D%5D&_=1633112464198",
			"params": {
				"headers": {
					"Host": "push2.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "text/plain, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
					"Origin": "https://portal.sabisu.co",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-site",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"TE": "trailers"
				}
			}
		},{
			"method": "post",
			"url": "https://portal.sabisu.co/sabisupremise/Flow.asmx/SignalMe",
			"body": "{\"GUID\":\"01F0E7C9-9227-4A20-835D-238AF0662E87\",\"Token\":\"19A9C8C5-8AA0-440D-BAE8-69E8020ECC61\"}",
			"params": {
				"cookies": {
					"ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"AWGUID": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"AWTOK": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"AWPUBLICIDENTIFIER": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"I": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"V": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61"
				},
				"headers": {
					"Host": "portal.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/json; charset=utf-8",
					"X-Requested-With": "XMLHttpRequest",
					"Origin": "https://portal.sabisu.co",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/SabisuPremise/Default.aspx",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		}];
		res = http.batch(req);
		sleep(3.24);
		req = [{
			"method": "options",
			"url": "https://api.sabisu.co/api/Log/LogMany",
			"params": {
				"headers": {
					"Host": "api.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Access-Control-Request-Method": "POST",
					"Access-Control-Request-Headers": "awguid,content-type,identifier,s_session_token,token",
					"Referer": "https://portal.sabisu.co/",
					"Origin": "https://portal.sabisu.co",
					"DNT": "1",
					"Connection": "keep-alive",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-site",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		},{
			"method": "post",
			"url": "https://api.sabisu.co/api/Log/LogMany",
			"body": "[{\"Type\":\"Error\",\"Message\":\"An error occurred in a widget\",\"Information\":\"{\\\"location\\\":\\\"error_from_server\\\",\\\"sabisuInformation\\\":[{\\\"ObjectType\\\":\\\"Sabisu Data Object\\\",\\\"ObjectIdentifier\\\":\\\"18e26882-78c4-4fff-94ed-fe1113ab449c\\\",\\\"Type\\\":\\\"DataRetrievalPacket\\\",\\\"Created\\\":\\\"2021-10-01T18:21:01.0413587+00:00\\\",\\\"Metadata\\\":{\\\"WidgetPageInstanceID\\\":14393383}},{\\\"ObjectType\\\":\\\"Pipeline\\\",\\\"ObjectIdentifier\\\":\\\"ff230bc3-e875-4c4f-b76f-0cd349104526\\\",\\\"Type\\\":\\\"DataRetrievalPacket\\\",\\\"Created\\\":\\\"2021-10-01T18:21:07.0501045+00:00\\\",\\\"Metadata\\\":{\\\"WidgetPageInstanceID\\\":14393383}},{\\\"ObjectType\\\":\\\"Sabisu Data Object\\\",\\\"ObjectIdentifier\\\":\\\"0e1d4b9a-e2de-4a8e-a004-a8c2e2032918\\\",\\\"Type\\\":\\\"DataRetrievalPacket\\\",\\\"Created\\\":\\\"2021-10-01T18:21:07.48195+00:00\\\",\\\"Metadata\\\":{\\\"WidgetPageInstanceID\\\":14393383}},{\\\"ObjectType\\\":\\\"Sabisu Data Object\\\",\\\"ObjectIdentifier\\\":\\\"a8934d77-5ddd-4d0e-8f73-e95023e25693\\\",\\\"Type\\\":\\\"DataRetrievalPacket\\\",\\\"Created\\\":\\\"2021-10-01T18:21:07.4989533+00:00\\\",\\\"Metadata\\\":{\\\"WidgetPageInstanceID\\\":14393383}},{\\\"ObjectType\\\":\\\"Sabisu Data Upload\\\",\\\"ObjectIdentifier\\\":\\\"780ea2e2-5899-4fc3-b939-d9dbad13b4ac\\\",\\\"Type\\\":\\\"DataRetrievalPacket\\\",\\\"Created\\\":\\\"2021-10-01T18:21:07.529673+00:00\\\",\\\"Metadata\\\":{\\\"WidgetPageInstanceID\\\":14393383}},{\\\"ObjectType\\\":\\\"Sabisu Data Upload\\\",\\\"ObjectIdentifier\\\":\\\"1e72e8f1-324f-48cb-9edd-4fc022db5199\\\",\\\"Type\\\":\\\"DataRetrievalPacket\\\",\\\"Created\\\":\\\"2021-10-01T18:21:07.5300832+00:00\\\",\\\"Metadata\\\":{\\\"WidgetPageInstanceID\\\":14393383}},{\\\"Error\\\":{\\\"ClassName\\\":\\\"System.Exception\\\",\\\"Message\\\":\\\"HttpRequestException: System.Net.Http.HttpRequestException: Response status code does not indicate success: 500 (Internal Server Error).\\\\r\\\\n   at System.Net.Http.HttpResponseMessage.EnsureSuccessStatusCode()\\\\r\\\\n   at Sabisu.Web.WebAPI.WebAPIHelper.<PerformWithHttpClient>d__23`1.MoveNext() \\\\r\\\\nResult: {\\\\\\\"Message\\\\\\\":\\\\\\\"An error has occurred.\\\\\\\"} \\\\r\\\\nResponse: StatusCode: 500, ReasonPhrase: 'Internal Server Error', Version: 1.1, Content: System.Net.Http.StreamContent, Headers:\\\\r\\\\n{\\\\r\\\\n  Connection: keep-alive\\\\r\\\\n  Pragma: no-cache\\\\r\\\\n  sabisu_information: [{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Pipeline\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"ff230bc3-e875-4c4f-b76f-0cd349104526\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.0501045+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}},{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Sabisu Data Object\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"0e1d4b9a-e2de-4a8e-a004-a8c2e2032918\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.48195+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}},{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Sabisu Data Object\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"a8934d77-5ddd-4d0e-8f73-e95023e25693\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.4989533+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}},{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Sabisu Data Upload\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"780ea2e2-5899-4fc3-b939-d9dbad13b4ac\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.529673+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}},{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Sabisu Data Upload\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"1e72e8f1-324f-48cb-9edd-4fc022db5199\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.5300832+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}}]\\\\r\\\\n  sabisu_metrics: TOTAL=2986.3903; REQUEST_IDENTIFIER=3e1988c6-5ee7-4daa-995c-027a0ec6a6cf; SqlServer_datasource_getdataset=1867.6689 (count: 5), webapihelper_request=637.9913 (count: 5), webapi_connectivity_parse=241.5556 (count: 2), copying_dataset=118.9699 (count: 3), acquisition_query_template_retrieval=40.9276 (count: 3), getting_pipeline=31.5369, webapi_connectivity_call=21.9689 (count: 2), DataGetter_ExpandSDC=14.6164 (count: 2), acquisition_query_replace=4.4717 (count: 3), TaskObjectCache_WaitingForCache=2.2658, data_request=1.6663 (count: 2), evaluating_acquisition=1.4932, parsing_chain=0.3016, request=0.2964, SqlServer_datasource_connecting=0.2359 (count: 5), evaluating_pipeline=0.1871, pipeline_acquisitions=0.0972, WebAPI_datasource_getconnection=0.0651 (count: 2), SqlServer_datasource_parse_data_set=0.0353 (count: 5), WebAPI_datasource_getadapter=0.0242 (count: 2), acquisition_query_parse_dates=0.0176 (count: 3), WebAPI_datasource_parse_data_set=0.0134 (count: 2), pipeline_preprocess=0.0079, pipeline_evaluate=0.0065, running_pipeline=0.0018, prune_acquisitions=0.0004; REQUEST_URL=http://sabisupipeline-elasticbeanstalk.sabisu.co/api/Pipeline/Evaluate/;\\\\r\\\\n  sabisu_metrics: (POST https://api.sabisu.co/api/Validator/TranslateSessionTokenToCredentials : TOTAL=24.9119; REQUEST_IDENTIFIER=53b04122-c4da-435e-90a7-73fe7a97d074; request=24.9119; REQUEST_URL=https://api.sabisu.co/api/Validator/TranslateSessionTokenToCredentials;)\\\\r\\\\n  sabisu_metrics: (POST https://datauploads.sabisu.co/api/Reporting/GetData/ : TOTAL=84.5222; GetAsync_FetchVersions=35.5839, GetAsync_GetVersionDescriptors=25.4558, SqlServer_datasource_getdataset=22.3131, request=0.5199, Unzipping=0.3509, Parse CSV=0.2364, GetAsync_ProcessVersions=0.0386, GetAsync_ReconcileTableColumnTypes=0.0153, ApplyDataSchema=0.0037, GetAsync_MergeResults=0.0037, GetAsync_ParseDecompDataResult=0.0009)\\\\r\\\\n  sabisu_metrics: (POST https://api.sabisu.co/api/Validator/TranslateCredentialsToSessionToken : TOTAL=23.5493; REQUEST_IDENTIFIER=479d9e8b-da75-4ea2-97de-c1cf48b13137; request=22.7962, SqlServer_datasource_getdataset=0.6934, SqlServer_datasource_connecting=0.0539, SqlServer_datasource_parse_data_set=0.0058; REQUEST_URL=https://api.sabisu.co/api/Validator/TranslateCredentialsToSessionToken;)\\\\r\\\\n  sabisu_metrics: (POST https://datauploads.sabisu.co/api/Reporting/GetData/ : TOTAL=430.7137; ApplyDataSchema=171.1936, Parse CSV=155.9842, GetAsync_FetchVersions=42.0612, GetAsync_GetVersionDescriptors=30.602, SqlServer_datasource_getdataset=19.1899, Unzipping=10.2345, request=1.3819, GetAsync_ProcessVersions=0.0377, GetAsync_ReconcileTableColumnTypes=0.0223, GetAsync_MergeResults=0.0051, GetAsync_ParseDecompDataResult=0.0013)\\\\r\\\\n  sabisu_metrics: (POST https://api.sabisu.co/api/Validator/IsAuthorized : TOTAL=1.1584; REQUEST_IDENTIFIER=e91d4078-51e9-4e15-833c-555b22f9eb06; SqlServer_datasource_getdataset=0.7163, request=0.3899, SqlServer_datasource_connecting=0.0471, SqlServer_datasource_parse_data_set=0.0051; REQUEST_URL=https://api.sabisu.co/api/Validator/IsAuthorized;)\\\\r\\\\n  Cache-Control: no-cache\\\\r\\\\n  Date: Fri, 01 Oct 2021 18:21:08 GMT\\\\r\\\\n  Server: Microsoft-IIS/10.0\\\\r\\\\n  X-AspNet-Version: 4.0.30319\\\\r\\\\n  X-Powered-By: ASP.NET\\\\r\\\\n  Content-Length: 36\\\\r\\\\n  Content-Type: application/json; charset=utf-8\\\\r\\\\n  Expires: -1\\\\r\\\\n}\\\",\\\"Data\\\":null,\\\"InnerException\\\":{\\\"ClassName\\\":\\\"System.Net.Http.HttpRequestException\\\",\\\"Message\\\":\\\"Response status code does not indicate success: 500 (Internal Server Error).\\\",\\\"Data\\\":null,\\\"InnerException\\\":null,\\\"HelpURL\\\":null,\\\"StackTraceString\\\":\\\"   at System.Net.Http.HttpResponseMessage.EnsureSuccessStatusCode()\\\\r\\\\n   at Sabisu.Web.WebAPI.WebAPIHelper.<PerformWithHttpClient>d__23`1.MoveNext()\\\",\\\"RemoteStackTraceString\\\":null,\\\"RemoteStackIndex\\\":0,\\\"ExceptionMethod\\\":\\\"8\\\\nEnsureSuccessStatusCode\\\\nSystem.Net.Http, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a\\\\nSystem.Net.Http.HttpResponseMessage\\\\nSystem.Net.Http.HttpResponseMessage EnsureSuccessStatusCode()\\\",\\\"HResult\\\":-2146233088,\\\"Source\\\":\\\"System.Net.Http\\\",\\\"WatsonBuckets\\\":null,\\\"SafeSerializationManager\\\":{\\\"m_serializedStates\\\":[{}]},\\\"CLR_SafeSerializationManager_RealType\\\":\\\"System.Net.Http.HttpRequestException, System.Net.Http, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a\\\"},\\\"HelpURL\\\":null,\\\"StackTraceString\\\":\\\"   at SabisuPremise.Models.Widget.WidgetContentBuilder.WidgetGetWidgetContent_GenerateWidget(XmlNode nodWidget, WidgetPageInstance parsedWidgetPageInstance, MetaData metaData, TimeMetricCollection widgetGetWidgetContentMetrics, Guid metricsGuid)\\\",\\\"RemoteStackTraceString\\\":null,\\\"RemoteStackIndex\\\":0,\\\"ExceptionMethod\\\":\\\"8\\\\nWidgetGetWidgetContent_GenerateWidget\\\\nSabisuPremise, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null\\\\nSabisuPremise.Models.Widget.WidgetContentBuilder\\\\nSabisuPremise.Old_App_Code.Classes.Widget.ConstructedWidget WidgetGetWidgetContent_GenerateWidget(System.Xml.XmlNode, Sabisu.Widget.PageInstance.WidgetPageInstance, Sabisu.Widget.MetaData.MetaData, Sabisu.Metrics.TimeMetricCollection, System.Guid)\\\",\\\"HResult\\\":-2146233088,\\\"Source\\\":\\\"SabisuPremise\\\",\\\"WatsonBuckets\\\":null},\\\"Code\\\":\\\"DATASOURCE_DATA_RETRIEVAL_FAILED\\\",\\\"IsFatal\\\":true,\\\"Message\\\":\\\"An error occurred while accessing the source data.\\\",\\\"ContactIdentifiers\\\":[],\\\"Type\\\":\\\"ErrorPacket\\\",\\\"Created\\\":\\\"2021-10-01T18:21:04.1663313+00:00\\\",\\\"Metadata\\\":{\\\"WidgetPageInstanceID\\\":14393383,\\\"ErrorMessage\\\":\\\"HttpRequestException: System.Net.Http.HttpRequestException: Response status code does not indicate success: 500 (Internal Server Error).\\\\r\\\\n   at System.Net.Http.HttpResponseMessage.EnsureSuccessStatusCode()\\\\r\\\\n   at Sabisu.Web.WebAPI.WebAPIHelper.<PerformWithHttpClient>d__23`1.MoveNext() \\\\r\\\\nResult: {\\\\\\\"Message\\\\\\\":\\\\\\\"An error has occurred.\\\\\\\"} \\\\r\\\\nResponse: StatusCode: 500, ReasonPhrase: 'Internal Server Error', Version: 1.1, Content: System.Net.Http.StreamContent, Headers:\\\\r\\\\n{\\\\r\\\\n  Connection: keep-alive\\\\r\\\\n  Pragma: no-cache\\\\r\\\\n  sabisu_information: [{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Pipeline\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"ff230bc3-e875-4c4f-b76f-0cd349104526\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.0501045+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}},{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Sabisu Data Object\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"0e1d4b9a-e2de-4a8e-a004-a8c2e2032918\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.48195+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}},{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Sabisu Data Object\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"a8934d77-5ddd-4d0e-8f73-e95023e25693\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.4989533+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}},{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Sabisu Data Upload\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"780ea2e2-5899-4fc3-b939-d9dbad13b4ac\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.529673+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}},{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Sabisu Data Upload\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"1e72e8f1-324f-48cb-9edd-4fc022db5199\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.5300832+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}}]\\\\r\\\\n  sabisu_metrics: TOTAL=2986.3903; REQUEST_IDENTIFIER=3e1988c6-5ee7-4daa-995c-027a0ec6a6cf; SqlServer_datasource_getdataset=1867.6689 (count: 5), webapihelper_request=637.9913 (count: 5), webapi_connectivity_parse=241.5556 (count: 2), copying_dataset=118.9699 (count: 3), acquisition_query_template_retrieval=40.9276 (count: 3), getting_pipeline=31.5369, webapi_connectivity_call=21.9689 (count: 2), DataGetter_ExpandSDC=14.6164 (count: 2), acquisition_query_replace=4.4717 (count: 3), TaskObjectCache_WaitingForCache=2.2658, data_request=1.6663 (count: 2), evaluating_acquisition=1.4932, parsing_chain=0.3016, request=0.2964, SqlServer_datasource_connecting=0.2359 (count: 5), evaluating_pipeline=0.1871, pipeline_acquisitions=0.0972, WebAPI_datasource_getconnection=0.0651 (count: 2), SqlServer_datasource_parse_data_set=0.0353 (count: 5), WebAPI_datasource_getadapter=0.0242 (count: 2), acquisition_query_parse_dates=0.0176 (count: 3), WebAPI_datasource_parse_data_set=0.0134 (count: 2), pipeline_preprocess=0.0079, pipeline_evaluate=0.0065, running_pipeline=0.0018, prune_acquisitions=0.0004; REQUEST_URL=http://sabisupipeline-elasticbeanstalk.sabisu.co/api/Pipeline/Evaluate/;\\\\r\\\\n  sabisu_metrics: (POST https://api.sabisu.co/api/Validator/TranslateSessionTokenToCredentials : TOTAL=24.9119; REQUEST_IDENTIFIER=53b04122-c4da-435e-90a7-73fe7a97d074; request=24.9119; REQUEST_URL=https://api.sabisu.co/api/Validator/TranslateSessionTokenToCredentials;)\\\\r\\\\n  sabisu_metrics: (POST https://datauploads.sabisu.co/api/Reporting/GetData/ : TOTAL=84.5222; GetAsync_FetchVersions=35.5839, GetAsync_GetVersionDescriptors=25.4558, SqlServer_datasource_getdataset=22.3131, request=0.5199, Unzipping=0.3509, Parse CSV=0.2364, GetAsync_ProcessVersions=0.0386, GetAsync_ReconcileTableColumnTypes=0.0153, ApplyDataSchema=0.0037, GetAsync_MergeResults=0.0037, GetAsync_ParseDecompDataResult=0.0009)\\\\r\\\\n  sabisu_metrics: (POST https://api.sabisu.co/api/Validator/TranslateCredentialsToSessionToken : TOTAL=23.5493; REQUEST_IDENTIFIER=479d9e8b-da75-4ea2-97de-c1cf48b13137; request=22.7962, SqlServer_datasource_getdataset=0.6934, SqlServer_datasource_connecting=0.0539, SqlServer_datasource_parse_data_set=0.0058; REQUEST_URL=https://api.sabisu.co/api/Validator/TranslateCredentialsToSessionToken;)\\\\r\\\\n  sabisu_metrics: (POST https://datauploads.sabisu.co/api/Reporting/GetData/ : TOTAL=430.7137; ApplyDataSchema=171.1936, Parse CSV=155.9842, GetAsync_FetchVersions=42.0612, GetAsync_GetVersionDescriptors=30.602, SqlServer_datasource_getdataset=19.1899, Unzipping=10.2345, request=1.3819, GetAsync_ProcessVersions=0.0377, GetAsync_ReconcileTableColumnTypes=0.0223, GetAsync_MergeResults=0.0051, GetAsync_ParseDecompDataResult=0.0013)\\\\r\\\\n  sabisu_metrics: (POST https://api.sabisu.co/api/Validator/IsAuthorized : TOTAL=1.1584; REQUEST_IDENTIFIER=e91d4078-51e9-4e15-833c-555b22f9eb06; SqlServer_datasource_getdataset=0.7163, request=0.3899, SqlServer_datasource_connecting=0.0471, SqlServer_datasource_parse_data_set=0.0051; REQUEST_URL=https://api.sabisu.co/api/Validator/IsAuthorized;)\\\\r\\\\n  Cache-Control: no-cache\\\\r\\\\n  Date: Fri, 01 Oct 2021 18:21:08 GMT\\\\r\\\\n  Server: Microsoft-IIS/10.0\\\\r\\\\n  X-AspNet-Version: 4.0.30319\\\\r\\\\n  X-Powered-By: ASP.NET\\\\r\\\\n  Content-Length: 36\\\\r\\\\n  Content-Type: application/json; charset=utf-8\\\\r\\\\n  Expires: -1\\\\r\\\\n}\\\",\\\"DataSourceType\\\":\\\"WebAPI\\\",\\\"ConnectionInformation\\\":\\\"server:https://sabisupipeline-elasticbeanstalk.sabisu.co/;;identifier:05702d46-6c8b-42dd-868f-5f9b317a1c67;token:19a9c8c5-8aa0-440d-bae8-69e8020ecc61;;request_identifier:d3a814e6-0b97-4ea5-9712-abc2b8dd53da;\\\"}},{\\\"Data\\\":\\\"Errors:System.Exception: HttpRequestException: System.Net.Http.HttpRequestException: Response status code does not indicate success: 500 (Internal Server Error).\\\\r\\\\n   at System.Net.Http.HttpResponseMessage.EnsureSuccessStatusCode()\\\\r\\\\n   at Sabisu.Web.WebAPI.WebAPIHelper.<PerformWithHttpClient>d__23`1.MoveNext() \\\\r\\\\nResult: {\\\\\\\"Message\\\\\\\":\\\\\\\"An error has occurred.\\\\\\\"} \\\\r\\\\nResponse: StatusCode: 500, ReasonPhrase: 'Internal Server Error', Version: 1.1, Content: System.Net.Http.StreamContent, Headers:\\\\r\\\\n{\\\\r\\\\n  Connection: keep-alive\\\\r\\\\n  Pragma: no-cache\\\\r\\\\n  sabisu_information: [{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Pipeline\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"ff230bc3-e875-4c4f-b76f-0cd349104526\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.0501045+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}},{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Sabisu Data Object\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"0e1d4b9a-e2de-4a8e-a004-a8c2e2032918\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.48195+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}},{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Sabisu Data Object\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"a8934d77-5ddd-4d0e-8f73-e95023e25693\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.4989533+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}},{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Sabisu Data Upload\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"780ea2e2-5899-4fc3-b939-d9dbad13b4ac\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.529673+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}},{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Sabisu Data Upload\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"1e72e8f1-324f-48cb-9edd-4fc022db5199\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.5300832+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}}]\\\\r\\\\n  sabisu_metrics: TOTAL=2986.3903; REQUEST_IDENTIFIER=3e1988c6-5ee7-4daa-995c-027a0ec6a6cf; SqlServer_datasource_getdataset=1867.6689 (count: 5), webapihelper_request=637.9913 (count: 5), webapi_connectivity_parse=241.5556 (count: 2), copying_dataset=118.9699 (count: 3), acquisition_query_template_retrieval=40.9276 (count: 3), getting_pipeline=31.5369, webapi_connectivity_call=21.9689 (count: 2), DataGetter_ExpandSDC=14.6164 (count: 2), acquisition_query_replace=4.4717 (count: 3), TaskObjectCache_WaitingForCache=2.2658, data_request=1.6663 (count: 2), evaluating_acquisition=1.4932, parsing_chain=0.3016, request=0.2964, SqlServer_datasource_connecting=0.2359 (count: 5), evaluating_pipeline=0.1871, pipeline_acquisitions=0.0972, WebAPI_datasource_getconnection=0.0651 (count: 2), SqlServer_datasource_parse_data_set=0.0353 (count: 5), WebAPI_datasource_getadapter=0.0242 (count: 2), acquisition_query_parse_dates=0.0176 (count: 3), WebAPI_datasource_parse_data_set=0.0134 (count: 2), pipeline_preprocess=0.0079, pipeline_evaluate=0.0065, running_pipeline=0.0018, prune_acquisitions=0.0004; REQUEST_URL=http://sabisupipeline-elasticbeanstalk.sabisu.co/api/Pipeline/Evaluate/;\\\\r\\\\n  sabisu_metrics: (POST https://api.sabisu.co/api/Validator/TranslateSessionTokenToCredentials : TOTAL=24.9119; REQUEST_IDENTIFIER=53b04122-c4da-435e-90a7-73fe7a97d074; request=24.9119; REQUEST_URL=https://api.sabisu.co/api/Validator/TranslateSessionTokenToCredentials;)\\\\r\\\\n  sabisu_metrics: (POST https://datauploads.sabisu.co/api/Reporting/GetData/ : TOTAL=84.5222; GetAsync_FetchVersions=35.5839, GetAsync_GetVersionDescriptors=25.4558, SqlServer_datasource_getdataset=22.3131, request=0.5199, Unzipping=0.3509, Parse CSV=0.2364, GetAsync_ProcessVersions=0.0386, GetAsync_ReconcileTableColumnTypes=0.0153, ApplyDataSchema=0.0037, GetAsync_MergeResults=0.0037, GetAsync_ParseDecompDataResult=0.0009)\\\\r\\\\n  sabisu_metrics: (POST https://api.sabisu.co/api/Validator/TranslateCredentialsToSessionToken : TOTAL=23.5493; REQUEST_IDENTIFIER=479d9e8b-da75-4ea2-97de-c1cf48b13137; request=22.7962, SqlServer_datasource_getdataset=0.6934, SqlServer_datasource_connecting=0.0539, SqlServer_datasource_parse_data_set=0.0058; REQUEST_URL=https://api.sabisu.co/api/Validator/TranslateCredentialsToSessionToken;)\\\\r\\\\n  sabisu_metrics: (POST https://datauploads.sabisu.co/api/Reporting/GetData/ : TOTAL=430.7137; ApplyDataSchema=171.1936, Parse CSV=155.9842, GetAsync_FetchVersions=42.0612, GetAsync_GetVersionDescriptors=30.602, SqlServer_datasource_getdataset=19.1899, Unzipping=10.2345, request=1.3819, GetAsync_ProcessVersions=0.0377, GetAsync_ReconcileTableColumnTypes=0.0223, GetAsync_MergeResults=0.0051, GetAsync_ParseDecompDataResult=0.0013)\\\\r\\\\n  sabisu_metrics: (POST https://api.sabisu.co/api/Validator/IsAuthorized : TOTAL=1.1584; REQUEST_IDENTIFIER=e91d4078-51e9-4e15-833c-555b22f9eb06; SqlServer_datasource_getdataset=0.7163, request=0.3899, SqlServer_datasource_connecting=0.0471, SqlServer_datasource_parse_data_set=0.0051; REQUEST_URL=https://api.sabisu.co/api/Validator/IsAuthorized;)\\\\r\\\\n  Cache-Control: no-cache\\\\r\\\\n  Date: Fri, 01 Oct 2021 18:21:08 GMT\\\\r\\\\n  Server: Microsoft-IIS/10.0\\\\r\\\\n  X-AspNet-Version: 4.0.30319\\\\r\\\\n  X-Powered-By: ASP.NET\\\\r\\\\n  Content-Length: 36\\\\r\\\\n  Content-Type: application/json; charset=utf-8\\\\r\\\\n  Expires: -1\\\\r\\\\n} ---> System.Net.Http.HttpRequestException: Response status code does not indicate success: 500 (Internal Server Error).\\\\r\\\\n   at System.Net.Http.HttpResponseMessage.EnsureSuccessStatusCode()\\\\r\\\\n   at Sabisu.Web.WebAPI.WebAPIHelper.<PerformWithHttpClient>d__23`1.MoveNext()\\\\r\\\\n   --- End of inner exception stack trace ---\\\\r\\\\n   at Sabisu.Web.WebAPI.WebAPIHelper.<PerformWithHttpClient>d__23`1.MoveNext()\\\\r\\\\n--- End of stack trace from previous location where exception was thrown ---\\\\r\\\\n   at System.Runtime.CompilerServices.TaskAwaiter.ThrowForNonSuccess(Task task)\\\\r\\\\n   at System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)\\\\r\\\\n   at System.Runtime.CompilerServices.TaskAwaiter`1.GetResult()\\\\r\\\\n   at Sabisu.Web.WebAPI.WebAPIHelper.<CallAsync>d__22`2.MoveNext()\\\\r\\\\n--- End of stack trace from previous location where exception was thrown ---\\\\r\\\\n   at System.Runtime.CompilerServices.TaskAwaiter.ThrowForNonSuccess(Task task)\\\\r\\\\n   at System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)\\\\r\\\\n   at System.Runtime.CompilerServices.TaskAwaiter`1.GetResult()\\\\r\\\\n   at Sabisu.NET45.AsyncHelpers.<Handle>d__2`1.MoveNext()\\\\r\\\\n--- End of stack trace from previous location where exception was thrown ---\\\\r\\\\n   at System.Runtime.CompilerServices.TaskAwaiter.ThrowForNonSuccess(Task task)\\\\r\\\\n   at System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)\\\\r\\\\n   at System.Runtime.CompilerServices.TaskAwaiter`1.GetResult()\\\\r\\\\n   at Sabisu.NET45.AsyncHelpers.<>c__DisplayClass1_0`1.<<RunSync>b__0>d.MoveNext()\\\\r\\\\n--- End of stack trace from previous location where exception was thrown ---\\\\r\\\\n   at System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()\\\\r\\\\n   at Sabisu.NET45.AsyncHelpers.ExclusiveSynchronizationContext.BeginMessageLoop()\\\\r\\\\n   at Sabisu.NET45.AsyncHelpers.RunSync[T](Func`1 task)\\\\r\\\\n   at Sabisu.Web.WebAPI.WebAPIHelper.Call[TDataType,TResultType](CallOptions`1 Options, Nullable`1 ExpectsResult)\\\\r\\\\n   at Sabisu.Connectivity.WebAPI.WebAPICommand.GetDataSet()\\\\r\\\\n   at Sabisu.Connectivity.Datasource.<>c__DisplayClass97_0.<GetDataSet>b__0()\\\\r\\\\n   at Sabisu.Connectivity.Datasource.TryAndLogError(Action codeToRun, Action insteadOfThrow, Action doFinally)\\\\r\\\\n   at Sabisu.Connectivity.Datasource.GetDataSet(DbCommand Command)\\\\r\\\\n   at Sabisu.Connectivity.Datasource.<>c__DisplayClass100_1`1.<GetDataSet>b__0(KeyValuePair`2 kvp) \\\\r\\\\n DebugData:GetData; {Performing Lookup: In with sdc:Pipeline:, Out with WebAPI:server:https://sabisupipeline-elasticbeanstalk.sabisu.co/;::False}Making new connection for SDC: Server=server:https://sabisupipeline-elasticbeanstalk.sabisu.co/;, Database=;\\\",\\\"Message\\\":\\\"Errored while getting data\\\",\\\"ContactIdentifiers\\\":[],\\\"Type\\\":\\\"SimplePacket`1\\\",\\\"Created\\\":\\\"2021-10-01T18:21:04.1819444+00:00\\\",\\\"Metadata\\\":{\\\"WidgetPageInstanceID\\\":14393383}}]}\",\"Keys\":[{\"AppID\":null,\"Category\":\"WidgetError\",\"ContextID\":\"14393383\"}],\"Metadata\":{\"WidgetPageInstanceID\":\"14393383\",\"WidgetIdentifier\":\"25900f8b-5d45-4407-9430-60c21ae8ed85\",\"Url\":\"https://portal.sabisu.co/SabisuPremise/Default.aspx#pid=7v7zRtzCO1bV88OjdgCDsT-7kClUKC6FK9ervVGfFBTKv\"}}]",
			"params": {
				"headers": {
					"Host": "api.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/json; charset=utf-8",
					"Identifier": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"Token": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"awguid": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"Origin": "https://portal.sabisu.co",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-site",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		}];
		res = http.batch(req);
		sleep(59.71);
		req = [{
			"method": "post",
			"url": "https://portal.sabisu.co/SabisuPremise/api/Widget/WidgetGetWidgetContent",
			"body": "{\"GUID\":\"01F0E7C9-9227-4A20-835D-238AF0662E87\",\"Token\":\"19A9C8C5-8AA0-440D-BAE8-69E8020ECC61\",\"WidgetPageInstanceIDList\":\"14393382;\",\"ClientData\":{\"global\":[{\"Key\":\"global\",\"Values\":[]}],\"pages\":[{\"Key\":\"1763114\",\"Values\":[]}],\"widgets\":[{\"Key\":\"14393382\",\"Values\":[]}]},\"PageID\":\"1763114\",\"IgnoreUserSpecific\":false}",
			"params": {
				"cookies": {
					"ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"AWGUID": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"AWTOK": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"AWPUBLICIDENTIFIER": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"I": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"V": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61"
				},
				"headers": {
					"Host": "portal.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/json; charset=utf-8",
					"Identifier": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"Token": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"awguid": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"X-Requested-With": "XMLHttpRequest",
					"Origin": "https://portal.sabisu.co",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/SabisuPremise/Default.aspx",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		}];
		res = http.batch(req);
		sleep(55.76);
		req = [{
			"method": "post",
			"url": "https://portal.sabisu.co/SabisuPremise/api/Widget/WidgetGetWidgetContent",
			"body": "{\"GUID\":\"01F0E7C9-9227-4A20-835D-238AF0662E87\",\"Token\":\"19A9C8C5-8AA0-440D-BAE8-69E8020ECC61\",\"WidgetPageInstanceIDList\":\"14393383;\",\"ClientData\":{\"global\":[{\"Key\":\"global\",\"Values\":[]}],\"pages\":[{\"Key\":\"1763114\",\"Values\":[]}],\"widgets\":[{\"Key\":\"14393383\",\"Values\":[]}]},\"PageID\":\"1763114\",\"IgnoreUserSpecific\":false}",
			"params": {
				"cookies": {
					"ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"AWGUID": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"AWTOK": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"AWPUBLICIDENTIFIER": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"I": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"V": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61"
				},
				"headers": {
					"Host": "portal.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/json; charset=utf-8",
					"Identifier": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"Token": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"awguid": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"X-Requested-With": "XMLHttpRequest",
					"Origin": "https://portal.sabisu.co",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/SabisuPremise/Default.aspx",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		}];
		res = http.batch(req);
		sleep(9.22);
		req = [{
			"method": "post",
			"url": "https://portal.sabisu.co/SabisuPremise/api/Widget/WidgetGetWidgetContent",
			"body": "{\"GUID\":\"01F0E7C9-9227-4A20-835D-238AF0662E87\",\"Token\":\"19A9C8C5-8AA0-440D-BAE8-69E8020ECC61\",\"WidgetPageInstanceIDList\":\"14393382;\",\"ClientData\":{\"global\":[{\"Key\":\"global\",\"Values\":[]}],\"pages\":[{\"Key\":\"1763114\",\"Values\":[]}],\"widgets\":[{\"Key\":\"14393382\",\"Values\":[]}]},\"PageID\":\"1763114\",\"IgnoreUserSpecific\":false}",
			"params": {
				"cookies": {
					"ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"AWGUID": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"AWTOK": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"AWPUBLICIDENTIFIER": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"I": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"V": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61"
				},
				"headers": {
					"Host": "portal.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/json; charset=utf-8",
					"Identifier": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"Token": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"awguid": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"X-Requested-With": "XMLHttpRequest",
					"Origin": "https://portal.sabisu.co",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/SabisuPremise/Default.aspx",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		}];
		res = http.batch(req);
		sleep(64.69);
		req = [{
			"method": "post",
			"url": "https://portal.sabisu.co/SabisuPremise/api/Widget/WidgetGetWidgetContent",
			"body": "{\"GUID\":\"01F0E7C9-9227-4A20-835D-238AF0662E87\",\"Token\":\"19A9C8C5-8AA0-440D-BAE8-69E8020ECC61\",\"WidgetPageInstanceIDList\":\"14393382;\",\"ClientData\":{\"global\":[{\"Key\":\"global\",\"Values\":[]}],\"pages\":[{\"Key\":\"1763114\",\"Values\":[]}],\"widgets\":[{\"Key\":\"14393382\",\"Values\":[]}]},\"PageID\":\"1763114\",\"IgnoreUserSpecific\":false}",
			"params": {
				"cookies": {
					"ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"AWGUID": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"AWTOK": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"AWPUBLICIDENTIFIER": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"I": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"V": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61"
				},
				"headers": {
					"Host": "portal.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/json; charset=utf-8",
					"Identifier": "05702D46-6C8B-42DD-868F-5F9B317A1C67",
					"Token": "19A9C8C5-8AA0-440D-BAE8-69E8020ECC61",
					"S_SESSION_TOKEN": "qtGoeVnNUZBPObnGfwfKh3kTPBsHqzJGmIpo45tg7BPrsGurND0U5P3ipKxlKGW5oVHxW7qTTFHBanH9kIisTgvIUNH865AL7caO9EwnMjZJhJDIJNadG3ZRrnwPQTnxKG7tkosfgOXhkZF6p6pbhmW5wsNjABYGG8KrUkTdNdzBIv2TpBkjb60fxm6AvPPikKkacmxJKU3JI6NAu0SYTt9FQv6HdHfMojjvCmAhQAfznTcF0ITMZu967D0LXS3hTYJUr3HTlau8CQ14BWYAegHQ6rTfpLHTryVvAD7GEcM53",
					"awguid": "01F0E7C9-9227-4A20-835D-238AF0662E87",
					"X-Requested-With": "XMLHttpRequest",
					"Origin": "https://portal.sabisu.co",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/SabisuPremise/Default.aspx",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		}];
		res = http.batch(req);
		sleep(10.82);
		req = [{
			"method": "post",
			"url": "https://portal.sabisu.co/sabisupremise/Flow.asmx/Logout",
			"body": "{\"GUID\":\"01F0E7C9-9227-4A20-835D-238AF0662E87\",\"Token\":\"19A9C8C5-8AA0-440D-BAE8-69E8020ECC61\"}",
			"params": {
				"cookies": {
					"ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
					"S_SESSION_TOKEN": "",
					"AWGUID": "",
					"AWTOK": "",
					"AWPUBLICIDENTIFIER": "",
					"I": "",
					"V": ""
				},
				"headers": {
					"Host": "portal.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/json; charset=utf-8",
					"X-Requested-With": "XMLHttpRequest",
					"Origin": "https://portal.sabisu.co",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/SabisuPremise/Default.aspx",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		},{
			"method": "post",
			"url": "https://portal.sabisu.co/sabisupremise/Flow.asmx/LogError",
			"body": "{\"ErrorText\":\"WS: /SabisuPremise/Default.aspx: \",\"Args\":\"{\\\"GUID\\\":\\\"01F0E7C9-9227-4A20-835D-238AF0662E87\\\",\\\"Token\\\":\\\"19A9C8C5-8AA0-440D-BAE8-69E8020ECC61\\\"}\",\"GUID\":\"UNABLE_TO_RETRIEVE_GUID\",\"Token\":\"UNABLE_TO_RETRIEVE_TOKEN\"}",
			"params": {
				"cookies": {
					"ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
					"S_SESSION_TOKEN": "",
					"AWGUID": "",
					"AWTOK": "",
					"AWPUBLICIDENTIFIER": "",
					"I": "",
					"V": ""
				},
				"headers": {
					"Host": "portal.sabisu.co",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"Content-Type": "application/json; charset=utf-8",
					"X-Requested-With": "XMLHttpRequest",
					"Origin": "https://portal.sabisu.co",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://portal.sabisu.co/SabisuPremise/Default.aspx",
					"Sec-Fetch-Dest": "empty",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "same-origin",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache"
				}
			}
		}];
		res = http.batch(req);
		// Random sleep between 20s and 40s
		sleep(Math.floor(Math.random()*20+20));
	});

}
