require('module-alias/register')

import Queue from '@lib/queue'

Queue.process()

console.log("processed")