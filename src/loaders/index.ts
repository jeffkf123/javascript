import expressLoader from './express';
import mysqlLoader from './mysql';
import type { Express } from 'express';

export default async function({ app }: { app: Express }) {

    await expressLoader({ app });
    console.log('express loaded');
}