const { Schema } = require('mongoose')
const mongoose = require('mongoose')

// DAOs schema
const DaoSchema = new Schema({
        full_name: {
            type: String,
            required: [true, 'Please add a name'],
            unique: true,
            message: "Company Already Exists"
        },
        description: {
            type: String,
            required: true
        },
        date_founded: {
            type: Date,
            required: true
        },
        date_created: {
            type: Date,
            required: true
         },
        logo_link: {
            type: String,
            required: false
        },
        category: {
            type: String,
            enum : ['Protocol', 'Service', 'Grant', 'Media', 'Social', 'Investment', 'Platform', 'Collector'],
            message: '{VALUE} does not exist',
            required: true,
            default: 'Protocol'
        },
        governance_token_name: {
            type: String,
            required: true
        },
        dao_structure: {
            type: String,
            enum : ['shares', 'gov_token', 'tbd'],
            message: '{VALUE} does not exist',
            required: true,
        },
        voting_process: {
            type: String,
            required: true
        },
        tvl: {
            type: Number,
            required: false
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
            enum : [
                'Ethereum', 'Polygon', 'Binance_Smart_Chain', 'Harmony', 'Solana',
                'Algorand', 'Stellar', 'NEAR', 'IBM_Blockchain', 'Hyperledger_Fabric',
                'Tezos', 'EOSIO', 'Waves', 'Ripple'
            ],
            message: '{VALUE} does not exist',
            required: true
        },
        headquarters: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const SocialSchema = new Schema({
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
    },
    twitter_followers: {
        type: Number,
        required: false
    }
})


const Dao = mongoose.models.Dao || mongoose.model("Dao", DaoSchema)
const Social = mongoose.models.Social || mongoose.model("Social", SocialSchema)
module.exports = { Dao, Social }
