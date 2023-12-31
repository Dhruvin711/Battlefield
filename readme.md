# Battlefield 4 Soldier Page

Explore your Battlefield 4 - Soldier Page, a web application offering a quick overview of players' in-game achievements and statistics. 

This project is built using React.js for the frontend and Django Python with Django Rest Framework for the backend.

## Getting Started

### Frontend

To run the Battlefield Challenge frontend locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/Dhruvin711/Battlefield.git
    cd Battlefield
    ```

2. Navigate to the frontend directory:

    ```bash
    cd client
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```


### Backend

To run the Battlefield backend locally, follow these steps:

1. Navigate to the backend directory:

    ```bash
    cd server
    ```

2. Install dependencies:

    ```bash
    pip install -r requirements.txt
    ```

3. Start the Django development server:

    ```bash
    python manage.py runserver
    ```

## API Endpoint

1. The API endpoint for retrieving soldier data is available at:

- **Endpoint**: `/bf_4/soldier-data`
- **Method**: GET

2. The API endpoint for retrieving level stats is available at:

- **Endpoint**: `/bf_4/level-stats`
- **Method**: GET