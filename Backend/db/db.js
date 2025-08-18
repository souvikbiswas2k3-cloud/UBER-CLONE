const mongoose = require('mongoose');

function ConnectToDB() {
    mongoose.connect(process.env.DB_CONNECT)
        .then(() => console.log('✅ DB Connected'))
        .catch((err) => console.error('❌ DB Connection Error:', err));
}

module.exports = ConnectToDB;
