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

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;

    const user: QueryResult = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

    return res.json(user.rows);
  } catch (error) {
    console.log(error);

    return res.status(500).json('Internal Server Error');
  }
};

export const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, email } = req.body;

    const newUser: QueryResult = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2)',
      [name, email]
    );

    return res.json({
      message: 'User Create',
      user: {
        name,
        email,
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json('Internal Server Error');
  }
};

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const updateUser: QueryResult = await pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id]
    );

    return res.json({
      message: `User with id ${id} Updated`,
      user: {
        id,
        name,
        email,
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json('Internal Server Error');
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const deleteUser: QueryResult = await pool.query('DELETE FROM users WHERE id = $1', [
      id,
    ]);

    return res.json({ message: `User ${id} deleted` });
  } catch (error) {
    console.log(error);

    return res.status(500).json('Internal Server Error');
  }
};
