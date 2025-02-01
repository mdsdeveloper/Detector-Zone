const conexionDB = require('../models/conexionDB');

module.exports.registro = (req, res) => {
    const { username, telefono, email, password } = req.body;
    const rol_default = 1;
    const fecha_registro = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD

    // Validación de campos obligatorios
    if (!username || !email || !password) {
        return res.status(400).json({
            message: 'Los campos de nombre de usuario, correo electrónico y contraseña son obligatorios.'
        });
    }

    // Consulta SQL parametrizada (evita inyecciones SQL)
    const query = `INSERT INTO usuarios (nombre_user, telefono, mail_user, pwd_user, fecha_registro, rol_user) 
                   VALUES (?, ?, ?, ?, ?, ?)`;

    conexionDB.query(query, [username, telefono, email, password, fecha_registro, rol_default], (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Error al registrar el usuario',
                error: err
            });
        }

        // Respuesta exitosa
        res.status(201).json({
            message: 'Usuario registrado exitosamente',
            userId: result.insertId, // Devuelve el ID del nuevo usuario
        });
    });
};
