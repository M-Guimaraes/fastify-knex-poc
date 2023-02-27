import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionsRoutes } from './routes/transactions'

export const app = fastify({
  logger: process.env.NODE_ENV !== 'test',
})

app.register(cookie)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})
