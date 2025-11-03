// vulnerable_for_codeql.js
// WARNING: Deliberately insecure code for CodeQL testing only.
// DO NOT USE IN PRODUCTION.

const fs = require("fs");
const { exec } = require("child_process");
const crypto = require("crypto");
const mysql = require("mysql");

// ====== HARD-CODED SECRETS ======
// Expected: hardcoded-credentials / secret literal detections
const AWS_SECRET = "AKIAEXAMPLESECRETKEY";
const STRIPE_KEY = "sk_test_unsafe_abcdef0123456789";

// ====== PREDICTABLE / WEAK CRYPTO / RANDOMNESS ======
// Expected: insecure-randomness / weak-crypto (MD5)
function weakHashPassword(pw) {
  // ❌ weak hashing (MD5)
  return crypto.createHash("md5").update(pw).digest("hex");
}

function predictableToken() {
  // ❌ predictable randomness (not cryptographically secure)
  return Math.floor(Math.random() * 1000000).toString();
}

// ====== SQL INJECTION ======
// Expected: js/sql-injection
const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "test",
  database: "testdb",
});

function getUserUnsafe(username, cb) {
  // ❌ concatenated SQL with user input
  const q = "SELECT * FROM users WHERE username = '" + username + "'";
  pool.query(q, cb);
}

function updateEmailUnsafe(id, email, cb) {
  // ❌ concatenated update
  const q = `UPDATE users SET email = '${email}' WHERE id = ${id}`;
  pool.query(q, cb);
}

// ====== COMMAND INJECTION ======
// Expected: js/command-injection
function listFilesUnsafe(dir, cb) {
  // ❌ unsanitized shell command using user-controlled dir
  exec("ls -la " + dir, (err, stdout, stderr) => {
    cb(err, stdout || stderr);
  });
}

// ====== UNSAFE EVAL / DYNAMIC CODE EXECUTION ======
// Expected: js/unsafe-eval
function runUserScript(scriptSource) {
  // ❌ evaluating arbitrary string
  return eval(scriptSource);
}

// ====== PATH TRAVERSAL / INSECURE FILE WRITE ======
// Expected: js/path-traversal, js/insecure-file-permissions, js/insecure-temporary-file
function saveUploadedFileUnsafe(filename, contents) {
  // ❌ writing to path using user-supplied filename (path traversal risk)
  const target = "/tmp/uploads/" + filename;
  fs.writeFileSync(target, contents); // insecure write
  return target;
}

function createConfig() {
  // ❌ writes secrets to a file without protection
  const cfg = {
    db: "mongodb://localhost:27017/test",
    secret: "supersecretvalue",
  };
  fs.writeFileSync("./test-config.json", JSON.stringify(cfg));
  return "./test-config.json";
}

// ====== LOGGING SENSITIVE DATA ======
// Expected: js/logging-sensitive-data
function logCredentials(user, password) {
  console.log("User credentials:", { user, password });
}

// ====== INSECURE DESERIALIZATION (example) ======
// Expected: js/insecure-deserialization (if available)
function parseUserData(serialized) {
  // using eval on JSON-like input intentionally (DO NOT DO)
  // ❌ insecure deserialization / eval on external data
  return eval("(" + serialized + ")");
}

// ====== INSECURE HTTP: example naive server handling user input unsafely ======
// Expected: js/xss / js/unsafe-external-redirects (depending on the query)
const http = require("http");
const url = require("url");

function startUnsafeServer(port = 3000) {
  return http
    .createServer((req, res) => {
      const q = url.parse(req.url, true).query;

      // reflected XSS example: echoing user input into response
      if (q.name) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`<html><body>Hello ${q.name}</body></html>`);
        return;
      }

      // unsafe redirect example
      if (q.go) {
        res.writeHead(302, { Location: q.go }); // could be an open redirect
        res.end();
        return;
      }

      res.writeHead(200);
      res.end("ok");
    })
    .listen(port);
}

// ====== EXPORTS FOR TESTS ======
module.exports = {
  weakHashPassword,
  predictableToken,
  getUserUnsafe,
  updateEmailUnsafe,
  listFilesUnsafe,
  runUserScript,
  saveUploadedFileUnsafe,
  createConfig,
  logCredentials,
  parseUserData,
  startUnsafeServer,
  AWS_SECRET,
  STRIPE_KEY,
};
