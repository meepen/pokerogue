const sessionIdKey = 'pokerogue_sessionId';

export function getSessionToken() {
  return sessionStorage.getItem(sessionIdKey);
}

export function setSessionToken(token: string | null) {
  if (token === null) {
    sessionStorage.removeItem(sessionIdKey);
    return;
  }
  sessionStorage.setItem(sessionIdKey, token);
}
