
    // node.js中阅读文档的api
 
    // node.js中阅读文档的api
    const fs = require('fs');
    /*** 第一种写法 */
    function getPeach () {
        return new Promise(function(resolve,reject) {
            fs.readFile('./resource/桃花源记.md',(err,data) => {
                if(err) reject(err)
                resolve(data)
            })
        })
    }

    /**出居庸关* */
    function getAgent () {
        return new Promise(function(resolve,reject) {
            fs.readFile('./resource/出居庸关.md',(err,data) => {
                if(err) reject(err)
                resolve(data)
            })
        })

    }

    /**出师表* */
    function getTroops () {
        return new Promise(function(resolve,reject) {
            fs.readFile('./resource/出师表.md',(err,data) => {
                if(err) reject(err)
                resolve(data)
            })
        })
    }

    
    p('./resource/桃花源记.md').then(res => {
        /***如果不转成字符串将会变成二进制数组 */
        console.log(res.toString());
        const data1=res.toString()
        return data1
    }).then(res => {
        console.log(res);
        const data2=p('./resource/出居庸关.md').then(data => data.toString())
        return data2
    }).then(res2 => {
        console.log(res2,'61');
    })


    function p(url) {
        return new Promise((resolve,reject) => {
            fs.readFile(url,(err,data) => {
                if(err) reject(err)
                resolve(data)
            })
        })
    }

    async function name() {
        let getPeach =  await  p('./resource/桃花源记.md')
        let getAgent = await  p('./resource/出居庸关.md')
    }