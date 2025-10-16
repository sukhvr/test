const Admin = require('../model/admin.model')
const { dbConnection } = require('../connection');

const Auth_admin = [
    {
        "name": "auth",
        "password": "1234"
    },
    {
        "name": "Ram",
        "password": "12345"
    },
    {
        "name": "guru",
        "password": "123456"
    }

]
async function admin() {
    try {
        await dbConnection();
        await Admin.insertMany(Auth_admin);
        console.log("Admin inserted successfully")

    } catch (error) {
        console.log(error);
    }
}
admin().catch(e => console.log(e)
)


