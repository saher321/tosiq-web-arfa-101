import Department from "./department.model.js"

export const getAllDept = async (req, res) => {
    try {
        const departments = await Department.find({});

        if (departments.length == 0)
            return res.send({ status: true, message: "No records were found!" })

        return res.send({ status: true, total: departments.length, departments })
        // status: true
        // total: 3 
        // departments: {[...]}
    } catch (error) {
        console.log("ERR: ", error)
    }
}

export const addDept = async (req, res) => {
    const { name, code, hodName } = req.body
    if (!name || !code || !hodName) return res.send({ status: false, message: "Please provide department details" })

    try {
        const dept = new Department({ name, code, hodName })
        if (dept) {
            dept.save();
            return res.send({
                status: true,
                message: "Data has been added"
            })
        } else {
            return res.send({
                status: false,
                message: "Failed to add data"
            })
        }
    } catch (error) {
        console.log("ERR: ", error)
    }
}

export const delDept = async (req, res) => {
    const { id } = req.params

    try {
        const dept = await Department.findByIdAndDelete({ _id: id })
        if (dept) {
            return res.send({
                status: true,
                message: "Data has been deleted"
            })
        } else {
            return res.send({
                status: false,
                message: "Department id not found"
            })
        }
    } catch (error) {
        console.log("ERR: ", error)
    }

}