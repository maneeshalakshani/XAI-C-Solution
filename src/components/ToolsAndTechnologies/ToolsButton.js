import * as React from 'react';
import Button from '@mui/material/Button';

export default function ToolsButton({title, url}) {

    function navigatefUNC(url){
        // Create an anchor element with a temporary download link
        const link = document.createElement('a');
        link.href = url;
    
        // Trigger a click event on the anchor element to start the download
        link.click();
    }

  return (
    <Button 
        variant="contained" 
        color="info" 
        sx={{
            width: '25%',
            height: '10vh',
            fontSize: '1.5rem'
        }}
        onClick={() => navigatefUNC(url)}
    >
        {title}
    </Button>
  );
}