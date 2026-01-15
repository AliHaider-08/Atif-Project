import express from 'express'
import cors from 'cors'
import ProductRoutes from './src/app/Products/ProductRoutes.js'
import CategoryRoutes from './src/app/Category/CategoryRoutes.js'
import UserRoutes from './src/app/Users/UserRoutes.js'
import db from './src/app/Config/Model.js'

const app = express()
const port = 9000

// Enable CORS for all origins
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

// Body parsing middleware - CRITICAL: These must come BEFORE routes
app.use(express.json({ limit: '10mb', type: 'application/json' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Additional middleware to handle different content types
app.use((req, res, next) => {
  if (req.method === 'POST' && !req.body) {
    let rawData = ''
    req.on('data', chunk => {
      rawData += chunk
    })
    req.on('end', () => {
      try {
        if (rawData) {
          req.body = JSON.parse(rawData)
        }
      } catch (error) {
        console.log('Failed to parse raw data:', error.message)
      }
      next()
    })
  } else {
    next()
  }
})

// Debug middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - Content-Type: ${req.get('Content-Type')} - Body:`, req.body)
  next()
})

// Routes
app.use('/api', ProductRoutes)
app.use('/api', CategoryRoutes)
app.use('/api', UserRoutes)

// Simple test endpoint
app.post('/api/test', (req, res) => {
  console.log('Test endpoint received:', req.body)
  res.json({ success: true, data: req.body })
})

// Start server
db.sequelize.sync({ force: false }).then(() => {
  console.log('Database & tables created!')
  
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
    console.log('Test endpoint: POST http://localhost:9000/api/test')
    console.log('Create user: POST http://localhost:9000/api/createUser')
  })
}).catch(err => {
  console.error('Unable to sync database:', err)
})