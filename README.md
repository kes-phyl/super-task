---

## Prerequisites

Ensure you have the following installed:
- Python 3.13 or higher
- Node.js 18.x or higher
- pnpm or yarn (package manager)
- A virtual environment manager (e.g., `venv`)

---

## Backend Setup (Django)

1. Navigate to the `backend` folder:
   todo_project

2. Create a Virtual environment and activate it.

3. Install dependencies:
    pip install -r requirements.txt

4. Apply Migrations

5. Start the server

The backend will be available at http://127.0.0.1:8000/


## Frontend Setup (Next.js)
1. Navigate to the frontend folder:
  frontendtodo

2.  Install dependencies:
  pnpm install or npm install 

3. Start the development server:
  pnpm dev or npm run dev

Usage: 

Ensure the backend (http://127.0.0.1:8000/) is running before starting the frontend (http://localhost:3000/).
The frontend fetches and updates data from the backend API.