import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

//const sql = require('mysql');
import mysql from "mysql";
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'eagle',
  database: 'my22'
});

connection.connect(function(err){
  if (err) 
    console.log(err);
  else
    console.log('connected..');

  // let sqlRequest = new sql.Request();
  // let sqlQuery = 'Select col1,col2 from atable';

  // sqlRequest.query(sqlQuery, function (err,data) {
  //   if (err) console.log(err)
  //   console.table(data.recordset);
  // });
})

connection.query('Select col1,col2,컬럼3,first_name from atable',function(err,results,fields){
  if(err) throw err;
  console.table(results);
})

const server = new GraphQLServer({
  typeDefs: `
  type Movie {
    id: Int!
    title: String!
    rating: Float
    description_intro: String
    language: String
    medium_cover_image: String
    genres: [String]
  }

  type Atable {
    col1: Int
    col2: String
  }
  
  type Query {
    movies(limit: Int, rating: Float): [Movie]!
    movie(id: Int!): Movie
    suggestions(id: Int!): [Movie]!
    atable_all(col: Int): [Atable]
  }
  `,
  resolvers
});

server.start(() => console.log("Graphql Server Running..."));

export default connection;