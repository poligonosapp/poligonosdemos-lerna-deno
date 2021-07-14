import jwt_decode from "jwt-decode";
 
var token = "eyJ0eXAiO.../// jwt token";
var decoded = jwt_decode(token);
 
console.log(decoded);
 
/* prints:
 * { foo: "bar",
 *   exp: 1393286893,
 *   iat: 1393268893  }
 */
 
// decode header by passing in options (useful for when you need `kid` to verify a JWT):
var decodedHeader = jwt_decode(token, { header: true });
console.log(decodedHeader);
 
/* prints:
 * { typ: "JWT",
 *   alg: "HS256" }
 */

import React, { Component } from 'React';

class Auth extends React.Component {
  render() {
    return <h1>Auth</h1>;
  }
}