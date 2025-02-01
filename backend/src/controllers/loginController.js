const conexionDB = require('../models/conexionDB');

module.exports.login = (req, res) => {

    const { email, password } = req.body;

    const query = `SELECT * FROM usuarios WHERE mail_user = '${email}' AND pwd_user = '${password}'`;

    try {
        conexionDB.query(query, (err, rows) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error interno con el servidor',
                    error: err
                });
            }

            if (rows.length === 0) {
                return res.status(401).json({
                    message: 'Error: Usuario o contraseña incorrectos'
                });
            }
            res.status(200).json(rows); // Envía la respuesta en caso de éxito
            res.body = rows;   
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error interno con el servidor',
            error: error
        });
    }
};
