from flask import Blueprint, render_template, jsonify, request
import db

post = Blueprint('post', __name__, static_folder='static',
                 template_folder='templates')


@post.route('/quarks', methods=['POST'])
def addOne():

    new_quark = request.get_json()
    db.quarks.append(new_quark)
    return jsonify({'quarks': db.quarks})
