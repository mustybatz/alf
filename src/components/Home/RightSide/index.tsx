import { SendOutlined } from "@mui/icons-material";
import {Grid, TextField, Typography, styled} from "@mui/material";

const StyledTextField = styled(TextField)({
    background: 'rgba(64,65,79,1)',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: 'none',
        },
    },
});

const RightSide = () => {
    return (
    <Grid 
    container 
    flexDirection='column'
    sx={{height:'100vh',position:'relative'}}
    >
            <Grid item sx={{mt:'20vh', mb:7}}>
                <Typography
                variant="h4"
                textAlign='center'
                fontWeight='bold'
               
                >
                 GPT   
                </Typography>
            </Grid>
            
           

            <Grid item sx={{position:'absolute', bottom:0, width:'100%', height:'6rem'}}>
            <StyledTextField 
            
            placeholder='Enviar mensaje' fullWidth
            InputProps={{endAdornment: <SendOutlined color="primary"/>}}
            />
            </Grid>
        </Grid>
    );
};

export default RightSide;