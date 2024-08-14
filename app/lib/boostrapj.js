"use client"

import React from 'react';
import { useEffect } from 'react';

const BootstrapClient = () => {
    
    console.log('main.js loaded 1');
    useEffect(() => {
        require('jquery/dist/jquery.min.js');
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
        require('./main.js');
      }, []);
    
      return null;
  };
  
  export default BootstrapClient;
