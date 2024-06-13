from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Welcome to the Block Builder API!"

@app.route('/api/blocks', methods=['GET'])
def get_blocks():
    return jsonify({"blocks": ["block1", "block2"]})

@app.route('/api/reset', methods=['POST'])
def reset_blocks():
    return jsonify({"message": "Blocks reset successfully"})

if __name__ == '__main__':
    app.run(debug=True)
