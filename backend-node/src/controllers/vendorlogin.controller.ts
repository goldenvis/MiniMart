import { Request, Response } from 'express';

import { connect } from '../database'
import { VendorItems } from '../interface/VendorItems';


export async function loginVendorUser(req: Request, res: Response): Promise<Response> {
    const newPost: VendorItems  = req.body;
    var information: boolean;
    information = false;
    //console.log(newPost);
    const email='chmt.raghuveer@gmail.com'
    //console.log(newPost);
    const conn = await connect();
    const post = await conn.query('SELECT * FROM vendorlogin WHERE email = ?', [email]);
    //console.log(post[0]);
    const result = Object.values(JSON.parse(JSON.stringify(post[0])));
    const password = result[0]["password"]
    if(password == newPost["password"])
     {  
         information=true;
         console.log("I am here with right password");
         return res.json(information);
     }


    
}

export async function getLoginVedorUser(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    console.log("I am in get method");
    const courses = await conn.query('SELECT * FROM vendorregister');
    return res.json(courses[0]);
}