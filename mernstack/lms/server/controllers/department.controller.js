import Department from "../models/department.model.js"

export const getAllDept = async (req, res) => {
    try {
        const departments = await Department.find({});
        
        if (departments.length == 0)
            return res.send({status: true, message: "No records were found!"})

        return res.send({status: true, total: departments.length, departments})
    } catch (error) {
        console.log("ERR: ", error)
    }
}