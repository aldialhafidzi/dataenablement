// Redis library
var redis = require("redis"),
    client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});

// Keyv library
const Keyv = require('keyv');
const keyv = new Keyv('redis://@localhost:6379', { namespace: 'wilayah_2018' });
keyv.on('error', err => console.log('Connection Error', err));

// Set data wilayah from text to Redis.
var fs = require('fs');
fs.readFile('wilayah_2018.txt', function (err, data) {
    if (err) throw err;
    var array = data.toString().split(";");
    async function setData() {
        var x = 1;
        var key_ = '';
        for (i of array) {
            if (x % 2 == 0) {
                await keyv.set(key_, i);
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
        var prov = "";
        var kec = "";
        keys.sort();
        for (var i = 0, len = keys.length; i < len; i++) {
            var splt = keys[i].split(":");
            var kode = splt[1].split(".");

            if (kode.length == 1) {
                prov = await keyv.get(splt[1]);
            }

            if (kode.length == 3) {
                kec = await keyv.get(splt[1]);
                var kdwilayah = kode[0] + kode[1] + kode[2];
                var data_output = kdwilayah + ' - ' + prov + ' - ' + kec;
                console.log(data_output);
            }
        }
    }
    getData();
});