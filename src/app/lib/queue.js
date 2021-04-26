import Queue from 'bull'
import { config } from '@config/redis'

import * as jobs from '@jobs'

const queues = Object.values(jobs).map(job => ({
    queue: new Queue(job.key, config),
    ...job
}))

// queues[0].handle({ data: "Olá mundo" })

export default {
    queues,
    add(name, data) {
        const { queue, options } = queues.find(q => q.key === name)
        return queue.add(data, options);
    },
    process() {
        return queues.forEach(({ key, queue, handle }) => {
            queue.process(handle)

            queue.on('failed', (job, err) => {
                console.log('Job Failed', key, job.name, job.data)
                console.log(err)
            })
        })
    }
}