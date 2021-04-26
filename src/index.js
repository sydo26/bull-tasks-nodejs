require('module-alias/register')

import express from 'express'
import { BullAdapter, router, setQueues } from 'bull-board';

import Queue from '@lib/queue'
import hash from '@controller/hash'

setQueues(Queue.queues.map(({ queue }) => new BullAdapter(queue)));

const app = express()

app.use(express.json())

app.use('/admin/queues', router)

app.get('/generateHash', hash.generate)

app.listen(3000, () => {
    console.log("Servidor aberto na porta 3000");
})