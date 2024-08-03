// 给定一个字符串 queryIP。如果是有效的 IPv4 地址，返回 "IPv4" ；
// 如果是有效的 IPv6 地址，返回 "IPv6" ；
// 如果不是上述类型的 IP 地址，返回 "Neither" 
// ipv4和IPv6，ipv4通过点分隔，每组数在0-255之间，IPv6分为八组，每组4位，以十六进制方式表示
// 以下代码还存在错误，不能完全判断
var validIPAddress = function(queryIP) {
    // Check if it's a valid IPv4 address
    if (/^(?:\d{1,3}\.){3}\d{1,3}$/.test(queryIP)) {
        let octets = queryIP.split('.');
        for (let i = 0; i < octets.length; i++) {
            let octet = parseInt(octets[i], 10);
            if (octet > 255) {
                return 'Neither';
            }
        }
        return 'IPv4';
    }

    // Check if it's a valid IPv6 address
    if (/^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/.test(queryIP)) {
        return 'IPv6';
    }

    return 'Neither';
};
validIPAddress('192.168.0.11')