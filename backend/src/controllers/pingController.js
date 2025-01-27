const connection = require('../models/db');

const test = (req, res) => {
    const query = 'SELECT * FROM login';

    try {
        connection.query(query, (err, rows) => {
            if (err) {
                return res.status(500).json({
                    message: 'Internal Server Error',
                    error: err
                });
            }
            res.status(200).json(rows); // Envía la respuesta en caso de éxito
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            error: error
        });
    }
};

module.exports = {
    test
};