# Block Builder

A block builder application with a Flask backend and React frontend.

## Backend(flask)

### Instructions to Verify

1. Clone the repository from GitHub:
   ```
   git clone https://github.com/metteiram/block-builder.git```
### Setup

1. Navigate to the `backend` directory:
   ``` cd backend```

1. Create a virtual environment and activate it
  ```python3 -m venv venv```
```source venv/bin/activate```
2. Install dependencies 
```pip install -r requirements.txt```
3. Testing
```python -m unittest testforduplictes.py ```

- Backend (Flask):
```python app.py```
Ensure Flask is running on http://127.0.0.1:5000/.
- Frontend (React):
Ensure React is running on http://localhost:3000/.

1. Navigate to the `frontend` directory:
   ```cd frontend```
   
For react project:
1. Install dependencies ```npm install```
2. Run project with ```npm start```
3. Testimg project ```npm test```

In general:
If we would like to create a production build, so use ```npm run build```

file .env 
"SKIP_PREFLIGHT_CHECK=true"