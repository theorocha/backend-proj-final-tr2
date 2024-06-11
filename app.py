from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return 'Oi, sou o backend do projeto final de TR2!'

if __name__ == '__main__':
    app.run(debug=True)
