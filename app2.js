var redis = require("redis"),
    client = redis.createClient();

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on("error", function (err) {
    console.log("Error " + err);
});

// client.set("string key", "string val", redis.print);
// client.hset("hash key", "hashtest 5", "test", redis.print);
// client.hset("hash key", "hashtest 6", "test", redis.print);
// client.hkeys("hash key", function (err, replies) {
//     //console.log(replies);
//     console.log(replies.length + " replies:");
//     replies.forEach(function (reply, i) {
//         console.log("    " + i + ": " + reply);
//     });
//     client.quit();
// });

// client.hmset("key", "11", "ACEH", "01", function (err, res) {
//     console.log(res);
// });

// client.hgetall('key', function(err, object) {
//     console.log(object);
// });


// var fs = require('fs');
// fs.readFile('wilayah_2018.txt', function (err, data) {
//     if (err) throw err;
//     var array = data.toString().split(";");

//     async function start() {
//         const Keyv = require('keyv');
//         // One of the following
//         const keyv = new Keyv('redis://@localhost:6379', { namespace: 'wilayah_2020' });

//         // Handle DB connection errors
//         keyv.on('error', err => console.log('Connection Error', err));

//         var x = 1;
//         var key_ = '';
//         arr_kode = [];
//         arr_nama = [];
//         for (i of array) {
//             if (x % 2 == 0) {
//                 await keyv.set(key_, i);
//                 console.log(key_ + ' - ' + i);

//             }
//             else {
//                 key_ = i;
//             }
//             x++;
//         }

//         // await keyv.set('kode', arr_kode);
//         // await keyv.set('nama', arr_nama);

//         // await keyv.set('wilayah', arr_data);

//         // var kode = await keyv.get('kode');
//         // var nama = await keyv.get('11.01.06');
//         // console.log(nama);
//         // console.log(nama);

//         // client.hgetall('11.01.06', function(err, object) {
//         //  console.log(object);
//         // }); 
//     }
//     start();
// });




// client.keys('*wilayah_2020*', function (err, keys) {
//     if (err) return console.log(err);

//     async function test() {
//         const Keyv = require('keyv');
//         const keyv = new Keyv('redis://@localhost:6379', { namespace: 'wilayah_2020' });
//         keyv.on('error', err => console.log('Connection Error', err));

//         var prov = "";
//         var kec = "";
//         keys.sort();

//         for (var i = 0, len = keys.length; i < len; i++) {
//             var splt = keys[i].split(":");
//             var kode = splt[1].split(".");

//             if (kode.length == 1) {
//                 prov = await keyv.get(splt[1]);
//             }

//             if (kode.length == 3) {
//                 kec = await keyv.get(splt[1]);
//                 var kdwilayah = kode[0] + kode[1] + kode[2];
//                 var data2 = kdwilayah + ' - ' + prov + ' - ' + kec;
//                 console.log(data2);
//             }
//         }

//     }
//     test();

//     // console.log(keys.length);
// });



    // async function getData(){
    //     const Keyv = require('keyv');
    //     // One of the following
    //     const keyv = new Keyv('redis://@localhost:6379');
    //     // Handle DB connection errors
    //     keyv.on('error', err => console.log('Connection Error', err));
    //     var data = await keyv.get('wilayah');
    //     //console.log(haha);

    //     var prov = "";
    //     var kec = "";
    //     for (let index = 0; index < data.length; index++) {
    //         const element = data[index].kode;
    //         var arr = element.split(".");

    //         if (arr.length == 1) {
    //             prov = data[index].nama;
    //         }
    //         if(arr.length == 3) {
    //             kec = data[index].nama;
    //             var kdwilayah = arr[0] + arr[1] + arr[2];
    //             var data2 = kdwilayah + " - " +prov+ " - " +kec;
    //             console.log(data2);
    //         }

    //     }
    // }
    // getData();





    //await keyv.set('11', 'ACEH'); // true
    //await keyv.set('11.01', 'ACEH'); // true

    // client.hgetall('foo', function(err, object) {
    //     console.log(object);
    // });

