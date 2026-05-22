import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, LogIn } from 'lucide-react';
import './DemoLogin.css';

const LOGO = '/logo.png';

export default function DemoLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate('/demo/dashboard');
    }, 800);
  };

  return (
    <div className="demo-login-root">
      <div className="demo-login-bg" />
      <div className="demo-login-card">
        <div className="demo-login-logo-wrap">
          <img
            src={LOGO}
            alt="Instyte"
            className="demo-login-logo"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="demo-login-logo-fallback" style={{ display: 'none' }}>
            <span>I</span>
          </div>
        </div>

        <div className="demo-login-badge">
          <span className="demo-login-badge-dot" />
          Demo Environment
        </div>

        <h1 className="demo-login-heading">Welcome to Instyte Demo</h1>
        <p className="demo-login-sub">
          Explore the full admin dashboard with live data
        </p>

        <form className="demo-login-form" onSubmit={handleSubmit}>
          <div className="demo-login-field">
            <label htmlFor="demo-email">Email address</label>
            <div className="demo-login-input-wrap">
              <Mail size={16} className="demo-login-input-icon" />
              <input
                id="demo-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
          </div>

          <div className="demo-login-field">
            <label htmlFor="demo-password">Password</label>
            <div className="demo-login-input-wrap">
              <Lock size={16} className="demo-login-input-icon" />
              <input
                id="demo-password"
                type="password"
                placeholder="Any password works"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
          </div>

          <button
            type="submit"
            className={`demo-login-btn ${loading ? 'demo-login-btn--loading' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <span className="demo-login-spinner" />
            ) : (
              <>
                <LogIn size={16} />
                Enter Demo
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        <p className="demo-login-hint">
          Use any credentials — this is a demo environment
        </p>

        <Link to="/" className="demo-login-back">
          ← Back to website
        </Link>
      </div>
    </div>
  );
}
