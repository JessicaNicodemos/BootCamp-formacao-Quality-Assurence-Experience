import { Request } from "express";
import { Params } from  'express-serve-static-core';

interface mockRequest{
    params?:Params;

}

export function mockRequest({ params}: mockRequest){
    const request = {
        params: params || {}
    } as unknown

    return request as Request
}