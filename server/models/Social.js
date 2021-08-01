const mongoose = require('mongoose')

// Social Media schema
const SocialSchema = new mongoose.Schema({
        _id: {
            type: String,
            required: true
        },
        twitter_handle: {
            type: String,
            required: false
        },
        github_organization_handle: {
            type: String,
            required: false
        },
        telegram_handle: {
            type: String,
            required: false
        },
        linkedin_company_name: {
            type: String,
            required: false
        },
        discord_link: {
            type: String,
            required: false
        }
})

module.exports = mongoose.models.Social || mongoose.model('Social', SocialSchema )

