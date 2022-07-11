const fs = require('fs');

module.exports = {
    //Respoansavel por altera o arquivo json
    JSONWiret(filePath, data, encoding = 'utf-8') {
        const promiseCallback = (resolve, reject) => {
            fs.writeFile(filePath, JSON.stringify(data, null, 2), encoding, (err) => {
                if(err){
                    reject(err);
                    return;
                }
                resolve(true)
            })
        };
        return new Promise(promiseCallback);
    },
    //Responsavel por ler o arquivo json
    JSONRead(filePath, encoding = 'utf-8') {
        const promiseCallback = (resolve, reject) => {
            fs.readFile(filePath, encoding, (err, data) => {
                if(err){
                    reject(err);
                    return;
                }
                try{
                    const object = JSON.parse(data);
                    resolve(object);
                }catch(e){
                    reject(e);
                }
            })
        };
        return new Promise(promiseCallback);
    },
    //Responsavel por atualizar o json
    async JSONUpdate(filePath, newData, encoding = 'utf-8') {
        const promiseCallback = async (resolve, reject) => {
            try{
                const data = await this.JSONRead(filePath, encoding);
                const result = [...data, {...newData}];
                await this.JSONWiret(filePath, result, encoding);
                resolve(true);
            }catch(e){
                reject(e);
            }
        };
        return new Promise(promiseCallback);
    },
    //Responsavel por limpar o json
    async JSONDelete(filePath){
        const promiseCallback = async (resolve, reject) => {
            fs.unlink(filePath, (err) => {
                if(err){
                    reject(err);
                    return;
                }
                resolve(true);
            })
        };
        return new Promise(promiseCallback);
    }
}