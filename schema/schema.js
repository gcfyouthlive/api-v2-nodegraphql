const graphql = require('graphql');
const db = require ('../db');

const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLSchema,
    GraphQLID,
    GraphQLBoolean,
    GraphQLString,
    GraphQLInt,
} = graphql;

const CamperType = new GraphQLObjectType({
    name: 'Camper',
    fields: () => ({
        id: {type: GraphQLID},
        nameFirst: {type: GraphQLString},
        nameLast: {type: GraphQLString},
        nameNick: {type: GraphQLString},
        gender: {type: GraphQLString},
        email: {type: GraphQLString},
        contact: {type: GraphQLString},

        school: {type: GraphQLString},
        type: {type: GraphQLString},
        year: {type: GraphQLInt},

        gcfMember: {type: GraphQLBoolean},
        ygroup: {type: GraphQLBoolean},
        ygroupLeader: {type: GraphQLString},

        emcName: {type: GraphQLString},
        emcContact: {type: GraphQLString},
        emcRelation: {type: GraphQLString},

        shirtSize: {type: GraphQLString},
        firstTime: {type: GraphQLBoolean},

        paid: {type: GraphQLBoolean},
        notes: {type: GraphQLString},
    })
});

const HSCampType = new GraphQLObjectType({
    name: 'HSCamp',
    fields: () => ({
        id: {type: GraphQLID},
        campers: {
            type: new GraphQLList(CamperType),
            resolve(parent, args){
                var test = db.queryAll('SELECT from');
                return test;
            }
        },

    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        camper: {
            type: CamperType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent,args){
                // DB Query for camper
                return 'camperTest';
            }
        },
        HSCamp: {
            type: HSCampType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent, args){
                var test = db.queryAll('SELECT from');
                return test;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});

