import mysql.connector

# Connection details
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'usernames'
}

def get_db_connection():
    """Establishes a connection to the MySQL database."""
    try:
        conn = mysql.connector.connect(**db_config)
        return conn
        print("success!")
    except mysql.connector.Error as err:
        # Handle connection errors appropriately
        print(f"Error connecting to the database: {err}")
        return None
