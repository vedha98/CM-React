const accountsdb = require('../../models').accounts;
module.exports = {
    checkAccountExists: async function (accountno) {
        const AccountNo = String(accountno)
        return accountsdb.findOne({ where: { AccountNo } }).then(account => {
            if (account) {
                return false
            } else {
                return true
            }
        });
    },
    checkFirst: async function (userid) {
        let userId = String(userid);
        return accountsdb.findOne({ where: { userId } }).then(account => {
            if (account) {
                return false
            } else {
                return true
            }
        });
    },
    createNewAccount: async function (userid, accountno, isprimary) {
        let userId = String(userid);
        const AccountNo = String(accountno)
        if (isprimary) {
            await accountsdb.findAll({ where: { userId } }).then((instances) => {
                instances.forEach(function (instance) {
                    instance.update({ IsPrimary: false });
                });
            });
        }
        return await accountsdb.create({ userId, AccountNo, IsPrimary: isprimary, balance: 0, AccountType: "PERSONAL" })
    },
    getAccounts: async function (userid) {
        const userId = String(userid);
        return await accountsdb.findAll({where:{userId}})
    }
}