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
    }
})

// DAOs schema
const DaoSchema = new mongoose.Schema({
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
        required: true
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
    },
    socials: [{ type: Schema.Types.ObjectId, ref: 'Social' }]
},
    // {
    //     timestamps: true
    // }
)

module.exports = mongoose.models.Dao || mongoose.model('Dao', DaoSchema )
