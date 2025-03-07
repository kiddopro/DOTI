#!/bin/bash

echo "Starting frontend..."
cd frontend
npm install 
npm run start & 
cd ..

echo "Starting backend..."
cd backend
npm install 
npm run start &
cd ..

wait

echo "Both projects are running in the background. Press Ctrl+C to exit."