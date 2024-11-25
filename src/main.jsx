import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import App from './App.jsx';
import { LearnComponent } from './Component/LearnComponent';
import { Hr } from './Component/header';
import {UserCard} from "./UserCard"; 
import { QrCode } from './Component/QrCode';
import './QR.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UserCard /> */}
    <QrCode/>
  </StrictMode>
);
