import React, { useState } from "react";

/*
  Minimal, self-contained login screen to show after the "MANDALA IS ALIVE" splash.
  - Client-only stub auth (accepts any non-empty username/password)
  - Calls onAuth(user) on success (App supplies handler)
  - Replace the `fakeAuth` section later with real API call to /api/auth/login
*/

export default function Login({ onAuth, onCancel }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const fakeAuth = async (u, p) => {
    // simple local stub — replace with real fetch("/api/auth/login", {...})
    await new Promise((r) => setTimeout(r, 450));
    if (!u || !p) throw new Error("Please provide username and password");
    return { username: u, displayName: u };
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      const user = await fakeAuth(username.trim(), password);
      onAuth && onAuth(user);
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div style={styles.backdrop}>
      <form onSubmit={submit} style={styles.card} aria-label="MandalaPulse sign-in">
        <div style={styles.header}>
          <div style={styles.logo}>MANDALA</div>
          <div style={styles.tag}>Sign in to continue</div>
        </div>

        <label style={styles.label}>Username</label>
        <input
          autoFocus
          style={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="enter username"
          required
        />

        <label style={styles.label}>Password</label>
        <input
          type="password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          required
        />

        {error && <div style={styles.error}>{error}</div>}

        <div style={styles.buttons}>
          <button type="submit" style={styles.primary} disabled={busy}>
            {busy ? "Signing in…" : "Sign in"}
          </button>
          <button type="button" style={styles.ghost} onClick={onCancel} disabled={busy}>
            Cancel
          </button>
        </div>

        <div style={styles.hint}>
          Tip: this is a local stub. Replace fakeAuth with your backend call to /api/auth/login.
        </div>
      </form>
    </div>
  );
}

const styles = {
  backdrop: {
    position: "fixed",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.6))",
    zIndex: 9999,
    padding: 20,
  },
  card: {
    width: "min(420px, 95vw)",
    background: "#fff",
    borderRadius: 12,
    padding: 20,
    boxShadow: "0 12px 40px rgba(0,0,0,0.45)",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    marginBottom: 12,
  },
  logo: {
    fontSize: 22,
    fontWeight: 800,
    letterSpacing: 2,
  },
  tag: {
    fontSize: 12,
    color: "#666",
  },
  label: {
    marginTop: 8,
    marginBottom: 6,
    fontSize: 12,
    color: "#333",
  },
  input: {
    height: 40,
    padding: "0 10px",
    fontSize: 14,
    borderRadius: 6,
    border: "1px solid #ddd",
    outline: "none",
  },
  error: {
    marginTop: 10,
    color: "#b00020",
    fontSize: 13,
  },
  buttons: {
    display: "flex",
    gap: 10,
    marginTop: 16,
  },
  primary: {
    flex: 1,
    height: 42,
    borderRadius: 8,
    border: "none",
    background: "linear-gradient(90deg,#ff7a18,#af002d)",
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
  },
  ghost: {
    height: 42,
    borderRadius: 8,
    border: "1px solid #ddd",
    background: "#fff",
    padding: "0 14px",
    cursor: "pointer",
  },
  hint: {
    marginTop: 12,
    fontSize: 12,
    color: "#666",
  },
};