from flask import Flask, request, jsonify 
from flask_cors import CORS

#setting up flask 
app = Flask(__name__)

#set up flask to bypass CORS on front end
cors = CORS(app)


#create receiver API POST endpoint
@app.route('/receiver', methods=["POST"])
def postME():
    data = request.get_json()
    data= jsonify(data)
    return data

# running the app 
if __name__ == "__main__": 
    app.run(debug=True)