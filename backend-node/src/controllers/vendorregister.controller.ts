import { Request, Response } from 'express';

import { connect } from '../database'
import { VendorItems } from '../interface/vendoritems';
import {VendorRegister} from '../interface/vendorregister';

export async function getVendorUsers(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    console.log("I am in get method");
    const courses = await conn.query('SELECT * FROM vendorlogin');
    return res.json(courses[0]);
}

export async function registerVendorUser(req: Request, res: Response) {
    const newPost: VendorItems = req.body;
    const newRegister: VendorRegister = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO vendorlogin SET ?', [newPost]);
    await conn.query('INSERT INTO vendorregister SET ?', [newRegister]);
    return res.json({
        message: 'Item Created'
    });
}

export async function getVendorUser(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const conn = await connect();
    const post = await conn.query('SELECT * FROM vendorlogin WHERE id = ?', [id]);

    return res.json(post[0]);
}

export async function deleteVendorUser(req: Request, res: Response) {
    const id = req.params.id;
    const conn = await connect();
    await conn.query('DELETE FROM vendorlogin WHERE id = ?', [id]);
    return res.json({
        message: 'Item deleted'
    });
}

export async function updateVendorUser(req: Request, res: Response) {
    const id = req.params.id;
    const updatePost: VendorItems = req.body;
    const conn = await connect();
    await conn.query('UPDATE vendorlogin SET ? WHERE id = ?', [updatePost, id]);
    return res.json({
        message: 'Item updated'
    });
}