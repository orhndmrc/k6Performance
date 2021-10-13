import { group, check, sleep } from 'k6';
import http from 'k6/http';

// Version: 1.2
// Creator: Firefox
// Browser: Firefox



let login = function () {
    let data = ['a','b','c','d'];
    let res, redirectUrl, json;
    // Request #0
    res = http.post("https://" + __ENV.pena + "/Sabisu/api/Login/VerifyEmail",
        "{\"EmailAddress\":\"qae.perftest+1@aspentech.info\"}",
        {
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
                "Host": "" + __ENV.pena + "",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json; charset=utf-8",
                "Identifier": "null",
                "Token": "null",
                "X-Requested-With": "XMLHttpRequest",
                "Origin": "https://" + __ENV.pena + "",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://" + __ENV.pena + "/Sabisu/Login",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin",
                "Pragma": "no-cache",
                "Cache-Control": "no-cache"
            }
        }
    )
    check(res, { "email post call 200": (r) => r.status === 200 });
    // Request #1
    res = http.post("https://" + __ENV.pena + "/Sabisu/api/Login/Login",
        "{\"EmailAddress\":\"qae.perftest+1@aspentech.info\",\"Password\":\"QXNwZW4xMDA=¬~¬sab¬~¬\"}",
        {
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
                "Host": "" + __ENV.pena + "",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json; charset=utf-8",
                "Identifier": "null",
                "Token": "null",
                "X-Requested-With": "XMLHttpRequest",
                "Origin": "https://" + __ENV.pena + "",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://" + __ENV.pena + "/Sabisu/Login",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin",
                "Pragma": "no-cache",
                "Cache-Control": "no-cache"
            }
        }
    )
    let jsonRes = JSON.parse(res.body)
    data[0] = jsonRes.SessionToken
    //let sessionToken
    console.log(data[0])
    data[1] = jsonRes.GUID
    //let guid
    data[2] = jsonRes.PublicGUID
    //let publicGuID 

    data[3] = jsonRes.Token
    //let token

    check(res, { "password api call 200": (r) => r.status === 200 });
    // Request #2

    res = http.post("https://" + __ENV.pena + "/sabisupremise/Flow.asmx?op=FlowGetDefaultPremiseServer",
        "<?xml version='1.0' encoding='utf-8'?><soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'><soap:Body> <FlowGetDefaultPremiseServer xmlns='http://www.flowtools.co.uk/'><GUID><![CDATA[" + data[1] + "]]></GUID><Token><![CDATA[" + data[3] + "]]></Token></FlowGetDefaultPremiseServer></soap:Body></soap:Envelope>",
        {
            "cookies": {
                "ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
                "S_SESSION_TOKEN": "" + data[0] + "",
                "AWGUID": "" + data[1] + "",
                "AWTOK": "" + data[3] + "",
                "AWPUBLICIDENTIFIER": "" + data[2] + "",
                "I": "" + data[2] + "",
                "V": "" + data[3] + ""
            },
            "headers": {
                "Host": "" + __ENV.pena + "",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "*/*",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "SOAPAction": "http://www.flowtools.co.uk/FlowGetDefaultPremiseServer",
                "Content-Type": "text/xml",
                "Origin": "https://" + __ENV.pena + "",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://" + __ENV.pena + "/Sabisu/",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin",
                "Pragma": "no-cache",
                "Cache-Control": "no-cache"
            }
        }
    )
    if (!check(res, {
        "status equals 200": res => res.status.toString() === "200",
    })) {
        let checker = {}
        checker[`Error Code: ${res.error_code} - URL: ${res.url} - res: ${res.body} - Request: ${res.request.body}`] = () => { return false }
        check(res, checker)
    };

    return data;

}
 export {login}