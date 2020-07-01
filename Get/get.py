from flask import Blueprint, render_template, jsonify
import db

get = Blueprint('get', __name__, static_folder='static',
                template_folder='templates')


@get.route('/quarks', methods=['GET'])
def returnAll():
    return jsonify({'quarks': db.quarks})
