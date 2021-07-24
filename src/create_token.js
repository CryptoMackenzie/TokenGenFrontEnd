import { Button, TextField, Typography, Grid, Paper, Checkbox } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";
import { createWallet, sendFeetoRouter } from './blockchaintx'





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
      paddingTop:'5vh',
      width:'25vw',
      height:'82vh',
      borderTopLeftRadius:'30px',
      borderBottomLeftRadius:'30px',
      background: 'linear-gradient(0deg,#1e3c72 0,#1e3c72 1%,#2a5298)'
    },
    paperII: {
      paddingTop:'5vh',
      paddingBottom:'5vh',
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

const locoprint = (l) => {
  console.log(l)
}
      
const CreateToken = (props) => {
    const classes = useStyles();
    const [token,setToken] = useState('')
    const [symbol,setSymbol] = useState('')
    const [supply,setSupply] = useState()
    const [decimals,setDecimals] = useState()
    const [isMoon,setisMoon] = useState(false)
    const [trx_Tax,setTrx_Tax] = useState('')
    const [btncreate,setbtncreate] = useState(false)
    const [isMint,setisMint] = useState(false)
    const [isBurn,setisBurn] = useState(false)
    const [contractAddress,setContractAddress] = useState('')

    const createBtn = () =>{
      if (btncreate){
        return(
            <Button variant="outlined" color="primary">
              CREATE TOKEN
            </Button>          
        )
      }else{
        return(
          <Button variant="outlined" color="primary" disabled>
              CREATE TOKEN
          </Button>
        )
      }
    }

    const deflationary = () => {
      if(isMoon){
        return(
        <Grid container
        alignItems='center'
        justify='center'
        className-={classes.paperfields}
        >
          <Grid item xs="4">
          <p style={{"color":"#606060","fontSize":"16px","fontWeight":"bold"}}>Tax</p>
          </Grid>
          <Grid item xs="6">
            <TextField
            id="tax"
            label="Tax"
            inputProps={{min: 0, style: { textAlign: 'center' }}}
            type="Number"
            variant="outlined"
            InputLabelProps={{
            shrink: true,
            }}
            value={trx_Tax}
            onChange={(e) => {
              setTrx_Tax(e.target.value)
            }}
            fullWidth
            />
          </Grid>
        </Grid>
        )
      }
    }

    const web3 = props.data
    const address = props.address
    return(

    <Grid container
    alignItems='center'
    justify='center'
    style={{ minHeight: "100vh" }}
    spacing={1}>
      <Grid width={300} item xs='auto'>
        <Paper className={classes.paperI} elevation={15}>
          <Typography className={classes.whiteheader} variant="h5">BEP20 Token</Typography>
          <Typography className={classes.whiteheader} variant="h5">Generator</Typography>
        </Paper>
      </Grid>
      <Grid item xs='auto'>
      <Paper className={classes.paperII} elevation={15}>
          <Typography variant="h6">Token Generator</Typography>
  
          <br />
          <br />
          <Grid direction="row" spacing={2}>
  
          <Grid container
          alignItems='center'
          justify='center'
          className-={classes.paperfields}
          >
            <Grid item xs="4">
              <p style={{"color":"#606060","fontSize":"16px","fontWeight":"bold"}}>Token Name</p>
            </Grid>
            <Grid item xs="6">
              <TextField
              id="token_name"
              label="Token Name"
              type="string"
              variant="outlined"
              InputLabelProps={{
              shrink: true,
              }}
              value={token}
              onChange={(e) => {
                setToken(e.target.value)
              }}
              fullWidth
              />
            </Grid>
          </Grid>
            <br />
          <Grid container
          alignItems='center'
          justify='center'
          className-={classes.paperfields}
          >
            <Grid item xs="4">
            <p style={{"color":"#606060","fontSize":"16px","fontWeight":"bold"}}>Token Symbol</p>
            </Grid>
            <Grid item xs="6">
              <TextField
              id="token_symbol"
              label="Token Symbol"
              type="string"
              variant="outlined"
              InputLabelProps={{
              shrink: true,
              }}
              value={symbol}
              onChange={(e) => {
                setSymbol(e.target.value)
              }}
              fullWidth
              />
            </Grid>
          </Grid>
          <br />
          <Grid container
          alignItems='center'
          justify='center'
          className-={classes.paperfields}
          >
            <Grid item xs="4">
            <p style={{"color":"#606060","fontSize":"16px","fontWeight":"bold"}}>Initial Supply</p>
            </Grid>
            <Grid item xs="6">
              <TextField
              id="initial_supply"
              label="Tokens"
              inputProps={{min: 0, style: { textAlign: 'center' }}}
              type="Number"
              variant="outlined"
              InputLabelProps={{
              shrink: true,
              }}
              value={supply}
              onChange={(e) => {
                setSupply(e.target.value)
              }}
              fullWidth
              />
            </Grid>
          </Grid>
          <br />
          <Grid container
          alignItems='center'
          justify='center'
          className-={classes.paperfields}
          >
            <Grid item xs="4">
            <p style={{"color":"#606060","fontSize":"16px","fontWeight":"bold"}}>Decimals</p>
            </Grid>
            <Grid item xs="6">
              <TextField
              id="decimals"
              label="Decimals"
              inputProps={{min: 0, style: { textAlign: 'center' }}}
              type="Number"
              variant="outlined"
              InputLabelProps={{
              shrink: true,
              }}
              value={decimals}
              onChange={(e) => {
                setDecimals(e.target.value)
              }}
              fullWidth
              />
            </Grid>
          </Grid>
          <br />
          <Grid container
          alignItems='center'
          justify='center'
          className-={classes.paperfields}
          >
            <Grid item xs="3">
            <p style={{"color":"#606060","fontSize":"16px","fontWeight":"bold"}}>Other options</p>
            </Grid>
            <Grid item xs="9">
              <Grid container alignItems='center' justify='center' className-={classes.paperfields}>
                <Checkbox 
                checked={isMint} 
                onChange={(e) => {
                  setisMint(e.target.checked)
                }} 
                inputProps={{ 'aria-label': 'primary checkbox' }} />
                <p>Can Mint</p>
                <Checkbox 
                inputProps={{ 'aria-label': 'primary checkbox' }} 
                checked={isBurn} 
                onChange={(e) => {
                  setisBurn(e.target.checked)
                }} 
                />
                <p>Can Burn</p>
                <Checkbox
                checked={isMoon} 
                onChange={(e) => {
                  setisMoon(e.target.checked)
                }}  
                inputProps={{ 'aria-label': 'primary checkbox' }} />
                <p>Deflationary</p>
              </Grid>
            </Grid>
          </Grid>
          <br />
          {deflationary()}
          <br />
          <Grid container
          alignItems='center'
          justify='center'
          className-={classes.paperfields}
          spacing={2}
          >
            <Grid item>
            <Button variant="outlined" color="primary" 
            onClick={async() => {
              let tkn_pm = [token,symbol,decimals,supply,trx_Tax]
              let tx = await sendFeetoRouter(web3,address,tkn_pm)
              await createWallet()
              if(tx){
                setbtncreate(true)
              }
              alert("Transaction processed please wait")
              
              const create_params = JSON.stringify({"token_name":token,"token_symbol":symbol,"decimals":decimals,"init_supply":supply,"trx_tax":trx_Tax})
              
              const request_options_create = {
                method:'POST',
                headers: {
                  'Content-Type':'application/json'
                },
                body: create_params
              };

              const request_options_compile = {
                method:'GET',
                headers: {
                  'Content-Type':'application/json'
                }
              };

              const request_options_deploy = {
                method:'GET',
                headers: {
                  'Content-Type':'application/json'
                },
              };              
              

              fetch('http://app-db039ea2-4947-4bf0-a0d4-984d5c82d13d.cleverapps.io/create', request_options_create)

              setTimeout(() => {fetch('http://app-db039ea2-4947-4bf0-a0d4-984d5c82d13d.cleverapps.io/compile',request_options_compile)},5000)

              setTimeout(() => {fetch('http://app-db039ea2-4947-4bf0-a0d4-984d5c82d13d.cleverapps.io/deploy',request_options_deploy)},20000)

              setTimeout(() => {fetch('http://app-db039ea2-4947-4bf0-a0d4-984d5c82d13d.cleverapps.io/fetchAddress',request_options_compile)
                                  .then(response => response.json())
                                  .then(data => alert(data['token']))},45000)
}}>
              CREATE TOKEN
            </Button>
            </Grid>
          </Grid>
            <createBtn />
          </Grid>
      </Paper>
      </Grid>
  </Grid>
    )}

  export default CreateToken