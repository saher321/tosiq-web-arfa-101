import Department from "./department.model.js"

export const getAllDept = async (req, res) => {
    try {
        const departments = await Department.find({});
        
        if (departments.length == 0)
            return res.send({status: true, message: "No records were found!"})

        return res.send({status: true, total: departments.length, departments})
        // status: true
        // total: 3
        // departments: {[...]}
    } catch (error) {
        console.log("ERR: ", error)
    }
}

export const addDept = async (req, res) => {
    const { name } = req.body
    if (!name) return res.send({status: false, message:"Please provide dept name"})

    try {
        const dept = new Department({ name })
        dept.save();
    } catch (error) {
        console.log("ERR: ", error)
    }
}