import {DynamoDBClient} from "@aws-sdk/client-dynamodb";
import {DynamoDBDocumentClient, ScanCommand} from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({region: 'eu-north-1'});
const docClient = DynamoDBDocumentClient.from(client);

export const retrieve = async () => {
    const query = {
        TableName: "CHARACTER"
    }
    const command = new ScanCommand(query);

    const response = await docClient.send(command);
    console.log(response);
    return response;
}