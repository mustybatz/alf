import { ListItem, ListItemIcon, ListItemText, ListItemButton, Typography } from '@mui/material';

import ChatBubbuleOutilineIcon from '@mui/icons-material/ChatBubbleOutline';

const item = () => {
return (
<ListItem disablePadding
sx={{'&:hover':{backgroud:'#202123',
borderRadius: 1,
}}}
>
    <ListItemButton>
      <ListItemIcon sx={{maxWidth:0, mr:1}}>
        <ChatBubbuleOutilineIcon fontSize='small' color='primary'/>
      </ListItemIcon>
      <ListItemText primary={
      <Typography
      sx={{whiteSpace:'nowrap'}}
      >Test</Typography> 
      } />
    </ListItemButton>
  </ListItem>)
}

export default item;