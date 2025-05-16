from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/run', methods=['POST'])
def run_code():
    data = request.json
    html = data.get('html', '')
    css = data.get('css', '')
    js = data.get('js', '')

    result = f"""
        <!DOCTYPE html>
        <html>
            <head>
                <style>{css}</style>
            </head>
            <body>
                {html}
                <script>{js}</script>
            </body>
        </html>
    """

    print("Printin....")

    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)