const mongoose = require('mongoose')
const Schema = mongoose.schema

// Social Media schema
const SocialSchema = new mongoose.Schema({
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
        required: true
    },
    discord_link: {
        type: String,
        required: false
    },
    Dao: [{ type: Schema.Types.ObjectId, ref: 'Dao' }]
})

// const Dao = mongoose.model('Social', SocialSchema )
// module.exports = Dao

module.exports = mongoose.models.Social || mongoose.model('Social', SocialSchema )

