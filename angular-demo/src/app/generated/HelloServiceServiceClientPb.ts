/**
 * @fileoverview gRPC-Web generated client stub for com.example.grpc.server.grpcserver
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as HelloService_pb from './HelloService_pb';


export class HelloServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfohello = new grpcWeb.AbstractClientBase.MethodInfo(
    HelloService_pb.HelloResponse,
    (request: HelloService_pb.HelloRequest) => {
      return request.serializeBinary();
    },
    HelloService_pb.HelloResponse.deserializeBinary
  );

  hello(
    request: HelloService_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null): Promise<HelloService_pb.HelloResponse>;

  hello(
    request: HelloService_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: HelloService_pb.HelloResponse) => void): grpcWeb.ClientReadableStream<HelloService_pb.HelloResponse>;

  hello(
    request: HelloService_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: HelloService_pb.HelloResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/com.example.grpc.server.grpcserver.HelloService/hello',
        request,
        metadata || {},
        this.methodInfohello,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/com.example.grpc.server.grpcserver.HelloService/hello',
    request,
    metadata || {},
    this.methodInfohello);
  }

}

