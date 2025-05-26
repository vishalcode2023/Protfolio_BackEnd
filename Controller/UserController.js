const { UserModel, ValidationSchema } = require('../Model/UserModel');
const { sendPortfolioEmail } = require('../Config/NodeMailerConfig');
const { CallFromModel, validationSchema} = require('../Model/CallFromModel');


module.exports.UserFrom = async (req, res) => {
    try {
        const { name, email, subject } = req.body;

        // Validate the request body
        const { error } = ValidationSchema.validate({ name, email, subject });
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // Create a new user
        const newUser = new UserModel({ name, email, subject });
        await sendPortfolioEmail({
            name,
            email,
            subject,
        });
        await newUser.save();

        // Respond with the created user
        res.status(201).json(newUser);
        
    } catch (error) {
        console.error("Error in UserFrom:", error);
    }
}

module.exports.CallFrom = async (req, res) => {
    try {
        const { name, phone } = req.body;

        // Validate the request body
        const { error } = validationSchema.validate({ name, phone });
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // Create a new user for call booking
        const newUser = new CallFromModel({ name, phone });
        await sendPortfolioEmail({
            name,
            phone,
        });
        await newUser.save();

        // Respond with the created user
        res.status(201).json(newUser);
        
    } catch (error) {
        console.error("Error in CallFrom:", error);
    }
}