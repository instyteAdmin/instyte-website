import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './DemoLogin.css';

export default function DemoLogin() {
  const navigate = useNavigate();
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Any credentials work in demo
    navigate('/demo/dashboard');
  };

  return (
    <div className="demo-login-page">
      <div className="demo-login-card">
        <img src="/logo.png" alt="Instyte" className="demo-login-logo" onError={e => { e.target.style.display='none'; }} />

        <div className="demo-login-badge">✦ Demo Mode</div>

        <h1 className="demo-login-title">Welcome to Instyte</h1>
        <p className="demo-login-subtitle">Sign in to explore the interactive demo</p>

        <form className="demo-login-form" onSubmit={handleSubmit}>
          <div className="demo-login-field">
            <label htmlFor="demo-email">Email</label>
            <input
              id="demo-email"
              type="email"
              placeholder="priya@sunriseacademy.edu"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
          <div className="demo-login-field">
            <label htmlFor="demo-password">Password</label>
            <input
              id="demo-password"
              type="password"
              placeholder="Any password works"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          <button className="demo-login-btn" type="submit">
            Enter Demo →
          </button>
          <p className="demo-login-hint">Any credentials work — this is a demo environment</p>
        </form>

        <Link to="/" className="demo-login-back">← Back to website</Link>
      </div>
    </div>
  );
}
