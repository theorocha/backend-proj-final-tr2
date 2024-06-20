from flask import Flask, jsonify, request, abort
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tanques.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 

db = SQLAlchemy(app)

class Tanque(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    latitude_loc = db.Column(db.Float, nullable=False)
    longitude_loc = db.Column(db.Float, nullable=False)
    capacidade_max = db.Column(db.Float, nullable=False)
    medida_atual = db.Column(db.Float, nullable=False)

@app.route('/')
@app.route('/tanque', methods=['GET'])
def listar_tanques():
    tanques = Tanque.query.all()
    return jsonify([{
        'id': t.id,
        'latitude_loc': t.latitude_loc,
        'longitude_loc': t.longitude_loc,
        'capacidade_max': t.capacidade_max,
        'medida_atual': t.medida_atual
    } for t in tanques])

@app.route('/tanque/<int:id>', methods=['GET'])
def listar_tanque_por_id(id):
    tanque = Tanque.query.get(id)
    if tanque is None:
        abort(404)
    return jsonify({
        'id': tanque.id,
        'latitude_loc': tanque.latitude_loc,
        'longitude_loc': tanque.longitude_loc,
        'capacidade_max': tanque.capacidade_max,
        'medida_atual': tanque.medida_atual
    })

@app.route('/tanque', methods=['POST'])
def novo_tanque():
    data = request.json
    novo_tanque = Tanque(
        latitude_loc=data['latitude_loc'],
        longitude_loc=data['longitude_loc'],
        capacidade_max=data['capacidade_max'],
        medida_atual=data['medida_atual']
    )
    db.session.add(novo_tanque)
    db.session.commit() 
    return jsonify({'id': novo_tanque.id}), 201

@app.route('/tanque/<int:id>', methods=['DELETE'])
def remover_tanque_por_id(id):
    tanque = Tanque.query.get(id)
    if tanque is None:
        abort(404)
    db.session.delete(tanque)
    db.session.commit() 
    return '', 204


if __name__ == '__main__':
    app.run(debug=True)
