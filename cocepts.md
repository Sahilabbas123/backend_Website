# Concept Summary: HTTP, File Upload, and Related Topics

## Pre Hook in Mongoose

* A **pre hook** in Mongoose is a middleware function that executes **before** a certain action is performed (e.g., before saving a document).
* Useful for chaining operations, like hashing passwords before saving a user.

## JWT + Bearer Token

* **JWT (JSON Web Token)** is a compact way to securely transmit information between parties as a JSON object.
* A **Bearer token** is used in the `Authorization` header of HTTP requests:

  ```http
  Authorization: Bearer <your_token_here>
  ```

## Bcrypt

* Bcrypt is used for **hashing passwords** securely.
* It ensures even if the database is exposed, raw passwords aren't visible.

---

## File Upload Services

### Tools/Libraries:

* **Cloudinary**: Cloud-based service for uploading and managing images/videos.
* **Multer**: Middleware for handling `multipart/form-data`, used for uploading files in Express.
* **fs (File System)**: Node.js module to interact with local files.

---

## HTTP Crash Course

### URI, URL, and URN:

* **URI (Uniform Resource Identifier)**: Generic identifier for a resource.
* **URL (Uniform Resource Locator)**: Specifies location (e.g., `https://example.com/page`).
* **URN (Uniform Resource Name)**: Identifies a resource by name in a namespace (e.g., ISBN).

### HTTP Headers:

Headers are metadata sent with requests/responses:

1. **Request Headers**: Sent by client (e.g., `User-Agent`, `Accept`).
2. **Response Headers**: Sent by server (e.g., `Set-Cookie`, `Server`).
3. **Representation Headers**: Information about body (e.g., `Content-Encoding`, `Content-Type`).
4. **Payload Headers**: Metadata about the actual data (e.g., `Content-Length`).

**Common Header Example**:

```http
Accept: application/json
```

---

## CORS (Cross-Origin Resource Sharing)

* CORS allows or blocks requests from different origins.
* **Key header**: `Access-Control-Allow-Origin`

---

## HTTP Methods:

Basic set of operations to interact with a server:

* **GET**: Retrieve a resource.
* **HEAD**: Retrieve headers only.
* **OPTIONS**: Check supported methods.
* **TRACE**: Loopback test to trace request.
* **DELETE**: Remove a resource.
* **PUT**: Replace a resource.
* **POST**: Add/interact with a resource.
* **PATCH**: Modify part of a resource.

---

## HTTP Status Codes:

* **1xx**: Informational (e.g., 100 Continue)
* **2xx**: Success (e.g., 200 OK)
* **3xx**: Redirection (e.g., 301 Moved Permanently)
* **4xx**: Client Error (e.g., 404 Not Found)
* **5xx**: Server Error (e.g., 500 Internal Server Error)

Controller:=> 
Routes:=>
Postman:=>


//
//pipelines


