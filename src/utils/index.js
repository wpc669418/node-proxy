
const interfaces = require('os').networkInterfaces(); //服务器本机地址


const getAliasAddress = () => {
    let IPAdress = '';
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        // @ts-ignore
        for (var i = 0; i < iface.length; i++) {
            // @ts-ignore
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                IPAdress = alias.address;
            }
        }
    }

    return IPAdress;
}

module.exports = {
    getAliasAddress
}
