@echo off

:: Iniciar frontend
cd frontend
npm install
start npm run dev
cd ..

:: Iniciar backend
cd backend
npm install
start npm run start
cd ..

echo Ambos proyectos están corriendo en paralelo.
pause
