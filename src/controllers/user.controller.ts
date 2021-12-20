import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { pool } from '../models/db.model';

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const users: QueryResult = await pool.query('SELECT * FROM users');

    console.log(users.rows);

    return res.json(users.rows);
  } catch (error) {
    console.log(error);

    return res.status(500).json('Internal Server Error');
  }
};
