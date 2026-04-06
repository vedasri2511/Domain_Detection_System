from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)

model = pickle.load(open('model.pkl', 'rb'))

def preprocess(url):
    return [len(url)]

@app.route('/predict', methods=['POST'])
def predict():
    url = request.json['url']
    features = preprocess(url)
    pred = model.predict([features])[0]
    prob = model.predict_proba([features])[0][1]

    return jsonify({
        "result": "Malicious" if pred == 1 else "Safe",
        "confidence": round(prob * 100, 2)
    })

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)