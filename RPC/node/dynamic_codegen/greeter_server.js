/*
 *
 * Copyright 2015 gRPC authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

var PROTO_PATH = __dirname + '/../../protos/helloworld.proto';

var grpc = require('grpc');
var hello_proto = grpc.load(PROTO_PATH).helloworld;

/**
 * Implements the SayHello RPC method.
 */
function sayHello(call, callback) {
  callback(null, { message: 'Hello ' + call.request.name });
}

// function getClientes(call, callback) {
//   callback(null, { message: 'Hello again, ' + call.request.name });
// }

var lstClientes = [
  { nome: "Alisson Solitto", profissao: "Programador", idade: "22" },
  { nome: "Maira Solitto", profissao: "Advogada", idade: "22" },
  { nome: "José Doido", profissao: "Vendedor de Miçanga", idade: "45" }
];

function getClientes(call, callback) {
  callback(null, { message: JSON.stringify(lstClientes) });
}

function setClientes(call, callback) {
  
  lstClientes.push({
    nome: call.request.name,
    profissao: "Default",
    idade: "100"
  });

  callback(null, { message: JSON.stringify(lstClientes) });
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
  var server = new grpc.Server();
  server.addService(hello_proto.Greeter.service,
    {
      sayHello: sayHello,
      getClientes: getClientes,
      setClientes: setClientes
    });
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
