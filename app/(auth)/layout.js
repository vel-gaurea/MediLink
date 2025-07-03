"use client"

import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center py-16">
      {children}
    </div>
  );
};

export default AuthLayout;
