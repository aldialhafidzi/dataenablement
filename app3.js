// Redis library
var redis = require("redis"),
    client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});

// Keyv library
const Keyv = require('keyv');
const keyv = new Keyv('redis://@localhost:6379', {
    namespace: 'wilayah_2018'
});
keyv.on('error', err => console.log('Connection Error', err));

//Set data wilayah from text to Redis.
var fs = require('fs');
fs.readFile('wilayah_2018.txt', function (err, data) {
    if (err) throw err;
    var array = data.toString().split(";");
    async function setData() {
        var x = 1;
        var key_ = '';
        var prov = '';
        for (i of array) {
            if (x % 2 == 0) {
                var kode = key_.split('.');

                // Get provinsi
                if (kode.length == 1){
                    prov = i;
                }

                // Set Key - Value (Kode - Nama Daerah(Prov - Kecamatan))
                if (kode.length == 3){
                    var kdwilayah = kode[0] + kode[1] + kode[2];
                    var nama = prov + ' - ' + i;
                    await keyv.set(kdwilayah, nama);
                }
            }
            else {
                key_ = i;
            }
            x++;
        }
    }
    setData();
});

// Get Data (6 Digit - Kecamatan)->wilayah_2018 from Redis.
client.keys('*wilayah_2018*', function (err, keys) {
    if (err) return console.log(err);
    async function getData() {
        keys.sort();
        for (var i = 0, len = keys.length; i < len; i++) {
            var splt = keys[i].split(":");
            daerah = await keyv.get(splt[1]);
            console.log(splt[1] + ' - ' + daerah);
        }
    }
    getData();
});