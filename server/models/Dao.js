const mongoose = require('mongoose')

const DaoSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    date_founded: {
        type: String,
        required: true
    },
    // date_created: {},
    logo_link: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: true
    },
    governance_token_name: {
        type: String,
        required: true
    },
    dao_structure: {
        type: String,
        required: true
    },
    voting_process: {
        type: String,
        required: true
    },
    tvl: {
        type: Number,
        required: true
    },
    tech_stack: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    },
    blockchain: {
        type: String,
        required: true
    },
    headquarters: {
        type: String,
        required: true
    },
    social_media: {
        twitter_handle: {
            type: String,
            required: true
        },
        github_organization_handle: {
            type: String,
            required: true
        },
        telegram_handle: {
            type: String,
            required: true
        },
        linkedin_company_name: {
            type: String,
            required: true
        },
        discord_link: {
            type: String,
            required: true
        }
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.models.Dao || mongoose.model('Dao', DaoSchema)
