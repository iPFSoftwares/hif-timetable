import React from 'react';
import ReactDOM from 'react-dom';
import DesktopApp from './DesktopApp';
import MobileApp from './MobileApp';
import useMediaQuery from './useMediaQuery';
import { QueryClient, QueryClientProvider } from 'react-query'
 
const queryClient = new QueryClient();

function Schedule() {
  const isMobile = useMediaQuery('(max-width: 600px)');

  if(isMobile) 
    return (
      <MobileApp />
    )
  
  return (
    <DesktopApp />
  )
}

ReactDOM.render(
  // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Schedule />
     </QueryClientProvider>
  // </React.StrictMode>,
  , document.getElementById('root')
);