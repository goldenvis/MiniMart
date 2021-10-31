import { Request, Response } from 'express';

import { connect } from '../database'
import { VendorItems } from '../interface/vendoritems';

export async function getVendorItems(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    console.log("I am in get method");
    const courses = await conn.query('SELECT * FROM vendoritems');
    return res.json(courses[0]);
}

export async function createVendorItems(req: Request, res: Response) {
    const newPost: VendorItems = req.body;
    console.log(req.body);
    console.log(newPost);
    const conn = await connect();
    await conn.query('INSERT INTO vendoritems SET ?', [newPost]);
    return res.json({
        message: 'Item Created'
    });
}

export async function getVendorItem(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const conn = await connect();
    const post = await conn.query('SELECT * FROM vendoritems WHERE id = ?', [id]);

    return res.json(post[0]);
}

export async function deleteVendorItem(req: Request, res: Response) {
    const id = req.params.id;
    const conn = await connect();
    await conn.query('DELETE FROM vendoritems WHERE id = ?', [id]);
    return res.json({
        message: 'Item deleted'
    });
}

export async function updateVendorItem(req: Request, res: Response) {
    const id = req.params.id;
    const updatePost: VendorItems = req.body;
    const conn = await connect();
    await conn.query('UPDATE vendoritems SET ? WHERE id = ?', [updatePost, id]);
    return res.json({
        message: 'Item updated'
    });
}