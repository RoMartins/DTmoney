import React from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import {App} from './App';
import { createServer, Model } from 'miragejs';

createServer({

  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id:1,
          title:'freelance de website',
          type:'income',
          category:'Dev',
          amount:6000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id:2,
          title:'Aluguel',
          type:'outcome',
          category:'Casa',
          amount:3000,
          createdAt: new Date('2021-02-14 15:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)

        return schema.create('transaction',data)
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')

);



