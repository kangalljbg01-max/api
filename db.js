const mysql = require('mysql2/promise');
let sql;

const buatKoneksi = async () => {
    return await mysql.createConnection({
        host: '127.0.0.1',
        user: 'u9113kjm_alim',
        password: 'kangalljbg13',
        database: 'u9113kjm_dbkeuangan'
    })
}

const tambahBackup = async (id, nama, channel) => {
    const db = await buatKoneksi();
    sql = `INSERT INTO backup VALUES('${id}','${nama}','${channel}',NOW())`;
    try {
        await db.execute(sql);
        return "1";
    } catch(err) {
        return "0";
    }
}

const tambahTransaksi = async (idx, id, waktux, nominalx, jenisx, deskripsix) => {
    const db = await buatKoneksi();
    sql = `INSERT INTO backup_transaksi VALUES('${idx}','${id}','${waktux}','${nominalx}','${jenisx}','${deskripsix}')`;
    try {
        await db.execute(sql);
        return "1";
    } catch(err) {
        return "0";
    }
}

module.exports = {buatKoneksi, tambahBackup, tambahTransaksi}
