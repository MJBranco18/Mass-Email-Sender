"use client";

import EmailEditor from './EmailEditor';

export default function Page() {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: '#333' }}>Mass Email Sender</h1>
      <EmailEditor />
    </div>
  );
}
