from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the Block Builder API!"

@app.route('/api/blocks', methods=['GET'])
def get_blocks():
    return jsonify({"blocks": ["block1", "block2"]})

if __name__ == '__main__':
    app.run(debug=True)
