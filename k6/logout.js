import { group, check, sleep } from 'k6';
import http from 'k6/http';

// Version: 1.2
// Creator: Firefox
// Browser: Firefox



let logout = function (sToken,pGuid,pPublicGuid,pToken) {
    let res;
     // Request #3
		res = http.get("https://"+__ENV.pena+"/SabisuPremise/api/SabisuPlatform/Initialise",
        {
            "cookies": {
            "ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
                "S_SESSION_TOKEN": ""+sToken+"",
                "AWGUID": ""+pGuid+"",
                "AWTOK": ""+pToken+"",
                "AWPUBLICIDENTIFIER": ""+pPublicGuid+"",
                "I": ""+pPublicGuid+"",
                "V": ""+pToken+""
        },
        "headers": {
                "Host": ""+__ENV.pena+"",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json; charset=utf-8",
                "Identifier": ""+pPublicGuid+"",
                "pToken": ""+pToken+"",
                "S_SESSION_TOKEN": ""+sToken+"",
                "awguid": ""+pGuid+"",
                "X-Requested-With": "XMLHttpRequest",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://"+__ENV.pena+"/SabisuPremise/Default.aspx",
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
    // Request #4
    res = http.get("https://"+__ENV.pena+"/SabisuPremise/api/Profile/GetAuthType",
        {
            "cookies": {
            "ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
                "S_SESSION_TOKEN": ""+sToken+"",
                "AWGUID": ""+pGuid+"",
                "AWTOK": ""+pToken+"",
                "AWPUBLICIDENTIFIER": ""+pPublicGuid+"",
                "I": ""+pPublicGuid+"",
                "V": ""+pToken+""
        },
        "headers": {
                "Host": ""+__ENV.pena+"",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json; charset=utf-8",
                "Identifier": ""+pPublicGuid+"",
                "pToken": ""+pToken+"",
                "S_SESSION_TOKEN": ""+sToken+"",
                "awguid": ""+pGuid+"",
                "X-Requested-With": "XMLHttpRequest",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://"+__ENV.pena+"/SabisuPremise/Default.aspx",
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
    // Request #5
    res = http.get("https://"+__ENV.pena+"/SabisuPremise/api/Walkthrough/GetTodo",
        {
            "cookies": {
            "ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
                "S_SESSION_TOKEN": ""+sToken+"",
                "AWGUID": ""+pGuid+"",
                "AWTOK": ""+pToken+"",
                "AWPUBLICIDENTIFIER": ""+pPublicGuid+"",
                "I": ""+pPublicGuid+"",
                "V": ""+pToken+""
        },
        "headers": {
                "Host": ""+__ENV.pena+"",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json; charset=utf-8",
                "Identifier": ""+pPublicGuid+"",
                "pToken": ""+pToken+"",
                "S_SESSION_TOKEN": ""+sToken+"",
                "awguid": ""+pGuid+"",
                "X-Requested-With": "XMLHttpRequest",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://"+__ENV.pena+"/SabisuPremise/Default.aspx",
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
    // Request #6
    res = http.post("https://"+__ENV.pena+"/SabisuPremise/api/ServerAnalytics/Get",
    "{\"ForEdit\":false,\"AddInternal\":true}",
        {
            "cookies": {
            "ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
                "S_SESSION_TOKEN": ""+sToken+"",
                "AWGUID": ""+pGuid+"",
                "AWTOK": ""+pToken+"",
                "AWPUBLICIDENTIFIER": ""+pPublicGuid+"",
                "I": ""+pPublicGuid+"",
                "V": ""+pToken+""
        },
        "headers": {
                "Host": ""+__ENV.pena+"",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json; charset=utf-8",
                "Identifier": ""+pPublicGuid+"",
                "pToken": ""+pToken+"",
                "S_SESSION_TOKEN": ""+sToken+"",
                "awguid": ""+pGuid+"",
                "X-Requested-With": "XMLHttpRequest",
                "Origin": "https://"+__ENV.pena+"",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://"+__ENV.pena+"/SabisuPremise/Default.aspx",
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
    // Request #7
    res = http.get("https://"+__ENV.pena+"/SabisuPremise/api/WidgetPage/GetAllTabs?WorkstreamID=58836",
        {
            "cookies": {
            "ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
                "S_SESSION_TOKEN": ""+sToken+"",
                "AWGUID": ""+pGuid+"",
                "AWTOK": ""+pToken+"",
                "AWPUBLICIDENTIFIER": ""+pPublicGuid+"",
                "I": ""+pPublicGuid+"",
                "V": ""+pToken+""
        },
        "headers": {
                "Host": ""+__ENV.pena+"",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json; charset=utf-8",
                "Identifier": ""+pPublicGuid+"",
                "pToken": ""+pToken+"",
                "S_SESSION_TOKEN": ""+sToken+"",
                "awguid": ""+pGuid+"",
                "X-Requested-With": "XMLHttpRequest",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://"+__ENV.pena+"/SabisuPremise/Default.aspx",
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
    // Request #8
    res = http.get("https://"+__ENV.pena+"/SabisuPremise/api/Chat/GetUserChatDetails",
        {
            "cookies": {
            "ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
                "S_SESSION_TOKEN": ""+sToken+"",
                "AWGUID": ""+pGuid+"",
                "AWTOK": ""+pToken+"",
                "AWPUBLICIDENTIFIER": ""+pPublicGuid+"",
                "I": ""+pPublicGuid+"",
                "V": ""+pToken+""
        },
        "headers": {
                "Host": ""+__ENV.pena+"",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json; charset=utf-8",
                "Identifier": ""+pPublicGuid+"",
                "pToken": ""+pToken+"",
                "S_SESSION_TOKEN": ""+sToken+"",
                "awguid": ""+pGuid+"",
                "X-Requested-With": "XMLHttpRequest",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://"+__ENV.pena+"/SabisuPremise/Default.aspx",
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
    // Request #9
    res = http.post("https://"+__ENV.pena+"/sabisupremise/flowpremise.asmx/IsPremiseAdmin",
    "{\"pPublicGuid\":\""+pPublicGuid+"\"}",
        {
            "cookies": {
            "ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
                "S_SESSION_TOKEN": ""+sToken+"",
                "AWGUID": ""+pGuid+"",
                "AWTOK": ""+pToken+"",
                "AWPUBLICIDENTIFIER": ""+pPublicGuid+"",
                "I": ""+pPublicGuid+"",
                "V": ""+pToken+""
        },
        "headers": {
                "Host": ""+__ENV.pena+"",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json; charset=utf-8",
                "X-Requested-With": "XMLHttpRequest",
                "Origin": "https://"+__ENV.pena+"",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://"+__ENV.pena+"/SabisuPremise/Default.aspx",
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
    // Request #10
    res = http.post("https://"+__ENV.pena+"/sabisupremise/Search.asmx/HasAvailableQueries",
    "{}",
        {
            "cookies": {
            "ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
                "S_SESSION_TOKEN": ""+sToken+"",
                "AWGUID": ""+pGuid+"",
                "AWTOK": ""+pToken+"",
                "AWPUBLICIDENTIFIER": ""+pPublicGuid+"",
                "I": ""+pPublicGuid+"",
                "V": ""+pToken+""
        },
        "headers": {
                "Host": ""+__ENV.pena+"",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json; charset=utf-8",
                "X-Requested-With": "XMLHttpRequest",
                "Origin": "https://"+__ENV.pena+"",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://"+__ENV.pena+"/SabisuPremise/Default.aspx",
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
    // Request #11
    res = http.options("https://api.sabisu.co/api/Notification/GetCount",
    "",
        {
            "headers": {
                "Host": "api.sabisu.co",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "*/*",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Access-Control-Request-Method": "GET",
                "Access-Control-Request-Headers": "awguid,content-type,identifier,s_session_token,pToken",
                "Referer": "https://"+__ENV.pena+"/",
                "Origin": "https://"+__ENV.pena+"",
                "DNT": "1",
                "Connection": "keep-alive",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-site",
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
    // Request #12
    res = http.options("https://api.sabisu.co/api/Unit/GetMyUnit",
    "",
        {
            "headers": {
                "Host": "api.sabisu.co",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "*/*",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Access-Control-Request-Method": "GET",
                "Access-Control-Request-Headers": "awguid,content-type,identifier,s_session_token,pToken",
                "Referer": "https://"+__ENV.pena+"/",
                "Origin": "https://"+__ENV.pena+"",
                "DNT": "1",
                "Connection": "keep-alive",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-site",
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
    // Request #13
    res = http.post("https://"+__ENV.pena+"/sabisupremise/Flow.asmx/SetUserSetting",
    "{\"SettingName\":\"WidgetCurrentPageID\",\"SettingValue\":\"1763114\",\"pGuid\":\""+pGuid+"\",\"pToken\":\""+pToken+"\"}",
        {
            "cookies": {
            "ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
                "S_SESSION_TOKEN": ""+sToken+"",
                "AWGUID": ""+pGuid+"",
                "AWTOK": ""+pToken+"",
                "AWPUBLICIDENTIFIER": ""+pPublicGuid+"",
                "I": ""+pPublicGuid+"",
                "V": ""+pToken+""
        },
        "headers": {
                "Host": ""+__ENV.pena+"",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json; charset=utf-8",
                "X-Requested-With": "XMLHttpRequest",
                "Origin": "https://"+__ENV.pena+"",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://"+__ENV.pena+"/SabisuPremise/Default.aspx",
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
    // Request #14
    res = http.get("https://"+__ENV.pena+"/SabisuPremise/api/WidgetPage/GetPageWidgets?PageID=1763114&ClientData%5Bglobal%5D%5B0%5D%5BKey%5D=global&ClientData%5Bpages%5D%5B0%5D%5BKey%5D=1763114",
        {
            "cookies": {
            "ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
                "S_SESSION_TOKEN": ""+sToken+"",
                "AWGUID": ""+pGuid+"",
                "AWTOK": ""+pToken+"",
                "AWPUBLICIDENTIFIER": ""+pPublicGuid+"",
                "I": ""+pPublicGuid+"",
                "V": ""+pToken+""
        },
        "headers": {
                "Host": ""+__ENV.pena+"",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json; charset=utf-8",
                "Identifier": ""+pPublicGuid+"",
                "pToken": ""+pToken+"",
                "S_SESSION_TOKEN": ""+sToken+"",
                "awguid": ""+pGuid+"",
                "X-Requested-With": "XMLHttpRequest",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://"+__ENV.pena+"/SabisuPremise/Default.aspx",
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
    // Request #15
    res = http.post("https://"+__ENV.pena+"/sabisupremise/Search.asmx/GetAvailableQueries",
    "{\"pPublicGuid\":\""+pPublicGuid+"\",\"pToken\":\""+pToken+"\"}",
        {
            "cookies": {
            "ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
                "S_SESSION_TOKEN": ""+sToken+"",
                "AWGUID": ""+pGuid+"",
                "AWTOK": ""+pToken+"",
                "AWPUBLICIDENTIFIER": ""+pPublicGuid+"",
                "I": ""+pPublicGuid+"",
                "V": ""+pToken+""
        },
        "headers": {
                "Host": ""+__ENV.pena+"",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json; charset=utf-8",
                "X-Requested-With": "XMLHttpRequest",
                "Origin": "https://"+__ENV.pena+"",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://"+__ENV.pena+"/SabisuPremise/Default.aspx",
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
    // Request #16
    res = http.post("https://"+__ENV.pena+"/SabisuPremise/api/Widget/WidgetGetWidgetContent",
    "{\"pGuid\":\""+pGuid+"\",\"pToken\":\""+pToken+"\",\"WidgetPageInstanceIDList\":\"14393382;14393383;\",\"ClientData\":{\"global\":[{\"Key\":\"global\",\"Values\":[]}],\"pages\":[{\"Key\":\"1763114\",\"Values\":[]}],\"widgets\":[{\"Key\":\"14393382\",\"Values\":[]},{\"Key\":\"14393383\",\"Values\":[]}]},\"PageID\":\"1763114\",\"IgnoreUserSpecific\":false}",
        {
            "cookies": {
            "ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
                "S_SESSION_TOKEN": ""+sToken+"",
                "AWGUID": ""+pGuid+"",
                "AWTOK": ""+pToken+"",
                "AWPUBLICIDENTIFIER": ""+pPublicGuid+"",
                "I": ""+pPublicGuid+"",
                "V": ""+pToken+""
        },
        "headers": {
                "Host": ""+__ENV.pena+"",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json; charset=utf-8",
                "Identifier": ""+pPublicGuid+"",
                "pToken": ""+pToken+"",
                "S_SESSION_TOKEN": ""+sToken+"",
                "awguid": ""+pGuid+"",
                "X-Requested-With": "XMLHttpRequest",
                "Origin": "https://"+__ENV.pena+"",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://"+__ENV.pena+"/SabisuPremise/Default.aspx",
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
    // Request #17
    res = http.get("https://api.sabisu.co/api/Notification/GetCount",
        {
            "headers": {
                "Host": "api.sabisu.co",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json; charset=utf-8",
                "Identifier": ""+pPublicGuid+"",
                "pToken": ""+pToken+"",
                "S_SESSION_TOKEN": ""+sToken+"",
                "awguid": ""+pGuid+"",
                "Origin": "https://"+__ENV.pena+"",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://"+__ENV.pena+"/",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-site",
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
    // Request #18
    res = http.get("https://api.sabisu.co/api/Unit/GetMyUnit",
        {
            "headers": {
                "Host": "api.sabisu.co",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json; charset=utf-8",
                "Identifier": ""+pPublicGuid+"",
                "pToken": ""+pToken+"",
                "S_SESSION_TOKEN": ""+sToken+"",
                "awguid": ""+pGuid+"",
                "Origin": "https://"+__ENV.pena+"",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://"+__ENV.pena+"/",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-site",
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
    // Request #19
    res = http.get("https://push2.sabisu.co/SignalR/hubs/negotiate?clientProtocol=1.5&I="+pPublicGuid+"&V="+pToken+"&AppIdentifications=&connectionData=%5B%7B%22name%22%3A%22pushhub%22%7D%5D&_=1633112464197",
        {
            "headers": {
                "Host": "push2.sabisu.co",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "text/plain, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Origin": "https://"+__ENV.pena+"",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://"+__ENV.pena+"/",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-site",
                "Pragma": "no-cache",
                "Cache-Control": "no-cache",
                "TE": "trailers"
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
    
    // Request #21
    res = http.post("https://"+__ENV.pena+"/sabisupremise/Flow.asmx/SignalMe",
    "{\"pGuid\":\""+pGuid+"\",\"pToken\":\""+pToken+"\"}",
        {
            "cookies": {
            "ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
                "S_SESSION_TOKEN": ""+sToken+"",
                "AWGUID": ""+pGuid+"",
                "AWTOK": ""+pToken+"",
                "AWPUBLICIDENTIFIER": ""+pPublicGuid+"",
                "I": ""+pPublicGuid+"",
                "V": ""+pToken+""
        },
        "headers": {
                "Host": ""+__ENV.pena+"",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json; charset=utf-8",
                "X-Requested-With": "XMLHttpRequest",
                "Origin": "https://"+__ENV.pena+"",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://"+__ENV.pena+"/SabisuPremise/Default.aspx",
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
    // Request #22
    res = http.options("https://api.sabisu.co/api/Log/LogMany",
    "",
        {
            "headers": {
                "Host": "api.sabisu.co",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "*/*",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "awguid,content-type,identifier,s_session_token,pToken",
                "Referer": "https://"+__ENV.pena+"/",
                "Origin": "https://"+__ENV.pena+"",
                "DNT": "1",
                "Connection": "keep-alive",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-site",
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
    // Request #23
    res = http.post("https://api.sabisu.co/api/Log/LogMany",
    "[{\"Type\":\"Error\",\"Message\":\"An error occurred in a widget\",\"Information\":\"{\\\"location\\\":\\\"error_from_server\\\",\\\"sabisuInformation\\\":[{\\\"ObjectType\\\":\\\"Sabisu Data Object\\\",\\\"ObjectIdentifier\\\":\\\"18e26882-78c4-4fff-94ed-fe1113ab449c\\\",\\\"Type\\\":\\\"DataRetrievalPacket\\\",\\\"Created\\\":\\\"2021-10-01T18:21:01.0413587+00:00\\\",\\\"Metadata\\\":{\\\"WidgetPageInstanceID\\\":14393383}},{\\\"ObjectType\\\":\\\"Pipeline\\\",\\\"ObjectIdentifier\\\":\\\"ff230bc3-e875-4c4f-b76f-0cd349104526\\\",\\\"Type\\\":\\\"DataRetrievalPacket\\\",\\\"Created\\\":\\\"2021-10-01T18:21:07.0501045+00:00\\\",\\\"Metadata\\\":{\\\"WidgetPageInstanceID\\\":14393383}},{\\\"ObjectType\\\":\\\"Sabisu Data Object\\\",\\\"ObjectIdentifier\\\":\\\"0e1d4b9a-e2de-4a8e-a004-a8c2e2032918\\\",\\\"Type\\\":\\\"DataRetrievalPacket\\\",\\\"Created\\\":\\\"2021-10-01T18:21:07.48195+00:00\\\",\\\"Metadata\\\":{\\\"WidgetPageInstanceID\\\":14393383}},{\\\"ObjectType\\\":\\\"Sabisu Data Object\\\",\\\"ObjectIdentifier\\\":\\\"a8934d77-5ddd-4d0e-8f73-e95023e25693\\\",\\\"Type\\\":\\\"DataRetrievalPacket\\\",\\\"Created\\\":\\\"2021-10-01T18:21:07.4989533+00:00\\\",\\\"Metadata\\\":{\\\"WidgetPageInstanceID\\\":14393383}},{\\\"ObjectType\\\":\\\"Sabisu Data Upload\\\",\\\"ObjectIdentifier\\\":\\\"780ea2e2-5899-4fc3-b939-d9dbad13b4ac\\\",\\\"Type\\\":\\\"DataRetrievalPacket\\\",\\\"Created\\\":\\\"2021-10-01T18:21:07.529673+00:00\\\",\\\"Metadata\\\":{\\\"WidgetPageInstanceID\\\":14393383}},{\\\"ObjectType\\\":\\\"Sabisu Data Upload\\\",\\\"ObjectIdentifier\\\":\\\"1e72e8f1-324f-48cb-9edd-4fc022db5199\\\",\\\"Type\\\":\\\"DataRetrievalPacket\\\",\\\"Created\\\":\\\"2021-10-01T18:21:07.5300832+00:00\\\",\\\"Metadata\\\":{\\\"WidgetPageInstanceID\\\":14393383}},{\\\"Error\\\":{\\\"ClassName\\\":\\\"System.Exception\\\",\\\"Message\\\":\\\"HttpRequestException: System.Net.Http.HttpRequestException: res status code does not indicate success: 500 (Internal Server Error).\\\\r\\\\n   at System.Net.Http.HttpresMessage.EnsureSuccessStatusCode()\\\\r\\\\n   at Sabisu.Web.WebAPI.WebAPIHelper.<PerformWithHttpClient>d__23`1.MoveNext() \\\\r\\\\nResult: {\\\\\\\"Message\\\\\\\":\\\\\\\"An error has occurred.\\\\\\\"} \\\\r\\\\nres: StatusCode: 500, ReasonPhrase: 'Internal Server Error', Version: 1.1, Content: System.Net.Http.StreamContent, Headers:\\\\r\\\\n{\\\\r\\\\n  Connection: keep-alive\\\\r\\\\n  Pragma: no-cache\\\\r\\\\n  sabisu_information: [{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Pipeline\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"ff230bc3-e875-4c4f-b76f-0cd349104526\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.0501045+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}},{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Sabisu Data Object\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"0e1d4b9a-e2de-4a8e-a004-a8c2e2032918\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.48195+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}},{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Sabisu Data Object\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"a8934d77-5ddd-4d0e-8f73-e95023e25693\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.4989533+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}},{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Sabisu Data Upload\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"780ea2e2-5899-4fc3-b939-d9dbad13b4ac\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.529673+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}},{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Sabisu Data Upload\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"1e72e8f1-324f-48cb-9edd-4fc022db5199\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.5300832+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}}]\\\\r\\\\n  sabisu_metrics: TOTAL=2986.3903; REQUEST_IDENTIFIER=3e1988c6-5ee7-4daa-995c-027a0ec6a6cf; SqlServer_datasource_getdataset=1867.6689 (count: 5), webapihelper_request=637.9913 (count: 5), webapi_connectivity_parse=241.5556 (count: 2), copying_dataset=118.9699 (count: 3), acquisition_query_template_retrieval=40.9276 (count: 3), getting_pipeline=31.5369, webapi_connectivity_call=21.9689 (count: 2), DataGetter_ExpandSDC=14.6164 (count: 2), acquisition_query_replace=4.4717 (count: 3), TaskObjectCache_WaitingForCache=2.2658, data_request=1.6663 (count: 2), evaluating_acquisition=1.4932, parsing_chain=0.3016, request=0.2964, SqlServer_datasource_connecting=0.2359 (count: 5), evaluating_pipeline=0.1871, pipeline_acquisitions=0.0972, WebAPI_datasource_getconnection=0.0651 (count: 2), SqlServer_datasource_parse_data_set=0.0353 (count: 5), WebAPI_datasource_getadapter=0.0242 (count: 2), acquisition_query_parse_dates=0.0176 (count: 3), WebAPI_datasource_parse_data_set=0.0134 (count: 2), pipeline_preprocess=0.0079, pipeline_evaluate=0.0065, running_pipeline=0.0018, prune_acquisitions=0.0004; REQUEST_URL=http://sabisupipeline-elasticbeanstalk.sabisu.co/api/Pipeline/Evaluate/;\\\\r\\\\n  sabisu_metrics: (POST https://api.sabisu.co/api/Validator/TranslateSessionTokenToCredentials : TOTAL=24.9119; REQUEST_IDENTIFIER=53b04122-c4da-435e-90a7-73fe7a97d074; request=24.9119; REQUEST_URL=https://api.sabisu.co/api/Validator/TranslateSessionTokenToCredentials;)\\\\r\\\\n  sabisu_metrics: (POST https://datauploads.sabisu.co/api/Reporting/GetData/ : TOTAL=84.5222; GetAsync_FetchVersions=35.5839, GetAsync_GetVersionDescriptors=25.4558, SqlServer_datasource_getdataset=22.3131, request=0.5199, Unzipping=0.3509, Parse CSV=0.2364, GetAsync_ProcessVersions=0.0386, GetAsync_ReconcileTableColumnTypes=0.0153, ApplyDataSchema=0.0037, GetAsync_MergeResults=0.0037, GetAsync_ParseDecompDataResult=0.0009)\\\\r\\\\n  sabisu_metrics: (POST https://api.sabisu.co/api/Validator/TranslateCredentialsToSessionToken : TOTAL=23.5493; REQUEST_IDENTIFIER=479d9e8b-da75-4ea2-97de-c1cf48b13137; request=22.7962, SqlServer_datasource_getdataset=0.6934, SqlServer_datasource_connecting=0.0539, SqlServer_datasource_parse_data_set=0.0058; REQUEST_URL=https://api.sabisu.co/api/Validator/TranslateCredentialsToSessionToken;)\\\\r\\\\n  sabisu_metrics: (POST https://datauploads.sabisu.co/api/Reporting/GetData/ : TOTAL=430.7137; ApplyDataSchema=171.1936, Parse CSV=155.9842, GetAsync_FetchVersions=42.0612, GetAsync_GetVersionDescriptors=30.602, SqlServer_datasource_getdataset=19.1899, Unzipping=10.2345, request=1.3819, GetAsync_ProcessVersions=0.0377, GetAsync_ReconcileTableColumnTypes=0.0223, GetAsync_MergeResults=0.0051, GetAsync_ParseDecompDataResult=0.0013)\\\\r\\\\n  sabisu_metrics: (POST https://api.sabisu.co/api/Validator/IsAuthorized : TOTAL=1.1584; REQUEST_IDENTIFIER=e91d4078-51e9-4e15-833c-555b22f9eb06; SqlServer_datasource_getdataset=0.7163, request=0.3899, SqlServer_datasource_connecting=0.0471, SqlServer_datasource_parse_data_set=0.0051; REQUEST_URL=https://api.sabisu.co/api/Validator/IsAuthorized;)\\\\r\\\\n  Cache-Control: no-cache\\\\r\\\\n  Date: Fri, 01 Oct 2021 18:21:08 GMT\\\\r\\\\n  Server: Microsoft-IIS/10.0\\\\r\\\\n  X-AspNet-Version: 4.0.30319\\\\r\\\\n  X-Powered-By: ASP.NET\\\\r\\\\n  Content-Length: 36\\\\r\\\\n  Content-Type: application/json; charset=utf-8\\\\r\\\\n  Expires: -1\\\\r\\\\n}\\\",\\\"Data\\\":null,\\\"InnerException\\\":{\\\"ClassName\\\":\\\"System.Net.Http.HttpRequestException\\\",\\\"Message\\\":\\\"res status code does not indicate success: 500 (Internal Server Error).\\\",\\\"Data\\\":null,\\\"InnerException\\\":null,\\\"HelpURL\\\":null,\\\"StackTraceString\\\":\\\"   at System.Net.Http.HttpresMessage.EnsureSuccessStatusCode()\\\\r\\\\n   at Sabisu.Web.WebAPI.WebAPIHelper.<PerformWithHttpClient>d__23`1.MoveNext()\\\",\\\"RemoteStackTraceString\\\":null,\\\"RemoteStackIndex\\\":0,\\\"ExceptionMethod\\\":\\\"8\\\\nEnsureSuccessStatusCode\\\\nSystem.Net.Http, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a\\\\nSystem.Net.Http.HttpresMessage\\\\nSystem.Net.Http.HttpresMessage EnsureSuccessStatusCode()\\\",\\\"HResult\\\":-2146233088,\\\"Source\\\":\\\"System.Net.Http\\\",\\\"WatsonBuckets\\\":null,\\\"SafeSerializationManager\\\":{\\\"m_serializedStates\\\":[{}]},\\\"CLR_SafeSerializationManager_RealType\\\":\\\"System.Net.Http.HttpRequestException, System.Net.Http, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a\\\"},\\\"HelpURL\\\":null,\\\"StackTraceString\\\":\\\"   at SabisuPremise.Models.Widget.WidgetContentBuilder.WidgetGetWidgetContent_GenerateWidget(XmlNode nodWidget, WidgetPageInstance parsedWidgetPageInstance, MetaData metaData, TimeMetricCollection widgetGetWidgetContentMetrics, pGuid metricsGuid)\\\",\\\"RemoteStackTraceString\\\":null,\\\"RemoteStackIndex\\\":0,\\\"ExceptionMethod\\\":\\\"8\\\\nWidgetGetWidgetContent_GenerateWidget\\\\nSabisuPremise, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null\\\\nSabisuPremise.Models.Widget.WidgetContentBuilder\\\\nSabisuPremise.Old_App_Code.Classes.Widget.ConstructedWidget WidgetGetWidgetContent_GenerateWidget(System.Xml.XmlNode, Sabisu.Widget.PageInstance.WidgetPageInstance, Sabisu.Widget.MetaData.MetaData, Sabisu.Metrics.TimeMetricCollection, System.pGuid)\\\",\\\"HResult\\\":-2146233088,\\\"Source\\\":\\\"SabisuPremise\\\",\\\"WatsonBuckets\\\":null},\\\"Code\\\":\\\"DATASOURCE_DATA_RETRIEVAL_FAILED\\\",\\\"IsFatal\\\":true,\\\"Message\\\":\\\"An error occurred while accessing the source data.\\\",\\\"ContactIdentifiers\\\":[],\\\"Type\\\":\\\"ErrorPacket\\\",\\\"Created\\\":\\\"2021-10-01T18:21:04.1663313+00:00\\\",\\\"Metadata\\\":{\\\"WidgetPageInstanceID\\\":14393383,\\\"ErrorMessage\\\":\\\"HttpRequestException: System.Net.Http.HttpRequestException: res status code does not indicate success: 500 (Internal Server Error).\\\\r\\\\n   at System.Net.Http.HttpresMessage.EnsureSuccessStatusCode()\\\\r\\\\n   at Sabisu.Web.WebAPI.WebAPIHelper.<PerformWithHttpClient>d__23`1.MoveNext() \\\\r\\\\nResult: {\\\\\\\"Message\\\\\\\":\\\\\\\"An error has occurred.\\\\\\\"} \\\\r\\\\nres: StatusCode: 500, ReasonPhrase: 'Internal Server Error', Version: 1.1, Content: System.Net.Http.StreamContent, Headers:\\\\r\\\\n{\\\\r\\\\n  Connection: keep-alive\\\\r\\\\n  Pragma: no-cache\\\\r\\\\n  sabisu_information: [{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Pipeline\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"ff230bc3-e875-4c4f-b76f-0cd349104526\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.0501045+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}},{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Sabisu Data Object\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"0e1d4b9a-e2de-4a8e-a004-a8c2e2032918\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.48195+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}},{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Sabisu Data Object\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"a8934d77-5ddd-4d0e-8f73-e95023e25693\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.4989533+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}},{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Sabisu Data Upload\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"780ea2e2-5899-4fc3-b939-d9dbad13b4ac\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.529673+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}},{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Sabisu Data Upload\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"1e72e8f1-324f-48cb-9edd-4fc022db5199\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.5300832+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}}]\\\\r\\\\n  sabisu_metrics: TOTAL=2986.3903; REQUEST_IDENTIFIER=3e1988c6-5ee7-4daa-995c-027a0ec6a6cf; SqlServer_datasource_getdataset=1867.6689 (count: 5), webapihelper_request=637.9913 (count: 5), webapi_connectivity_parse=241.5556 (count: 2), copying_dataset=118.9699 (count: 3), acquisition_query_template_retrieval=40.9276 (count: 3), getting_pipeline=31.5369, webapi_connectivity_call=21.9689 (count: 2), DataGetter_ExpandSDC=14.6164 (count: 2), acquisition_query_replace=4.4717 (count: 3), TaskObjectCache_WaitingForCache=2.2658, data_request=1.6663 (count: 2), evaluating_acquisition=1.4932, parsing_chain=0.3016, request=0.2964, SqlServer_datasource_connecting=0.2359 (count: 5), evaluating_pipeline=0.1871, pipeline_acquisitions=0.0972, WebAPI_datasource_getconnection=0.0651 (count: 2), SqlServer_datasource_parse_data_set=0.0353 (count: 5), WebAPI_datasource_getadapter=0.0242 (count: 2), acquisition_query_parse_dates=0.0176 (count: 3), WebAPI_datasource_parse_data_set=0.0134 (count: 2), pipeline_preprocess=0.0079, pipeline_evaluate=0.0065, running_pipeline=0.0018, prune_acquisitions=0.0004; REQUEST_URL=http://sabisupipeline-elasticbeanstalk.sabisu.co/api/Pipeline/Evaluate/;\\\\r\\\\n  sabisu_metrics: (POST https://api.sabisu.co/api/Validator/TranslateSessionTokenToCredentials : TOTAL=24.9119; REQUEST_IDENTIFIER=53b04122-c4da-435e-90a7-73fe7a97d074; request=24.9119; REQUEST_URL=https://api.sabisu.co/api/Validator/TranslateSessionTokenToCredentials;)\\\\r\\\\n  sabisu_metrics: (POST https://datauploads.sabisu.co/api/Reporting/GetData/ : TOTAL=84.5222; GetAsync_FetchVersions=35.5839, GetAsync_GetVersionDescriptors=25.4558, SqlServer_datasource_getdataset=22.3131, request=0.5199, Unzipping=0.3509, Parse CSV=0.2364, GetAsync_ProcessVersions=0.0386, GetAsync_ReconcileTableColumnTypes=0.0153, ApplyDataSchema=0.0037, GetAsync_MergeResults=0.0037, GetAsync_ParseDecompDataResult=0.0009)\\\\r\\\\n  sabisu_metrics: (POST https://api.sabisu.co/api/Validator/TranslateCredentialsToSessionToken : TOTAL=23.5493; REQUEST_IDENTIFIER=479d9e8b-da75-4ea2-97de-c1cf48b13137; request=22.7962, SqlServer_datasource_getdataset=0.6934, SqlServer_datasource_connecting=0.0539, SqlServer_datasource_parse_data_set=0.0058; REQUEST_URL=https://api.sabisu.co/api/Validator/TranslateCredentialsToSessionToken;)\\\\r\\\\n  sabisu_metrics: (POST https://datauploads.sabisu.co/api/Reporting/GetData/ : TOTAL=430.7137; ApplyDataSchema=171.1936, Parse CSV=155.9842, GetAsync_FetchVersions=42.0612, GetAsync_GetVersionDescriptors=30.602, SqlServer_datasource_getdataset=19.1899, Unzipping=10.2345, request=1.3819, GetAsync_ProcessVersions=0.0377, GetAsync_ReconcileTableColumnTypes=0.0223, GetAsync_MergeResults=0.0051, GetAsync_ParseDecompDataResult=0.0013)\\\\r\\\\n  sabisu_metrics: (POST https://api.sabisu.co/api/Validator/IsAuthorized : TOTAL=1.1584; REQUEST_IDENTIFIER=e91d4078-51e9-4e15-833c-555b22f9eb06; SqlServer_datasource_getdataset=0.7163, request=0.3899, SqlServer_datasource_connecting=0.0471, SqlServer_datasource_parse_data_set=0.0051; REQUEST_URL=https://api.sabisu.co/api/Validator/IsAuthorized;)\\\\r\\\\n  Cache-Control: no-cache\\\\r\\\\n  Date: Fri, 01 Oct 2021 18:21:08 GMT\\\\r\\\\n  Server: Microsoft-IIS/10.0\\\\r\\\\n  X-AspNet-Version: 4.0.30319\\\\r\\\\n  X-Powered-By: ASP.NET\\\\r\\\\n  Content-Length: 36\\\\r\\\\n  Content-Type: application/json; charset=utf-8\\\\r\\\\n  Expires: -1\\\\r\\\\n}\\\",\\\"DataSourceType\\\":\\\"WebAPI\\\",\\\"ConnectionInformation\\\":\\\"server:https://sabisupipeline-elasticbeanstalk.sabisu.co/;;identifier:"+pPublicGuid+";pToken:"+pToken+";;request_identifier:d3a814e6-0b97-4ea5-9712-abc2b8dd53da;\\\"}},{\\\"Data\\\":\\\"Errors:System.Exception: HttpRequestException: System.Net.Http.HttpRequestException: res status code does not indicate success: 500 (Internal Server Error).\\\\r\\\\n   at System.Net.Http.HttpresMessage.EnsureSuccessStatusCode()\\\\r\\\\n   at Sabisu.Web.WebAPI.WebAPIHelper.<PerformWithHttpClient>d__23`1.MoveNext() \\\\r\\\\nResult: {\\\\\\\"Message\\\\\\\":\\\\\\\"An error has occurred.\\\\\\\"} \\\\r\\\\nres: StatusCode: 500, ReasonPhrase: 'Internal Server Error', Version: 1.1, Content: System.Net.Http.StreamContent, Headers:\\\\r\\\\n{\\\\r\\\\n  Connection: keep-alive\\\\r\\\\n  Pragma: no-cache\\\\r\\\\n  sabisu_information: [{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Pipeline\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"ff230bc3-e875-4c4f-b76f-0cd349104526\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.0501045+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}},{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Sabisu Data Object\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"0e1d4b9a-e2de-4a8e-a004-a8c2e2032918\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.48195+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}},{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Sabisu Data Object\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"a8934d77-5ddd-4d0e-8f73-e95023e25693\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.4989533+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}},{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Sabisu Data Upload\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"780ea2e2-5899-4fc3-b939-d9dbad13b4ac\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.529673+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}},{\\\\\\\"$type\\\\\\\":\\\\\\\"Sabisu.CallInformation.DataRetrievalPacket, Sabisu\\\\\\\",\\\\\\\"ObjectType\\\\\\\":\\\\\\\"Sabisu Data Upload\\\\\\\",\\\\\\\"ObjectIdentifier\\\\\\\":\\\\\\\"1e72e8f1-324f-48cb-9edd-4fc022db5199\\\\\\\",\\\\\\\"Type\\\\\\\":\\\\\\\"DataRetrievalPacket\\\\\\\",\\\\\\\"Created\\\\\\\":\\\\\\\"2021-10-01T18:21:07.5300832+00:00\\\\\\\",\\\\\\\"Metadata\\\\\\\":{}}]\\\\r\\\\n  sabisu_metrics: TOTAL=2986.3903; REQUEST_IDENTIFIER=3e1988c6-5ee7-4daa-995c-027a0ec6a6cf; SqlServer_datasource_getdataset=1867.6689 (count: 5), webapihelper_request=637.9913 (count: 5), webapi_connectivity_parse=241.5556 (count: 2), copying_dataset=118.9699 (count: 3), acquisition_query_template_retrieval=40.9276 (count: 3), getting_pipeline=31.5369, webapi_connectivity_call=21.9689 (count: 2), DataGetter_ExpandSDC=14.6164 (count: 2), acquisition_query_replace=4.4717 (count: 3), TaskObjectCache_WaitingForCache=2.2658, data_request=1.6663 (count: 2), evaluating_acquisition=1.4932, parsing_chain=0.3016, request=0.2964, SqlServer_datasource_connecting=0.2359 (count: 5), evaluating_pipeline=0.1871, pipeline_acquisitions=0.0972, WebAPI_datasource_getconnection=0.0651 (count: 2), SqlServer_datasource_parse_data_set=0.0353 (count: 5), WebAPI_datasource_getadapter=0.0242 (count: 2), acquisition_query_parse_dates=0.0176 (count: 3), WebAPI_datasource_parse_data_set=0.0134 (count: 2), pipeline_preprocess=0.0079, pipeline_evaluate=0.0065, running_pipeline=0.0018, prune_acquisitions=0.0004; REQUEST_URL=http://sabisupipeline-elasticbeanstalk.sabisu.co/api/Pipeline/Evaluate/;\\\\r\\\\n  sabisu_metrics: (POST https://api.sabisu.co/api/Validator/TranslateSessionTokenToCredentials : TOTAL=24.9119; REQUEST_IDENTIFIER=53b04122-c4da-435e-90a7-73fe7a97d074; request=24.9119; REQUEST_URL=https://api.sabisu.co/api/Validator/TranslateSessionTokenToCredentials;)\\\\r\\\\n  sabisu_metrics: (POST https://datauploads.sabisu.co/api/Reporting/GetData/ : TOTAL=84.5222; GetAsync_FetchVersions=35.5839, GetAsync_GetVersionDescriptors=25.4558, SqlServer_datasource_getdataset=22.3131, request=0.5199, Unzipping=0.3509, Parse CSV=0.2364, GetAsync_ProcessVersions=0.0386, GetAsync_ReconcileTableColumnTypes=0.0153, ApplyDataSchema=0.0037, GetAsync_MergeResults=0.0037, GetAsync_ParseDecompDataResult=0.0009)\\\\r\\\\n  sabisu_metrics: (POST https://api.sabisu.co/api/Validator/TranslateCredentialsToSessionToken : TOTAL=23.5493; REQUEST_IDENTIFIER=479d9e8b-da75-4ea2-97de-c1cf48b13137; request=22.7962, SqlServer_datasource_getdataset=0.6934, SqlServer_datasource_connecting=0.0539, SqlServer_datasource_parse_data_set=0.0058; REQUEST_URL=https://api.sabisu.co/api/Validator/TranslateCredentialsToSessionToken;)\\\\r\\\\n  sabisu_metrics: (POST https://datauploads.sabisu.co/api/Reporting/GetData/ : TOTAL=430.7137; ApplyDataSchema=171.1936, Parse CSV=155.9842, GetAsync_FetchVersions=42.0612, GetAsync_GetVersionDescriptors=30.602, SqlServer_datasource_getdataset=19.1899, Unzipping=10.2345, request=1.3819, GetAsync_ProcessVersions=0.0377, GetAsync_ReconcileTableColumnTypes=0.0223, GetAsync_MergeResults=0.0051, GetAsync_ParseDecompDataResult=0.0013)\\\\r\\\\n  sabisu_metrics: (POST https://api.sabisu.co/api/Validator/IsAuthorized : TOTAL=1.1584; REQUEST_IDENTIFIER=e91d4078-51e9-4e15-833c-555b22f9eb06; SqlServer_datasource_getdataset=0.7163, request=0.3899, SqlServer_datasource_connecting=0.0471, SqlServer_datasource_parse_data_set=0.0051; REQUEST_URL=https://api.sabisu.co/api/Validator/IsAuthorized;)\\\\r\\\\n  Cache-Control: no-cache\\\\r\\\\n  Date: Fri, 01 Oct 2021 18:21:08 GMT\\\\r\\\\n  Server: Microsoft-IIS/10.0\\\\r\\\\n  X-AspNet-Version: 4.0.30319\\\\r\\\\n  X-Powered-By: ASP.NET\\\\r\\\\n  Content-Length: 36\\\\r\\\\n  Content-Type: application/json; charset=utf-8\\\\r\\\\n  Expires: -1\\\\r\\\\n} ---> System.Net.Http.HttpRequestException: res status code does not indicate success: 500 (Internal Server Error).\\\\r\\\\n   at System.Net.Http.HttpresMessage.EnsureSuccessStatusCode()\\\\r\\\\n   at Sabisu.Web.WebAPI.WebAPIHelper.<PerformWithHttpClient>d__23`1.MoveNext()\\\\r\\\\n   --- End of inner exception stack trace ---\\\\r\\\\n   at Sabisu.Web.WebAPI.WebAPIHelper.<PerformWithHttpClient>d__23`1.MoveNext()\\\\r\\\\n--- End of stack trace from previous location where exception was thrown ---\\\\r\\\\n   at System.Runtime.CompilerServices.TaskAwaiter.ThrowForNonSuccess(Task task)\\\\r\\\\n   at System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)\\\\r\\\\n   at System.Runtime.CompilerServices.TaskAwaiter`1.GetResult()\\\\r\\\\n   at Sabisu.Web.WebAPI.WebAPIHelper.<CallAsync>d__22`2.MoveNext()\\\\r\\\\n--- End of stack trace from previous location where exception was thrown ---\\\\r\\\\n   at System.Runtime.CompilerServices.TaskAwaiter.ThrowForNonSuccess(Task task)\\\\r\\\\n   at System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)\\\\r\\\\n   at System.Runtime.CompilerServices.TaskAwaiter`1.GetResult()\\\\r\\\\n   at Sabisu.NET45.AsyncHelpers.<Handle>d__2`1.MoveNext()\\\\r\\\\n--- End of stack trace from previous location where exception was thrown ---\\\\r\\\\n   at System.Runtime.CompilerServices.TaskAwaiter.ThrowForNonSuccess(Task task)\\\\r\\\\n   at System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)\\\\r\\\\n   at System.Runtime.CompilerServices.TaskAwaiter`1.GetResult()\\\\r\\\\n   at Sabisu.NET45.AsyncHelpers.<>c__DisplayClass1_0`1.<<RunSync>b__0>d.MoveNext()\\\\r\\\\n--- End of stack trace from previous location where exception was thrown ---\\\\r\\\\n   at System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()\\\\r\\\\n   at Sabisu.NET45.AsyncHelpers.ExclusiveSynchronizationContext.BeginMessageLoop()\\\\r\\\\n   at Sabisu.NET45.AsyncHelpers.RunSync[T](Func`1 task)\\\\r\\\\n   at Sabisu.Web.WebAPI.WebAPIHelper.Call[TDataType,TResultType](CallOptions`1 Options, Nullable`1 ExpectsResult)\\\\r\\\\n   at Sabisu.Connectivity.WebAPI.WebAPICommand.GetDataSet()\\\\r\\\\n   at Sabisu.Connectivity.Datasource.<>c__DisplayClass97_0.<GetDataSet>b__0()\\\\r\\\\n   at Sabisu.Connectivity.Datasource.TryAndLogError(Action codeToRun, Action insteadOfThrow, Action doFinally)\\\\r\\\\n   at Sabisu.Connectivity.Datasource.GetDataSet(DbCommand Command)\\\\r\\\\n   at Sabisu.Connectivity.Datasource.<>c__DisplayClass100_1`1.<GetDataSet>b__0(KeyValuePair`2 kvp) \\\\r\\\\n DebugData:GetData; {Performing Lookup: In with sdc:Pipeline:, Out with WebAPI:server:https://sabisupipeline-elasticbeanstalk.sabisu.co/;::False}Making new connection for SDC: Server=server:https://sabisupipeline-elasticbeanstalk.sabisu.co/;, Database=;\\\",\\\"Message\\\":\\\"Errored while getting data\\\",\\\"ContactIdentifiers\\\":[],\\\"Type\\\":\\\"SimplePacket`1\\\",\\\"Created\\\":\\\"2021-10-01T18:21:04.1819444+00:00\\\",\\\"Metadata\\\":{\\\"WidgetPageInstanceID\\\":14393383}}]}\",\"Keys\":[{\"AppID\":null,\"Category\":\"WidgetError\",\"ContextID\":\"14393383\"}],\"Metadata\":{\"WidgetPageInstanceID\":\"14393383\",\"WidgetIdentifier\":\"25900f8b-5d45-4407-9430-60c21ae8ed85\",\"Url\":\"https://"+__ENV.pena+"/SabisuPremise/Default.aspx#pid=7v7zRtzCO1bV88OjdgCDsT-7kClUKC6FK9ervVGfFBTKv\"}}]",
        {
            "headers": {
                "Host": "api.sabisu.co",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json; charset=utf-8",
                "Identifier": ""+pPublicGuid+"",
                "pToken": ""+pToken+"",
                "S_SESSION_TOKEN": ""+sToken+"",
                "awguid": ""+pGuid+"",
                "Origin": "https://"+__ENV.pena+"",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://"+__ENV.pena+"/",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-site",
                "Pragma": "no-cache",
                "Cache-Control": "no-cache"
            }
        }
    )
    check(res, {"status is 204": (r) => r.status === 204 });
    // Request #24
    res = http.post("https://"+__ENV.pena+"/SabisuPremise/api/Widget/WidgetGetWidgetContent",
    "{\"pGuid\":\""+pGuid+"\",\"pToken\":\""+pToken+"\",\"WidgetPageInstanceIDList\":\"14393382;\",\"ClientData\":{\"global\":[{\"Key\":\"global\",\"Values\":[]}],\"pages\":[{\"Key\":\"1763114\",\"Values\":[]}],\"widgets\":[{\"Key\":\"14393382\",\"Values\":[]}]},\"PageID\":\"1763114\",\"IgnoreUserSpecific\":false}",
        {
            "cookies": {
            "ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
                "S_SESSION_TOKEN": ""+sToken+"",
                "AWGUID": ""+pGuid+"",
                "AWTOK": ""+pToken+"",
                "AWPUBLICIDENTIFIER": ""+pPublicGuid+"",
                "I": ""+pPublicGuid+"",
                "V": ""+pToken+""
        },
        "headers": {
                "Host": ""+__ENV.pena+"",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json; charset=utf-8",
                "Identifier": ""+pPublicGuid+"",
                "pToken": ""+pToken+"",
                "S_SESSION_TOKEN": ""+sToken+"",
                "awguid": ""+pGuid+"",
                "X-Requested-With": "XMLHttpRequest",
                "Origin": "https://"+__ENV.pena+"",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://"+__ENV.pena+"/SabisuPremise/Default.aspx",
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
    // Request #25
    res = http.post("https://"+__ENV.pena+"/SabisuPremise/api/Widget/WidgetGetWidgetContent",
    "{\"pGuid\":\""+pGuid+"\",\"pToken\":\""+pToken+"\",\"WidgetPageInstanceIDList\":\"14393383;\",\"ClientData\":{\"global\":[{\"Key\":\"global\",\"Values\":[]}],\"pages\":[{\"Key\":\"1763114\",\"Values\":[]}],\"widgets\":[{\"Key\":\"14393383\",\"Values\":[]}]},\"PageID\":\"1763114\",\"IgnoreUserSpecific\":false}",
        {
            "cookies": {
            "ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
                "S_SESSION_TOKEN": ""+sToken+"",
                "AWGUID": ""+pGuid+"",
                "AWTOK": ""+pToken+"",
                "AWPUBLICIDENTIFIER": ""+pPublicGuid+"",
                "I": ""+pPublicGuid+"",
                "V": ""+pToken+""
        },
        "headers": {
                "Host": ""+__ENV.pena+"",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json; charset=utf-8",
                "Identifier": ""+pPublicGuid+"",
                "pToken": ""+pToken+"",
                "S_SESSION_TOKEN": ""+sToken+"",
                "awguid": ""+pGuid+"",
                "X-Requested-With": "XMLHttpRequest",
                "Origin": "https://"+__ENV.pena+"",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://"+__ENV.pena+"/SabisuPremise/Default.aspx",
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
    // Request #26
    res = http.post("https://"+__ENV.pena+"/SabisuPremise/api/Widget/WidgetGetWidgetContent",
    "{\"pGuid\":\""+pGuid+"\",\"pToken\":\""+pToken+"\",\"WidgetPageInstanceIDList\":\"14393382;\",\"ClientData\":{\"global\":[{\"Key\":\"global\",\"Values\":[]}],\"pages\":[{\"Key\":\"1763114\",\"Values\":[]}],\"widgets\":[{\"Key\":\"14393382\",\"Values\":[]}]},\"PageID\":\"1763114\",\"IgnoreUserSpecific\":false}",
        {
            "cookies": {
            "ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
                "S_SESSION_TOKEN": ""+sToken+"",
                "AWGUID": ""+pGuid+"",
                "AWTOK": ""+pToken+"",
                "AWPUBLICIDENTIFIER": ""+pPublicGuid+"",
                "I": ""+pPublicGuid+"",
                "V": ""+pToken+""
        },
        "headers": {
                "Host": ""+__ENV.pena+"",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json; charset=utf-8",
                "Identifier": ""+pPublicGuid+"",
                "pToken": ""+pToken+"",
                "S_SESSION_TOKEN": ""+sToken+"",
                "awguid": ""+pGuid+"",
                "X-Requested-With": "XMLHttpRequest",
                "Origin": "https://"+__ENV.pena+"",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://"+__ENV.pena+"/SabisuPremise/Default.aspx",
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
    // Request #27
    res = http.post("https://"+__ENV.pena+"/SabisuPremise/api/Widget/WidgetGetWidgetContent",
    "{\"pGuid\":\""+pGuid+"\",\"pToken\":\""+pToken+"\",\"WidgetPageInstanceIDList\":\"14393382;\",\"ClientData\":{\"global\":[{\"Key\":\"global\",\"Values\":[]}],\"pages\":[{\"Key\":\"1763114\",\"Values\":[]}],\"widgets\":[{\"Key\":\"14393382\",\"Values\":[]}]},\"PageID\":\"1763114\",\"IgnoreUserSpecific\":false}",
        {
            "cookies": {
            "ASP.NET_SessionId": "jdufim5rlzkb5iwu1rxwrfte",
                "S_SESSION_TOKEN": ""+sToken+"",
                "AWGUID": ""+pGuid+"",
                "AWTOK": ""+pToken+"",
                "AWPUBLICIDENTIFIER": ""+pPublicGuid+"",
                "I": ""+pPublicGuid+"",
                "V": ""+pToken+""
        },
        "headers": {
                "Host": ""+__ENV.pena+"",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json; charset=utf-8",
                "Identifier": ""+pPublicGuid+"",
                "pToken": ""+pToken+"",
                "S_SESSION_TOKEN": ""+sToken+"",
                "awguid": ""+pGuid+"",
                "X-Requested-With": "XMLHttpRequest",
                "Origin": "https://"+__ENV.pena+"",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://"+__ENV.pena+"/SabisuPremise/Default.aspx",
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
    // Request #28
    res = http.post("https://"+__ENV.pena+"/sabisupremise/Flow.asmx/Logout",
    "{\"pGuid\":\""+pGuid+"\",\"pToken\":\""+pToken+"\"}",
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
                "Host": ""+__ENV.pena+"",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json; charset=utf-8",
                "X-Requested-With": "XMLHttpRequest",
                "Origin": "https://"+__ENV.pena+"",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://"+__ENV.pena+"/SabisuPremise/Default.aspx",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin",
                "Pragma": "no-cache",
                "Cache-Control": "no-cache"
            }
        }
    )
    // Request #29
    res = http.post("https://"+__ENV.pena+"/sabisupremise/Flow.asmx/LogError",
    "{\"ErrorText\":\"WS: /SabisuPremise/Default.aspx: \",\"Args\":\"{\\\"pGuid\\\":\\\""+pGuid+"\\\",\\\"pToken\\\":\\\""+pToken+"\\\"}\",\"pGuid\":\"UNABLE_TO_RETRIEVE_GUID\",\"pToken\":\"UNABLE_TO_RETRIEVE_TOKEN\"}",
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
                "Host": ""+__ENV.pena+"",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json; charset=utf-8",
                "X-Requested-With": "XMLHttpRequest",
                "Origin": "https://"+__ENV.pena+"",
                "DNT": "1",
                "Connection": "keep-alive",
                "Referer": "https://"+__ENV.pena+"/SabisuPremise/Default.aspx",
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

}
 export {logout}