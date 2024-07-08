from flask import Flask, jsonify, request, abort
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from datetime import datetime,timedelta

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tanques.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)

class Tanque(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.DateTime, primary_key=True, default=datetime.utcnow)
    latitude_loc = db.Column(db.Float, nullable=False)
    longitude_loc = db.Column(db.Float, nullable=False)
    capacidade_max = db.Column(db.Float, nullable=False)
    medida_atual = db.Column(db.Float, nullable=False)

class ESPStatus(db.Model):
    tanque_id = db.Column(db.Integer, db.ForeignKey('tanque.id'), primary_key=True)
    rssi = db.Column(db.Integer, nullable=False)
    packet_loss = db.Column(db.Float, nullable=False)
    uptime = db.Column(db.Float, nullable=False)
    last_updated = db.Column(db.DateTime, default=datetime.utcnow)

    tanque = db.relationship('Tanque', backref=db.backref('esp_status', lazy=True))

@app.route('/')
@app.route('/tanque', methods=['GET'])
def listar_tanques():
    tanques = Tanque.query.all()
    return jsonify([{
        'id': t.id,
        'data': t.data.isoformat(),
        'latitude_loc': t.latitude_loc,
        'longitude_loc': t.longitude_loc,
        'capacidade_max': t.capacidade_max,
        'medida_atual': t.medida_atual
    } for t in tanques])

@app.route('/tanque/<int:id>', methods=['GET'])
def listar_tanque_por_id(id):
    tanques = Tanque.query.filter_by(id=id).order_by(Tanque.data).all()
    if not tanques:
        abort(404)
    return jsonify([{
        'id': t.id,
        'data': t.data.isoformat(),
        'latitude_loc': t.latitude_loc,
        'longitude_loc': t.longitude_loc,
        'capacidade_max': t.capacidade_max,
        'medida_atual': t.medida_atual
    } for t in tanques])

@app.route('/tanque', methods=['POST'])
def novo_tanque():
    data = request.json
    novo_tanque = Tanque(
        id=data['id'],
        latitude_loc=data['latitude_loc'],
        longitude_loc=data['longitude_loc'],
        capacidade_max=data['capacidade_max'],
        medida_atual=data['medida_atual']
    )
    db.session.add(novo_tanque)
    db.session.commit()
    return jsonify({'id': novo_tanque.id, 'data': novo_tanque.data.isoformat()}), 201

@app.route('/tanque/<int:id>/<string:data>', methods=['DELETE'])
def remover_tanque_por_id(id, data):
    try:
        data_dt = datetime.fromisoformat(data.replace('T', ' '))
    except ValueError:
        abort(400, description="Data format should be ISO 8601 (YYYY-MM-DDTHH:MM:SS)")

    tanques = Tanque.query.filter_by(id=id, data=data_dt).all()
    if not tanques:
        abort(404)
    
    for tanque in tanques:
        db.session.delete(tanque)
    
    db.session.commit()
    return '', 204

@app.route('/esp-status', methods=['GET'])
def get_esp_status():
    status = ESPStatus.query.all()
    return jsonify([{
        'tanque_id': s.tanque_id,
        'rssi': s.rssi,
        'packet_loss': s.packet_loss,
        'uptime': s.uptime,
        'last_updated': s.last_updated.isoformat()
    } for s in status])


# @app.route('/limpar-tanques', methods=['DELETE'])
# def limpar_tanques():
#     try:
#         num_rows_deleted = db.session.query(Tanque).delete()
#         db.session.commit()
#         return jsonify({'message': f'{num_rows_deleted} registros deletados.'}), 200
#     except Exception as e:
#         db.session.rollback()
#         return jsonify({'message': 'Erro ao tentar deletar os registros.', 'error': str(e)}), 500


# def add_fake_data():
#     with app.app_context():
#         db.create_all()
        
#         tanques_data = [
#             {'id': 1, 'latitude_loc': -15.7801, 'longitude_loc': -47.9292, 'capacidade_max': 1000.0},
#             {'id': 2, 'latitude_loc': -22.9068, 'longitude_loc': -43.1729, 'capacidade_max': 2000.0},
#             {'id': 3, 'latitude_loc': -23.5505, 'longitude_loc': -46.6333, 'capacidade_max': 1500.0},
#             {'id': 4, 'latitude_loc': -25.4284, 'longitude_loc': -49.2733, 'capacidade_max': 1800.0},
#         ]
        
#         for tanque in tanques_data:
#             for i in range(3):
#                 data_registro = datetime.utcnow() - timedelta(days=i)
#                 medida_atual = tanque['capacidade_max'] - (i * 100)  # Apenas um exemplo de variação
#                 novo_tanque = Tanque(
#                     id=tanque['id'],
#                     data=data_registro,
#                     latitude_loc=tanque['latitude_loc'],
#                     longitude_loc=tanque['longitude_loc'],
#                     capacidade_max=tanque['capacidade_max'],
#                     medida_atual=medida_atual
#                 )
#                 db.session.add(novo_tanque)
        
#         db.session.commit()

if __name__ == '__main__':
    app.run(debug=True)