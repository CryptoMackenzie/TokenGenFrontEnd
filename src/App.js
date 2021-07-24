import useWeb3 from "./useWeb3";
import { AppBar, Toolbar, Button,Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CreateToken from './create_token'

import "./App.css";
import { useEffect, useState } from "react";
const useStyles = makeStyles((theme) => ({
  appBarroot: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paperI: {
    paddingTop:'3vh',
    height:'100vh',
    width:'25vw',
    borderTopLeftRadius:'30px',
    borderBottomLeftRadius:'30px',
    background: 'linear-gradient(0deg,#1e3c72 0,#1e3c72 1%,#2a5298)'
  },
  paperII: {
    paddingTop:'3vh',
    height:'100vh',
    width:'50vw',
    borderTopRightRadius:'30px',
    borderBottomRightRadius:'30px'
  },
  bodyroot: {
    background: '#E8E8E8'
  },
  paperfields: {
    marginBottom: '10px',
    paddingBottom: '10px'
  },
  whiteheader: {
    color: 'white'
  }
}));





function App() {
  const classes = useStyles();
  
  const [address,setAddress] = useState('')
  const [balance,setBalance] = useState('')
  const [btn,setBtn] = useState('Connect Wallet')
  const web3 = useWeb3();

  // get user account on button click
  const getUserAccount = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        web3.eth.getAccounts().then(accounts => {
          setAddress(accounts[0]);
          updateBalance(accounts[0]);
          setBtn("Connected")
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Metamask extensions not detected!");
    }
  };

  const updateBalance = async fromAddress => {
    await web3.eth.getBalance(fromAddress).then(value => {
      setBalance(web3.utils.fromWei(value, "ether"));
    });
  };

  const sendTransaction = async e => {
    e.preventDefault();
    const amount = e.target[0].value;
    const recipient = e.target[1].value;
    await web3.eth.sendTransaction({
      from: address,
      to: recipient,
      value: web3.utils.toWei(amount, "ether")
    });
    updateBalance(address);
  };
  console.log(balance)
  return (
    <div className="App">
      <div className={classes.appBarroot}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            BEP-20 Generator
          </Typography>
          <Button
          onClick={() => getUserAccount()}
          variant="outlined"
          color="inherit">
            {btn}
          </Button>
        </Toolbar>
      </AppBar>
      </div>
      <div className={classes.bodyroot}>
        <CreateToken data={web3} address={address} />
      </div>
    </div>
  );
}

export default App;
