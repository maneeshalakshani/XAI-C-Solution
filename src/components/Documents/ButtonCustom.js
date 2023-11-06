import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

import file from '../../assets/files/research-paper.pdf'

export default function DownloadButton({title, paper}) {
    const handleDownload = () => {
        // Create an anchor element with a temporary download link
        const link = document.createElement('a');
        link.href = paper;
        link.download = `${title}.pdf`;
    
        // Trigger a click event on the anchor element to start the download
        link.click();
    };
    
  return (
    <Stack direction="row" spacing={2}>
      <Button 
        variant="outlined" 
        startIcon={<CloudDownloadIcon />} 
        onClick={handleDownload}
    >
        Download
      </Button>
    </Stack>
  );
}